import { toast } from "react-hot-toast";
import { authService } from "@/services/auth.service";
import { userService } from "@/services/user.service";
import { setUser } from "@/store/auth/auth-slice";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch } from "redux";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginLogicProps {
  router: AppRouterInstance;
  dispatch: Dispatch;
  loginSuccess: (userType: "user" | "hotel" | "admin" | "support") => void;
  setOpen: (open: boolean) => void;
}

// Test user'ları tanımla
const TEST_USERS = {
  admin: {
    id: "test-admin-001",
    name: "Test Admin",
    email: "admin@test.com",
    password: "Admin123!",
    role: "ADMIN",
    isVerified: true
  },
  hotel: {
    id: "test-hotel-001", 
    name: "Test Hotel Owner",
    email: "hotel@test.com",
    password: "Hotel123!",
    role: "OWNER",
    isVerified: true
  },
  support: {
    id: "test-support-001",
    name: "Test Support",
    email: "support@test.com", 
    password: "Support123!",
    role: "SUPPORT",
    isVerified: true
  }
};

export const createLoginLogic = ({
  router,
  dispatch,
  loginSuccess,
  setOpen,
}: LoginLogicProps) => {
  const handleLogin = async (data: LoginFormData) => {
    console.log("login data", data);

    try {
      // Önce API ile login dene
      const response = await authService.login(data);
      console.log("login response", response);

      if (response.success) {
        const userResponse = await userService.getUserProfile();
        console.log("user response", userResponse);

        if (userResponse.data.isVerified === false) {
          setOpen(true);
        } else {
          handleUserRedirection(
            userResponse.data,
            router,
            dispatch,
            loginSuccess
          );
        }
      } else {
        // API response başarısız, test user'ları kontrol et
        console.log("API login failed, checking test users...");
        const testUser = checkTestUser(data.email, data.password);
        
        if (testUser) {
          console.log("Test user found:", testUser);
          // Test user'ı Redux store'a set et ve yönlendir
          handleUserRedirection(
            testUser,
            router,
            dispatch,
            loginSuccess
          );
        } else {
          // Test user da bulunamadı, hata ver
          toast.error("Hatalı kullanıcı adı veya şifre.");
        }
      }
    } catch (error) {
      console.error("API login error:", error);
      
      // API hatası durumunda da test user'ları kontrol et
      const testUser = checkTestUser(data.email, data.password);
      
      if (testUser) {
        console.log("API error but test user found:", testUser);
        // Test user'ı Redux store'a set et ve yönlendir
        handleUserRedirection(
          testUser,
          router,
          dispatch,
          loginSuccess
        );
      } else {
        toast.error("Hatalı kullanıcı adı veya şifre.");
      }
    }
  };

  const handleOtpSubmit = async (otp: string, onClose: () => void) => {
    if (otp.length !== 6) {
      toast.error("Doğrulama kodu 6 haneli olmalıdır.");
      onClose();
      localStorage.removeItem("endTime");
      return;
    }

    try {
      const response = await authService.verifyEmail(otp);
      console.log("verify email response", response);

      if (response.success) {
        toast.success("Hesabınız doğrulandı.");
        localStorage.removeItem("endTime");
        
        // Doğrulama başarılı olduğunda kullanıcıyı yönlendir
        const userResponse = await userService.getUserProfile();
        if (userResponse.data.isVerified) {
          // Önce dialog'u kapat
          onClose();
          // Sonra yönlendirme yap
          setTimeout(() => {
            handleUserRedirection(
              userResponse.data,
              router,
              dispatch,
              loginSuccess
            );
          }, 100); // Kısa bir gecikme ile dialog kapanmasını sağla
        }
      } else {
        toast.error("Doğrulama kodu geçersiz.");
        onClose();
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Doğrulama kodunu kontrol edin.");
      onClose();
    }
  };

  // Test user kontrol fonksiyonu
  const checkTestUser = (email: string, password: string): User | null => {
    const testUser = Object.values(TEST_USERS).find(
      (user: { email: string; password: string }) => user.email === email && user.password === password
    );
    
    if (testUser) {
      // Password'ü çıkar ve User interface'ine uygun hale getir
      const { password: _, ...userWithoutPassword } = testUser;
      return userWithoutPassword as User;
    }
    
    return null;
  };

  return { handleLogin, handleOtpSubmit };
};

// Kullanıcıyı role göre yönlendirme
const handleUserRedirection = (
  userData: User,
  router: AppRouterInstance,
  dispatch: Dispatch,
  loginSuccess: (userType: "user" | "hotel" | "admin" | "support") => void
) => {
  // Set user in Redux store first
  dispatch(setUser(userData));

  switch (userData.role) {
    case "ADMIN":
      localStorage.setItem("userRole", "admin");
      loginSuccess("admin");
      router.push("/dashboard/admin");
      break;
    case "OWNER":
      localStorage.setItem("userRole", "hotel");
      loginSuccess("hotel");
      router.push("/dashboard/hotel");
      break;
    case "SUPPORT":
      localStorage.setItem("userRole", "support");
      loginSuccess("support");
      router.push("/dashboard/support");
      break;
    case "CUSTOMER":
      localStorage.setItem("userRole", "customer");
      loginSuccess("user");
      router.push("/");
      break;
    default:
      router.push("/");
  }
};

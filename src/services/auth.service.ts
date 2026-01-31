import { MOCK_USERS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  // kayıt işlemleri
  async register(userData: any) {
    await delay(1000);
    return {
      success: true,
      message: "Kayıt başarılı",
      data: { user: { ...userData, id: "new-user" } }
    };
  },
  // giriş işlemleri
  async login(data: { email: string; password: string }) {
    await delay(1000);
    const user = MOCK_USERS.find(u => u.email === data.email) || MOCK_USERS[0]; 
    
    const token = "mock-access-token-" + user.id;
    const refreshToken = "mock-refresh-token-" + user.id;

    localStorage.setItem("access_token", token);
    localStorage.setItem("refresh_token", refreshToken);
    
    return {
      success: true,
      data: {
        accessToken: token,
        refreshToken: refreshToken,
        user: user
      }
    };
  },
  // çıkış işlemleri
  async logout() {
    await delay(500);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("hotelName");
    return { success: true };
  },

  // email doğrulama işlemleri
  async verifyEmail(verificationOTP: string) {
    await delay(1000);
    return { success: true, message: "Email doğrulandı" };
  },

  // email doğrulama işlemleri
  async resendVerificationEmail(email: string) {
    await delay(1000);
    return { success: true, message: "Doğrulama maili gönderildi" };
  },

  // hesap silme işlemleri
  async deleteAccount(id: string) {
    await delay(1000);
    return { success: true, message: "Hesap silindi" };
  },

  // şifremi unuttum işlemleri
  async forgotPassword(email: string) {
    await delay(1000);
    return { success: true, message: "Şifre sıfırlama maili gönderildi" };
  },
  
  async resetPassword(data: any) {
    await delay(1000);
    return { success: true, message: "Şifre başarıyla değiştirildi" };
  }
};

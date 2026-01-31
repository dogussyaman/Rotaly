import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useRouter } from "@/i18n/routing";
import { Heart, LayoutDashboard, LogOut, Menu, Plus, User } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearUser } from "@/store/auth/auth-slice";
import { logout } from "@/store/testUser/test-user-slice";
import { authService } from "@/services/auth.service";
import Notification from "../../notifications/page";

const MobileNav = () => {
  const t = useTranslations("Navigation");
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  // Kullanıcı rolüne göre dashboard URL'ini belirle
  const getDashboardUrl = () => {
    switch (user?.role) {
      case "ADMIN":
        return "/dashboard/admin";
      case "OWNER":
        return "/dashboard/hotel";
      case "SUPPORT":
        return "/dashboard/support";
      case "CUSTOMER":
        return "/dashboard";
      default:
        return "/dashboard";
    }
  };

  const handleLogout = async () => {
    try {
      const response = await authService.logout();
      console.log("logout response", response);
      dispatch(clearUser());
      dispatch(logout());
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(clearUser());
      dispatch(logout());
      router.push("/");
    }
  };
  return (
    <div className="md:hidden flex justify-end">
        <LanguageSwitcher />    
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{t("sheetTitle")}</SheetTitle>
            <SheetDescription>
              {t("sheetDescription")}
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            {user ? (
              <>
                {/* CUSTOMER rolü için özel menü öğeleri */}
                {user.role === "CUSTOMER" && (
                  <>
                    <SheetClose asChild>
                      <Link href="/favorites">
                        <Button variant="outline" className="w-full">
                          <Heart className="h-5 w-5" />
                          {t("favorites")}
                        </Button>
                      </Link>
                    </SheetClose>
                    <div className="w-full">
                      <Notification />
                    </div>
                    <SheetClose asChild>
                      <Link href="/profile">
                        <Button variant="outline" className="w-full">
                          <User className="h-5 w-5" />
                          {t("profile")}
                        </Button>
                      </Link>
                    </SheetClose>
                  </>
                )}
                
                {/* Diğer roller için dashboard */}
                {user.role !== "CUSTOMER" && (
                  <SheetClose asChild>
                    <Link href={getDashboardUrl()}>
                      <Button variant="outline" className="w-full">
                        <LayoutDashboard className="h-5 w-5" />
                        {t("dashboard")}
                      </Button>
                    </Link>
                  </SheetClose>
                )}
                
                {/* Rotaly butonu - tüm giriş yapmış kullanıcılar için */}
                <SheetClose asChild>
                  <Link href="/hotel">
                    <Button variant="outline" className="w-full">
                        Oteller içinRotaly
                    </Button>
                  </Link>
                </SheetClose>
                
                {/* Çıkış yap butonu */}
                <SheetClose asChild>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    <LogOut className="h-5 w-5" />
                    {t("logout")}
                  </Button>
                </SheetClose>
              </>
            ) : (
              <>
                {/* Giriş yapmamış kullanıcılar için */}
                <SheetClose asChild>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      <User className="h-5 w-5" />
                      {t("login")}
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/register">
                    <Button variant="outline" className="w-full">
                      <User className="h-5 w-5" />
                      {t("register")}
                    </Button>
                  </Link>
                </SheetClose>
                {/* Rotaly butonu - giriş yapmamış kullanıcılar için */}
                <SheetClose asChild>
                  <Link href="/hotel">
                    <Button variant="outline" className="w-full">
                      <Plus className="h-5 w-5" />
                      Rotaly
                    </Button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">{t("close")}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

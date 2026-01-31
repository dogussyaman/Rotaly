"use client";

import React from "react";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Heart, LayoutDashboard, LogOut, User } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import Notification from "../../notifications/page";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/testUser/test-user-slice";
import { authService } from "@/services/auth.service";
import { clearUser } from "@/store/auth/auth-slice";

const UserActions = () => {
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
      // Redux state'i temizle
      dispatch(clearUser()); // Ana auth slice'dan
      dispatch(logout()); // Test user slice'dan
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
      // Hata olsa bile state'i temizle
      dispatch(clearUser());
      dispatch(logout());
      router.push("/");
    }
  };

  return (
    <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
      {user ? (
        <React.Fragment>
          {/* CUSTOMER rolü için favorites ve notification */}
          {user.role === "CUSTOMER" ? (
            <>
              <Link href="/favorites">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative cursor-pointer"
                >
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-[#ed2f2f] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center text-[10px] font-medium">
                    3
                  </span>
                </Button>
              </Link>
              <Notification />
            </>
          ):(
            <>
             <Link href={getDashboardUrl()}>
                <Button variant="outline" size="sm" className="relative cursor-pointer">
                  <LayoutDashboard className="h-5 w-5" />
                  {t("dashboard")}
                </Button>
                </Link>
            </>
          )}

          
          <LanguageSwitcher />
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{t("user")}</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              
              {/* CUSTOMER rolü için profil menüsü */}
              {user.role === "CUSTOMER" && (
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    {t("profile")}
                  </Link>
                </DropdownMenuItem>
              )}
              
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                {t("logout")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </React.Fragment>
      ) : (
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" className="cursor-pointer">
              {t("login")}
            </Button>
          </Link>
          <Link href="/register">
            <Button className="cursor-pointer">{t("register")}</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserActions;

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Link, useRouter } from "@/i18n/routing";
import { ModeToggle } from "../mode-toggle";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../language-switcher";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { clearDashboard } from "@/store/dashboard/dashboard-slice";
import { authService } from "@/services";
import { clearUser } from "@/store/auth/auth-slice";
import { LogOut } from "lucide-react";

export function SiteHeader() {
  const router = useRouter();
  const t = useTranslations("Dashboard");
  const logoutTranslations = useTranslations("Dashboard.logoutModal");
  const pageTitle = useSelector((state: RootState) => state.dashboard.pageTitle);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLogout = async() => {
    try {
      const response = await authService.logout();
      console.log("logout response", response);
      if (response.success) {
        dispatch(clearUser());
        dispatch(clearDashboard());
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(clearUser());
      dispatch(clearDashboard());
      router.push("/login");
    }
  };

  return (
    <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height] py-2">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-base font-medium text-foreground">
          {pageTitle || t("dashboard")} {/* Fallback title */}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <Button
                variant="default"
                asChild
                size="sm"
                className="hidden md:flex text-white bg-red-500 hover:bg-red-600"
              >
                <Link href="#" onClick={() => setOpen(true)}>
                  {t("logout")}
                </Link>
              </Button>
                <LogOut color="red" className="h-5 w-5 flex md:hidden"/>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{logoutTranslations("title")}</DialogTitle>
                <DialogDescription>
                  {logoutTranslations("description")}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  {logoutTranslations("cancel")}
                </Button>
                <Button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                >
                  {logoutTranslations("confirm")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

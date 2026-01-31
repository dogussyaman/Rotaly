"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, HelpCircle, User } from "lucide-react";
import AdminDashboard from "./admin/page";
import HotelDashboard from "./hotel/page";
import SupportDashboard from "./support/page";
import { RootState } from "@/store/store";

export default function Page() {
  const t = useTranslations("Support");
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading check
    setIsLoading(false);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">{t("loading")}</div>
      </div>
    );
  }

  // Role'a göre içerik render et
  const renderDashboardContent = () => {
    switch (user?.role) {
      case "ADMIN":
        return <AdminDashboard />;
      case "OWNER":
        return <HotelDashboard />;
      case "SUPPORT":
        return <SupportDashboard />;
      default:
        return (
          <div className="p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => router.push("/support/tickets")}
                >
                  <CardHeader>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <MessageSquare className="w-10 h-10 text-blue-500" />
                      <CardTitle className="text-center">
                        Support Tickets
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      View and manage your support requests
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => router.push("/support/faq")}
                >
                  <CardHeader>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <HelpCircle className="w-10 h-10 text-green-500" />
                      <CardTitle className="text-center">FAQ</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      Find answers to common questions
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => router.push("/profile")}
                >
                  <CardHeader>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <User className="w-10 h-10 text-purple-500" />
                      <CardTitle className="text-center">Profile</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      Manage your account settings
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderDashboardContent();
}

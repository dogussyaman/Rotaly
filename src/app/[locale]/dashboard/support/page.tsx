"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3Icon, MessageCircleIcon, FileTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function SupportDashboard() {
  const router = useRouter();
  const t = useTranslations("Support");

  const adminMenu = [
    {
      title: t("liveSupport"),
      icon: MessageCircleIcon,
      description: t("liveSupportDescription"),
      link: "/dashboard/support/tickets",
      color: "text-green-500",
    },
    {
      title: t("statisticsReports"),
      icon: BarChart3Icon,
      description: t("statisticsReportsDescription"),
      link: "/dashboard/support/statistic",
      color: "text-purple-500",
    },
    {
      title: t("informationSystemInfo"),
      icon: FileTextIcon,
      description: t("informationSystemInfoDescription"),
      link: "/dashboard/support/information",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Admin Menü Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {adminMenu.map((item, index) => {
            const IconComponent = item.icon;
            const handleClick = () => {
              if (item.link !== "#") {
                router.push(item.link);
              }
            };

            return (
              <Card
                key={index}
                onClick={handleClick}
                className="bg-card cursor-pointer  hover:bg-accent hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <IconComponent className={`w-10 h-10 ${item.color}`} />
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="">
                  <p className="text-center text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

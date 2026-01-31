"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDaysIcon,
  BedDoubleIcon,
  SettingsIcon,
  BarChart3Icon,
  UsersIcon,
  StarIcon,
  MessageCircleIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function HotelDashboard() {
  const router = useRouter();
  const t = useTranslations("Hotel");

  const hotelMenu = [
    {
      title: t("reservationManagement"),
      icon: CalendarDaysIcon,
      description: t("reservationManagementDescription"),
      link: "/dashboard/hotel/reservations",
      color: "text-blue-500",
    },
    {
      title: t("roomPriceManagement"),
      icon: BedDoubleIcon,
      description: t("roomPriceManagementDescription"),
      link: "/dashboard/hotel/room-price",
      color: "text-green-500",
    },
    {
      title: t("hotelProfile"),
      icon: SettingsIcon,
      description: t("hotelProfileDescription"),
      link: "/dashboard/hotel/profile",
      color: "text-purple-500",
    },
    {
      title: t("statisticsReports"),
      icon: BarChart3Icon,
      description: t("statisticsReportsDescription"),
      link: "/dashboard/hotel/statistic",
      color: "text-orange-500",
    },
    {
      title: t("guestManagement"),
      icon: UsersIcon,
      description: t("guestManagementDescription"),
      link: "/dashboard/hotel/customers",
      color: "text-teal-500",
    },
    {
      title: t("evaluations"),
      icon: StarIcon,
      description: t("evaluationsDescription"),
      link: "/dashboard/hotel/evaluations",
      color: "text-yellow-500",
    },
    {
      title: t("liveSupport"),
      icon: MessageCircleIcon,
      description: t("liveSupportDescription"),
      link: "/dashboard/hotel/tickets",
      color: "text-gray-500",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {hotelMenu.map((item, index) => {
            const IconComponent = item.icon;
            const handleClick = () => {
              router.push(item.link);
            };

            return (
              <Card
                key={index}
                onClick={handleClick}
                className="bg-card cursor-pointer hover:bg-accent hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <IconComponent className={`w-10 h-10 ${item.color}`} />
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
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

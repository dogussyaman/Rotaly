"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { FC } from "react";

const RoomCards: FC = () => {
  const t = useTranslations("Rooms");

  // Örnek veriler, ileride API ile dinamik çekebilirsin
  const statsData = [
    {
      title: t("totalRooms"), // "Toplam Odalar"
      value: "6",
    },
    {
      title: t("availableRooms"), // "Mevcut Odalar"
      value: "5",
    },
    {
      title: t("unavailableRooms"), // "Mevcut Olmayan Odalar"
      value: "1",
    },
    {
      title: "Oda Türleri", // "Room Types"
      value: "5",
    },
    {
      title: "Ortalama Fiyat", // "Average Price"
      value: "3,400₺",
    },
    {
      title: "Toplam Kapasite", // "Total Capacity"
      value: "19",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className="bg-card border border-border hover:bg-accent transition-all duration-300 cursor-pointer"
        >
          <CardContent className="p-4 text-center">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RoomCards;

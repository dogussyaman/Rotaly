"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Notification = () => {
  const t = useTranslations("Notifications");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Link href="#">
          <Button variant="ghost" size="sm" className="relative cursor-pointer">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-[#2F6FED] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center text-[10px] font-medium">
              3
            </span>
          </Button>
        </Link>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="center" side="bottom">
        <div className="p-4 border-b">
          <h4 className="font-semibold text-sm">{t("title")}</h4>
        </div>
        <div className="max-h-64 overflow-y-auto">
          <div className="p-3 hover:bg-gray-50 cursor-pointer border-b">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{t("newReservation")}</p>
                <p className="text-xs text-gray-500">{t("reservationConfirmed")}</p>
                <p className="text-xs text-gray-400 mt-1">{t("twoHoursAgo")}</p>
              </div>
            </div>
          </div>
          <div className="p-3 hover:bg-gray-50 cursor-pointer border-b">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{t("paymentSuccess")}</p>
                <p className="text-xs text-gray-500">{t("paymentReceived")}</p>
                <p className="text-xs text-gray-400 mt-1">{t("oneDayAgo")}</p>
              </div>
            </div>
          </div>
          <div className="p-3 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{t("systemUpdate")}</p>
                <p className="text-xs text-gray-500">{t("newFeaturesAdded")}</p>
                <p className="text-xs text-gray-400 mt-1">{t("threeDaysAgo")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border-t">
          <Button variant="ghost" size="sm" className="w-full text-sm">
            {t("viewAll")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;

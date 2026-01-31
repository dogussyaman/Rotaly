import React from "react";
import {
  BedDoubleIcon,
  SofaIcon,
  BathIcon,
  TvIcon,
  WifiIcon,
  RefrigeratorIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

const HotelInfo = () => {
  const t = useTranslations("HotelDetail.hotelInfo");

  const features = [
    { icon: <BedDoubleIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("beds") },
    { icon: <SofaIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("seatingArea") },
    { icon: <BathIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("bathrooms") },
    { icon: <RefrigeratorIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("minibar") },
    { icon: <WifiIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("wifi") },
    { icon: <TvIcon className="w-6 h-6 text-gray-400 dark:text-gray-300" />, label: t("television") },
  ];

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4 text-lg text-gray-900 dark:text-white">{t("title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-md min-h-[90px]"
          >
            {f.icon}
            <span className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelInfo;

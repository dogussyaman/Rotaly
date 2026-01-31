import React from "react";
import { useTranslations } from "next-intl";

export default function PastReservations() {
  const t = useTranslations("UserProfile");

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {t("pastReservations")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{t("pastReservationsDescription")}</p>
    </div>
  );
}

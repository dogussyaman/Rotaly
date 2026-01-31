import React from "react";
import { format } from "date-fns";
import { useTranslations } from "next-intl";

type Notification = {
  id: number;
  message: string;
  date: string;
  read: boolean;
};

export default function Notifications() {
  const t = useTranslations("UserProfile");

  // notifications verisi burada direkt tanımlı
  const notifications: Notification[] = [
    {
      id: 1,
      message: "Yeni rezervasyonunuz onaylandı.",
      date: "2025-08-01T10:00:00Z",
      read: false,
    },
    {
      id: 2,
      message: "Profil bilgileriniz başarıyla güncellendi.",
      date: "2025-07-30T15:30:00Z",
      read: true,
    },
    {
      id: 3,
      message: "Sistem bakımı nedeniyle 5 Ağustos'ta hizmet verilemeyecek.",
      date: "2025-07-28T08:15:00Z",
      read: false,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {t("notifications")}
      </h2>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">{t("noNotifications")}</p>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 rounded-lg border ${
                notif.read
                  ? "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                  : "border-blue-400 bg-blue-50 dark:bg-blue-900"
              }`}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`text-sm ${
                    notif.read
                      ? "text-gray-800 dark:text-gray-200"
                      : "font-semibold text-blue-800 dark:text-blue-200"
                  }`}
                >
                  {notif.message}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(notif.date), "dd.MM.yyyy HH:mm")}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

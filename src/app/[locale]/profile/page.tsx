"use client";

import ProfileTabContent from "@/components/profil/profil-tab-content";
import { useTranslations } from "next-intl";
import ReservationsContent from "@/components/profil/reservations-tabs-content";
import PastReservations from "@/components/profil/past-tabs-content";
import Notifications from "@/components/profil/notifications-tabs-content";
import PaymentCardsContent from "@/components/profil/payment-cards-content";
import { useEffect, useState } from "react";
import { userService } from "@/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  "id": string,
  "name": string,
  "surname": string,
  "email": string,
  "phone": string,
  "isVerified": boolean,
  "images": string[],
  "paymentCards": string[],
  "role": string
}

export default function ProfilePage() {
  const t = useTranslations("UserProfile");
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const userData = await userService.getUserProfile();
        setUser(userData.data);
      } catch (error) {
        console.error("Profile fetch error:", error);
        setError("Profil bilgileri yüklenemedi");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const tabs = [
    {
      value: "profile",
      label: t("title"),
      icon: "👤",
      content: <ProfileTabContent t={t} user={user} />,
    },
    {
      value: "reservations",
      label: t("reservations"),
      icon: "📅",
      content: <ReservationsContent />,
    },
    {
      value: "past",
      label: t("pastReservations"),
      icon: "🕓",
      content: <PastReservations />,
    },
    {
      value: "notifications",
      label: t("notifications"),
      icon: "🔔",
      content: <Notifications />,
    },
    {
      value: "cards",
      label: "Kayıtlı Kartlar",
      icon: "💳",
      content: <PaymentCardsContent />,
    },
  ];

  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-6 mt-5">
            {/* Sidebar Skeleton */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-card shadow-sm p-4">
                <div className="space-y-2 flex flex-row md:flex-col gap-6 md:gap-2 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-12 w-20 md:w-full rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
            {/* Content Skeleton */}
            <div className="rounded-2xl p-6">
              <div className="space-y-6">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Tekrar Dene
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-6 mt-5">
          {/* Sidebar Navigation */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-card shadow-sm p-4 sticky top-20">
              <div className="space-y-2 flex flex-row md:flex-col gap-6 md:gap-2 justify-center md:justify-start">
                {tabs.map((tab) => (
                  <Button
                    key={tab.value}
                    variant="ghost"
                    onClick={() => setActiveTab(tab.value)}
                    className={cn(
                      "w-20 md:w-full justify-center md:justify-start px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                      activeTab === tab.value
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500 shadow-sm"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{tab.icon}</span>
                      <span className="hidden md:block">{tab.label}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="rounded-2xl p-6">
            <div className="space-y-6">{activeContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

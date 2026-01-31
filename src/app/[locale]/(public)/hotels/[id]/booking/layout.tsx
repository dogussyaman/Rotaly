"use client";

import React from "react";
import { Check } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

interface BookingLayoutProps {
  children: React.ReactNode;
}

export default function BookingLayout({ children }: BookingLayoutProps) {
  const step = useSelector((state: RootState) => state.step);
  const currentStep = step.step;
  const t = useTranslations("HotelDetail.bookingProcess");

  const steps = [
    { id: 1, title: t("step1") },
    { id: 2, title: t("step2") },
    { id: 3, title: t("step3") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sayfa Numaraları */}
      <div className="w-full py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Sayfa Numarası ve Başlık */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                  <div
                    className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-md
                    ${
                      currentStep > step.id ||
                      (currentStep === 3 && step.id <= 3)
                        ? "bg-green-500"
                        : currentStep === step.id
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }
                    transition-all duration-300
                  `}
                  >
                    {currentStep > step.id ||
                    (currentStep === 3 && step.id <= 3) ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <span
                        className={`
                        ${
                          currentStep >= step.id
                            ? "text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }
                      `}
                      >
                        {step.id}
                      </span>
                    )}
                  </div>
                  <div
                    className={`
                    text-sm font-medium text-center
                    ${
                      currentStep >= step.id
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400"
                    }
                  `}
                  >
                    {step.title}
                  </div>
                </div>

                {/* Bağlantı Çizgisi */}
                {index < steps.length - 1 && (
                  <div
                    className={`
                    flex-1 h-0.5 mx-4 rounded-full
                    ${
                      currentStep > step.id ||
                      (currentStep === 3 && step.id < 3)
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }
                    transition-all duration-300
                  `}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Sayfa İçeriği */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {children}
      </div>
    </div>
  );
}

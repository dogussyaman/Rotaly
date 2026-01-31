"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { resetStep } from "@/store/step/step-slice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface BookingPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default function BookingPage({ params }: BookingPageProps) {
  const { id, locale } = use(params);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStep());
    
    // Animasyonu 2.5 saniye göster, sonra yönlendir
    const timer = setTimeout(() => {
      router.replace(`/${locale}/hotels/${id}/booking/information`);
    }, 2500);

    return () => clearTimeout(timer);
  }, [id, locale, router, dispatch]);

  return (
    <div className="min-h-screen bg-background flex flex-col gap-6 items-center justify-center">
      {/* Küçültülmüş animasyon */}
      <div className="w-80 h-80 md:w-96 md:h-96">
        <DotLottieReact
          src="https://lottie.host/e837e66a-b157-4633-9758-332486d48d06/ZqA0wj2vcp.lottie"
          loop
          className="w-full h-full"
          autoplay
        />
      </div>
      
      {/* Yükleniyor yazısı */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Yükleniyor...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Rezervasyon sayfasına yönlendiriliyorsunuz
        </p>
        
        {/* Yükleme çubuğu animasyonu */}
        <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
}

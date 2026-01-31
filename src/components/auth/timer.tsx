import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Button } from "../ui/button";

interface TenMinuteTimerProps {
  onTimeUp: () => void;
  isActive: boolean;
  shouldReset?: boolean; 
  email: string;
  onTimerStatusChange?: (isCompleted: boolean) => void;
}

export default function TenMinuteTimer({ onTimeUp, isActive, shouldReset = false, email, onTimerStatusChange }: TenMinuteTimerProps) {
  const [endTime, setEndTime] = useState<number | null>(null);
  const [key, setKey] = useState(0); // Component'i yeniden render etmek için

  useEffect(() => {
    if (shouldReset) {
      // Timer'ı sıfırla
      localStorage.removeItem("endTime");
      setEndTime(null);
      return;
    }

    if (isActive) {
      // Timer aktif olduğunda localStorage'da daha önce bir endTime var mı?
      const savedEndTime = localStorage.getItem("endTime");

      if (savedEndTime) {
        setEndTime(Number(savedEndTime));
      } else {
        const newEndTime = Date.now() + 30 * 60 * 1000; // 30 dk sonrası (test için)
        localStorage.setItem("endTime", newEndTime.toString());
        setEndTime(newEndTime);
      }
    }
  }, [isActive, shouldReset]);

  if (!endTime) return null;

  const handleResendOTP = async() => {
    try {
      console.log(email);
      
      // Timer'ı tamamen sıfırla
      localStorage.removeItem("endTime");
      setEndTime(null);
      
      // Timer durumunu sıfırla (Hesabı Doğrula butonunu göster)
      onTimerStatusChange?.(false);
      
      // Kısa bir gecikme sonrası yeni timer başlat
      setTimeout(() => {
        const newEndTime = Date.now() + 30 * 60 * 1000; // 30 dk sonrası (test için)
        localStorage.setItem("endTime", newEndTime.toString());
        setEndTime(newEndTime);
        setKey(prev => prev + 1); // Component'ı yeniden render et
      }, 100);
      
      // const response = await authService.resendVerificationEmail(email);
      // if (response.success) {
      //   toast.success(response.message || "Doğrulama kodu yeniden gönderildi");
      //   // Timer'ı yeniden başlat
      //   localStorage.removeItem("endTime");
      //   const newEndTime = Date.now() + 1 * 60 * 1000; // 1 dk sonrası (test için)
      //   localStorage.setItem("endTime", newEndTime.toString());
      //   setEndTime(newEndTime);
      //   setKey(prev => prev + 1); // Component'ı yeniden render et
      // } else {
      //   toast.error(response.message || "Doğrulama kodu gönderilemedi");
      // }
    } catch (error) {
      console.error("OTP yeniden gönderme hatası:", error);
      // toast.error("Bir hata oluştu, lütfen tekrar deneyin");
    }
  };


  return (
    <Countdown
      key={key} // Component'ı yeniden render etmek için
      date={endTime}
      className="bg-red-500 text-white rounded-md px-2 py-1"
      renderer={({ minutes, seconds, completed }) =>
        completed ? (
          <div className="flex gap-2">
            <Button 
              onClick={handleResendOTP} 
              variant="outline" 
              className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1 text-sm"
            >
              Şifre Yenile
            </Button>
          </div>
        ) : (
          <span>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
        )
      }
      onComplete={() => {
        localStorage.removeItem("endTime");
        onTimerStatusChange?.(true); // Timer bittiğini bildir
        onTimeUp();
      }}
    />
  );
}

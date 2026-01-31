"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import TenMinuteTimer from "./timer";

interface OTPVerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  otp: string;
  onOtpChange: (otp: string) => void;
  onSubmit: () => void;
  onTimeUp: () => void;
  title?: string;
  description?: string;
  showCancelButton?: boolean;
  onCancel?: () => void;
  email?: string;
}

export default function OTPVerificationDialog({
  open,
  onOpenChange,
  otp,
  onOtpChange,
  onSubmit,
  onTimeUp,
  title = "Hesabı Doğrula",
  description = "Lütfen doğrulama kodunu giriniz. Doğrulama kodu 6 haneli olmalıdır.",
  showCancelButton = false,
  onCancel,
  email,
}: OTPVerificationDialogProps) {
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  // Dialog açıldığında timer durumunu sıfırla
  useEffect(() => {
    if (open) {
      setIsTimerCompleted(false);
    }
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md w-full rounded-2xl p-6 space-y-6 [&>button[aria-label=Close]]:hidden"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center space-y-2">
          <DialogTitle className="text-xl font-semibold text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center">
          <InputOTP maxLength={6} value={otp} onChange={onOtpChange}>
            <InputOTPGroup>
              {[0, 1, 2].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 ..."
                />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {[3, 4, 5].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 ..."
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {isTimerCompleted && (
          <div className="flex justify-center items-center mt-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Süre doldu. Şifre yenileme butonuna tıklayın.
            </p>
          </div>
        )}
        </div>
       
        <DialogFooter className="flex justify-center items-center gap-4">
          <TenMinuteTimer 
            onTimeUp={onTimeUp} 
            isActive={open} 
            email={email || ""} 
            onTimerStatusChange={setIsTimerCompleted}
          />
          {showCancelButton && onCancel && (
            <Button
              variant="outline"
              onClick={onCancel}
              className="text-black dark:text-white"
            >
              İptal
            </Button>
          )}
          {!isTimerCompleted && (
            <Button
              onClick={onSubmit}
              className="bg-primary text-white dark:bg-gray-200 dark:text-black"
            >
              Hesabı Doğrula
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

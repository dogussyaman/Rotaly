"use client";

import { useRouter } from "@/i18n/routing";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToastMessages } from "@/hooks/toast-messages";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import LoginForm from "@/components/auth/login-form";
import OTPVerificationDialog from "@/components/auth/otp-verification-dialog";
import CloseVerificationDialog from "@/components/auth/close-verification-dialog";
import { createLoginLogic } from "@/components/auth/login-logic";
import toast from "react-hot-toast";

export default function LoginPage() {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const dispatch = useDispatch();
  const { loginSuccess } = useToastMessages();
  const [open, setOpen] = useState(false);
  const [closeVerify, setCloseVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginSchema = z.object({
    email: z.string().email({ message: t("invalidEmail") }),
    password: z.string().min(8, { message: t("invalidPassword") }),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Login logic'ini oluştur
  const { handleLogin, handleOtpSubmit } = createLoginLogic({
    router,
    dispatch,
    loginSuccess,
    setOpen,
  });

  // Timer bittiğinde çağrılacak fonksiyon
  const handleTimeUp = useCallback(() => {
    // Modal kapatılmasın, sadece mesaj göster
    toast.error(
      "Doğrulama süresi doldu. Şifre yenile butonunu kullanabilirsiniz."
    );
  }, []);

  // OTP submit fonksiyonu - useCallback ile optimize et
  const otpSubmit = useCallback(async () => {
    if (isSubmitting) return; // Çift tıklamayı engelle
    
    setIsSubmitting(true);
    
    try {
      await handleOtpSubmit(otp, () => {
        setOpen(false);
        setOtp("");
        form.reset();
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [otp, handleOtpSubmit, form, isSubmitting]);

  // OTP değişikliğini handle et
  const handleOtpChange = useCallback((value: string) => {
    setOtp(value);
  }, []);

  // Dialog açılma durumunu handle et
  const handleOpenChange = useCallback((isOpen: boolean) => {
    if (!isSubmitting) { // Sadece submit edilmiyorsa değiştir
      setOpen(isOpen);
      if (!isOpen) {
        setOtp(""); // Dialog kapanırken OTP'yi temizle
      }
    }
  }, [isSubmitting]);

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <LoginForm form={form} onSubmit={handleLogin} />

      {/* Gerçek hesap doğrulama dialogu */}
      <OTPVerificationDialog
        open={open}
        onOpenChange={handleOpenChange}
        otp={otp}
        onOtpChange={handleOtpChange}
        onSubmit={otpSubmit}
        onTimeUp={handleTimeUp}
        title="Hesabı Doğrula"
        description="Lütfen doğrulama kodunu giriniz. Doğrulama kodu 6 haneli olmalıdır."
        email={form.getValues("email")}
      />

      {/* Çıkış onay dialogu */}
      <CloseVerificationDialog
        open={closeVerify}
        onOpenChange={setCloseVerify}
        onConfirm={() => {
          setCloseVerify(false);
          // Timer'ı sıfırlamıyoruz, sadece dialog'ları kapatıyoruz
        }}
        onCancel={() => setCloseVerify(false)}
      />
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Dialog,
  DialogClose,
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
import { useState } from "react";
import toast from "react-hot-toast";
import { Instagram, Phone, Mail, Globe } from "lucide-react";

export default function AdminProfilePage() {
  const t = useTranslations("AdminProfile");
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);

  const formSchema = z
    .object({
      name: z.string().min(1, { message: t("fieldRequired") }),
      email: z.string().email({ message: t("invalidEmail") }),
      password: z.string().min(8, { message: t("passwordHint") }),
      confirmPassword: z.string().min(8, { message: t("passwordHint") }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("passwordsDoNotMatch"),
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "rotaly",
      email: "info@rotaly.xyz",
      password: "",
      confirmPassword: "",
    },
  });

  // Şifre kontrol -> OTP aç
  const handleOpenOtp = () => {
    const isValid = form.trigger(["password", "confirmPassword"]);
    isValid.then((valid) => {
      if (valid) {
        setOpen(true);
      } else {
        toast.error(t("formErrorPassword"));
      }
    });
  };

  // OTP doğrulama
  const otpSubmit = () => {
    if (otp.length !== 6) {
      toast.error(t("otpErrorLength"));
      return;
    }

    if (otp === "123456") {
      toast.success(t("otpSuccess"));

      const formData = form.getValues();
      console.log("Form Data:", formData);
      console.log("OTP:", otp);

      // backend isteği
      // await updatePassword(formData, otp);

      setTimeout(() => {
        setOpen(false);
        setOtp("");
        form.reset();
      }, 1000);
    } else {
      toast.error(t("otpErrorInvalid"));
    }
  };





  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Profile Image */}
          <div className="col-span-12 lg:col-span-4">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center py-6 space-y-6">
                <Image
                  src="/images/logo3.PNG"
                  alt="Admin Profile"
                  width={200}
                  height={200}
                  className="rounded-full object-cover border-4 border-gray-200"
                />
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-8">
            <Card>
              <CardContent className="py-6">
                <Form {...form}>
                  <form className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("name")}</FormLabel>
                            <FormControl>
                              <Input disabled {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("email")}</FormLabel>
                            <FormControl>
                              <Input type="email" disabled {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Passwords */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("newPassword")}</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("confirmPassword")}</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 border-t pt-4">
                      <Button type="button" variant="outline">
                        {t("cancel")}
                      </Button>
                      <Button type="button" onClick={handleOpenOtp}>
                        {t("changePassword")}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer: Company Info + Social */}
        <Card className="bg-card mt-16">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="text-center space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  Rotaly XYZ
                </h2>
                <p className="text-sm text-gray-600">Seyahat ve Turizm</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex flex-col items-center space-y-3">
                <h3 className="text-sm font-medium text-gray-700">
                  {t("socialMedia")}
                </h3>
                  <div className="flex justify-center space-x-4">
                  <a
                    href="https://instagram.com/rotaly.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/rotaly.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/rotaly.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="w-full space-y-4">
                <h3 className="text-sm font-medium text-gray-700 text-center">
                  {t("companyInfo")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">+90 212 123 45 67</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">info@rotaly.xyz</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <a
                      href="https://rotaly.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      rotaly.xyz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* OTP Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-full rounded-2xl p-6 space-y-6">
          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-2xl font-semibold">
              {t("otpTitle")}
            </DialogTitle>
            <DialogDescription className="text-gray-500">
              {t("otpDescription")}
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                {[0, 1, 2].map((i) => (
                  <InputOTPSlot key={i} index={i} className="w-12 h-12 ..." />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {[3, 4, 5].map((i) => (
                  <InputOTPSlot key={i} index={i} className="w-12 h-12 ..." />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <DialogFooter className="flex justify-center gap-4">
            <DialogClose asChild>
              <Button variant="outline">{t("otpCancel")}</Button>
            </DialogClose>
            <Button onClick={otpSubmit} className="bg-primary text-white">
              {t("otpConfirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

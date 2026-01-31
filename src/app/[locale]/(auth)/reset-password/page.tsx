"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Link, useRouter } from "@/i18n/routing";
import { BottomGradient } from "@/components/auth/auth-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToastMessages } from "@/hooks/toast-messages";
import { authService } from "@/services/auth.service";

const ResetPassword = () => {
  const t = useTranslations("ResetPassword");
  const { showError, showSuccess } = useToastMessages();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Şifre sıfırlama için form schema
  const resetPasswordSchema = z.object({
    email: z.string().email({ message: t("invalidEmail") || "Invalid email address" }),
  });

  type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const handleSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(data.email);
      if (response.success) {
        showSuccess(t("resetSuccess"), 5000);
        router.push("/login");
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : t("resetError");
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-sm text-gray-500">{t("description")}</p>
        <Form {...form}>
          <form className="my-4" onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="mt-4 flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder={t("emailPlaceholder")} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-4"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? t("sending") : t("submit")}
              <BottomGradient />
            </button>
          </form>
        </Form>
        <div className="flex justify-end ">
          <Link href="/login" className="text-sm text-primary hover:underline">
            {t("back")}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;

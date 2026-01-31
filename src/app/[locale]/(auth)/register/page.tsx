"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Link, useRouter } from "@/i18n/routing";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToastMessages } from "@/hooks/toast-messages";
import { useTranslations } from "next-intl";
import { BottomGradient, LabelInputContainer } from "@/components/auth/auth-components";
import { authService } from "@/services/auth.service";

export default function RegisterPage() {
  const t = useTranslations("Register");
  const { showError, showSuccess } = useToastMessages();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const registerSchema = z
  .object({
    firstname: z.string().min(1, { message: t("validationErrors.firstNameRequired") }),
    lastname: z.string().min(1, { message: t("validationErrors.lastNameRequired") }),
    email: z.string().email({ message: t("validationErrors.invalidEmail") }),
    phone: z.string().min(1, { message: t("validationErrors.phoneRequired") }),
    password: z.string().min(8, { message: t("validationErrors.passwordMinLength") }),
    confirmPassword: z.string().min(8, { message: t("validationErrors.passwordMinLength") }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: t("validationErrors.passwordsDoNotMatch")
  });

  type RegisterFormData = z.infer<typeof registerSchema>;

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    }
  })

  const handleSubmit =  async (data: RegisterFormData) => { 
    setIsLoading(true);
    try {
      const response = await authService.register({
        name: data.firstname,
        surname: data.lastname,
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      console.log("response", response);
      if (response.success) {
        showSuccess(t("registrationSuccess"), 3000);
        router.push("/login");
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : t("registrationFailed");
      showError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-card border border-border rounded-2xl shadow-input mx-auto w-full max-w-md p-4 md:rounded-2xl md:p-8 ">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          {t("subtitle")}
        </p>
        <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("firstName")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("firstNamePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("lastName")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("lastNamePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("emailPlaceholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phone")}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t("phonePlaceholder")} 
                      {...field} 
                      type="text"
                      title={t("phoneFormatHint")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("passwordPlaceholder")} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirmPassword")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("confirmPasswordPlaceholder")} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            {isLoading ? t("registerButtonLoading") : t("registerButton")}
            <BottomGradient />
          </button>

          <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{t("haveAccount")}</p>
            <Link href="/login" className="text-sm text-primary hover:underline">
              {t("loginLink")}
            </Link>
          </div>
        </form>
        </Form>
      </div>
    </div>
  );
}
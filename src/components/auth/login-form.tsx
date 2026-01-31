"use client";

import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/routing";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/components/auth/auth-components";
import { useTranslations } from "next-intl";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (data: LoginFormData) => void;
}

export default function LoginForm({
  form,
  onSubmit,
}: LoginFormProps) {
  const t = useTranslations("LoginPage");

  return (
    <div className="bg-card border border-border rounded-2xl shadow-input mx-auto w-full max-w-md p-4 md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {t("welcome")}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        {t("subtitle")}
      </p>
      
      
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col space-y-2">
            <LabelInputContainer className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("emailPlaceholder")}
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.trim())} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
            <LabelInputContainer className="w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("passwordPlaceholder")}
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </LabelInputContainer>
          </div>
          <div className="flex justify-end my-2">
            <Link
              href="/reset-password"
              className="text-sm text-primary hover:underline"
            >
              {t("forgotPassword")}
            </Link>
          </div>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            {t("loginButton")} &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {t("noAccount")}
            </p>
            <Link
              href="/register"
              className="text-sm text-primary hover:underline"
            >
              {t("register")}
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

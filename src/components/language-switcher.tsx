"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";


export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === "tr" ? "en" : "tr";
    startTransition(() => {
      router.push(pathname, { locale: newLocale, scroll: false});
    });
  };

  const languages = {
    tr: { label: "Türkçe", code: "TR" },
    en: { label: "English", code: "EN" }
  };

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
  
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 gap-1 cursor-pointer"
          disabled={isPending}
          onClick={toggleLanguage}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.code}</span>
        </Button>
      
  );
}

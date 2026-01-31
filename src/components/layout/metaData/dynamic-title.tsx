"use client";
import { useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

interface DynamicTitleProps {
  locale: string;
}

export default function DynamicTitle({ locale }: DynamicTitleProps) {
  const [mounted, setMounted] = useState(false);
  
  const [text] = useTypewriter({
    words: locale === "tr" 
      ? ["En İyi Otel Rezervasyon Sistemi", "Güvenilir Konaklama Platformu", "Uygun Fiyatlı Oteller"]
      : ["Best Hotel Reservation System", "Reliable Accommodation Platform", "Affordable Hotels"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.title = `Rotaly - ${text} | ${locale === "tr" ? "Otel Rezervasyon" : "Hotel Reservation"}`;
    }
  }, [text, locale, mounted]);
  
  return null;
}
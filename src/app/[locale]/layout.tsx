import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "@/components/store-provider";
import LayoutWrapper from "./layout-wrapper";
import DynamicTitle from "@/components/layout/metaData/dynamic-title";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const locales = ["tr", "en"];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rotaly.com';
  
  return {
          title: {
        default: locale === "tr" 
          ? "Rotaly - En İyi Otel Rezervasyon Sistemi | Uygun Fiyatlı Konaklama"
          : "Rotaly - Best Hotel Reservation System | Affordable Accommodation",
      template: locale === "tr" 
        ? "%s | Rotaly Otel Rezervasyon"
        : "%s | Rotaly Hotel Reservation"
    },
    description: locale === "tr"
      ? "Türkiye'nin en güvenilir otel rezervasyon platformu. 1000+ otel, en uygun fiyatlar, ücretsiz iptal. Antalya, İstanbul, İzmir ve daha fazlası."
      : "Turkey's most reliable hotel reservation platform. 1000+ hotels, best prices, free cancellation. Antalya, Istanbul, Izmir and more.",
    keywords: locale === "tr"
      ? "otel rezervasyon, konaklama, tatil, antalya otel, istanbul otel, izmir otel, uygun fiyat otel"
      : "hotel reservation, accommodation, vacation, antalya hotel, istanbul hotel, izmir hotel, affordable hotel",
    authors: [{ name: "Rotaly Team" }],
    creator: "Rotaly",
    publisher: "Rotaly",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/',
      languages: {
        'tr': '/tr',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: baseUrl,
      title: locale === "tr" 
        ? "Rotaly - En İyi Otel Rezervasyon Sistemi"
        : "Rotaly - Best Hotel Reservation System",
      description: locale === "tr"
        ? "Türkiye'nin en güvenilir otel rezervasyon platformu"
        : "Turkey's most reliable hotel reservation platform",
      siteName: 'Rotaly',
      images: [
        {
          url: '/images/logo3.PNG',
          width: 1200,
          height: 630,
          alt: 'Rotaly Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === "tr" 
        ? "Rotaly - En İyi Otel Rezervasyon Sistemi"
        : "Rotaly - Best Hotel Reservation System",
      description: locale === "tr"
        ? "Türkiye'nin en güvenilir otel rezervasyon platformu"
        : "Turkey's most reliable hotel reservation platform",
      images: ['/images/logo3.PNG'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}



export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Geçerli locale kontrolü
  if (!locales.includes(locale)) {
    notFound();
  }

  // Çeviri mesajlarını getir
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <DynamicTitle locale={locale} />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

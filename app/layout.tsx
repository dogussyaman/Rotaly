import { Toaster } from "@/components/ui/sonner"
import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ROTALY - Hayalinizdeki Konaklama Bir Tık Uzağınızda',
  description: 'Otel, villa, kiralık daire, bungalov, pansiyon ve kamp seçenekleriyle hayalinizdeki tatili keşfedin. En uygun fiyatlarla konaklama rezervasyonu yapın.',
  generator: 'v0.app',
  keywords: ['otel', 'villa', 'kiralık daire', 'bungalov', 'pansiyon', 'kamp', 'tatil', 'konaklama', 'rezervasyon'],
  authors: [{ name: 'ROTALY' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

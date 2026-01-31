"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "react-hot-toast";
import ChatWidget from "@/components/chat/chat-widget";
import ChatWidgetMobile from "@/components/chat/chat-widget-mobil";

type Props = {
  children: ReactNode;
};

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  if (isDashboard) {
    // Dashboard layout - navbar ve footer yok
    return (
      <div className="min-h-screen bg-background">
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    );
  }

  // Normal layout - navbar ve footer ile
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto min-h-screen">
          {children}
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
        <ChatWidget />
        <ChatWidgetMobile />
      </main>
      <Footer />
    </div>
  );
}
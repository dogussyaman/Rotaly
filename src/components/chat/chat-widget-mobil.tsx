"use client";

import type React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircleIcon, SendIcon, UserIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { aiChatService, type AIChatMessage } from "@/services/ai-chat.service";
import ChatMessage from "./chat-message";

// Welcome mesajını artık t ile oluşturuyoruz
const welcomeMessages = (t: (key: string) => string, onButtonClick?: (action: string) => void) => {
  return (
    <div>
      <div className="max-w-sm w-full bg-card shadow-lg rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white">
          <h2 className="text-lg font-semibold">🏨 {t("welcome")}</h2>
          <p className="text-sm opacity-90">{t("assistantIntro")}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 px-6 pb-6 mt-4">
          <button 
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => onButtonClick?.('book-room')}
          >
            🛏 {t("bookRoom")}
          </button>
          <button 
            className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            onClick={() => onButtonClick?.('view-reservation')}
          >
            📅 {t("viewReservation")}
          </button>
          <button 
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => onButtonClick?.('live-support')}
          >
            💬 {t("liveSupport")}
          </button>
          <button 
            className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            onClick={() => onButtonClick?.('hotel')}
          >
            Oteller için Rotaly
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ChatWidgetMobile() {
  const t = useTranslations("ChatWidget");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    {
      id: number;
      message: string | React.ReactNode;
      sender: "user" | "bot" | "system";
      type?: "live-support" | "ai-response";
      isLoading?: boolean;
    }[]
  >([]);

  const [isAIAvailable, setIsAIAvailable] = useState<boolean>(false);
  const [conversationHistory, setConversationHistory] = useState<AIChatMessage[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Welcome mesaj butonları için handler
  const handleWelcomeAction = useCallback((action: string) => {
    switch (action) {
      case 'book-room':
        setIsOpen(false);
        router.push('/hotels');
        break;
      case 'view-reservation':
        setIsOpen(false);
        router.push('/reservations');
        break;
      case 'live-support':
        setIsOpen(false);
        router.push("/support");
        break;
      case 'hotel':
        setIsOpen(false);
        router.push('/hotel');
        break;
      default:
        break;
    }
  }, [router, setIsOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // İlk welcome mesajını ekle
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: 1, message: welcomeMessages(t, handleWelcomeAction), sender: "bot" }]);
    }
  }, [t, messages.length, handleWelcomeAction]);

  useEffect(() => {
    const openChat = () => setIsOpen(true);
    window.addEventListener("open-chat-widget", openChat);
    return () => window.removeEventListener("open-chat-widget", openChat);
  }, []);

  // AI durumunu kontrol et
  useEffect(() => {
    const checkAIStatus = async () => {
      try {
        console.log("🔍 Chat Widget Mobile: Checking AI status...");
        
        // AI status kontrolü için authentication gerekmiyor artık
        const status = await aiChatService.checkAIStatus();
        console.log("📊 Chat Widget Mobile: AI status received:", status);
        setIsAIAvailable(status);
      } catch (error) {
        console.error("❌ Chat Widget Mobile: AI status check failed:", error);
        setIsAIAvailable(false);
      }
    };

    // Chat açıldığında AI durumunu kontrol et
    if (isOpen) {
      checkAIStatus();
    }
  }, [isOpen]);

  const handleLiveSupport = () => {
    setIsOpen(false);
    router.push("/support");
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      const userMessage = {
        id: Date.now(),
        message: message,
        sender: "user" as const,
      };

      setMessages((prev) => [...prev, userMessage]);
      const currentMessage = message;
      setMessage("");

      // Özel komutları kontrol et
      if (currentMessage.toLowerCase().includes("canlı destek")) {
        const liveSupportMessage = {
          id: Date.now() + 1,
          message: t("liveSupportMessage"),
          sender: "system" as const,
          type: "live-support" as const,
        };
        setMessages((prev) => [...prev, liveSupportMessage]);
        return;
      } 
      
      if (currentMessage.toLowerCase().includes("anamenu")) {
        const reservationMessage = {
          id: Date.now() + 1,
          message: welcomeMessages(t, handleWelcomeAction),
          sender: "bot" as const,
        };
        setMessages((prev) => [...prev, reservationMessage]);
        return;
      }

      // Loading mesajı ekle
    const loadingMessage = {
      id: Date.now() + 1,
      message: "...",
      sender: "bot" as const,
      isLoading: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      let botResponseText: string;
      let ticketCreated = false;
      let supportId: string | undefined;

      // Token kontrolü
      const token = localStorage.getItem("access_token");
      
      if (isAIAvailable && token) {
        // AI ile sohbet et
        console.log("🤖 Chat Widget Mobile: Sending message to AI...");
        const aiResponse = await aiChatService.sendMessage(
          currentMessage,
          conversationHistory
        );
        
        console.log("✅ Chat Widget Mobile: AI response received:", aiResponse);
        
        botResponseText = aiResponse.response;
        ticketCreated = aiResponse.ticketCreated;
        supportId = aiResponse.supportId;

        // Konuşma geçmişini güncelle
        setConversationHistory(prev => [
          ...prev,
          { role: "user", content: currentMessage },
          { role: "assistant", content: aiResponse.response }
        ]);
      } else {
        // AI kullanılamıyorsa veya giriş yapılmamışsa fallback mesajı kullan
        console.log("⚠️ Chat Widget Mobile: AI not available or not authenticated, using fallback");
        if (!token) {
          botResponseText = "Merhaba! AI asistan özelliklerini kullanabilmek için lütfen giriş yapın. Genel sorularınız için size yardımcı olmaya devam edebilirim.";
        } else {
          botResponseText = aiChatService.getFallbackMessage(currentMessage);
        }
      }

      // Loading mesajını gerçek yanıtla değiştir
      setMessages((prev) => 
        prev.map((msg) => 
          msg.isLoading 
            ? { 
                ...msg, 
                message: botResponseText, 
                isLoading: false,
                type: ticketCreated ? "ai-response" as const : undefined
              }
            : msg
        )
      );

      // Eğer ticket oluşturulduysa bilgilendirme mesajı ekle
      if (ticketCreated && supportId) {
        const ticketMessage = {
          id: Date.now() + 2,
          message: `🎫 Destek talebi oluşturuldu (ID: ${supportId}). Bir temsilci en kısa sürede size yardımcı olacak.`,
          sender: "system" as const,
          type: "live-support" as const,
        };
        setMessages((prev) => [...prev, ticketMessage]);
      }

    } catch (error) {
      console.error("AI chat error:", error);
      
      // Hata durumunda loading mesajını hata mesajıyla değiştir
      setMessages((prev) => 
        prev.map((msg) => 
          msg.isLoading 
            ? { 
                ...msg, 
                message: "Üzgünüm, şu anda size yardımcı olamıyorum. Lütfen daha sonra tekrar deneyin veya canlı destek ile iletişime geçin.", 
                isLoading: false 
              }
            : msg
        )
      );
    }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
        <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full shadow-lg p-0 cursor-pointer dark:bg-gray-200 dark:hover:bg-gray-300 border-2 border-green-200 hover:border-green-300 dark:border-green-200 dark:hover:border-green-300"
            size="lg"
          >
            <Image src="/images/chatbot.png" alt="Ai Chatbot" width={50} height={50} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-full w-full p-0 flex flex-col bg-white dark:bg-gray-900"
        >
          {/* Header - Görünürlük sorunu çözüldü */}
          <div className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0 z-10">
            <div className="px-4 py-3 flex items-center justify-between">
              <SheetTitle className="font-semibold text-gray-900 dark:text-white text-base">
                {t("assistantTitle")}
              </SheetTitle>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50 dark:bg-gray-800 scrollbar-hide">
            <div className="flex flex-col gap-3 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {(msg.sender === "bot" ||
                    (msg.sender === "system" &&
                      msg.type === "live-support")) && (
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <AvatarImage src="/images/logo3.png" alt="Rotaly Logo" />
                    </Avatar>
                  )}
                  <div className="flex flex-col">
                    <div
                      className={`max-w-[100%] p-2 rounded-lg text-[12px] ${
                        msg.sender === "user"
                          ? "bg-blue-500 dark:bg-blue-500 text-white rounded-br-sm"
                          : msg.sender === "system"
                          ? "bg-yellow-50 text-gray-800 rounded-bl-sm border border-yellow-200"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {typeof msg.message === 'string' ? (
                        <ChatMessage 
                          message={msg.message} 
                          isLoading={msg.isLoading} 
                        />
                      ) : (
                        msg.isLoading ? (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        ) : (
                          msg.message
                        )
                      )}
                      {msg.sender === "system" &&
                        msg.type === "live-support" && (
                          <div className="mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full h-8 text-xs bg-blue-50 hover:bg-blue-800 text-black hover:text-black border-blue-200 transition-all duration-300 cursor-pointer"
                              onClick={handleLiveSupport}
                            >
                              <MessageCircleIcon className="w-3 h-3 mr-1" />
                              {t("liveSupport")}
                            </Button>
                          </div>
                        )}
                    </div>
                  </div>
                  {msg.sender === "user" && (
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <div className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center">
                        <UserIcon className="w-3 h-3 text-white" />
                      </div>
                    </Avatar>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Footer - Görünürlük sorunu çözüldü */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex-shrink-0 bg-white dark:bg-gray-900 z-10">
            {/* AI Status Indicator */}
            <div className="flex items-center gap-1 mb-2 text-xs text-gray-500">
              {(() => {
                const token = localStorage.getItem("access_token");
                if (!token) {
                  return (
                    <>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      Giriş Gerekli
                    </>
                  );
                }
                return (
                  <>
                    <div className={`w-2 h-2 rounded-full ${isAIAvailable ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    {isAIAvailable ? 'AI Asistan Aktif' : 'AI Asistan Çevrimdışı'}
                  </>
                );
              })()}
            </div>
            
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder={t("inputPlaceholder")}
                className="flex-1 h-10 text-sm border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                size="sm"
                className="h-10 px-3 bg-blue-500 hover:bg-blue-600 text-white"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <SendIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

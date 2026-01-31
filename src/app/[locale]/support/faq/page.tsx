import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  Search,
  Shield,
  CreditCard,
  Calendar,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EmailDialog from "@/components/support/email-dialog";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular - Rotaly",
  description:
    "Rotaly otel rezervasyon sistemi hakkında sıkça sorulan sorular ve cevapları",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <Image
                src="/images/logo3.PNG"
                alt="Rotaly Logo"
                width={60}
                height={60}
                className="rounded-lg shadow-lg sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-blue-500 rounded-full p-1.5 sm:p-2">
                <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Rotaly otel rezervasyon sistemi hakkında merak ettiğiniz her şeyi
            burada bulabilirsiniz.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder="Sorunuzu yazın..."
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-sm sm:text-base"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href="/privacy">
              <CardContent className="p-4 sm:p-6 text-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Güvenlik
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                  Ödeme ve veri güvenliği
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-2 sm:mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                Ödeme
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                Ödeme yöntemleri ve faturalar
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href="/categories/hotel">
              <CardContent className="p-4 sm:p-6 text-center">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Rezervasyon
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                  Rezervasyon işlemleri
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href="/support/live-chat">
              <CardContent className="p-4 sm:p-6 text-center">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Canlı Destek
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
                  Canlı Destek Ekibine Bağlanın
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* FAQ Accordion */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Genel Sorular
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              En çok sorulan sorular ve detaylı cevapları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs sm:text-sm"
                    >
                      Rezervasyon
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Rezervasyonumu nasıl iptal edebilirim?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    Rezervasyonunuzu iptal etmek için hesabınıza giriş yapın ve
                    Rezervasyonlarım bölümünden ilgili rezervasyonu seçin. İptal
                    işlemi için otel politikalarına bağlı olarak belirli süreler
                    geçerlidir. Detaylı bilgi için müşteri hizmetlerimizle
                    iletişime geçebilirsiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs sm:text-sm"
                    >
                      Ödeme
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Hangi ödeme yöntemlerini kabul ediyorsunuz?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    Kredi kartı, banka kartı, PayPal ve banka havalesi gibi
                    güvenli ödeme yöntemlerini kabul ediyoruz. Tüm ödeme
                    işlemleriniz SSL şifreleme ile korunmaktadır. Ödeme
                    bilgileriniz asla üçüncü taraflarla paylaşılmaz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs sm:text-sm"
                    >
                      Değişiklik
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Rezervasyon tarihlerimi değiştirebilir miyim?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    Evet, rezervasyon tarihlerinizi değiştirebilirsiniz. Bu
                    işlem için otel müsaitlik durumuna ve iptal politikalarına
                    bağlıdır. Değişiklik talebinizi en az 24 saat önceden
                    yapmanızı öneririz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs sm:text-sm"
                    >
                      Destek
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Müşteri hizmetlerine nasıl ulaşabilirim?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    7/24 müşteri hizmetlerimiz size yardımcı olmaya hazır. Canlı
                    sohbet, telefon (0850 XXX XX XX) veya e-posta
                    (destek@rotaly.com) yoluyla bizimle iletişime
                    geçebilirsiniz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs sm:text-sm"
                    >
                      Güvenlik
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Kişisel bilgilerim güvende mi?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    Kişisel bilgilerinizin güvenliği bizim için çok önemli. Tüm
                    verileriniz SSL şifreleme ile korunur ve KVKK uyumlu olarak
                    saklanır. Bilgileriniz asla üçüncü taraflarla paylaşılmaz.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs sm:text-sm"
                    >
                      Fiyat
                    </Badge>
                    <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      Fiyatlara vergiler dahil mi?
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pt-3 sm:pt-4 text-sm sm:text-base">
                  <p>
                    Sitemizde gösterilen fiyatlar genellikle vergiler dahil
                    değildir. Final fiyatı rezervasyon sırasında detaylı olarak
                    gösterilir. Konaklama vergisi ve diğer ek ücretler otel
                    politikalarına göre değişebilir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  Hala sorunuz mu var?
                </h2>
                <p className="text-sm sm:text-base dark:text-blue-100">
                  Müşteri hizmetlerimiz size yardımcı olmaya hazır
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Telefon */}
                <Card className="text-center bg-card shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 dark:text-blue-200" />
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Telefon</h3>
                    <p className="dark:text-blue-100 text-sm sm:text-base">0850 XXX XX XX</p>
                  </CardContent>
                </Card>

                {/* E-posta */}
                <Card className="text-center bg-card shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 dark:text-blue-200" />
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">E-posta</h3>
                    <EmailDialog />
                  </CardContent>
                </Card>

                {/* Çalışma Saatleri */}
                <Card className="text-center bg-card shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <Clock className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 dark:text-blue-200" />
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Çalışma Saatleri</h3>
                    <Dialog>
                      <DialogTrigger className="dark:text-blue-100 cursor-pointer">
                        <p className="hover:underline hover:text-blue-500 transition-all duration-300 text-sm sm:text-base">
                          7/24 Hizmet
                        </p>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Çalışma Saatlerimiz</DialogTitle>
                          <DialogDescription>
                            Çalışma saatlerimiz 7/24&apos;dür.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
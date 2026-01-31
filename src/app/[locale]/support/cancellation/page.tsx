import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  XCircle, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Phone, 
  Mail, 
  FileText,
  ArrowRight,
  RefreshCw,
  CreditCard
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "İptal ve Değişim - Rotaly",
  description: "Rotaly otel rezervasyon iptal ve değişim politikaları",
};

export default function CancellationPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="text-center mb-8 sm:mb-12 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <Image
                  src="/images/logo3.png"
                  alt="Rotaly Logo"
                  width={60}
                  height={60}
                  className="rounded-lg shadow-lg sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 rounded-full p-1.5 sm:p-2">
                  <XCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              İptal ve Değişim Politikaları
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Rezervasyonunuzu iptal etmek veya değiştirmek istiyorsanız, aşağıdaki politikalarımızı 
              inceleyebilirsiniz. Size en uygun seçeneği bulmanıza yardımcı oluyoruz.
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <XCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">İptal Et</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Rezervasyonunuzu iptal etmek için tıklayın
              </p>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-sm sm:text-base">
                İptal Et
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <RefreshCw className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Değiştir</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Tarih veya otel bilgilerinizi değiştirin
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-sm sm:text-base">
                Değiştir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6 text-center">
              <Phone className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Destek</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                Müşteri hizmetlerimizle iletişime geçin
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-sm sm:text-base">
                Arama Yap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cancellation Policies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Free Cancellation */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
                <div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Ücretsiz İptal
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Belirli süreler içinde ücretsiz iptal
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  24 saat öncesine kadar ücretsiz iptal
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Tam iade garantisi
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Anında işlem onayı
                </span>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 w-fit text-xs sm:text-sm">
                Önerilen
              </Badge>
            </CardContent>
          </Card>

          {/* Partial Refund */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                <div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Kısmi İade
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Belirli koşullarda kısmi iade
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  12-24 saat arası %50 iade
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Kısmi iade işlemi
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  3-5 iş günü içinde iade
                </span>
              </div>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 w-fit text-xs sm:text-sm">
                Koşullu
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Policies */}
        <Card className="shadow-lg mb-8 sm:mb-12">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Detaylı İptal Politikaları
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Farklı otel türleri ve rezervasyon koşulları için iptal politikaları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-6">
              {/* Hotel Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Image src="/images/opportunity1.jpg" alt="Otel" width={20} height={20} className="rounded mr-2 sm:w-6 sm:h-6" />
                    Oteller
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>24+ saat önce:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">%100 İade</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>12-24 saat arası:</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">%50 İade</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>12 saatten az:</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">İade Yok</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Image src="/images/opportunity2.jpg" alt="Villa" width={20} height={20} className="rounded mr-2 sm:w-6 sm:h-6" />
                    Villalar
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>48+ saat önce:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">%100 İade</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>24-48 saat arası:</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">%75 İade</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>24 saatten az:</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">İade Yok</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Conditions */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2" />
                  Özel Koşullar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <div className="space-y-2">
                    <p>• Sezonluk oteller için farklı politikalar uygulanabilir</p>
                    <p>• Promosyonlu fiyatlar iade edilemeyebilir</p>
                    <p>• Grup rezervasyonları için özel koşullar</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Doğal afet durumlarında tam iade</p>
                    <p>• Sağlık sorunları için doktor raporu gerekli</p>
                    <p>• İş seyahati iptalleri için şirket onayı</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Policies */}
        <Card className="shadow-lg mb-8 sm:mb-12">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Değişim Politikaları
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Rezervasyon tarihlerinizi veya otel bilgilerinizi değiştirme koşulları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Tarih Değişikliği</h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                    <span>24+ saat önce ücretsiz değişiklik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                    <span>12-24 saat arası ücretli değişiklik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                    <span>12 saatten az değişiklik yok</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Otel Değişikliği</h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                    <span>Aynı tarih için ücretsiz değişiklik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                    <span>Fiyat farkı varsa ek ücret</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Info className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                    <span>Müsaitlik durumuna bağlı</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-8 sm:mb-12">
          <Info className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm sm:text-base">
            <strong>Önemli:</strong> İptal ve değişim işlemleriniz için rezervasyon numaranızı 
            hazır bulundurun. Müşteri hizmetlerimiz size en hızlı şekilde yardımcı olacaktır.
          </AlertDescription>
        </Alert>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12">
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Yardıma mı ihtiyacınız var?</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  İptal veya değişim işlemleriniz için bizimle iletişime geçin
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <Phone className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-blue-500" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Telefon</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">0850 XXX XX XX</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">7/24 Hizmet</p>
                </div>
                
                <div className="text-center">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-blue-500" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">E-posta</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">iptal@rotaly.com</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">24 saat içinde yanıt</p>
                </div>
                
                <div className="text-center">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-blue-500" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Canlı Destek</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Anında Yardım</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sohbet başlatın</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  FileText,
  Shield,
  Users,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Gavel,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Şartlar ve Koşullar - Rotaly",
  description: "Rotaly kullanım şartları ve koşulları",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="text-center mb-8 sm:mb-12 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <Image
                  src="/images/logo3.PNG"
                  alt="Rotaly Logo"
                  width={60}
                  height={60}
                  className="rounded-lg shadow-lg sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-purple-500 rounded-full p-1.5 sm:p-2">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              Şartlar ve Koşullar
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Rotaly platformunu kullanarak aşağıdaki şartları ve koşulları kabul
              etmiş sayılırsınız. Bu belge, hizmetlerimizi kullanırken uymanız
              gereken kuralları içerir.
            </p>
            <div className="mt-4 sm:mt-6">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                <Gavel className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Yasal Uyumlu
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <Alert className="mb-6 sm:mb-8 shadow-lg">
          <Calendar className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm sm:text-base">
            <strong>Son Güncelleme:</strong> 27 Temmuz 2025. Bu şartlar düzenli
            olarak güncellenir.
          </AlertDescription>
        </Alert>

        {/* General Terms */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Genel Şartlar
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Platform kullanımı için temel kurallar ve koşullar
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">
                  Hizmet Kapsamı
                </h3>
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                  Rotaly, otel rezervasyonu, konaklama hizmetleri ve seyahat
                  planlaması konularında aracılık hizmeti sunar. Platformumuz
                  üzerinden yapılan rezervasyonlar, ilgili otellerin politikalarına
                  tabidir.
                </p>
              </div>

              <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm sm:text-base">
                  Kullanım Koşulları
                </h3>
                <p className="text-xs sm:text-sm text-green-800 dark:text-green-200">
                  Platformumuzu kullanırken yasalara uygun davranmak, diğer
                  kullanıcıların haklarına saygı göstermek ve hizmet şartlarımıza
                  uymak zorunludur.
                </p>
              </div>

              <div className="p-3 sm:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 text-sm sm:text-base">
                  Hesap Güvenliği
                </h3>
                <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-200">
                  Hesap bilgilerinizi güvenli tutmak sizin sorumluluğunuzdadır.
                  Şüpheli aktiviteler durumunda hemen bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reservation Terms */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Rezervasyon Şartları
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Rezervasyon yaparken uymanız gereken kurallar
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Rezervasyon Onayı</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Rezervasyonlarınız e-posta ile onaylanır ve detayları size gönderilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Ödeme Koşulları</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Ödeme bilgileriniz güvenli şekilde şifrelenir ve saklanır.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">İptal Politikası</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      İptal koşulları otel politikalarına göre değişiklik gösterir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Değişiklik Kuralları</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Rezervasyon değişiklikleri için belirli süreler geçerlidir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Gizlilik ve Güvenlik
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Kişisel verilerinizin korunması ve güvenliği
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Veri Koruma</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Kişisel verileriniz KVKK uyumlu şekilde işlenir ve korunur.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">SSL Şifreleme</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Tüm veri transferleri SSL şifreleme ile güvenli şekilde yapılır.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Üçüncü Taraf Paylaşımı</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Verileriniz izniniz olmadan üçüncü taraflarla paylaşılmaz.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Kullanıcı Sorumlulukları
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Platform kullanırken uymanız gereken kurallar
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Doğru ve güncel bilgi sağlamak
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Platform kurallarına uymak
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Diğer kullanıcıların haklarına saygı göstermek
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Hesap güvenliğini sağlamak
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  İletişim Bilgileri
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Sorularınız için bizimle iletişime geçin
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
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
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">hukuk@rotaly.com</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">24 saat içinde yanıt</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-blue-500" />
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Adres</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">İstanbul, Türkiye</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Merkez Ofis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

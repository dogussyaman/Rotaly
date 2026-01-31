import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Rotaly",
  description: "Rotaly gizlilik politikası ve kişisel veri koruma ilkeleri",
};

export default function PrivacyPage() {
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
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 rounded-full p-1.5 sm:p-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              Gizlilik Politikası
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Kişisel verilerinizin güvenliği bizim için çok önemli. Bu politika, verilerinizin 
              nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>
            <div className="mt-4 sm:mt-6">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                KVKK Uyumlu
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <Alert className="mb-6 sm:mb-8 shadow-lg">
          <Calendar className="h-4 w-4 text-blue-500" />
          <AlertDescription className="text-blue-800 dark:text-blue-200 text-sm sm:text-base">
            <strong>Son Güncelleme:</strong> 15 Ocak 2024. Bu politika düzenli olarak güncellenir.
          </AlertDescription>
        </Alert>

        {/* Data Collection */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Database className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Topladığımız Veriler
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Hizmet kalitemizi artırmak için topladığımız veri türleri
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2" />
                  Kişisel Bilgiler
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Ad, soyad ve iletişim bilgileri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Doğum tarihi ve kimlik bilgileri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Ödeme bilgileri (şifrelenmiş)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Rezervasyon geçmişi
                  </li>
                </ul>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" />
                  Kullanım Verileri
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Site kullanım istatistikleri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Arama geçmişi ve tercihler
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    Cihaz bilgileri
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                    IP adresi ve konum verileri
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Verilerin Kullanımı
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Topladığımız verileri nasıl kullandığımız
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">
                  Hizmet Sağlama
                </h3>
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                  Rezervasyon işlemlerinizi gerçekleştirmek, hesabınızı yönetmek ve 
                  müşteri hizmetleri sunmak için verilerinizi kullanırız.
                </p>
              </div>

              <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm sm:text-base">
                  Kişiselleştirme
                </h3>
                <p className="text-xs sm:text-sm text-green-800 dark:text-green-200">
                  Size özel öneriler sunmak ve kullanıcı deneyimini iyileştirmek için 
                  tercihlerinizi analiz ederiz.
                </p>
              </div>

              <div className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm sm:text-base">
                  İletişim
                </h3>
                <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-200">
                  Rezervasyon onayları, güncellemeler ve önemli bilgilendirmeler için 
                  sizinle iletişime geçeriz.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Veri Koruma
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Verilerinizi nasıl koruduğumuz
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">SSL Şifreleme</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Tüm veri transferleri 256-bit SSL şifreleme ile korunur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Güvenli Sunucular</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Verileriniz ISO 27001 sertifikalı sunucularda saklanır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">KVKK Uyumluluğu</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Kişisel Verilerin Korunması Kanunu&apos;na tam uyum.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Düzenli Denetimler</h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      Güvenlik sistemlerimiz sürekli test edilir ve güncellenir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
              <div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Kullanıcı Hakları
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  KVKK kapsamında sahip olduğunuz haklar
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Verilerinize erişim hakkı
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Verilerinizi düzeltme hakkı
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Verilerinizi silme hakkı
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  İşlemeye itiraz etme hakkı
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
                  Gizlilik konularında bizimle iletişime geçin
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
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">gizlilik@rotaly.com</p>
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
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Globe,
  Award,
  Shield,
  Heart,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda - Rotaly",
  description:
    "Rotaly otel rezervasyon sistemi hakkında detaylı bilgi ve misyonumuz",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Card className="text-center mb-8 sm:mb-12 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <Image
                  src="/images/logo3.PNG"
                  alt="Rotaly Logo"
                  width={80}
                  height={80}
                  className="rounded-lg shadow-lg sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-blue-500 rounded-full p-1.5 sm:p-2">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Rotaly Hakkında
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              2020 yılından bu yana Türkiye&apos;nin önde gelen otel rezervasyon
              platformlarından biri olarak, misafirlerimize en iyi konaklama
              deneyimini sunmaya devam ediyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                1M+ Mutlu Misafir
              </Badge>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                50+ Şehir
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                1000+ Otel
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Misyonumuz
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Misafirlerimize en uygun fiyatlarla, en kaliteli konaklama
                seçeneklerini sunarak, unutulmaz tatil deneyimleri yaşatmak.
                Teknoloji ve müşteri memnuniyetini birleştirerek, seyahat
                endüstrisinde güvenilir bir partner olmak.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    99%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Müşteri Memnuniyeti
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Destek Hizmeti
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Vizyonumuz
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Türkiye&apos;nin en güvenilir ve kullanıcı dostu otel
                rezervasyon platformu olmak. Teknolojik yeniliklerle seyahat
                deneyimini kolaylaştırmak ve müşteri memnuniyetinde sektör
                lideri olmak.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                <div className="text-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                    2025
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Hedef Yıl
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Şehir
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card className="mb-8 sm:mb-12 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
              Değerlerimiz
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
              Bizi özel kılan temel değerlerimiz
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  Güvenlik
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Verileriniz güvende, ödemeleriniz güvenli
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Star className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  Kalite
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  En kaliteli oteller, en iyi hizmet
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  Müşteri Odaklı
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Müşteri memnuniyeti önceliğimiz
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  İnovasyon
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Sürekli gelişim ve yenilik
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="mb-8 sm:mb-12 shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
              Rakamlarla Rotaly
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
              Başarılarımızın sayısal göstergeleri
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                  1M+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Mutlu Misafir
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Şehir
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Otel
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">
                  99%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Memnuniyet
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center">
              Ekibimiz
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
              Deneyimli ve uzman kadromuz
            </p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                  Müşteri Hizmetleri
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  7/24 destek ekibi
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                  Kalite Kontrol
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Otel denetim ekibi
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                  Teknoloji
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Yazılım geliştirme ekibi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

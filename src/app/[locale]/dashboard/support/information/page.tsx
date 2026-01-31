"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Info,
  Clock,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Users,
  Settings,
} from "lucide-react";

export default function InformationPage() {
  const t = useTranslations("SupportInformation");

  const supportCategories = [
    {
      title: t("technicalSupport"),
      description: t("technicalSupportDesc"),
      icon: Settings,
      color: "bg-blue-500",
      responseTime: "2-4 saat",
    },
    {
      title: t("reservationSupport"),
      description: t("reservationSupportDesc"),
      icon: FileText,
      color: "bg-green-500",
      responseTime: "1-2 saat",
    },
    {
      title: t("paymentSupport"),
      description: t("paymentSupportDesc"),
      icon: Shield,
      color: "bg-purple-500",
      responseTime: "1-3 saat",
    },
    {
      title: t("generalSupport"),
      description: t("generalSupportDesc"),
      icon: HelpCircle,
      color: "bg-orange-500",
      responseTime: "4-6 saat",
    },
  ];

  const supportRules = [
    {
      title: t("responseTimesTitle"),
      description: t("responseTimesText"),
      icon: Clock,
    },
    {
      title: t("requiredInformation"),
      description: t("requiredInformationDesc"),
      icon: Info,
    },
    {
      title: t("contactChannels"),
      description: t("contactChannelsDesc"),
      icon: MessageCircle,
    },
    {
      title: "Gizlilik",
      description:
        "Tüm destek talepleriniz gizlilik politikamız kapsamında korunur.",
      icon: Shield,
    },
  ];

  const contactInfo = [
    {
      title: "Canlı Destek",
      value: "7/24 Aktif",
      icon: MessageCircle,
      color: "text-green-600",
    },
    {
      title: "E-posta",
      value: "destek@rotaly.xyz",
      icon: Mail,
      color: "text-blue-600",
    },
    {
      title: "Telefon",
      value: "+90 212 XXX XX XX",
      icon: Phone,
      color: "text-purple-600",
    },
  ];

  const stats = [
    {
      title: "İlk Yanıt Süresi",
      value: "1s 45dk",
      sub: "Son 30 gün",
      icon: Clock,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      title: "Ortalama Çözüm",
      value: "6s 20dk",
      sub: "Son 30 gün",
      icon: CheckCircle,
      color:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
    },
    {
      title: "SLA Karşılama",
      value: "%96",
      sub: "Hedef %95",
      icon: Shield,
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
    },
    {
      title: "Memnuniyet",
      value: "4.7/5",
      sub: "1.2K oy",
      icon: Users,
      color:
        "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
    },
  ];

  const faqs = [
    {
      q: "Destek talebi nasıl oluşturulur?",
      a: "Dashboard > Support > Canlı Destek veya Bilgilendirme sayfalarındaki yönlendirmeleri izleyerek talep oluşturabilirsiniz.",
    },
    {
      q: "SLA nedir ve nasıl ölçülür?",
      a: "SLA, hedeflenen yanıt/çözüm süreleridir. Kategori bazlı hedeflerimiz karşılandığında SLA karşılama artar.",
    },
    {
      q: "Belgeleri nasıl eklerim?",
      a: "Taleplere dosya/ek yükleme özelliği üzerinden ekran görüntüleri ve belgeleri ekleyebilirsiniz.",
    },
    {
      q: "Talebim kapatıldı, yeniden açabilir miyim?",
      a: "Kapatılan talepler 7 gün içinde yeniden açılabilir, ardından yeni talep oluşturmanız gerekir.",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10" />
          <div className="relative px-6 py-10 md:px-10 md:py-14">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {t("title")}
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <Button
                  onClick={() =>
                    (window.location.href = "/dashboard/support/tickets")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />{" "}
                  {t("startLiveSupport")}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/support/faq")}
                >
                  <HelpCircle className="w-5 h-5 mr-2" />{" "}
                  {t("frequentlyAskedQuestions")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const IconCmp = s.icon;
            return (
              <Card
                key={i}
                className="shadow-sm border-0 bg-white dark:bg-gray-900"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${s.color}`}>
                    <IconCmp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {s.title}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {s.sub}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* İletişim Bilgileri */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Users className="w-6 h-6 text-blue-600" />
              {t("contactInformation")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <IconComponent className={`w-8 h-8 ${contact.color}`} />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* SLA (Hizmet Seviyesi) */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Shield className="w-6 h-6 text-purple-600" /> Hizmet Seviyesi
              (SLA)
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Kategorilere göre hedeflenen ilk yanıt ve çözüm süreleri.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Teknik Destek",
                  first: "2-4 saat",
                  resolve: "24 saat",
                },
                { name: "Rezervasyon", first: "1-2 saat", resolve: "12 saat" },
                { name: "Ödeme", first: "1-3 saat", resolve: "12 saat" },
                { name: "Genel", first: "4-6 saat", resolve: "48 saat" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {row.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Hedeflenen süreler
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        İlk yanıt:{" "}
                        <span className="font-medium">{row.first}</span>
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Çözüm:{" "}
                        <span className="font-medium">{row.resolve}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Destek Kategorileri */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <FileText className="w-6 h-6 text-green-600" />
              Destek Kategorileri
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Sorununuzun kategorisini seçerek daha hızlı destek alabilirsiniz.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={index}
                    className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${category.color} text-white`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Yanıt süresi: {category.responseTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Destek Kuralları */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Destek Kuralları ve Rehberler
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Daha hızlı ve etkili destek için lütfen bu kurallara uyun.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {supportRules.map((rule, index) => {
                const IconComponent = rule.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Destek Süreci */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Destek Süreci</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                "Talep Oluştur",
                "İlk Yanıt",
                "Çözüm Üret",
                "Kapat & Geri Bildirim",
              ].map((step, i) => (
                <div key={i} className="p-5 rounded-lg border">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-3">
                    {i + 1}
                  </div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {step}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {i === 0 && "Sorunu ve detayları iletin."}
                    {i === 1 && "Temsilci ilk değerlendirmeyi yapar."}
                    {i === 2 && "Çözüm uygulanır ve doğrulanır."}
                    {i === 3 && "Talep kapatılır, memnuniyet toplanır."}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Önemli Notlar */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg border-l-4 border-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-orange-600">
              <AlertTriangle className="w-6 h-6" />
              Önemli Notlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Rezervasyon değişiklikleri:</strong> Rezervasyon
                  tarihinden 24 saat öncesine kadar ücretsiz değişiklik
                  yapabilirsiniz.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>İptal politikası:</strong> Rezervasyon tarihinden 48
                  saat öncesine kadar %100 iade garantisi.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Ödeme güvenliği:</strong> Tüm ödemeleriniz SSL
                  şifreleme ile korunmaktadır.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SSS */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Sıkça Sorulan Sorular</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Hızlı Eylemler */}
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Hızlı Eylemler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                className="w-full h-12 text-lg"
                onClick={() =>
                  (window.location.href = "/dashboard/support/tickets")
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Canlı Destek Başlat
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-lg"
                onClick={() => (window.location.href = "/support/faq")}
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                SSS&apos;yi Görüntüle
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

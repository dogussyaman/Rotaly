"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"

export default function CancellationPage() {
  const { t } = useI18n()

  const policies = [
    {
      icon: CheckCircle,
      title: "Ücretsiz İptal",
      description: "Giriş tarihinden 48 saat öncesine kadar ücretsiz iptal",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: AlertCircle,
      title: "Kısmi İade",
      description: "48-24 saat arası iptal: %50 iade",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: XCircle,
      title: "İade Yok",
      description: "24 saatten az kala iptal: İade yapılmaz",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t("footer.cancellation")}
              </h1>
              <p className="text-lg text-muted-foreground">
                İptal ve değişiklik politikalarımız hakkında bilgi edinin.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {policies.map((policy, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 ${policy.bgColor} rounded-xl flex items-center justify-center`}>
                      <policy.icon className={`w-6 h-6 ${policy.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{policy.title}</h3>
                    <p className="text-sm text-muted-foreground">{policy.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Genel İptal Politikası</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ROTALY üzerinden yapılan rezervasyonların iptal koşulları, konaklama 
                  tesisinin belirlediği politikaya göre değişiklik gösterir. Rezervasyon 
                  yapmadan önce her tesise özel iptal koşullarını incelemenizi öneririz.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Genel olarak, "Ücretsiz İptal" etiketli tesislerde giriş tarihinden 
                  48 saat öncesine kadar ücretsiz iptal yapabilirsiniz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">İptal Nasıl Yapılır?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-foreground">Hesabınıza giriş yapın</h4>
                      <p className="text-sm text-muted-foreground">ROTALY hesabınıza e-posta ve şifrenizle giriş yapın.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-foreground">Rezervasyonlarım sayfasına gidin</h4>
                      <p className="text-sm text-muted-foreground">Profil menüsünden "Rezervasyonlarım" seçeneğini tıklayın.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-foreground">İptal etmek istediğiniz rezervasyonu seçin</h4>
                      <p className="text-sm text-muted-foreground">İlgili rezervasyonun detaylarına girin.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-foreground">"Rezervasyonu İptal Et" butonuna tıklayın</h4>
                      <p className="text-sm text-muted-foreground">İptal işlemini onaylayın. İade tutarı size bildirilecektir.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Rezervasyon Değişikliği</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tarih veya kişi sayısı değişikliği yapmak istiyorsanız:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Önce mevcut rezervasyonunuzu iptal edin</li>
                  <li>Yeni tarihler için yeni bir rezervasyon oluşturun</li>
                  <li>Fiyat farkı varsa ödeme yapın veya iade alın</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Bazı tesisler doğrudan değişiklik yapmanıza izin verebilir. 
                  Bu seçenek mevcutsa rezervasyon detaylarında görüntülenir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">İade Süreci</h2>
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <Clock className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">İade Süresi: 5-10 İş Günü</h4>
                    <p className="text-sm text-muted-foreground">
                      İadeler orijinal ödeme yönteminize aktarılır. Bankanıza göre süre değişebilir.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Özel Durumlar</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aşağıdaki durumlarda standart iptal politikası dışında değerlendirme yapılabilir:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Doğal afet veya olağanüstü haller</li>
                  <li>Sağlık sorunları (rapor ile belgelenmiş)</li>
                  <li>Konaklama tesisinin iptal etmesi</li>
                  <li>Uçuş iptalleri (belge ile)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Bu durumlarda destek ekibimizle iletişime geçin.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  İptal ve değişiklik konusunda yardıma ihtiyacınız varsa:
                </p>
                <p className="text-muted-foreground">
                  E-posta: iptal@rotaly.com<br />
                  Telefon: +90 850 123 45 67<br />
                  Çalışma Saatleri: Pazartesi - Cumartesi, 09:00 - 18:00
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

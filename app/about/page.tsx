"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"
import { Building2, Users, Globe, Award } from "lucide-react"

export default function AboutPage() {
  const { t } = useI18n()

  const stats = [
    { icon: Building2, value: "10,000+", label: "Konaklama" },
    { icon: Users, value: "500,000+", label: "Mutlu Müşteri" },
    { icon: Globe, value: "81", label: "Şehir" },
    { icon: Award, value: "4.8", label: "Ortalama Puan" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {t("footer.about")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ROTALY, Türkiye'nin en kapsamlı konaklama platformudur. 
                Otellerden villalara, pansiyonlardan kamplara kadar her türlü konaklama 
                seçeneğini tek bir çatı altında topluyoruz.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Hikayemiz
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  2020 yılında kurulan ROTALY, seyahat ve konaklama sektöründe yenilikçi 
                  bir yaklaşımla yola çıktı. Amacımız, tatil planlayanların en uygun 
                  konaklama seçeneklerini kolayca bulmalarını sağlamaktır.
                </p>
                <p>
                  Platformumuz, kullanıcı deneyimini ön planda tutarak tasarlandı. 
                  Gelişmiş arama filtreleri, detaylı konaklama bilgileri ve gerçek 
                  kullanıcı yorumlarıyla doğru kararı vermenize yardımcı oluyoruz.
                </p>
                <p>
                  Türkiye'nin 81 ilindeki binlerce konaklama seçeneğiyle, 
                  hayalinizdeki tatili gerçeğe dönüştürmeniz için buradayız.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Değerlerimiz
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Güvenilirlik</h3>
                  <p className="text-muted-foreground text-sm">
                    Tüm konaklamalar doğrulanmış ve güvenilir kaynaklardan sağlanır.
                  </p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Şeffaflık</h3>
                  <p className="text-muted-foreground text-sm">
                    Gizli ücret yok. Gördüğünüz fiyat, ödeyeceğiniz fiyattır.
                  </p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Müşteri Odaklılık</h3>
                  <p className="text-muted-foreground text-sm">
                    7/24 destek ekibimizle her zaman yanınızdayız.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

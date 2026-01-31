"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"

export default function PrivacyPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              {t("footer.privacy")}
            </h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground text-lg">
                Son güncelleme: 31 Ocak 2026
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Giriş</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ROTALY olarak gizliliğinize önem veriyoruz. Bu Gizlilik Politikası, 
                  hizmetlerimizi kullanırken topladığımız bilgileri, bu bilgileri nasıl 
                  kullandığımızı ve koruduğumuzu açıklamaktadır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Toplanan Bilgiler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hizmetlerimizi kullandığınızda aşağıdaki bilgileri toplayabiliriz:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Ad, soyad ve iletişim bilgileri</li>
                  <li>E-posta adresi ve telefon numarası</li>
                  <li>Ödeme bilgileri (şifrelenmiş olarak saklanır)</li>
                  <li>Konaklama tercihleri ve arama geçmişi</li>
                  <li>Cihaz ve tarayıcı bilgileri</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Bilgilerin Kullanımı</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Topladığımız bilgileri şu amaçlarla kullanıyoruz:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Rezervasyon işlemlerinin gerçekleştirilmesi</li>
                  <li>Müşteri desteği sağlanması</li>
                  <li>Hizmetlerimizin iyileştirilmesi</li>
                  <li>Kişiselleştirilmiş öneriler sunulması</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Bilgi Güvenliği</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri 
                  uyguluyoruz. SSL şifreleme, güvenli sunucular ve düzenli güvenlik 
                  denetimleri ile verilerinizi koruyoruz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Çerezler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Web sitemiz, deneyiminizi geliştirmek için çerezler kullanmaktadır. 
                  Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak 
                  bu bazı özelliklerin çalışmamasına neden olabilir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Üçüncü Taraflar</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kişisel bilgilerinizi, hizmet sağlayıcılarımız (ödeme işlemcileri, 
                  konaklama tesisleri) dışında üçüncü taraflarla paylaşmıyoruz. 
                  Bu paylaşımlar yalnızca hizmetlerin sağlanması için gereklidir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Haklarınız</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KVKK kapsamında aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Kişisel verilerinize erişim hakkı</li>
                  <li>Düzeltme ve silme hakkı</li>
                  <li>İşlemenin kısıtlanmasını talep etme hakkı</li>
                  <li>Veri taşınabilirliği hakkı</li>
                  <li>İtiraz hakkı</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <p className="text-muted-foreground">
                  E-posta: privacy@rotaly.com<br />
                  Telefon: +90 850 123 45 67
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

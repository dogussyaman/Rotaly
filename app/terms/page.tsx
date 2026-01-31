"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"

export default function TermsPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              {t("footer.terms")}
            </h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <p className="text-muted-foreground text-lg">
                Son güncelleme: 31 Ocak 2026
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Genel Hükümler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu şartlar ve koşullar, ROTALY platformunu kullanımınızı düzenler. 
                  Platformumuzu kullanarak bu şartları kabul etmiş sayılırsınız.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Hizmet Tanımı</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ROTALY, kullanıcıların konaklama seçeneklerini aramasına, 
                  karşılaştırmasına ve rezervasyon yapmasına olanak tanıyan bir 
                  çevrimiçi platformdur. Biz bir aracıyız ve konaklama tesislerinin 
                  sahibi veya işletmecisi değiliz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Hesap Oluşturma</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Platformumuzu kullanmak için bir hesap oluşturmanız gerekebilir. 
                  Hesap bilgilerinizin doğruluğundan ve güvenliğinden siz sorumlusunuz. 
                  Hesabınızda gerçekleşen tüm aktivitelerden siz sorumlusunuz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Rezervasyon Koşulları</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Rezervasyon yaptığınızda, konaklama tesisinin belirlediği şartları 
                  kabul etmiş olursunuz. Her tesisin kendi iptal ve değişiklik 
                  politikaları bulunmaktadır. Bu politikalar rezervasyon sayfasında 
                  açıkça belirtilmektedir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Fiyatlandırma</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gösterilen fiyatlar, aksi belirtilmedikçe tüm vergileri içerir. 
                  Fiyatlar konaklama tesisleri tarafından belirlenir ve değişiklik 
                  gösterebilir. Rezervasyonunuz onaylandıktan sonra fiyat sabitlenir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Ödeme</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ödemeler güvenli ödeme sistemleri aracılığıyla işlenir. 
                  Kredi kartı, banka kartı ve diğer ödeme yöntemlerini kabul ediyoruz. 
                  Ödeme bilgileriniz şifrelenerek saklanır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. İptal ve İade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  İptal ve iade koşulları her konaklama tesisi için farklılık gösterir. 
                  Rezervasyon yapmadan önce iptal politikasını dikkatlice incelemenizi 
                  öneririz. Ücretsiz iptal seçeneği sunan tesisler ayrıca belirtilmektedir.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Kullanıcı Sorumlulukları</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kullanıcılar olarak:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Doğru ve güncel bilgi sağlamayı kabul edersiniz</li>
                  <li>Platformu yasalara uygun şekilde kullanmayı kabul edersiniz</li>
                  <li>Başkalarının haklarına saygı göstermeyi kabul edersiniz</li>
                  <li>Sahte veya yanıltıcı içerik paylaşmamayı kabul edersiniz</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Fikri Mülkiyet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ROTALY platformundaki tüm içerik, logo, tasarım ve yazılımlar 
                  telif hakkı ile korunmaktadır. İzinsiz kopyalama, dağıtma veya 
                  değiştirme yasaktır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Sorumluluk Sınırı</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ROTALY, konaklama tesislerinin hizmet kalitesinden sorumlu değildir. 
                  Tesislerle ilgili şikayetler doğrudan tesis ile çözümlenmelidir. 
                  Ancak destek ekibimiz size yardımcı olmak için hazırdır.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Değişiklikler</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bu şartları herhangi bir zamanda değiştirme hakkını saklı tutarız. 
                  Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer. 
                  Önemli değişiklikler için kayıtlı e-posta adresinize bildirim göndereceğiz.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">12. İletişim</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <p className="text-muted-foreground">
                  E-posta: legal@rotaly.com<br />
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

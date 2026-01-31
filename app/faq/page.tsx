"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      category: "Rezervasyon",
      questions: [
        {
          question: "Nasıl rezervasyon yapabilirim?",
          answer: "ROTALY üzerinden rezervasyon yapmak çok kolay. İstediğiniz konaklama yerini arayın, tarihlerinizi seçin ve 'Rezervasyon Yap' butonuna tıklayın. Ödemenizi tamamladıktan sonra rezervasyonunuz onaylanacaktır."
        },
        {
          question: "Rezervasyonumu nasıl görüntüleyebilirim?",
          answer: "Hesabınıza giriş yaptıktan sonra 'Rezervasyonlarım' sayfasından tüm geçmiş ve gelecek rezervasyonlarınızı görüntüleyebilirsiniz."
        },
        {
          question: "Rezervasyonumu değiştirebilir miyim?",
          answer: "Evet, konaklama tesisinin politikasına bağlı olarak rezervasyonunuzu değiştirebilirsiniz. 'Rezervasyonlarım' sayfasından ilgili rezervasyonu seçip değişiklik talep edebilirsiniz."
        },
      ]
    },
    {
      category: "Ödeme",
      questions: [
        {
          question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          answer: "Kredi kartı, banka kartı, havale/EFT ve bazı tesislerde kapıda ödeme seçeneklerini kabul ediyoruz. Ödeme seçenekleri rezervasyon sırasında görüntülenir."
        },
        {
          question: "Ödemem güvenli mi?",
          answer: "Evet, tüm ödemeler SSL şifreleme ile korunmaktadır. Kredi kartı bilgileriniz güvenli bir şekilde işlenir ve saklanmaz."
        },
        {
          question: "Fatura alabilir miyim?",
          answer: "Evet, rezervasyonunuz tamamlandıktan sonra e-faturanız kayıtlı e-posta adresinize gönderilir. Ayrıca hesabınızdan da faturalarınıza erişebilirsiniz."
        },
      ]
    },
    {
      category: "İptal ve İade",
      questions: [
        {
          question: "Rezervasyonumu nasıl iptal edebilirim?",
          answer: "Hesabınıza giriş yaparak 'Rezervasyonlarım' sayfasından ilgili rezervasyonu seçin ve 'İptal Et' butonuna tıklayın. İptal koşulları tesisin politikasına göre değişir."
        },
        {
          question: "Ücretsiz iptal ne demek?",
          answer: "Ücretsiz iptal seçeneği sunan tesislerde, belirtilen tarihe kadar iptal etmeniz durumunda herhangi bir kesinti yapılmaz. İptal son tarihi rezervasyon detaylarında belirtilir."
        },
        {
          question: "İade ne kadar sürede gerçekleşir?",
          answer: "İadeler genellikle 5-10 iş günü içinde orijinal ödeme yönteminize aktarılır. Bankanıza bağlı olarak bu süre değişebilir."
        },
      ]
    },
    {
      category: "Hesap",
      questions: [
        {
          question: "Nasıl hesap oluşturabilirim?",
          answer: "Ana sayfadaki 'Kayıt Ol' butonuna tıklayarak e-posta adresiniz ile veya Google hesabınızla kolayca kayıt olabilirsiniz."
        },
        {
          question: "Şifremi unuttum, ne yapmalıyım?",
          answer: "Giriş sayfasındaki 'Şifremi Unuttum' linkine tıklayın. E-posta adresinize şifre sıfırlama linki göndereceğiz."
        },
        {
          question: "Hesabımı nasıl silebilirim?",
          answer: "Hesap ayarları sayfasından 'Hesabımı Sil' seçeneğini kullanabilirsiniz. Aktif rezervasyonlarınız varsa önce bunları iptal etmeniz gerekir."
        },
      ]
    },
    {
      category: "Genel",
      questions: [
        {
          question: "ROTALY'da hangi tür konaklamalar bulunuyor?",
          answer: "ROTALY'da otel, villa, kiralık daire, bungalov, pansiyon ve kamp seçenekleri bulunmaktadır. Türkiye'nin 81 ilinde binlerce konaklama seçeneği arasından tercih yapabilirsiniz."
        },
        {
          question: "Yorumlar gerçek mi?",
          answer: "Evet, tüm yorumlar gerçek konaklamış misafirler tarafından yazılmaktadır. Yorum yazabilmek için o tesiste konaklama yapmış olmanız gerekmektedir."
        },
        {
          question: "Müşteri hizmetlerine nasıl ulaşabilirim?",
          answer: "Bize +90 850 123 45 67 numaralı telefondan veya destek@rotaly.com e-posta adresinden ulaşabilirsiniz. Ayrıca destek sayfamızdan da talep oluşturabilirsiniz."
        },
      ]
    },
  ]

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t("footer.faq")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                En sık sorulan sorulara buradan ulaşabilirsiniz.
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Soru ara..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-8">
              {filteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Aramanızla eşleşen soru bulunamadı.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

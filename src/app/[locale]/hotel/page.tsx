
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { Search, TrendingUp, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PricingSectionCards from "@/components/hotel/pricing-cards";

const HotelPage = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 md:px-0">
      {/* header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center my-10">
        <div className="flex flex-col gap-2 flex-wrap">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
            Rotaly Business Studio
          </h1>
          <p className="text-gray-500">
            Rotaly Business Studio, Rotaly Business Hotel&apos;un en yeni ve en
            modern odalarıdır. Bu odalar, iş ve konferans odaları olarak
            tasarlanmıştır.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-gray-500">
              Business Studio, Rotaly&apos;de dünyanın her yerinden misafirlere
              ulaşmaları ve ulaştıkları misafirleri kazanmaları için bağımsız
              otel sahiplerine temel araçlar ve premium özellikler sunan
              ücretsiz bir platformdur.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6 w-full">
            <Button className="w-full sm:w-auto px-8 py-3 bg-[#1E4EAE] hover:bg-[#1E4EAE]/90 text-white cursor-pointer font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Detaylı Bilgi
            </Button>
            <Button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white cursor-pointer font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Hotel Üyeliği
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={"/images/detail3.jpg"}
            alt={"hotel"}
            width={600}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* features */}
      <div className="container mx-auto my-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Neden Rotaly&apos;yi Seçmelisiniz?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milyonlarca kullanıcı tarafından tercih edilen platformumuzun avantajlarını keşfedin
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-bold text-blue-800 mb-2">
                7+ Milyon Günlük Arama
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Her gün milyonlarca kullanıcı Rotaly üzerinden ideal konaklama seçeneklerini araştırıyor ve en uygun fiyatları buluyor.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200 bg-gradient-to-br from-white to-purple-50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold text-purple-800 mb-2">
                2+ Milyar Fiyat Karşılaştırması
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Gelişmiş algoritmalarımız sayesinde binlerce otel ve konaklama tesisinin fiyatlarını anında karşılaştırarak en iyi fırsatları sunuyoruz.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-200 bg-gradient-to-br from-white to-green-50">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-green-800 mb-2">
                5+ Milyon Konaklama Seçeneği
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Oteller, villalar, apart daireler, pansiyonlar ve daha fazlası... Dünyanın her yerinden milyonlarca konaklama seçeneği.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* pricing */}
      <PricingSectionCards />

      {/* footer */}
      <div className="container mx-auto my-10" id="footer">
        <h1 className="text-2xl font-bold text-center mb-4">Otel Sahipleri İçin Sıkça Sorulan Sorular</h1>
        <p className="text-gray-600 text-center mb-8">Rotaly&apos;ye otel ekleme süreciyle ilgili merak ettiğiniz her şey</p>
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Başlangıç
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Rotaly&apos;ye nasıl otel ekleyebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Rotaly&apos;ye otel eklemek için önce Hotel Üyeliği butonuna tıklayarak kayıt olun. 
            Kayıt sonrası dashboard&apos;unuza giriş yaparak Otel Bilgileri bölümünden 
            otelinizin detaylı bilgilerini, fotoğraflarını ve oda tiplerini ekleyebilirsiniz. 
            Tüm bilgiler onaylandıktan sonra oteliniz yayına alınır.
          </p>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Fiyatlandırma
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Otel ekleme ücreti var mı?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Hayır, Rotaly&apos;ye otel ekleme tamamen ücretsizdir. Herhangi bir kayıt 
            ücreti veya yıllık abonelik bedeli alınmaz. Sadece gerçekleşen rezervasyonlardan 
            küçük bir komisyon oranı uygulanır. Bu sayede riskli yatırım yapmadan 
            rezervasyon sisteminizi kurabilirsiniz.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Yönetim
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Oda fiyatlarımı nasıl güncelleyebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Dashboard&apos;unuzdaki Oda Yönetimi bölümünden fiyatlarınızı kolayca güncelleyebilirsiniz. 
            Anlık fiyat değişiklikleri, sezonluk fiyatlandırma, özel gün fiyat ayarları ve 
            son dakika indirimleri uygulayabilirsiniz. Tüm değişiklikler anında sisteme yansır 
            ve müşteriler güncel fiyatları görür.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              Komisyon
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Rezervasyon komisyon oranınız nedir?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Rotaly komisyon oranı sadece %12&apos;dir ve bu oran sektörde en düşük oranlardan biridir. 
            Komisyon sadece gerçekleşen rezervasyonlardan alınır, iptal olan rezervasyonlardan 
            herhangi bir ücret talep edilmez. Ayrıca belirli rezervasyon sayısına ulaştığınızda 
            özel indirimli komisyon oranlarından faydalanabilirsiniz.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200">
              Medya
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Otel fotoğraflarımı nasıl yükleyebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Dashboard&apos;unuzdaki Medya Yönetimi bölümünden yüksek çözünürlüklü fotoğraflarınızı 
            kolayca yükleyebilirsiniz. Otel genel alanları, odalar, restaurant, spa gibi farklı 
            kategorilerde fotoğrafları organize edebilirsiniz. Fotoğraf sıralamasını değiştirebilir 
            ve kapak fotoğrafınızı seçebilirsiniz. JPG, PNG formatları desteklenir.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Ödeme
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Rezervasyon ödememi ne zaman alırım?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Rezervasyon ödemeleriniz, misafirin check-out işlemini tamamlamasından sonra 
            3-5 iş günü içinde hesabınıza aktarılır. Ödeme takibi için dashboard&apos;unuzda 
            detaylı raporlar bulunur. Haftalık veya aylık toplu ödeme seçenekleri de mevcuttur. 
            Tüm ödemeler güvenli bankacılık sistemi ile gerçekleştirilir.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Politika
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              İptal politikamı nasıl belirleyebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Otel Ayarları bölümünden esnek, orta katı veya katı iptal politikalarından 
            birini seçebilir ya da kendi özel politikanızı oluşturabilirsiniz. 
            Sezonluk farklı politikalar belirleyebilir, özel günler için ayrı kurallar 
            koyabilirsiniz. Politika değişiklikleri yeni rezervasyonlar için geçerli olur.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Değerlendirme
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Müşteri yorumlarını nasıl yönetebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Müşteri Değerlendirmeleri bölümünden tüm yorumları görüntüleyebilir ve 
            yorumlara yanıt verebilirsiniz. Pozitif deneyimleri ön plana çıkarabilir, 
            olumsuz yorumlara profesyonel yanıtlar vererek müşteriyle sorunları çözebilirsiniz. 
            Yorum bildirimleri e-posta ve SMS ile anında size ulaşır.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9" className="border-b border-gray-200 dark:border-gray-700">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              Takip
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Rezervasyonlarımı nasıl takip edebilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            Rezervasyon Yönetimi panelinden tüm rezervasyonlarınızı tarihe, duruma ve 
            misafir bilgilerine göre filtreleyebilirsiniz. Yaklaşan check-in&apos;ler için 
            otomatik hatırlatıcılar alırsınız. Rezervasyon detaylarını Excel&apos;e aktarabilir, 
            aylık raporlar oluşturabilir ve gelir analizlerinizi yapabilirsiniz.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-10">
        <AccordionTrigger className="text-left hover:no-underline">
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              Destek
            </Badge>
            <span className="font-medium text-gray-900 dark:text-white">
              Teknik destek nasıl alabilirim?
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-300 pt-4">
          <p>
            7/24 teknik destek ekibimiz size yardımcı olmaya hazır. Dashboard&apos;unuzdaki 
            Canlı Destek özelliği ile anında yardım alabilir, telefon (0850 XXX XX XX) 
            ile arayabilir ya da destek@rotaly.com adresine e-posta gönderebilirsiniz. 
            Ayrıca video eğitim materyalleri ve kullanım kılavuzları da mevcuttur.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
};

export default HotelPage;

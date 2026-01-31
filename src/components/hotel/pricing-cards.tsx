import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";
import { CheckIcon } from "lucide-react";


export default function PricingSectionCards() {
  return (
    <>
      {/* Pricing */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Otel Sahipleri İçin Özel Paketler
          </h2>
          <p className="mt-1 text-muted-foreground">
            İşletmenizin büyüklüğüne göre en uygun paketi seçin ve Rotaly avantajlarından yararlanın.
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        <div className="flex justify-center items-center">
          <Label htmlFor="payment-schedule" className="me-3">
            Aylık
          </Label>
          <Label htmlFor="payment-schedule" className="relative ms-3">
            Yıllık
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                  className="w-14 h-8 -me-6"
                  width={45}
                  height={25}
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="text-muted-foreground"
                  />
                </svg>
                <Badge className="mt-3 uppercase">%15&apos;e Varan İndirim</Badge>
              </span>
            </span>
          </Label>
        </div>
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:items-center">
          {/* Card */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Başlangıç Paketi</CardTitle>
              <span className="font-bold text-5xl">%12</span>
              <span className="text-sm text-muted-foreground">komisyon</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Küçük otel ve pansiyonlar için ideal başlangıç paketi
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Maksimum 20 oda</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Temel rezervasyon yönetimi</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">50 fotoğraf yükleme</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">E-posta desteği</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Temel raporlama</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Başlangıç Yap
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="border-primary flex flex-col">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                En Popüler
              </Badge>
              <CardTitle className="!mb-7">Profesyonel Paket</CardTitle>
              <span className="font-bold text-5xl">%10</span>
              <span className="text-sm text-muted-foreground">komisyon</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Orta büyüklükteki oteller ve işletmeler için profesyonel çözümler
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Maksimum 100 oda</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Gelişmiş rezervasyon yönetimi</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">200 fotoğraf yükleme</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Öncelikli destek</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Detaylı analiz raporları</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Çoklu dil desteği</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Profesyonel Ol</Button>
            </CardFooter>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card className="flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Kurumsal Paket</CardTitle>
              <span className="font-bold text-5xl">%8</span>
              <span className="text-sm text-muted-foreground">komisyon</span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Büyük otel zincirleri ve kurumsal işletmeler için premium çözümler
            </CardDescription>
            <CardContent className="flex-1">
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Sınırsız oda</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">API entegrasyonu</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Sınırsız fotoğraf</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">7/24 telefon desteği</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Özel hesap yöneticisi</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Özel raporlama dashboard&apos;u</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">White-label çözümler</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                İletişime Geç
              </Button>
            </CardFooter>
          </Card>
          {/* End Card */}
        </div>
      </div>
      {/* End Pricing */}
    </>
  );
}

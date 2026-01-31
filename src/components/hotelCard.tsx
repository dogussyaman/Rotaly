"use client";

import React, { useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Sparkles, HeartIcon, LocateIcon, CarIcon } from "lucide-react";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteAsync, selectIsFavorite } from "@/store/favorite/favorite-slice";
import { selectCurrentUser } from "@/store/auth/auth-slice";
import { AppDispatch, RootState } from "@/store/store";

interface HotelCardProps {
  item: {
    id: number | string;
    name: string;
    location: string;
    rating?: number; // Opsiyonel hale getirildi
    price?: number; // String'den number'a ve opsiyonel hale getirildi
    image?: string; // Opsiyonel hale getirildi
    cancelText?: string;
    breakfastText?: string;
    parkingText?: string;
    nights?: number;
    address?: string;
    city?: string;
    country?: string;
    type?: string;
    checkIn?: string;
    checkOut?: string;
    discountRate?: number;
    isDiscounted?: boolean;
    discountStartDate?: string;
    discountEndDate?: string;
    ownerId?: string;
    isActive?: boolean;
    images?: { id: string; url: string }[];
    // Otel özellikleri
    features?: string[]; // ['WIFI', 'POOL', 'SPA', 'PARKING'] gibi
    hotelFeatures?: string[]; // Hotel-specific features
    roomFeatures?: string[]; // Room-specific features
  };
  onToggleFavorite?: () => void; // Favoriler sayfasından kaldırınca yeniden render için
}

// Özellik adlarını Türkçe'ye çeviren fonksiyon
const getFeatureName = (feature: string): string => {
  const featureMap: { [key: string]: string } = {
    'WIFI': 'WiFi',
    'POOL': 'Havuz',
    'SPA': 'Spa',
    'PARKING': 'Otopark',
    'GYM': 'Spor Salonu',
    'RESTAURANT': 'Restoran',
    'BAR': 'Bar',
    'BREAKFAST_INCLUDED': 'Kahvaltı Dahil',
    'ROOM_SERVICE': 'Oda Servisi',
    'LAUNDRY': 'Çamaşırhane',
    'PET_FRIENDLY': 'Evcil Hayvan Dostu',
    'AIR_CONDITIONER': 'Klima',
    'TV': 'TV',
    'MINIBAR': 'Minibar',
    'SAFE_BOX': 'Kasa',
    'BALCONY': 'Balkon',
    'BATH_TUB': 'Küvet',
    'HAIR_DRYER': 'Saç Kurutma Makinesi',
  };
  return featureMap[feature] || feature;
};

const HotelCard = ({ item, onToggleFavorite }: HotelCardProps) => {
  const t = useTranslations("HotelCard");
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => selectCurrentUser(state));
  const isFavorite = useSelector(selectIsFavorite(String(item.id)));

  useEffect(() => {
    // Favori durumu artık Redux tarafından yönetiliyor, useEffect içinde localStorage'a gerek yok
    // const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    // const exists = stored.some((fav: { id: number | string }) => fav.id === item.id);
    // setIsFavorite(exists);
  }, [item.id]);

  const toggleFavorite = () => {
    if (!currentUser) {
      // Kimliği doğrulanmamış kullanıcıyı ele al, örn: giriş sayfasına yönlendir
      router.push("/login");
      return;
    }
    dispatch(toggleFavoriteAsync({
      hotelId: String(item.id),
      hotel: {
        id: String(item.id),
        name: item.name,
        location: item.location,
        address: item.address || "",
        city: item.city || "",
        country: item.country || "",
        rating: item.rating,
        checkIn: item.checkIn || "12:00",
        checkOut: item.checkOut || "14:00",
        discountRate: item.discountRate,
        isDiscounted: item.isDiscounted || false,
        discountStartDate: item.discountStartDate,
        discountEndDate: item.discountEndDate,
        type: item.type || "",
        ownerId: item.ownerId || "",
        isActive: item.isActive || true,
        images: item.images || [],
      },
      userId: currentUser.id,
    }));

    // Artık doğrudan localStorage üzerinde işlem yapmıyoruz
    // if (isFavorite) {
    //   updated = stored.filter((fav: { id: number | string }) => fav.id !== item.id);
    // } else {
    //   updated = [...stored, item];
    // }

    // localStorage.setItem("favorites", JSON.stringify(updated));
    // setIsFavorite(!isFavorite);

    // Favoriler sayfasındaysan kartı hemen sil
    if (isFavorite && onToggleFavorite) {
      onToggleFavorite();
    }
  };




  return (
    <Card
      key={item.id}
      className="bg-card border border-border rounded-2xl overflow-hidden transition-shadow duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] dark:shadow-[0_0_5px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] gap-0 pt-1 pb-2 cursor-pointer group flex flex-col h-full"
    >
      <CardHeader className="relative p-0">
        <div className="relative h-52 w-full">
          <Image
            src={item.images && item.images.length > 0 ? item.images[0].url : item.image || "/images/opportunity1.jpg"}
            alt={item.name}
            fill
            className="object-cover rounded-2xl p-1"
            priority
          />
          {/* İndirim Etiketi - Sadece indirimli otellerde göster */}
          {item.isDiscounted && item.discountRate && (
            <div className="absolute top-3 left-1">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span className="text-xs font-bold">%{item.discountRate} İndirim</span>
              </div>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite();
              }}
              className="bg-white rounded-full hover:bg-gray-100 cursor-pointer w-6 h-6"
            >
              <HeartIcon
                className={`w-4 h-4 transition-all ${
                  isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
                }`}
              />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pb-2 flex-grow">
        <h3 className="font-semibold text-foreground mb-2 text-lg leading-tight">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <LocateIcon className="w-4 h-4" />
            <span className="text-xs md:text-sm">{item.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] font-semibold text-foreground">
              {item.rating?.toFixed(1) || "N/A"}
            </span>
            <Rating defaultValue={item.rating || 0} readOnly>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton
                  key={index}
                  size={12}
                  className="text-yellow-500"
                />
              ))}
            </Rating>
            <span className="text-xs text-muted-foreground ml-1">(120)</span>
          </div>
        </div>

        {/* Otel Özellikleri */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {/* Mevcut text-based özellikler */}
          {item.cancelText && (
            <div className="flex items-center gap-1 text-xs text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 px-2 py-1 rounded-md border border-red-100 dark:border-red-800/30">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <span className="font-medium">{t("cancellationText")}</span>
            </div>
          )}
          {item.breakfastText && (
            <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-md border border-green-100 dark:border-green-800/30">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <span className="font-medium">{t("breakfastText")}</span>
            </div>
          )}
          {item.parkingText && (
            <div className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-800/30">
              <CarIcon className="w-2.5 h-2.5" />
              <span className="font-medium">{t("parkingText")}</span>
            </div>
          )}
          
          {/* Yeni features array'inden gelen özellikler - sadece ilk 3 tanesini göster */}
          {item.features && item.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded-md border border-blue-100 dark:border-blue-800/30">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <span className="font-medium">{getFeatureName(feature)}</span>
            </div>
          ))}
          
          {/* Eğer 3'ten fazla özellik varsa "+X more" göster */}
          {item.features && item.features.length > 3 && (
            <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-400 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-800/30">
              <span className="font-medium">+{item.features.length - 3} daha</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-4 flex justify-between items-center gap-2 mt-auto">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground mb-1">
            {t("nightsFor", { nights: item.nights || 1 })}
          </span>
          <div className="flex flex-col gap-1">
            {/* İndirimli fiyat gösterimi */}
            {item.isDiscounted && item.discountRate && item.price ? (
              <>
                {/* Eski fiyat - üstü çizili */}
                <span className="text-sm text-muted-foreground line-through">
                  {Math.round((item.price * (item.nights || 1)) / (1 - item.discountRate / 100)).toLocaleString()} ₺
                </span>
                {/* İndirimli fiyat - büyük ve renkli */}
                <span className="text-xl font-bold text-red-600">
                  {(item.price * (item.nights || 1)).toLocaleString()} ₺
                </span>
              </>
            ) : (
              /* Normal fiyat */
              <span className="text-xl font-bold text-blue-600">
                {((item.price || 0) * (item.nights || 1)).toLocaleString()} ₺
              </span>
            )}
          </div>
        </div>
        <Button 
          onClick={() => router.push(`/hotels/${item.id}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer max-w-[150px]"
        >
          {t("viewDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
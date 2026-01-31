import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { Car, Camera, UtensilsCrossed } from "lucide-react";
import { hotelData } from "@/data/dumy";
import { useTranslations } from "next-intl";

interface HotelSummaryProps {
  hotel: {
    id: string;
    name: string;
    location: string;
    image: string;
    rating: number;
    ratingCount: number;
    features?: {
      cancelFree: boolean;
      breakfast: boolean;
      parking: boolean;
    };
  };
  booking: {
    checkIn: string;
    checkOut: string;
    checkInTime: string;
    checkOutTime: string;
    roomType: string;
    nights: number;
    guests: number;
    basePrice: number;
    taxesAndFees: number;
    total: number;
  };
}

const HotelSummary: React.FC<HotelSummaryProps> = ({ hotel, booking }) => {
  const t = useTranslations("HotelDetail.HotelSummary");

  return (
    <div className="flex flex-col gap-2">
      {/* Hotel Bilgileri Kartı */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-card">
        <div>
          <Image
            className="rounded-md h-80 w-full object-cover"
            src={hotel.image}
            alt={hotel.name}
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-row justify-between gap-2 mt-2">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {hotel.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
              {hotel.location}
            </p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {hotel.rating}
            </p>
            <Rating defaultValue={hotelData[0].rating} readOnly>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton
                  key={index}
                  size={14}
                  className="text-yellow-500"
                />
              ))}
            </Rating>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("reviewsCount", { count: hotel.ratingCount })}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-2 flex-wrap mt-2">
          {hotel.features?.cancelFree && (
            <Button
              size="sm"
              className="bg-red-50 dark:bg-red-950 text-xs text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900 px-3 py-2 rounded-md flex items-center gap-2"
              variant="outline"
            >
              <Camera className="w-4 h-4" />
              {t("freeCancellation")}
            </Button>
          )}
          {hotel.features?.breakfast && (
            <Button
              size="sm"
              className="bg-green-50 dark:bg-green-950 text-xs text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900 px-3 py-2 rounded-md flex items-center gap-2"
              variant="outline"
            >
              <UtensilsCrossed className="w-4 h-4" />
              {t("breakfastIncluded")}
            </Button>
          )}
          {hotel.features?.parking && (
            <Button
              size="sm"
              className="bg-blue-50 dark:bg-blue-950 text-xs text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 px-3 py-2 rounded-md flex items-center gap-2"
              variant="outline"
            >
              <Car className="w-4 h-4" />
              {t("parking")}
            </Button>
          )}
        </div>
      </div>

      {/* Rezervasyon Bilgileri Kartı */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mt-4 bg-white dark:bg-card">
        {/* Rezervasyon Bilgileri Başlığı */}
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          {t("reservationInformation")}
        </h3>

        {/* Giriş - Çıkış Tarihleri */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
              {t("checkIn")}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {booking.checkIn}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("checkInTime", { time: booking.checkInTime })}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
              {t("checkOut")}
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {booking.checkOut}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("checkOutTime", { time: booking.checkOutTime })}
            </p>
          </div>
        </div>

        {/* Oda Bilgisi */}
        <div className="mb-8">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {t("roomDetails", {
              roomType: booking.roomType,
              nights: booking.nights,
              guests: booking.guests,
            })}
          </p>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-6" />

        {/* Ödeme Özeti */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {t("paymentSummary")}
          </h4>

          {/* Fiyat Detayları */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">
                {t("nights", { nights: booking.nights })}
              </span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {booking.basePrice.toLocaleString("tr-TR")} TL
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">
                {t("taxesAndServiceFee")}
              </span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {booking.taxesAndFees.toLocaleString("tr-TR")} TL
              </span>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mb-4" />

          {/* Toplam */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {t("total")}
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {booking.total.toLocaleString("tr-TR")} TL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSummary;

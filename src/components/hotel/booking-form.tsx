import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { tr } from "date-fns/locale";
import { MapPinIcon, MinusIcon, PlusIcon, StarIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface BookingFormProps {
  checkInDate: Date | undefined;
  setCheckInDate: (date: Date | undefined) => void;
  checkOutDate: Date | undefined;
  setCheckOutDate: (date: Date | undefined) => void;
  adults: number;
  setAdults: (n: number) => void;
  numberOfNights: number;
  price: number;
  hotelName: string;
  hotelLocation: string;
  hotelId: string;
}

const rating = 4.7;
const totalStars = 5;

const BookingForm: React.FC<BookingFormProps> = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  adults,
  setAdults,
  numberOfNights,
  price,
  hotelName,
  hotelLocation,
  hotelId
}) => {
  const t = useTranslations("HotelDetail.bookingForm");
  const formatSelectedDate = (date: Date | undefined) =>
    date ? format(date, "dd/MM/yyyy", { locale: tr }) : "";

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-md p-6 w-full border border-gray-200 dark:border-gray-700 transition-colors">
      {/* Başlık ve puan */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{hotelName}</h1>
        <div className="flex items-center flex-wrap gap-2 text-gray-600 dark:text-gray-300 text-sm mt-1">
          <MapPinIcon className="w-4 h-4" />
          <span className="dark:text-white">{hotelLocation}</span>
          <span className="mx-1 dark:text-white">·</span>
          <div className="flex items-center gap-1">
            <span className="font-semibold dark:text-white">{rating}</span>
            <div className="flex items-center">
              {Array.from({ length: totalStars }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300 dark:text-gray-500"
                  }`}
                  fill={i < Math.floor(rating) ? "#facc15" : "none"}
                />
              ))}
            </div>
          </div>
          <span className="text-gray-400 dark:text-gray-500">(120)</span>
        </div>
      </div>

      {/* Giriş Tarihi */}

      <div className="mb-3">
        <label className="block text-xs font-medium mb-1 text-gray-800 dark:text-gray-200">
          {t("checkIn")}
        </label>

        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded-lg bg-white dark:bg-gray-800 shadow-sm px-3 py-2 cursor-pointer border border-gray-200 dark:border-gray-700">
              <span
                className={`text-sm ${
                  checkInDate
                    ? "text-gray-700 dark:text-gray-100 opacity-80"
                    : "text-gray-400 dark:text-gray-500 opacity-50"
                }`}
              >
                {formatSelectedDate(checkInDate) || t("selectDate")}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 dark:bg-gray-900 border dark:border-gray-700">
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={setCheckInDate}
              initialFocus
              locale={tr}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Çıkış Tarihi */}
      <div className="mb-3">
        <label className="block text-xs font-medium mb-1 text-gray-800 dark:text-gray-200">
          {t("checkOut")}
        </label>

        <Popover>
          <PopoverTrigger asChild>
            <div className="rounded-lg bg-white dark:bg-gray-800 shadow-sm px-3 py-2 cursor-pointer border border-gray-200 dark:border-gray-700">
              <span
                className={`text-sm ${
                  checkOutDate
                    ? "text-gray-700 dark:text-gray-100 opacity-80"
                    : "text-gray-400 dark:text-gray-500 opacity-50"
                }`}
              >
                {formatSelectedDate(checkOutDate) || t("selectDate")}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 dark:bg-gray-900 border dark:border-gray-700">
            <Calendar
              mode="single"
              selected={checkOutDate}
              onSelect={setCheckOutDate}
              initialFocus
              locale={tr}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Kişi Sayısı */}
      <div className="mb-4">
        <label className="block text-xs font-medium mb-1 text-gray-800 dark:text-gray-200">
          {t("guests")}
        </label>
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md px-2 py-1 w-32 bg-white dark:bg-gray-800 justify-between">
          <button
            onClick={() => setAdults(Math.max(1, adults - 1))}
            type="button"
            className="p-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 bg-gray-200 dark:bg-gray-700 rounded"
          >
            <MinusIcon className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold text-black dark:text-white">
            {adults}
          </span>
          <button
            onClick={() => setAdults(adults + 1)}
            type="button"
            className="p-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 bg-gray-200 dark:bg-gray-700 rounded"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Fiyat */}
      <div className="flex items-end gap-2 mt-2 mb-4">
        <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">
          {(price * numberOfNights).toLocaleString("tr-TR")} TL
        </span>
        <span className="text-base text-gray-500 dark:text-gray-400 font-medium">
          / {numberOfNights} {t("nights")}
        </span>
      </div>

      {/* Butonlar */}

      <Link href={`/hotels/${hotelId}/booking`} className="w-full">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded-md font-semibold
        cursor-pointer
        ">
          <p className="text-sm">{t("bookNow")}</p>
        </Button>
      </Link>
      <Button
        variant="outline"
        className="w-full mt-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 font-semibold cursor-pointer"
      >
        {t("learnMore")}
      </Button>
    </div>
  );
};

export default BookingForm;

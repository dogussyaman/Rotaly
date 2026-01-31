"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useEffect, use } from "react";
import { Button } from "@/components/ui/button";
import HotelSummary from "@/components/booking/hotel-summary";
import { HotelNew } from "@/types/hotel";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import { nextStep } from "@/store/step/step-slice";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { hotelService } from "@/services";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Validation schema
const bookingSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır").max(50, "Ad en fazla 50 karakter olabilir"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır").max(50, "Soyad en fazla 50 karakter olabilir"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  country: z.string().min(2, "Ülke adı en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Telefon numarası en az 10 karakter olmalıdır").max(15, "Telefon numarası en fazla 15 karakter olabilir"),
  specialRequest: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingInformationPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default function BookingInformationPage({ params }: BookingInformationPageProps) {
  const { id, locale } = use(params);
  const dispatch = useDispatch();
  const router = useRouter();
  const t = useTranslations("HotelDetail.BookingInformationPage");
  const [hotel, setHotel] = useState<HotelNew | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      specialRequest: "",
    },
  });

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        const hotelData = await hotelService.getHotelById(id);
        setHotel(hotelData);
      } catch (error) {
        console.error('Otel yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchHotel();
    }
  }, [id]);
  
  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // Form verilerini store'a kaydet
      console.log("Booking form data:", data);
      // TODO: Store'a kaydetme işlemi
      
      // Sonraki adıma geç
      dispatch(nextStep());
      router.push(`/${locale}/hotels/${id}/booking/payment`);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Otel yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Otel bulunamadı</h1>
          <p className="text-gray-600 dark:text-gray-400">Aradığınız otel mevcut değil.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="flex flex-col gap-6">
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-card"
            >
              <div className="flex flex-row gap-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{t("nameLabel")} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("nameLabel")}
                          className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{t("surnameLabel")} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("surnameLabel")}
                          className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("emailLabel")} *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("emailLabel")}
                        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("countryLabel")} *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("countryLabel")}
                        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("phoneLabel")} *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("phoneLabel")}
                        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-800"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialRequest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("specialRequestLabel")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("specialRequestPlaceholder")}
                        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 h-24 bg-white dark:bg-gray-800"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "İşleniyor..." : t("proceedToPaymentButton")}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <HotelSummary
          hotel={{
            id: hotel.id,
            name: hotel.name,
            location: hotel.address || hotel.city || '',
            image: hotel.images && hotel.images.length > 0 ? hotel.images[0].url : '/images/detail1.jpg',
            rating: hotel.rating || 0,
            ratingCount: hotel.comments?.length || 120,
            features: {
              cancelFree: hotel.props?.some(p => p.feature === 'CANCEL_POLICY') || false,
              breakfast: hotel.props?.some(p => p.feature === 'BREAKFAST_INCLUDED') || false,
              parking: hotel.props?.some(p => p.feature === 'PARKING') || false,
            },
          }}
          booking={{
            checkIn: new Date().toLocaleDateString('tr-TR'),
            checkOut: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR'), // 4 gün sonra
            checkInTime: hotel.checkIn || "15:00",
            checkOutTime: hotel.checkOut || "11:00",
            roomType: hotel.rooms?.[0]?.name || "Standart Oda",
            guests: hotel.rooms?.[0]?.maxAdults || 2,
            nights: 4,
            basePrice: Number(hotel.rooms?.[0]?.price || 0) * 4,
            taxesAndFees: Math.round(Number(hotel.rooms?.[0]?.price || 0) * 4 * 0.18),
            total: Math.round(Number(hotel.rooms?.[0]?.price || 0) * 4 * 1.18)
          }}
        />
      </div>
    </div>
  );
}

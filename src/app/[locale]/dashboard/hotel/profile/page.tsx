"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SaveIcon, UploadIcon, XIcon } from "lucide-react";
import Image from "next/image";

interface HotelFormData {
  hotelImages: string[];
  hotelName: string;
  emailAddress: string;
  phoneNumber: string;
  taxId: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export default function HotelPage() {
  const t = useTranslations("HotelProfil");

  const form = useForm<HotelFormData>({
    defaultValues: {
      hotelImages: [
        "/images/opportunity3.jpg",
        "/images/opportunity6.jpg",
        "/images/opportunity7.jpg",
      ],
      hotelName: "Rotaly XYZ Otel",
      emailAddress: "info@rotalyxyz.com",
      phoneNumber: "+90 555 123 4567",
      taxId: "1234567890",
      country: "turkey",
      address: "Atatürk Caddesi No: 123 Konyaaltı",
      city: "Antalya",
      state: "Antalya",
      postalCode: "07070",
    },
  });

  const onSubmit = (data: HotelFormData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8">
              {/* Hotel Images */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📸</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {t("hotelImages")}
                  </h3>
                </div>
                <FormField
                  control={form.control}
                  name="hotelImages"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-4 overflow-x-auto py-2">
                        {field.value.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative w-48 h-32 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Image
                              src={img}
                              alt={`Hotel Image ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newImgs = [...field.value];
                                newImgs.splice(idx, 1);
                                field.onChange(newImgs);
                              }}
                              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 text-xs transition-colors duration-200"
                            >
                              <XIcon className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          className="w-48 h-32 text-sm flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 transition-colors duration-200 rounded-xl"
                          onClick={() => {
                            field.onChange([...field.value, "/images/hotel3.jpg"]);
                          }}
                        >
                          <UploadIcon className="w-8 h-8 mb-2 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {t("addImage")}
                          </span>
                        </Button>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🏨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {t("basicInfo")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Hotel Name */}
                  <FormField
                    control={form.control}
                    name="hotelName"
                    rules={{ required: t("errors.hotelName") }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("hotelName")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("hotelName")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="emailAddress"
                    rules={{
                      required: t("errors.emailRequired"),
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t("errors.emailInvalid"),
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("email")}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t("email")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    rules={{
                      required: t("errors.phoneRequired"),
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("phone")}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={t("phone")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Tax ID */}
                  <FormField
                    control={form.control}
                    name="taxId"
                    rules={{ required: t("errors.taxIdRequired") }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("taxId")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("taxId")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Address Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {t("addressInfo")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Country */}
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("country")}</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder={t("selectCountry")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="turkey">{t("turkey")}</SelectItem>
                              <SelectItem value="unitedStates">{t("unitedStates")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* City */}
                  <FormField
                    control={form.control}
                    name="city"
                    rules={{ required: t("errors.cityRequired") }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("city")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("city")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* State */}
                  <FormField
                    control={form.control}
                    name="state"
                    rules={{ required: t("errors.stateRequired") }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("state")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("state")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Postal Code */}
                  <FormField
                    control={form.control}
                    name="postalCode"
                    rules={{ required: t("errors.postalCodeRequired") }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("postalCode")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("postalCode")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Full Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    rules={{ required: t("errors.addressRequired") }}
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>{t("address")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("address")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-center">
                <Button type="submit" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-xl flex items-center gap-3 min-w-[200px]">
                  <SaveIcon className="w-5 h-5" />
                  {t("saveChanges")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

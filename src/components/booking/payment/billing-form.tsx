import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

interface PaymentFormData {
  expiryDate: string;
  cvv: string;
  cardNumber: string;
  address: string;
  country: string;
  phoneNumber: string;
  specialRequest: string;
  selectedCardId?: string;
  paymentMethod: 'existing' | 'new';
}

interface BillingFormProps {
  form: UseFormReturn<PaymentFormData>;
}

const BillingForm = ({ form }: BillingFormProps) => {
  const t = useTranslations("HotelDetail.PaymentForm");

  return (
    <div className="flex flex-col gap-4">
      {/* Adres */}
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t("addressLabel")}</FormLabel>
            <FormControl>
              <Input
                required
                {...field}
                placeholder={t("addressPlaceholder")}
                className="w-full"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Ülke/Bölge */}
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t("countryLabel")}</FormLabel>
            <FormControl>
              <Input
                required
                {...field}
                placeholder={t("countryPlaceholder")}
                className="w-full"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Telefon Numarası */}
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t("phoneNumberLabel")}</FormLabel>
            <FormControl>
              <Input
                required
                {...field}
                placeholder={t("phoneNumberPlaceholder")}
                className="w-full"
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Özel İstek */}
      <FormField
        control={form.control}
        name="specialRequest"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t("specialRequestLabel")}</FormLabel>
            <FormControl>
              <Textarea
                required
                {...field}
                placeholder={t("specialRequestPlaceholder")}
                className="w-full"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default BillingForm;

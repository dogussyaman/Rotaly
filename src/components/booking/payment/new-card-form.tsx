import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

interface NewCardFormProps {
  form: UseFormReturn<PaymentFormData>;
  onNewCardSelect: () => void;
}

const NewCardForm = ({ form, onNewCardSelect }: NewCardFormProps) => {
  const t = useTranslations("HotelDetail.PaymentForm");

  return (
    <AccordionItem value="new-card" className="border-0">
      <AccordionTrigger 
        className="w-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg px-4 py-3 hover:no-underline group"
        onClick={onNewCardSelect}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-medium text-gray-900 dark:text-gray-100">
                New Card
              </span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Secure
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Enter Card Details
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance pt-4">
        {/* Son Kullanma Tarihi ve CVV */}
        <div className="flex flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm">
                  {t("expiryDateLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    {...field}
                    placeholder="MM/YY"
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm">{t("cvvLabel")}</FormLabel>
                <FormControl>
                  <Input
                    required
                    {...field}
                    placeholder="CVV"
                    className="w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* Kart Numarası */}
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">{t("cardNumberLabel")}</FormLabel>
              <FormControl>
                <Input
                  required
                  {...field}
                  placeholder="Kart Numarası"
                  className="w-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </AccordionContent>
    </AccordionItem>
  );
};

export default NewCardForm;

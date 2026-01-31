import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Accordion } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { paymentService } from "@/services";
import SavedCardsList from "./saved-cards-list";
import NewCardForm from "./new-card-form";
import BillingForm from "./billing-form";

export interface PaymentFormData {
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

interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expiresAt: string | Date;
  isDefault?: boolean;
}

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  setCurrentStep?: (step: number) => void;
}

const PaymentForm = ({ onSubmit, setCurrentStep }: PaymentFormProps) => {
  const [userCards, setUserCards] = useState<PaymentCard[]>([]);
  const [loadingCards, setLoadingCards] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'existing' | 'new'>('new');
  
  const form = useForm<PaymentFormData>({
    defaultValues: {
      expiryDate: "",
      cvv: "",
      cardNumber: "",
      address: "",
      country: "",
      phoneNumber: "",
      specialRequest: "",
      paymentMethod: "new",
    },
  });
  const t = useTranslations("HotelDetail.PaymentForm");

  // Kullanıcının kayıtlı kartlarını yükle
  useEffect(() => {
    const loadUserCards = async () => {
      try {
        setLoadingCards(true);
        const cards = await paymentService.getUserPaymentCards();
        setUserCards(cards);
        
        // Eğer kayıtlı kart varsa, varsayılan olarak mevcut kartları göster
        if (cards.length > 0) {
          setSelectedPaymentMethod('existing');
          form.setValue('paymentMethod', 'existing');
          // İlk kartı seç
          const firstCard = cards[0];
          if (firstCard) {
            form.setValue('selectedCardId', firstCard.id);
          }
        } else {
          // Eğer kart yoksa yeni kart ekleme moduna geç
          setSelectedPaymentMethod('new');
          form.setValue('paymentMethod', 'new');
        }
      } catch (error) {
        console.error('Kartlar yüklenirken hata:', error);
      } finally {
        setLoadingCards(false);
      }
    };

    loadUserCards();
  }, [form]);

  const handleSubmit = (data: PaymentFormData) => {
    onSubmit({
      ...data,
      paymentMethod: selectedPaymentMethod,
    });
  };

  const handleCardSelect = (cardId: string) => {
    setSelectedPaymentMethod('existing');
    form.setValue('paymentMethod', 'existing');
    form.setValue('selectedCardId', cardId);
  };

  const handleNewCardSelect = () => {
    setSelectedPaymentMethod('new');
    form.setValue('paymentMethod', 'new');
  };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <div className="flex flex-col gap-4 py-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={userCards.length > 0 ? "my-cards" : "new-card"}
          >
            <SavedCardsList
              userCards={userCards}
              loadingCards={loadingCards}
              selectedCardId={form.watch('selectedCardId')}
              selectedPaymentMethod={selectedPaymentMethod}
              onCardSelect={handleCardSelect}
            />

            <NewCardForm
              form={form}
              onNewCardSelect={handleNewCardSelect}
            />
          </Accordion>

          <BillingForm form={form} />

          {/* Buttons */}
          <div className="flex flex-row gap-2 mt-6 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="outline"
              onClick={() => {
                // Bir önceki adıma dön
                setCurrentStep?.(1);
              }}
              type="button"
            >
              <p className="text-sm">{t("back")}</p>
            </Button>
            <Button
              type="submit"
              disabled={
                !form.watch('address') || 
                !form.watch('country') || 
                !form.watch('phoneNumber') || 
                !form.watch('specialRequest') ||
                (selectedPaymentMethod === 'new' && (!form.watch('cardNumber') || !form.watch('cvv') || !form.watch('expiryDate'))) ||
                (selectedPaymentMethod === 'existing' && !form.watch('selectedCardId'))
              }
              className="bg-[#2F6FED] text-white hover:bg-[#2F6FED]/90 transition-all duration-300 disabled:opacity-50"
            >
              <p className="text-sm">{t("completePayment")}</p>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PaymentForm;

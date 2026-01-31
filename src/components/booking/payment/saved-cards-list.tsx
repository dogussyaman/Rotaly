import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Check } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddCardDialog from "./add-card-dialog";

interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expiresAt: string | Date;
  isDefault?: boolean;
}

interface SavedCardsListProps {
  userCards: PaymentCard[];
  loadingCards: boolean;
  selectedCardId?: string;
  selectedPaymentMethod: 'existing' | 'new';
  onCardSelect: (cardId: string) => void;
}

const SavedCardsList = ({ 
  userCards, 
  loadingCards, 
  selectedCardId, 
  selectedPaymentMethod,
  onCardSelect 
}: SavedCardsListProps) => {
  return (
    <AccordionItem value="my-cards" className="border-0">
      <AccordionTrigger className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg px-4 py-3 hover:no-underline group mb-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium text-gray-900 dark:text-gray-100">
                My Cards
              </span>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {userCards.length} cards
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Add New Card
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-1 pb-4">
        {!loadingCards && (
          <>
            {/* Kayıtlı Kartlar Listesi */}
            {userCards.length > 0 && (
              <div className="space-y-3 mb-4">
                {userCards.map((card) => (
                  <div
                    key={card.id}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedCardId === card.id && selectedPaymentMethod === 'existing'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => onCardSelect(card.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono">
                          •••• •••• •••• {card.last4}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                          {card.brand}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(card.expiresAt).toLocaleDateString('tr-TR', { month: '2-digit', year: '2-digit' }).replace(/\./g, '/')}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {selectedCardId === card.id && selectedPaymentMethod === 'existing' && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Add New Card Dialog */}
            <div className={`${userCards.length > 0 ? 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700' : ''}`}>
              <AddCardDialog>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                >
                  <Plus className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Add New Card
                  </span>
                </Button>
              </AddCardDialog>
            </div>
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SavedCardsList;

import { paymentMethods } from "@/data/dumy";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { PlusIcon, CreditCard } from "lucide-react";
import AddCardDialog from "./add-card-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const PaymentMethodSelector = () => {
  const t = useTranslations("HotelDetail.PaymentMethodSelector");
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg px-4 py-3 hover:no-underline group">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {t("cardsTitle")}
                </span>
              </div>
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {t("cardCount", { count: paymentMethods.length })}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <PlusIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {t("addNewCard")}
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance pt-4">
          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-8">
              <RadioGroup
                className="flex flex-col gap-4"
                defaultValue="comfortable"
              >
                {paymentMethods.map((paymentMethod) => (
                  <div
                    key={paymentMethod.id}
                    className="flex items-center gap-3 border border-gray-200 dark:border-gray-700 rounded-md p-2"
                  >
                    <RadioGroupItem
                      value={paymentMethod.id.toString()}
                      id="r1"
                    />
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="r1" className="text-sm">
                            **** 8304
                          </Label>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Visa *{" "}
                            <a
                              href="#"
                              className="text-sm hover:border-b hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-300"
                            >
                              {t("edit")}
                            </a>
                          </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1">
                          <p className="text-sm text-[paymentMethod.cardType  === 'Visa' ? '#0742A6' : paymentMethod.cardType === 'Mastercard' ? '#f1e468' : '#000000'] dark:text-gray-400 font-bold">
                            {paymentMethod.cardType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="col-span-4 flex justify-end items-start">
              <div className="flex flex-col gap-2">
                <AddCardDialog>
                  <Button
                    variant="outline"
                    className="flex flex-col py-2 h-full"
                  >
                    <PlusIcon
                      color="blue"
                      className="w-4 h-4 border border-blue-500 rounded-sm mt-1"
                    />
                    <p className="text-sm">{t("add")}</p>
                  </Button>
                </AddCardDialog>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentMethodSelector;

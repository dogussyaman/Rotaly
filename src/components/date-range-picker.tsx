"use client";

import * as React from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
  value?: DateRange;
  onValueChange?: (dateRange: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  showType?: "checkin" | "checkout"; // Hangi tarihi göstereceğini belirtir
}

export function DateRangePicker({
  value,
  onValueChange,
  placeholder = "Tarih seçin",
  className,
  showType = "checkin",
}: DateRangePickerProps) {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(value);

  // value prop'u değiştiğinde local state'i güncelle
  React.useEffect(() => {
    setDateRange(value);
  }, [value]);

  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range);
    onValueChange?.(range);
  };

  const formatDisplayDate = () => {
    // Giriş tarihi gösterilecekse
    if (showType === "checkin") {
      if (!dateRange?.from) {
        return placeholder;
      }
      return format(dateRange.from, "dd MMM yyyy", { locale: tr });
    }

    // Çıkış tarihi gösterilecekse
    if (showType === "checkout") {
      if (!dateRange?.to) {
        return "Çıkış tarihi seçin";
      }
      return format(dateRange.to, "dd MMM yyyy", { locale: tr });
    }

    return placeholder;
  };

  // Bugünden önceki tarihleri devre dışı bırak
  const disabledDays = { before: new Date() };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full h-9 justify-start text-left font-normal border border-border focus:border-blue-500 rounded-lg",
              ((showType === "checkin" && !dateRange?.from) || (showType === "checkout" && !dateRange?.to)) && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
            <div className="flex-1 text-left">{formatDisplayDate()}</div>
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-full max-h-screen md:max-h-none p-6" 
          align="start"
          side="bottom"
          sideOffset={4}
        >
          <p className="font-medium">Giriş ve çıkış tarihi seçiniz</p>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            disabled={disabledDays}
            className="rounded-lg border-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}


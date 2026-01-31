"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { useTranslations } from "next-intl"

interface DateRangeCalendarProps {
  checkIn?: Date
  checkOut?: Date
  onDateRangeChange: (checkIn: Date | undefined, checkOut: Date | undefined) => void
}

export function DateRangeCalendar({ checkIn, checkOut, onDateRangeChange }: DateRangeCalendarProps) {
  const t = useTranslations("HomePage.dateRangeCalendar") // dil desteği
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7)) // August 2025

  const dateRange: DateRange | undefined =
    checkIn && checkOut ? { from: checkIn, to: checkOut } : checkIn ? { from: checkIn, to: undefined } : undefined

  const handleDateRangeSelect = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      onDateRangeChange(range.from, range.to)
    } else if (range?.from) {
      onDateRangeChange(range.from, undefined)
    } else {
      onDateRangeChange(undefined, undefined)
    }
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  return (
    <div className="bg-white dark:bg-card text-black dark:text-white rounded-lg overflow-hidden">
      <div className="bg-white dark:bg-card p-2 text-center">
        <h2 className="text-sm font-medium text-black dark:text-white">{t("heading")}</h2>
      </div>

      <div className="flex items-center justify-between p-1 border-b border-gray-300 dark:border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("prev")}
          className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-black dark:text-white font-medium text-sm">
          {currentMonth.toLocaleDateString("tr-TR", { month: "long", year: "numeric" })} -{" "}
          {new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1).toLocaleDateString("tr-TR", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateMonth("next")}
          className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-2">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={handleDateRangeSelect}
          numberOfMonths={2}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          className="[&_.rdp-day_button]:text-black dark:[&_.rdp-day_button]:text-white [&_.rdp-day_button]:hover:bg-gray-100 dark:[&_.rdp-day_button]:hover:bg-gray-700 [&_.rdp-day_button[data-selected-single=true]]:bg-blue-600 [&_.rdp-day_button[data-selected-single=true]]:text-white [&_.rdp-day_button[data-range-start=true]]:bg-blue-600 [&_.rdp-day_button[data-range-start=true]]:text-white [&_.rdp-day_button[data-range-end=true]]:bg-blue-600 [&_.rdp-day_button[data-range-end=true]]:text-white [&_.rdp-day_button[data-range-middle=true]]:bg-blue-500/30 [&_.rdp-day_button[data-range-middle=true]]:text-black dark:[&_.rdp-day_button[data-range-middle=true]]:text-white [&_.rdp-weekday]:text-gray-500 dark:[&_.rdp-weekday]:text-gray-400 [&_.rdp-caption_label]:text-black dark:[&_.rdp-caption_label]:text-white"
          classNames={{
            months: "flex flex-col md:flex-row gap-4 md:gap-8",
            month: "space-y-4",
            nav: "hidden", // Hide default navigation since we have custom
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-500 dark:text-gray-400 rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-blue-500/20 [&:has([aria-selected].day-outside)]:bg-blue-500/20 [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
            day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
            day_range_start: "day-range-start rounded-l-md",
            day_range_end: "day-range-end rounded-r-md",
            day_selected:
              "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
            day_today: "bg-gray-200 dark:bg-gray-700 text-black dark:text-white",
            day_outside:
              "text-gray-400 dark:text-gray-600 opacity-50 aria-selected:bg-blue-500/20 aria-selected:text-gray-600 dark:aria-selected:text-gray-600 aria-selected:opacity-30",
            day_disabled: "text-gray-400 dark:text-gray-600 opacity-50",
            day_range_middle: "aria-selected:bg-blue-500/30 aria-selected:text-black dark:aria-selected:text-white rounded-none",
            day_hidden: "invisible",
          }}
          disabled={(date) => date < new Date()}
        />
      </div>
    </div>
  )
}

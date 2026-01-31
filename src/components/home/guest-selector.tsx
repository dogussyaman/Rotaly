"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Users, Minus, Plus } from "lucide-react"
import { useTranslations } from "next-intl"

interface GuestSelectorProps {
  guests: { adults: number; children: number }
  onGuestsChange: (guests: { adults: number; children: number }) => void
}

export function GuestSelector({ guests, onGuestsChange }: GuestSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("HomePage.guestSelector") // JSON’da HomePage.guestSelector namespace

  const updateGuests = (type: "adults" | "children", operation: "increment" | "decrement") => {
    const newGuests = { ...guests }

    if (operation === "increment") {
      newGuests[type]++
    } else if (operation === "decrement" && newGuests[type] > 0) {
      if (type === "adults" && newGuests[type] === 1) return // en az 1 yetişkin
      newGuests[type]--
    }

    onGuestsChange(newGuests)
  }

  const totalGuests = guests.adults + guests.children
  const guestText = `${totalGuests} ${
    totalGuests === 1 ? t("adultSingular") : t("guestPlural")
  }`

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-12 justify-start text-left bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-card"
        >
          <Users className="mr-2 h-4 w-4 text-gray-400" />
          {guestText}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 bg-white dark:bg-card border-gray-300 dark:border-gray-700"
        align="start"
      >
        <div className="space-y-4">
          <h3 className="text-black dark:text-white font-medium">
            {t("title")}
          </h3>

          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-black dark:text-white font-medium">
                {t("adults")}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {t("adultsDescription")}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateGuests("adults", "decrement")}
                disabled={guests.adults <= 1}
                className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-black dark:text-white w-8 text-center">
                {guests.adults}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateGuests("adults", "increment")}
                className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-black dark:text-white font-medium">
                {t("children")}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {t("childrenDescription")}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateGuests("children", "decrement")}
                disabled={guests.children <= 0}
                className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-black dark:text-white w-8 text-center">
                {guests.children}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateGuests("children", "increment")}
                className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {t("confirm")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

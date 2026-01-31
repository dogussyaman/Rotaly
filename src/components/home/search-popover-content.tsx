"use client"

import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import type { HotelNew } from "@/types/hotel"
import { useTranslations } from "next-intl"

interface SearchPopoverContentProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  setDestination: (destination: string) => void
  setIsOpen: (open: boolean) => void
  filteredHotels: HotelNew[]
  popularHotels: HotelNew[]
  loading: boolean
}

export function SearchPopoverContent({
  searchTerm,
  setSearchTerm,
  setDestination,
  setIsOpen,
  filteredHotels,
  popularHotels,
  loading
}: SearchPopoverContentProps) {
  const t = useTranslations("HomePage.bookingSearch")

  const handleHotelSelect = (city: string) => {
    setDestination(city)
    setSearchTerm("")
    setIsOpen(false)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-sm text-gray-500">Yükleniyor...</div>
      </div>
    )
  }

  return (
    <>
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder={t("placeholders.startSearching")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-400"
        />
      </div>
      
      {/* Content - Single scroll container */}
      <div className="max-h-80 overflow-y-auto">
        <Command className="bg-card overflow-hidden">
          <CommandList className="bg-card max-h-none overflow-visible">
            {/* Arama Sonuçları */}
            {filteredHotels.length > 0 && (
              <>
                <CommandGroup heading={`${filteredHotels.length} ${t("search.results")}`}>
                  {filteredHotels.slice(0, 8).map((hotel) => (
                    <CommandItem
                      key={hotel.id}
                      onSelect={() => handleHotelSelect(hotel.city)}
                      className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 sm:p-3 rounded-md"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0">
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {hotel.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {hotel.city}, {hotel.country}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-xs text-gray-400">
                            ⭐ {hotel.rating || 0}
                          </p>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            
            {/* Popüler Aramalar */}
            {searchTerm.length <= 1 && popularHotels.length > 0 && (
              <CommandGroup>
                <div className="px-2 py-1.5 text-sm font-medium text-orange-600 dark:text-orange-400 flex items-center gap-2">
                  🔥 POPULAR SEARCHES
                </div>
                {popularHotels.slice(0, 5).map((hotel) => (
                  <CommandItem
                    key={hotel.id}
                    onSelect={() => handleHotelSelect(hotel.city)}
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 mx-1 rounded-lg"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-shrink-0">
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {hotel.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {hotel.city}, {hotel.country}
                        </p>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {/* Arama sonucu yoksa ve favoriler de yoksa */}
            {searchTerm !== "" && filteredHotels.length === 0 && (
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t("search.noResults")}
                </p>
              </div>
            )}
          </CommandList>
        </Command>
      </div>
    </>
  )
}

"use client"

import { useMemo, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin, Search } from "lucide-react"
import { SingleDatePicker } from "./single-date-picker"
import { GuestSelector } from "./guest-selector"
import { useTypewriter } from "react-simple-typewriter"
import { useDispatch, useSelector } from "react-redux"
import { setCity, setCheckInDate, setCheckOutDate, setGuestsCount } from "@/store/search/search-slice"
import type { RootState } from "@/store/store"
import { useToastMessages } from "@/hooks/toast-messages"
import type { HotelNew } from "@/types/hotel"
import { useTranslations } from "next-intl"
import { hotelService } from "@/services"
import { SearchPopoverContent } from "./search-popover-content"

interface BookingSearchProps {
  handleSearch: () => void
}

export function BookingSearch({ handleSearch }: BookingSearchProps) {
  const t = useTranslations("HomePage.bookingSearch")

  const dispatch = useDispatch()
  const { showError } = useToastMessages()
  const [isOpen, setIsOpen] = useState(false)
  const [allHotels, setAllHotels] = useState<HotelNew[]>([])
  const [popularHotels, setPopularHotels] = useState<HotelNew[]>([])
  const [loading, setLoading] = useState(false)

  // Store'dan mevcut verileri al
  const {
    city,
    checkIn: storeCheckIn,
    checkOut: storeCheckOut,
    guests: storeGuests,
  } = useSelector((state: RootState) => state.search)

  // Local state'leri store verileriyle başlat
  const [destination, setDestination] = useState(city)
  const [searchTerm, setSearchTerm] = useState("")
  const [checkIn, setCheckIn] = useState<Date | undefined>(storeCheckIn ? new Date(storeCheckIn) : undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(storeCheckOut ? new Date(storeCheckOut) : undefined)
  const [guests, setGuests] = useState({
    adults: storeGuests || 1,
    children: 0,
  })

  // API'den otelleri getir
  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true)
      try {
        const response = await hotelService.getHotels({ 
          limit: 50, // Daha fazla otel getir
          isActive: true 
        })
        const hotels = response.hotels || []
        setAllHotels(hotels)
        
        // İlk 5 oteli popüler olarak ayarla
        setPopularHotels(hotels.slice(0, 5))
      } catch (error) {
        console.error("Oteller yüklenirken hata:", error)
        setAllHotels([])
        setPopularHotels([])
      } finally {
        setLoading(false)
      }
    }

    fetchHotels()
  }, [])

  // Search fonksiyonu - store'a veri kaydet ve parent'a bildir
  const handleSearchClick = () => {
    if (!destination.trim()) {
      showError(t("errors.selectCity"))
      return
    }
    if (!checkIn) {
      showError(t("errors.selectCheckIn"))
      return
    }
    if (!checkOut) {
      showError(t("errors.selectCheckOut"))
      return
    }
    if (guests.adults < 1) {
      showError(t("errors.selectAdults"))
      return
    }

    // Store'a veri kaydet
    dispatch(setCity(destination))
    dispatch(setCheckInDate(checkIn.toISOString()))
    dispatch(setCheckOutDate(checkOut.toISOString()))
    dispatch(setGuestsCount(guests.adults + guests.children))

    // Parent component'e bildir ve categories sayfasına git
    handleSearch()
  }

  const handleDateRangeChange = (newCheckIn: Date | undefined, newCheckOut: Date | undefined) => {
    setCheckIn(newCheckIn ?? new Date())
    setCheckOut(newCheckOut ?? new Date())
  }

  const [text] = useTypewriter({
    words: [t("typewriter.hotel"), t("typewriter.pension"), t("typewriter.apartment")],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 1000,
  })

  const filteredHotels = useMemo(() => {
    if (searchTerm.length > 1 && allHotels.length > 0) {
      return allHotels.filter((hotel: HotelNew) => 
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return []
  }, [searchTerm, allHotels])

  return (
    <div className="relative">
      {/* Search Form */}
      <div className="relative z-10 flex items-center justify-center p-2 sm:p-4">
        <div className="w-full max-w-6xl">
          <div className="bg-card border border-gray-200 dark:border-gray-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg dark:shadow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
              {/* Destination */}
              <div className="lg:col-span-1">
                <Label className="text-black dark:text-white text-sm font-medium mb-2 block">
                  <span className="md:block hidden">{text}</span>
                  <span className="md:hidden block">
                    {t("labels.withRotaly")} {text}
                  </span>
                </Label>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                      <Input
                        placeholder={t("placeholders.searchCity")}
                        value={destination}
                        onChange={(e) => {
                          setSearchTerm(e.target.value)
                          setDestination(e.target.value)
                          setIsOpen(true)
                        }}
                        className="pl-10 pr-10 bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder:text-gray-400 h-10 sm:h-12 cursor-pointer"
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[350px] sm:w-[400px] md:w-[450px] p-0 bg-card border-gray-300 dark:border-gray-600 mx-2 sm:mx-0" align="center">
                    <div className="p-3">
                      <SearchPopoverContent
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        setDestination={setDestination}
                        setIsOpen={setIsOpen}
                        filteredHotels={filteredHotels}
                        popularHotels={popularHotels}
                        loading={loading}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-in Date */}
              <div className="lg:col-span-1 overflow-hidden">
                <Label className="text-black dark:text-white text-sm font-medium mb-2 block">
                  {t("labels.checkIn")}
                </Label>
                <SingleDatePicker
                
                  date={checkIn}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onDateChange={(date) => setCheckIn(date ?? new Date())}
                  onDateRangeChange={handleDateRangeChange}
                  placeholder={t("placeholders.selectCheckIn")}
                  type="checkin"
                />
              </div>

              {/* Check-out Date */}
              <div className="lg:col-span-1 overflow-hidden">
                <Label className="text-black dark:text-white text-sm font-medium mb-2 block">
                  {t("labels.checkOut")}
                </Label>
                <SingleDatePicker
                  date={checkOut}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onDateChange={(date) => setCheckOut(date ?? new Date())}
                  onDateRangeChange={handleDateRangeChange}
                  placeholder={t("placeholders.selectCheckOut")}
                  type="checkout"
                />
              </div>

              {/* Guests */}
              <div className="lg:col-span-1">
                <Label className="text-black dark:text-white text-sm font-medium mb-2 block">
                  {t("labels.guestCount")}
                </Label>
                <GuestSelector guests={guests} onGuestsChange={setGuests} />
              </div>

              {/* Search Button */}
              <div className="col-span-full lg:col-span-1">
                <Button
                  onClick={handleSearchClick}
                  className="w-full h-10 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                >
                  <Search className="h-4 w-4 mr-2" />
                  {t("buttons.search")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

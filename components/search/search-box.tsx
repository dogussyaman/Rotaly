'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { tr, enUS } from 'date-fns/locale'
import { CalendarIcon, MapPin, Users, Search, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { DateRange } from 'react-day-picker'

interface GuestCount {
  adults: number
  children: number
  rooms: number
}

export function SearchBox() {
  const router = useRouter()
  const { t, locale } = useI18n()
  const dateLocale = locale === 'tr' ? tr : enUS

  const [destination, setDestination] = useState('')
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState<GuestCount>({
    adults: 1,
    children: 0,
    rooms: 1,
  })
  const [guestsOpen, setGuestsOpen] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (dateRange?.from) params.set('checkIn', dateRange.from.toISOString())
    if (dateRange?.to) params.set('checkOut', dateRange.to.toISOString())
    params.set('adults', guests.adults.toString())
    params.set('children', guests.children.toString())
    params.set('rooms', guests.rooms.toString())

    router.push(`/search?${params.toString()}`)
  }

  const updateGuests = (type: keyof GuestCount, delta: number) => {
    setGuests((prev) => {
      const newValue = prev[type] + delta
      const min = type === 'adults' ? 1 : type === 'rooms' ? 1 : 0
      const max = type === 'rooms' ? 10 : 20
      return {
        ...prev,
        [type]: Math.max(min, Math.min(max, newValue)),
      }
    })
  }

  const formatGuestsLabel = () => {
    const parts = []
    parts.push(`${guests.adults} ${t('search.adult')}`)
    if (guests.children > 0) {
      parts.push(`${guests.children} ${t('search.child')}`)
    }
    return parts.join(', ')
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-3xl blur-xl opacity-70" />
      
      {/* Main Container */}
      <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-end">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t('search.destination')}</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder={t('search.destinationPlaceholder')}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 h-14 bg-secondary/50 border-border/50 hover:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary rounded-xl text-base"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t('search.checkIn')}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-14 justify-start text-left font-normal bg-secondary/50 border-border/50 hover:border-primary/50 hover:bg-secondary/70 rounded-xl text-base",
                    !dateRange?.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                  {dateRange?.from ? (
                    format(dateRange.from, "d MMM yyyy", { locale: dateLocale })
                  ) : (
                    t('dates.selectDate')
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl border-border/50" align="start">
                <div className="p-4 border-b border-border/50 bg-secondary/30">
                  <p className="text-sm font-medium text-center">{t('search.selectDates')}</p>
                </div>
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  locale={dateLocale}
                  className="p-3"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t('search.checkOut')}</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-14 justify-start text-left font-normal bg-secondary/50 border-border/50 hover:border-primary/50 hover:bg-secondary/70 rounded-xl text-base",
                    !dateRange?.to && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-3 h-5 w-5 text-muted-foreground" />
                  {dateRange?.to ? (
                    format(dateRange.to, "d MMM yyyy", { locale: dateLocale })
                  ) : (
                    t('dates.selectDate')
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl border-border/50" align="start">
                <div className="p-4 border-b border-border/50 bg-secondary/30">
                  <p className="text-sm font-medium text-center">{t('search.selectDates')}</p>
                </div>
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                  disabled={{ before: new Date() }}
                  locale={dateLocale}
                  className="p-3"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t('search.guests')}</label>
            <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-14 justify-start text-left font-normal bg-secondary/50 border-border/50 hover:border-primary/50 hover:bg-secondary/70 rounded-xl text-base"
                >
                  <Users className="mr-3 h-5 w-5 text-muted-foreground" />
                  {formatGuestsLabel()}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 rounded-xl border-border/50 p-0" align="start">
                <div className="p-4 border-b border-border/50 bg-secondary/30">
                  <p className="text-sm font-medium">{t('search.guests')}</p>
                </div>
                <div className="p-4 space-y-5">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('search.adults')}</p>
                      <p className="text-sm text-muted-foreground">18+</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('adults', -1)}
                        disabled={guests.adults <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center font-semibold text-lg">{guests.adults}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('adults', 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('search.children')}</p>
                      <p className="text-sm text-muted-foreground">0-17</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('children', -1)}
                        disabled={guests.children <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center font-semibold text-lg">{guests.children}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('children', 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('search.rooms')}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('rooms', -1)}
                        disabled={guests.rooms <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-10 text-center font-semibold text-lg">{guests.rooms}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-transparent border-border/50 hover:border-primary/50"
                        onClick={() => updateGuests('rooms', 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <Button
            size="lg"
            className="h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group"
            onClick={handleSearch}
          >
            <Search className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            {t('search.searchButton')}
          </Button>
        </div>
      </div>
    </div>
  )
}

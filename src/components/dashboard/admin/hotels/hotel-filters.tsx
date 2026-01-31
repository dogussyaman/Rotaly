import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import hotelsData from '@/data/hotelsData.json';
import { ArrowUpDown, Filter, Plus, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface HotelFiltersProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  getHotelStatus: (status: string) => void;
  getSortBy: (sortBy: string) => void;
  setIsAddHotelDialogOpen: (open: boolean) => void;
}


const HotelFilters = ({ searchTerm, handleSearch, getHotelStatus, getSortBy, setIsAddHotelDialogOpen }: HotelFiltersProps) => {
  const t = useTranslations("AdminHotels");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <CardTitle className="text-xl font-semibold">{t("hotelList")} <span className="text-muted-foreground text-xl font-semibold">({hotelsData.length})</span></CardTitle>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("searchHotels")}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 w-full sm:w-64"
        />
      </div>
      
      {/* Filter & Sort */}
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {t("filter")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => getHotelStatus("Active")}>{t("active")}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => getHotelStatus("Inactive")}>{t("inactive")}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => getHotelStatus("All")}>{t("allStatus")}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              {t("sortBy")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => getSortBy("name")}>{t("name")}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => getSortBy("rating")}>{t("rating")}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => getSortBy("type")}>{t("type")}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => getSortBy("createdAt")}>{t("createdAt")}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="sm" onClick={() => setIsAddHotelDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {t("addHotel")}
        </Button>
      </div>
    </div>
  </div>
  )
}

export default HotelFilters;
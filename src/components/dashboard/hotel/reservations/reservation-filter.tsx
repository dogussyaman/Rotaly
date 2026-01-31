"use client";

import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, Filter, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface ReservationFiltersProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  activeFilter: (value: string) => void;
  sortBy: (sort: string) => void;
}

const ReservationFilters = ({ searchTerm, handleSearch, activeFilter, sortBy }: ReservationFiltersProps) => {
  const t = useTranslations("Reservations");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <CardTitle className="text-xl font-semibold">
        {t("title")}
      </CardTitle>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("search")}
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
              <DropdownMenuItem onClick={() => activeFilter("verified")}>{t("verified")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => activeFilter("unverified")}>{t("unverified")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => activeFilter("all")}>{t("allStatus")}</DropdownMenuItem>
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
              <DropdownMenuItem onClick={() => sortBy("startDate")}>{t("checkIn")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => sortBy("endDate")}>{t("checkOut")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => sortBy("guests")}>{t("guests")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => sortBy("totalPrice")}>{t("totalPrice")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => sortBy("hotelAddress")}>{t("hotelAddress")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => sortBy("createdAt")}>{t("createdAt")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default ReservationFilters;

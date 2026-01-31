import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface CustomerFiltersProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  activeFilter: (value: string) => void;
  shortBy: (sort: string) => void;
}

const CustomerFilters = ({ searchTerm, handleSearch, activeFilter}: CustomerFiltersProps) => {
  const t = useTranslations("Customers");

  return (
    <div className="space-y-4">
      {/* Title - Her zaman üstte */}
      <CardTitle className="text-lg sm:text-xl font-semibold text-center text-foreground">
        {t("customerList")}
      </CardTitle>
      
      {/* Filters Container */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("search")}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 w-full sm:w-64 md:w-72"
          />
        </div>
        
        {/* Filter & Sort */}
        <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full xs:w-auto justify-center xs:justify-start"
              >
                <Filter className="h-4 w-4 mr-2" />
                <span className="hidden xs:inline">{t("filter")}</span>
                <span className="xs:hidden">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => activeFilter("verified")}>
                {t("verified")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => activeFilter("unverified")}>
                {t("unverified")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => activeFilter("all")}>
                {t("allStatus")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default CustomerFilters;

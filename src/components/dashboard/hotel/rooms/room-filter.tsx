"use client";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Search, Filter, ArrowUpDown, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

interface RoomFiltersProps {
  searchTerm: string;
  handleSearch: (value: string) => void;
  getRoomStatus: (status: string) => void;
  getSortBy: (sortBy: string) => void;
  setIsAddRoomDialogOpen: (value: boolean) => void;
}

const RoomFilters: FC<RoomFiltersProps> = ({
  searchTerm,
  handleSearch,
  getRoomStatus,
  getSortBy,
  setIsAddRoomDialogOpen,
}) => {
  const t = useTranslations("Rooms");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Başlık */}
   

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        {/* Arama */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("searchRooms")}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 w-full sm:w-64"
          />
        </div>

        {/* Durum ve Sıralama */}
        <div className="flex gap-2">
          {/* Durum Filtreleme */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                {t("filter")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => getRoomStatus("Available")}>{t("available")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getRoomStatus("Unavailable")}>{t("unavailable")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getRoomStatus("All")}>{t("allStatus")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sıralama */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {t("sortBy")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => getSortBy("name")}>{t("name")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("name-desc")}>{t("nameDesc")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("type")}>{t("roomType")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("roomNumber")}>{t("roomNumber")}</DropdownMenuItem>

              <DropdownMenuItem onClick={() => getSortBy("price")}>{t("priceAsc")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("price-desc")}>{t("priceDesc")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("capacity")}>{t("capacityAsc")}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => getSortBy("capacity-desc")}>{t("capacityDesc")}</DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

          {/* Oda Ekle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsAddRoomDialogOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            {t("addRoom")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomFilters;

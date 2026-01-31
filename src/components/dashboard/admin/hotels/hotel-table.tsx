import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Filter, MoreHorizontal, Star, Eye, Edit, Trash, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { HotelNew } from '@/types/hotel';


interface HotelTableProps {
  filteredHotels: HotelNew[];
  getCityFromLocation: (location: string) => string;
  getHotelStatus: (status: string) => void;
  getSortBy: (sortBy: string) => void;
  handleViewDetails: (hotel: HotelNew) => void;
  handleEdit: (hotel: HotelNew) => void;
  handleDelete: (hotel: HotelNew) => void;
}

const HotelTable = ({ filteredHotels, getCityFromLocation, getHotelStatus, getSortBy, handleViewDetails, handleEdit, handleDelete }: HotelTableProps) => {
  const t = useTranslations("AdminHotels");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  return (
    <div className="hidden lg:block">
    <Table>
      <TableHeader>
        <TableRow className="border-border">
          <TableHead className="text-muted-foreground">
            <div className="flex items-center justify-between">
              {t("hotelName")}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => getSortBy("name")}>
                    A-Z
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getSortBy("name-desc")}>
                    Z-A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground">{t("location")}</TableHead>
          <TableHead className="text-muted-foreground">
            <div className="flex items-center justify-between">
              {t("type")}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => getSortBy("type")}>
                    A-Z
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getSortBy("type-desc")}>
                    Z-A
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground">
            <div className="flex items-center justify-between">
              {t("rating")}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => getSortBy("rating")}>
                    En Yüksek
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getSortBy("rating-desc")}>
                    En Düşük
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground">
            <div className="flex items-center justify-between">
              {t("status")}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <Filter className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => getHotelStatus("Active")}>
                    {t("active")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getHotelStatus("Inactive")}>
                    {t("inactive")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getHotelStatus("All")}>
                    {t("allStatus")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground">{t("roomCount")}</TableHead>
          <TableHead className="text-muted-foreground">
            <div className="flex items-center justify-between">
              {t("createdAt")}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => getSortBy("createdAt")}>
                    En Yeni
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => getSortBy("createdAt-desc")}>
                    En Eski
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableHead>
          <TableHead className="text-muted-foreground w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedHotels.map((hotel) => (
          <TableRow key={hotel.name} className="border-border hover:bg-muted/50">
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={hotel.images[0]?.url || '/images/hotel-placeholder.jpg'} alt={hotel.name} />
                  <AvatarFallback>
                    {hotel.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{hotel.name}</p>
                  <p className="text-sm text-muted-foreground" title={hotel.description}>{hotel.description.slice(0, 50)}...</p>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-foreground">{getCityFromLocation(hotel.location)}</TableCell>
            <TableCell className="text-foreground">{hotel.type}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-foreground">{hotel.rating}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge 
                variant={hotel.isActive === true ? 'default' : 'secondary'}
                className={hotel.isActive === true 
                  ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                  : 'bg-red-100 text-red-800 hover:bg-red-100'
                }
              >
                {hotel.isActive === true ? t("active") : t("inactive")}
              </Badge>
            </TableCell>
            <TableCell className="text-foreground">{hotel.rooms?.length || 0}</TableCell>
            <TableCell className="text-foreground">{hotel.createdAt.split('T')[0]}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleViewDetails(hotel)}>
                    <Eye className="h-4 w-4 mr-2" />
                    {t("viewDetails")}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleEdit(hotel)}>
                    <Edit className="h-4 w-4 mr-2" />
                    {t("edit")}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDelete(hotel)}
                    className="text-red-600 focus:text-red-600"
                  >
                    <Trash className="h-4 w-4 mr-2" />
                    {t("delete")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div className="flex items-center justify-between mt-4 px-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredHotels.length)} of {filteredHotels.length} results
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {/* Sayfa numaraları */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className="h-8 w-8 p-0"
            >
              {page}
            </Button>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
  )
}

export default HotelTable;
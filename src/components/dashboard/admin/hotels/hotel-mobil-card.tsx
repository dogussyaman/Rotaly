import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash, Star } from 'lucide-react';
import { HotelNew } from '@/types/hotel';
import { useTranslations } from 'next-intl';
import React from 'react'

interface HotelMobilCardProps {
  filteredHotels: HotelNew[];
  getCityFromLocation: (location: string) => string;
  handleViewDetails: (hotel: HotelNew) => void;
  handleEdit: (hotel: HotelNew) => void;
  handleDelete: (hotel: HotelNew) => void;
}

const HotelMobilCard = ({ filteredHotels, getCityFromLocation,handleViewDetails, handleEdit, handleDelete }: HotelMobilCardProps) => {
  const t = useTranslations("AdminHotels");

  return (
    <div className="lg:hidden space-y-4 p-4">
    {filteredHotels.map((hotel) => (
      <Card key={hotel.name} className="border border-border">
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={hotel.images[0]?.url || '/images/hotel.png'} alt={hotel.name} />
                  <AvatarFallback>
                    {hotel.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">
                    {hotel.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {hotel.owner ? `${hotel.owner.name} ${hotel.owner.surname}` : 'N/A'}
                  </p>
                </div>
              </div>
              <Badge
                variant={
                  hotel.isActive ? "default" : "secondary"
                }
                className={
                  hotel.isActive
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : "bg-red-100 text-red-800 hover:bg-red-100"
                }
              >
                {hotel.isActive
                  ? t("active")
                  : t("inactive")}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">{t("city")}</p>
                <p className="font-medium text-foreground">
                  {getCityFromLocation(hotel.location)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">{t("type")}</p>
                <p className="text-foreground">{hotel.type}</p>
              </div>
              <div>
                <p className="text-muted-foreground">{t("rating")}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground">
                    {hotel.rating}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  {t("roomCount")}
                </p>
                <p className="font-medium text-foreground">
                  {hotel.rooms?.length || 0}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  {t("createdAt")}
                </p>
                <p className="text-foreground">{hotel.createdAt}</p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  {t("totalBookings")}
                </p>
                <p className="text-foreground">
                  {hotel.totalBookings || 0}
                </p>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewDetails(hotel)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-2" />
                {t("viewDetails")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(hotel)}
                className="flex-1"
              >
                <Edit className="h-4 w-4 mr-2" />
                {t("edit")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(hotel)}
                className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash className="h-4 w-4 mr-2" />
                {t("delete")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>    
  )
}

export default HotelMobilCard
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building,
} from "lucide-react";
import Image from "next/image";
import {HotelNew } from "@/types/hotel";
import { adminService } from "@/services/admin.service";


export default function HotelDetailPage() {
  const t = useTranslations("Hotels");
  const params = useParams();
  const router = useRouter();
  const [hotel, setHotel] = useState<HotelNew | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true);
        const response = await adminService.getHotelById(params.id as string);
        
        if (response.success && response.data) {
          setHotel(response.data);
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchHotel();
    }
  }, [params.id]);

  // otel şehirini belirle
  const getCityFromLocation = (location: string) => {
    return location.split(",")[0].trim();
  };

  // otel tipini belirle
  const getHotelType = (hotel: HotelNew) => {
    return hotel.type;
  };

  if (loading) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Hotel Not Found
            </h1>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("back")}
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {hotel.name}
              </h1>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {hotel.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={hotel.isActive ? "default" : "secondary"}
              className={
                hotel.isActive
                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                  : "bg-red-100 text-red-800 hover:bg-red-100"
              }
            >
              {hotel.isActive ? t("active") : t("inactive")}
            </Badge>
          </div>
        </div>

        {/* Hotel Image and Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="w-full h-auto p-0">
              <CardContent className="p-0">
                <Image
                  src={hotel.images[0]?.url || '/images/hotel-placeholder.jpg'}
                  alt={hotel.name}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("basicInformation")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="text-muted-foreground">
                    ({hotel.totalBookings || 0} {t("reviews")})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{hotel.price || 'N/A'}</span>
                  <span className="text-muted-foreground">/ {t("night")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {hotel.totalBookings || 0} {t("totalBookings")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {t("created")}: {hotel.createdAt}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {t("type")}: {getHotelType(hotel)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {t("city")}: {getCityFromLocation(hotel.location)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="w-full h-auto py-0">
          <CardContent className="p-0">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-500 dark:bg-card">
                <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
                <TabsTrigger value="rooms">{t("rooms")}</TabsTrigger>
                <TabsTrigger value="bookings">{t("bookings")}</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      {t("hotelDetails")}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("hotelId")}
                        </span>
                        <span className="font-medium">{hotel.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("hotelName")}
                        </span>
                        <span className="font-medium">{hotel.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("city")}
                        </span>
                        <span className="font-medium">
                          {getCityFromLocation(hotel.location)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("type")}
                        </span>
                        <span className="font-medium">
                          {getHotelType(hotel)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("status")}
                        </span>
                        <Badge
                          variant={
                            hotel.isActive ? "default" : "secondary"
                          }
                        >
                          {hotel.isActive
                            ? t("active")
                            : t("inactive")}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("createdAt")}
                        </span>
                        <span className="font-medium">{hotel.createdAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("lastBooking")}
                        </span>
                        <span className="font-medium">{hotel.lastBooking || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      {t("financialInformation")}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("totalRevenue")}
                        </span>
                        <span className="font-medium text-green-600">
                          {hotel.revenue || 'N/A'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("totalBookings")}
                        </span>
                        <span className="font-medium">
                          {hotel.totalBookings || 0}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("averagePrice")}
                        </span>
                        <span className="font-medium">{hotel.price || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("roomCount")}
                        </span>
                        <span className="font-medium">
                          {hotel.rooms?.length || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rooms" className="p-6">
                <div className="text-center py-8">
                  <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("rooms")}</h3>
                  {hotel.rooms?.map((room) => (
                    <Card key={room.id} className="w-full h-auto p-0">
                      <CardHeader>
                        <CardTitle className="text-lg">{room.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground">{room.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                  <p className="text-muted-foreground">
                    {t("roomInformationComingSoon")}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="bookings" className="p-6">
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {t("bookings")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("bookingInformationComingSoon")}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HotelNew } from "@/types/hotel";
import {
  HotelCards,
  HotelFilters,
  HotelTable,
  EditHotelDialog,
  AddHotelDialog,
  DeleteHotelDialog,
  HotelMobilCard,
} from "@/components/dashboard/admin/hotels";
import { Skeleton } from "@/components/ui/skeleton";
import { adminService } from "@/services";


function HotelsLoading() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-card border border-border">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table Skeleton */}
        <Card className="bg-card border border-border">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-10 w-full sm:w-64" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function HotelsPage() {
  const t = useTranslations("Hotels");
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [allHotels, setAllHotels] = useState<HotelNew[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<HotelNew[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<HotelNew | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddHotelDialogOpen, setIsAddHotelDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = allHotels.filter(
      (hotel: HotelNew) =>
        hotel.name.toLowerCase().includes(value.toLowerCase()) ||
        hotel.location?.toLowerCase().includes(value.toLowerCase()) ||
        hotel.id.toLowerCase().includes(value.toLowerCase()) ||
        hotel.city?.toLowerCase().includes(value.toLowerCase()) ||
        hotel.type?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  const handleViewDetails = (hotel: HotelNew) => {
    // SEO için ayrı sayfaya yönlendirme yapıyoruz
    router.push(`/dashboard/admin/hotels/${hotel.id}`);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        // Pagination ile otelleri çek
        const response = await adminService.getAllHotelsWithPagination(1, 100);
        
        if (response.hotels || response.data) {
          const hotels = response.hotels || response.data || [];
          // Tüm otelleri sakla
          setAllHotels(hotels);
          // Aktif olanları filtrele
          const activeHotels = hotels.filter((hotel: HotelNew) => hotel.isActive === true);
          setFilteredHotels(activeHotels);
        }
      } catch (error) {
        console.error("Pagination ile otel yüklenirken hata oluştu:", error);
        // Fallback to old method if pagination fails
        try {
          const fallbackResponse = await adminService.getAllHotels();
          if (fallbackResponse.hotels) {
            setAllHotels(fallbackResponse.hotels);
            const activeHotels = fallbackResponse.hotels.filter((hotel: HotelNew) => hotel.isActive === true);
            setFilteredHotels(activeHotels);
          }
        } catch (fallbackError) {
          console.error("Fallback method also failed:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleEdit = (hotel: HotelNew) => {
    setSelectedHotel(hotel);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (hotel: HotelNew) => {
    setSelectedHotel(hotel);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedHotel?.id) {
      try {
        await adminService.deleteHotel(selectedHotel.id);
        // Refresh the hotels list
        const response = await adminService.getAllHotels();
        if (response.hotels) {
          setAllHotels(response.hotels);
          const activeHotels = response.hotels.filter((hotel: HotelNew) => hotel.isActive === true);
          setFilteredHotels(activeHotels);
        }
        console.log("Hotel deleted successfully");
      } catch (error) {
        console.error("Error deleting hotel:", error);
        alert("Otel silinirken hata oluştu");
      }
    }
    setIsDeleteDialogOpen(false);
    setSelectedHotel(null);
  };

  // otel şehirini belirle
  const getCityFromLocation = (location: string) => {
    return location.split(",")[0].trim();
  };

  const getHotelStatus = (status: string) => {
    if (status === "Active") {
      const activeHotels = allHotels.filter(
        (hotel: HotelNew) => hotel.isActive === true
      );
      setFilteredHotels(activeHotels);
    } else if (status === "Inactive") {
      const inactiveHotels = allHotels.filter(
        (hotel: HotelNew) => hotel.isActive === false
      );
      setFilteredHotels(inactiveHotels);
    } else {
      setFilteredHotels(allHotels);
    }
  };

  const getSortBy = (sortBy: string) => {
    const sortedHotels = [...allHotels].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "rating") {
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === "rating-desc") {
        return (a.rating || 0) - (b.rating || 0);
      }
      if (sortBy === "type") {
        return (a.type || '').localeCompare(b.type || '');
      }
      if (sortBy === "type-desc") {
        return (b.type || '').localeCompare(a.type || '');
      }
      if (sortBy === "createdAt") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      if (sortBy === "createdAt-desc") {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
      return 0;
    });
    setFilteredHotels(sortedHotels);
  };
  if (loading) {
    return <HotelsLoading />;
  }


  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <HotelCards />

        {/* Hotel List Section */}
        <Card className="bg-card border border-border">
          <CardHeader className="pb-4">
            <HotelFilters
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              getHotelStatus={getHotelStatus}
              getSortBy={getSortBy}
              setIsAddHotelDialogOpen={setIsAddHotelDialogOpen}
            />
          </CardHeader>

          <CardContent className="p-0">
            {/* Desktop Table */}
            <HotelTable
              filteredHotels={filteredHotels}
              getCityFromLocation={getCityFromLocation}
              getHotelStatus={getHotelStatus}
              getSortBy={getSortBy}
              handleViewDetails={handleViewDetails}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />

            {/* Mobile Cards */}
            <HotelMobilCard
              filteredHotels={filteredHotels}
              getCityFromLocation={getCityFromLocation}
              handleViewDetails={handleViewDetails}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </div>

      {/* Edit Hotel Dialog */}
      <EditHotelDialog
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        t={t}
        selectedHotel={selectedHotel || ({} as HotelNew)}
        onHotelUpdated={() => {
          // Refresh hotels list after update
          const fetchHotels = async () => {
            try {
              const response = await adminService.getAllHotelsWithPagination(1, 100);
              if (response.hotels || response.data) {
                const hotels = response.hotels || response.data || [];
                setAllHotels(hotels);
                const activeHotels = hotels.filter((hotel: HotelNew) => hotel.isActive === true);
                setFilteredHotels(activeHotels);
              }
            } catch (error) {
              console.error("Error refreshing hotels:", error);
            }
          };
          fetchHotels();
        }}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteHotelDialog
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        t={t}
        selectedHotel={selectedHotel || ({} as HotelNew)}
        confirmDelete={confirmDelete}
      />

      {/* Add Hotel Dialog */}
      <AddHotelDialog
        isAddHotelDialogOpen={isAddHotelDialogOpen}
        setIsAddHotelDialogOpen={setIsAddHotelDialogOpen}
        t={t}
      />
    </div>
  );
}
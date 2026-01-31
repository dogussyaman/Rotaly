"use client";

import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "@/components/hotelCard";
import { RootState } from "@/store/store";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { HotelNew, QueryHotelInput } from "@/types/hotel";
import { Button } from "./ui/button";
import { clearSearch } from "@/store/search/search-slice";
import { clearFilters } from "@/store/filter/filter-slice";
import { hotelService } from "@/services";

interface HotelApiResponse {
  hotels: HotelNew[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function HotelListWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hotels, setHotels] = useState<HotelNew[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  // Store'dan search verilerini al
  const { city, guests, checkIn, checkOut } = useSelector((state: RootState) => state.search);
  // Store'dan filter verilerini al
  const filterState = useSelector((state: RootState) => state.filter);

  // API'den otelleri getir
  const fetchHotels = async (queryParams: QueryHotelInput) => {
    console.log("fetchHotels - query params:", queryParams);
    setLoading(true);
    try {
      const response: HotelApiResponse = await hotelService.getHotels(queryParams);
      console.log("fetchHotels - API response:", response);
      
      // Test için mock indirim verisi ekleyelim
      const hotelsWithDiscount = response.hotels?.map((hotel, index) => ({
        ...hotel,
        // Her 3. otele indirim ekle
        isDiscounted: index % 3 === 0,
        discountRate: index % 3 === 0 ? 25 : null,
        // Test features ekle
        features: index % 2 === 0 ? ['WIFI', 'POOL', 'SPA', 'PARKING', 'GYM'] : ['WIFI', 'PARKING'],
        cancelText: "Ücretsiz İptal",
        breakfastText: "Kahvaltı Dahil",
        parkingText: index % 2 === 0 ? "Ücretsiz Otopark" : null,
      })) || [];
      
      console.log("fetchHotels - hotels with discount:", hotelsWithDiscount);
      console.log("fetchHotels - hotels count:", hotelsWithDiscount.length);
      
      setHotels(hotelsWithDiscount);
      setPagination(response.pagination || { page: 1, limit: 9, total: 0, totalPages: 0 });
    } catch (error) {
      console.error("Oteller yüklenirken hata:", error);
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  // Filtreleri ve search parametrelerini API için hazırla
  const buildQueryParams = useMemo((): QueryHotelInput => {
    const params: QueryHotelInput = {
      page: currentPage,
      limit: 9,
      isActive: true,
    };

    // Search parametreleri
    if (city.trim()) params.city = city;
    if (guests > 0) {
      // Misafir sayısını room kapasitesine göre filtreleyeceğiz
      // Bu kısmı API'de implement etmek gerekiyor
    }

    // Filter state'den gelen filtreler
    if (filterState.categories.length > 0) {
      // Kategori filtresi - ilk kategoriyi type olarak kullan
      params.type = filterState.categories[0] as "APARTMENT" | "HOTEL" | "VILLA" | "BUNGALOW" | "ROOM" | "RESORT" | "HOSTEL" | "CAMP";
    }
    
    if (filterState.minRating) params.minRating = filterState.minRating;
    if (filterState.maxRating) params.maxRating = filterState.maxRating;
    
    // Fiyat aralığı - API'de henüz desteklenmiyor ama hazırlık
    if (filterState.priceRange[0] > 50) params.minPrice = filterState.priceRange[0];
    if (filterState.priceRange[1] < 100000) params.maxPrice = filterState.priceRange[1];
    
    if (filterState.sortBy) params.sortBy = filterState.sortBy as "name" | "rating" | "createdAt" | "updatedAt" | "discountRate" | "discountPrice";
    if (filterState.sortOrder) params.sortOrder = filterState.sortOrder;

    return params;
  }, [currentPage, city, guests, filterState]);

  // İlk yükleme ve parametreler değiştiğinde otelleri getir
  useEffect(() => {
    console.log("HotelListWithPagination - buildQueryParams:", buildQueryParams);
    console.log("HotelListWithPagination - city from store:", city);
    console.log("HotelListWithPagination - filterState:", filterState);
    fetchHotels(buildQueryParams);
  }, [buildQueryParams, city, filterState]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Gece sayısı hesaplama - checkIn ve checkOut boşsa default 1 gece
  let totalDays = 1;
  if (checkIn && checkOut && checkIn !== "" && checkOut !== "") {
    const totalDate = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    totalDays = Math.ceil(totalDate / (1000 * 60 * 60 * 24));
    // Negatif veya 0 ise 1 gece yap
    if (totalDays <= 0) totalDays = 1;
  }
  console.log("checkIn:", checkIn, "checkOut:", checkOut);
  console.log("totalDays:", totalDays);

  const totalPrice = hotels.reduce((acc, hotel) => {
    return acc + (hotel.rooms[0]?.price || 0) * totalDays;
  }, 0);

  console.log("totalPrice", totalPrice);

  return (
    <div className="bg-background">
      <div className="px-6 flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <h2 className="text-base md:text-xl font-bold text-foreground">
            {city && (
              <span className="text-sm md:text-base text-muted-foreground ml-2">
                &quot;{city}&quot; için {" "}
              </span>
            )}
          </h2>
          <span>{pagination.total} sonuç bulundu</span>
        </div>
        <div>
          <Button 
            variant="outline" 
            onClick={() => {
              dispatch(clearSearch());
              dispatch(clearFilters());
              setCurrentPage(1);
            }}
          >
            Tüm Otelleri Görüntüle
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          Sayfa {pagination.page}/{pagination.totalPages}
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-lg">Oteller yükleniyor...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {hotels.map((hotel: HotelNew) => {
                const cancelText = "Ücretsiz iptal";
                const breakfastText = "Kahvaltı dahil";
                const parkingText = "Otopark mevcut";

                return (
                  <HotelCard
                    key={hotel.id}
                    item={{
                      id: hotel.id,
                      name: hotel.name,
                      location: hotel.location,
                      rating: hotel.rating,
                      price: hotel.rooms[0]?.price || 0, // Number olarak gönder
                      image: hotel.images[0]?.url || "/images/hotel-placeholder.jpg",
                      nights: totalDays,
                      cancelText,
                      breakfastText,
                      parkingText,
                      checkIn: hotel.checkIn || "12:00",
                      checkOut: hotel.checkOut || "14:00",
                      discountRate: hotel.discountRate ?? undefined, // null olması durumunda undefined olarak ayarla
                      isDiscounted: hotel.isDiscounted || false,
                      discountStartDate: hotel.discountStartDate ?? undefined,
                      discountEndDate: hotel.discountEndDate ?? undefined,
                      type: hotel.type,
                      ownerId: hotel.ownerId,
                      isActive: hotel.isActive,
                    }}
                  />
                );
              })}
            </div>

            {pagination.totalPages > 1 && (
              <div className="flex justify-center items-center mt-10">
                <Pagination>
                  <PaginationContent>
                    {pagination.page > 1 && (
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pagination.page - 1);
                          }}
                        />
                      </PaginationItem>
                    )}

                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            isActive={page === pagination.page}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(page);
                            }}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    {pagination.page < pagination.totalPages && (
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(pagination.page + 1);
                          }}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HotelListWithPagination;
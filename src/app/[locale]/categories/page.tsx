
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Filters } from "@/components/filters";
import { BookingSearch } from "@/components/home/booking-search";
import HotelListWithPagination from "@/components/hotel-list-with-pagination";
import MobileFilter from "@/components/mobile-filter";
import { setCity } from "@/store/search/search-slice";
import { useSearchParams } from "next/navigation";

interface CategoryPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function CategoryPage({
}: CategoryPageProps) {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  // URL parametrelerini Redux store'a set et
  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam) {
      dispatch(setCity(cityParam));
    }
  }, [dispatch, searchParams]);

  const handleSearch = () => {
    const categoryPage = document.querySelector(".category-page");
    if (categoryPage) {
      categoryPage.scrollIntoView({ behavior: "smooth" });
    }
  };






  return (
    <div className="min-h-1/2 md:min-h-screen bg-background">
      <div className="relative mb-16">
        {/* Hero Banner */}
        <div className="relative w-full h-[55vh] overflow-visible">
          <div
            className="absolute top-0 left-0 w-full h-[350px] bg-gray-100 dark:bg-gray-800 z-0"
            style={{
              mask: "url('/images/map.svg') no-repeat center / cover",
              WebkitMask: "url('/images/map.svg') no-repeat center / cover",
            }}
          ></div>
        </div>
        <div className="-mt-[300px] sm:-mt-[200px] md:-mt-[150px] lg:-mt-[180px] max-w-6xl flex justify-center items-center mx-auto relative z-20">
          <BookingSearch handleSearch={handleSearch} />
        </div>

        {/* Ana içerik */}
        <div className="container mx-auto px-4 pt-32 pb-8 category-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {/* Filtreler */}
            <Filters />
            <MobileFilter />

            {/* Otel Listesi */}
            <div className="lg:col-span-3">
              <HotelListWithPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

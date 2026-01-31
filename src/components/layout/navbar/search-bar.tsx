"use client";

import { Input } from "@/components/ui/input";
import { Mic, SearchIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

import { hotelData } from "@/data/dumy";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const SearchBar = () => {
  const t = useTranslations("Navigation");
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsListOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredHotels = hotelData.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(query.toLowerCase()) ||
      hotel.location.toLowerCase().includes(query.toLowerCase())
  );

  const handleHotelClick = () => {
    setQuery("");
    setIsListOpen(false);
  };

  return (
    <div className="hidden md:flex flex-1 justify-center" ref={searchRef}>
      <div className="relative w-full max-w-md">
        <Input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length > 2) setIsListOpen(true);
          }}
          placeholder={t("searchPlaceholder")}
          className="pl-10 rounded-lg border border-gray-300 shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
        />
        <SearchIcon className="absolute left-3 top-2 h-5 w-5 pointer-events-none opacity-50" />
        <Mic
          color={darkMode ? "white" : "black"}
          size={18}
          className="absolute right-3 top-2.5 opacity-70 cursor-pointer z-10 hover:opacity-100 transition-opacity"
        />

        {isListOpen && query.length > 2 && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-background border border-gray-200 rounded-lg shadow-lg z-50
                     max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
          >
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={"/hotels/3"}
                  className="flex items-center justify-between gap-4 p-3 hover:bg-accent/30 transition-colors rounded-lg cursor-pointer"
                  onClick={handleHotelClick}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover flex-shrink-0 shadow-md"
                    />
                    <div className="flex flex-col overflow-hidden max-w-[180px]">
                      <span className="font-semibold text-foreground truncate">
                        {hotel.name}
                      </span>
                      <span className="text-sm text-muted-foreground truncate">
                        {hotel.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">
                    {hotel.price}
                  </span>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Sonuç bulunamadı
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

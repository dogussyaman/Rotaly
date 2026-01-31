"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { reservations } from "@/data/dumy";
import ReservationFilters from "@/components/dashboard/hotel/reservations/reservation-filter";
import ReservationTable from "@/components/dashboard/hotel/reservations/reservation-table";
import ReservationMobileCard from "@/components/dashboard/hotel/reservations/reservation-mobile-card";
import { Reservation } from "@/types/reservation";


export default function ReservationPage() {
  const t = useTranslations("Reservations");
  const hotelReservations = reservations.filter(res => res.hotelAddress === "Otel Sokak No:1, İstanbul");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReservations, setFilteredReservations] = useState(hotelReservations);

  const statsData = [
    {
      title: t("allReservations"),
      value: hotelReservations.length.toString(),
      subtitle: "",
    },
    {
      title: t("totalGuests"),
      value: hotelReservations.reduce((acc, res) => acc + res.guests, 0).toString(),
      subtitle: "",
    },
    {
      title: t("totalRevenue"),
      value: hotelReservations.reduce((acc, res) => acc + res.totalPrice, 0).toString(),
      subtitle: "",
    },
    {
      title: t("verifiedReservations"),
      value: hotelReservations.filter((res) => res.isVerified).length.toString(),
      subtitle: "",
    },
  ];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = hotelReservations.filter(
      (res) =>
        res.userPhone.toLowerCase().includes(value.toLowerCase()) ||
        (res.specialRequest && res.specialRequest.toLowerCase().includes(value.toLowerCase()))
    );
    setFilteredReservations(filtered);
  };

  const activeFilter = (value: string) => {
    if (value === "all") {
      setFilteredReservations(hotelReservations);
    } else if (value === "verified") {
      setFilteredReservations(hotelReservations.filter((res) => res.isVerified === true));
    } else if (value === "unverified") {
      setFilteredReservations(hotelReservations.filter((res) => res.isVerified === false));
    }
  };

  const sortBy = (sort: string) => {
    const sortedReservations = [...filteredReservations].sort((a, b) => {
      if (sort === "startDate") return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      if (sort === "startDate-desc") return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      if (sort === "endDate") return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      if (sort === "endDate-desc") return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
      if (sort === "totalPrice") return a.totalPrice - b.totalPrice;
      if (sort === "totalPrice-desc") return b.totalPrice - a.totalPrice;
      if (sort === "guests") return a.guests - b.guests;
      if (sort === "guests-desc") return b.guests - a.guests;
      if (sort === "hotelAddress") return a.hotelAddress.localeCompare(b.hotelAddress);
      if (sort === "hotelAddress-desc") return b.hotelAddress.localeCompare(a.hotelAddress);
      if (sort === "id") return a.id.localeCompare(b.id);
      if (sort === "id-desc") return b.id.localeCompare(a.id);
      if (sort === "createdAt") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sort === "createdAt-desc") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0;
    });
    setFilteredReservations(sortedReservations);
  };

  const handleDelete = (reservation: Reservation) => {
    setFilteredReservations(prev => prev.filter(res => res.id !== reservation.id));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[0].title}</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {statsData[0].value}
                  </p>
                </div>
                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">📋</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[1].title}</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {statsData[1].value}
                  </p>
                </div>
                <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">👥</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[2].title}</p>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {statsData[2].value}₺
                  </p>
                </div>
                <div className="h-8 w-8 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">💰</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[3].title}</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {statsData[3].value}
                  </p>
                </div>
                <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">✅</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reservation List Section */}
        <Card className="bg-card border border-border">
          <CardHeader className="pb-4">
            <ReservationFilters
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              activeFilter={activeFilter}
              sortBy={sortBy}
            />
          </CardHeader>

          <CardContent className="p-0">
            {/* Desktop Table */}
            <ReservationTable
              filteredReservations={filteredReservations}
              activeFilter={activeFilter}
              sortBy={sortBy}
              handleDelete={handleDelete}
            />

            {/* Mobile Cards */}
            <ReservationMobileCard
              filteredReservations={filteredReservations}
              handleDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reservation } from "@/types/reservation";

interface ReservationMobileCardProps {
  filteredReservations: Reservation[];
  handleDelete: (reservation: Reservation) => void;
}

const ReservationMobileCard = ({ filteredReservations, handleDelete }: ReservationMobileCardProps) => {
  const t = useTranslations("Reservations");

  const formatDate = (date?: string | Date | null) => {
    if (!date) return "-";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("tr-TR");
  };

  return (
    <div className="lg:hidden space-y-4 p-4">
      {filteredReservations.map((reservation) => (
        <Card key={reservation.id} className="border border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    {t("reservationId")}: {reservation.id}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(reservation.startDate)} - {formatDate(reservation.endDate)}
                  </p>
                </div>
                <Badge
                  variant={reservation.isVerified ? "default" : "secondary"}
                  className={
                    reservation.isVerified
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  }
                >
                  {reservation.isVerified ? t("verified") : t("unverified")}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">{t("guests")}</p>
                  <p className="font-medium text-foreground">
                    {reservation.guests}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("totalPrice")}</p>
                  <p className="font-medium text-foreground">
                    {reservation.totalPrice.toLocaleString("tr-TR")} TL
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("hotelAddress")}</p>
                  <p className="text-foreground">
                    {reservation.hotelAddress}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("createdAt")}</p>
                  <p className="text-foreground">
                    {formatDate(reservation.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Özel İstek</p>
                  <p className="text-foreground">
                    {reservation.specialRequest || "-"}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Ödeme Yöntemi</p>
                  <p className="text-foreground">
                    {reservation.paymentMethod}
                  </p>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex justify-end pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(reservation)}
                  className="text-red-600 border-red-200 hover:bg-red-50"
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

export default ReservationMobileCard;

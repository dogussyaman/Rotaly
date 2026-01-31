"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Filter, Trash } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Reservation } from "@/types/reservation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface ReservationTableProps {
  filteredReservations: Reservation[];
  activeFilter: (value: string) => void;
  sortBy: (sort: string) => void;
  handleDelete: (reservation: Reservation) => void;
}

const ReservationTable = ({
  filteredReservations,
  activeFilter,
  sortBy,
  handleDelete,
}: ReservationTableProps) => {
  const t = useTranslations("Reservations");

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  const handleDeleteClick = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setOpenDelete(true);
  };

  return (
    <div className="hidden lg:block">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("reservationId")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("id")}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("id-desc")}>
                      Z-A
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("checkIn")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("startDate")}>
                      En Yeni
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("startDate-desc")}>
                      En Eski
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("checkOut")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("endDate")}>
                      En Yeni
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("endDate-desc")}>
                      En Eski
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("guests")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("guests")}>
                      En Düşük
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("guests-desc")}>
                      En Yüksek
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("totalPrice")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("totalPrice")}>
                      En Düşük
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("totalPrice-desc")}>
                      En Yüksek
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground">
              <div className="flex items-center justify-between">
                {t("hotelAddress")}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => sortBy("hotelAddress")}>
                      A-Z
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => sortBy("hotelAddress-desc")}>
                      Z-A
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
                    <DropdownMenuItem onClick={() => activeFilter("verified")}>
                      {t("verified")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => activeFilter("unverified")}>
                      {t("unverified")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => activeFilter("all")}>
                      {t("allStatus")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReservations.map((reservation) => (
            <TableRow
              key={reservation.id}
              className="border-border hover:bg-muted/50"
            >
              <TableCell>
                <div>
                  <p className="font-medium text-foreground">
                    {reservation.id}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-foreground">
                {new Date(reservation.startDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-foreground">
                {new Date(reservation.endDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-foreground">
                {reservation.guests}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {reservation.totalPrice.toLocaleString("tr-TR")} TL
              </TableCell>
              <TableCell className="text-foreground">
                {reservation.hotelAddress}
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteClick(reservation)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/*Delete Dialog */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogTitle>Rezervasyon Sil</DialogTitle>
          <p>Bu rezervasyonu silmek istediğinize emin misiniz?</p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">İptal</Button>
            </DialogClose>
            <Button
              onClick={() => {
                if (selectedReservation) handleDelete(selectedReservation);
                setOpenDelete(false);
              }}
            >
              Evet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReservationTable;

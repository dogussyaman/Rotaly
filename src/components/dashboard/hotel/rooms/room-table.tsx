"use client";

import { FC } from "react";
import { Room } from "@/types/room";
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
import { MoreHorizontal, Eye, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface RoomTableProps {
  filteredRooms: Room[];
  handleViewDetails: (room: Room) => void;

  handleDelete: (room: Room) => void;
}

const RoomTable: FC<RoomTableProps> = ({
  filteredRooms,
  handleViewDetails,
  handleDelete,
}) => {
  const t = useTranslations("Rooms");

  return (
    <div className="hidden md:block overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-muted-foreground">
              {t("room-image")}
            </TableHead>

            <TableHead className="text-muted-foreground">
              {t("roomName")}
            </TableHead>
            <TableHead className="text-muted-foreground">
              {t("roomType")}
            </TableHead>
            <TableHead className="text-muted-foreground">
              {t("roomNumber")}
            </TableHead>

            <TableHead className="text-muted-foreground">
              {t("price")}
            </TableHead>
            <TableHead className="text-muted-foreground">
              {t("capacity")}
            </TableHead>

            <TableHead className="text-muted-foreground">
              {t("bedCount")}
            </TableHead>
            <TableHead className="text-muted-foreground">
              {t("status")}
            </TableHead>
            <TableHead className="text-muted-foreground w-12"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredRooms.map((room) => (
            <TableRow key={room.id} className="hover:bg-muted/50">
              {/* Görsel */}
              <TableCell>
                {room.images.length > 0 ? (
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    className="h-12 w-20 object-cover rounded-md"
                    width={96}
                    height={96}
                  />
                ) : (
                  <div className="h-12 w-20 bg-gray-200 rounded-md" />
                )}
              </TableCell>


              <TableCell>{room.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  {room.type}
                </Badge>
              </TableCell>
              <TableCell>{room.roomNumber}</TableCell>

              <TableCell>{room.price} ₺</TableCell>
              <TableCell>{room.capacity}</TableCell>

              <TableCell>{room.bedCount}</TableCell>
              <TableCell>
                <Badge
                  variant={room.isAvailable ? "default" : "secondary"}
                  className={
                    room.isAvailable
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                  }
                >
                  {room.isAvailable ? t("available") : t("unavailable")}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewDetails(room)}>
                      <Eye className="h-4 w-4 mr-2" />
                      {t("viewDetails")}
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleDelete(room)}
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
    </div>
  );
};

export default RoomTable;

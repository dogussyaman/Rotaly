"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog} from "@/components/ui/dialog";

import RoomFilters from "@/components/dashboard/hotel/rooms/room-filter";
import RoomTable from "@/components/dashboard/hotel/rooms/room-table";
import RoomMobileCard from "@/components/dashboard/hotel/rooms/room-mobile";
import DeleteRoomDialog from "@/components/dashboard/hotel/rooms/delete-rooms";
import AddRoomDialog from "@/components/dashboard/hotel/rooms/add-room";
import EditRoomDialog from "@/components/dashboard/hotel/rooms/edit-rooms";
import { Room } from "@/types/room";
import { rooms } from "@/data/dumy";

export default function RoomPricePage() {
  const t = useTranslations("Rooms");
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddRoomDialogOpen, setIsAddRoomDialogOpen] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = rooms.filter(
      (room) =>
        room.name.toLowerCase().includes(value.toLowerCase()) ||
        room.hotelId.toLowerCase().includes(value.toLowerCase()) ||
        room.type.toLowerCase().includes(value.toLowerCase()) ||
        room.roomNumber.toString().includes(value)
    );
    setFilteredRooms(filtered);
  };

  const handleViewDetails = (room: Room) => {
    router.push(`/dashboard/hotel/room-price/${room.id}`);
  };

  const handleDelete = (room: Room) => {
    setSelectedRoom(room);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    console.log(t("deletingRoom"), selectedRoom?.id);
    setIsDeleteDialogOpen(false);
    setSelectedRoom(null);
  };

  const getRoomStatus = (status: string) => {
    if (status === "Available") {
      setFilteredRooms(rooms.filter((r) => r.isAvailable));
    } else if (status === "Unavailable") {
      setFilteredRooms(rooms.filter((r) => !r.isAvailable));
    } else {
      setFilteredRooms(rooms);
    }
  };

  const getSortBy = (sortBy: string) => {
    const sortedRooms = [...rooms].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "type":
          return a.type.localeCompare(b.type);
        case "roomNumber":
          return a.roomNumber - b.roomNumber;
        case "price":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "capacity":
          return a.capacity - b.capacity;
        case "capacity-desc":
          return b.capacity - a.capacity;
        case "createdAt":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "createdAt-desc":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
    setFilteredRooms(sortedRooms);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Ortalama Fiyat */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("averagePrice")}</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.round(rooms.reduce((acc, room) => acc + room.price, 0) / rooms.length)}₺
                </p>
              </div>
              <div className="h-8 w-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 text-sm font-bold">₺</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* En Yüksek Fiyat */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("highestPrice")}</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.max(...rooms.map((room) => room.price))}₺
                </p>
              </div>
              <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">↑</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* En Düşük Fiyat */}
        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("lowestPrice")}</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {Math.min(...rooms.map((room) => room.price))}₺
                </p>
              </div>
              <div className="h-8 w-8 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">↓</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toplam Gelir Potansiyeli */}
        <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{t("totalRevenue")}</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {rooms.reduce((acc, room) => acc + room.price, 0).toLocaleString()}₺
                </p>
              </div>
              <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">💰</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Oda Listesi */}
      <Card className="bg-background border border-border rounded-xl shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">{t("roomList")}</h2>
              <p className="text-sm text-muted-foreground">{t("manageRooms")}</p>
            </div>
            <RoomFilters
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              getRoomStatus={getRoomStatus}
              getSortBy={getSortBy}
              setIsAddRoomDialogOpen={setIsAddRoomDialogOpen}
            />
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="hidden lg:block">
            <RoomTable
              filteredRooms={filteredRooms}
              handleViewDetails={handleViewDetails}
              handleDelete={handleDelete}
            />
          </div>

          <div className="block lg:hidden space-y-4">
            <RoomMobileCard
              filteredRooms={filteredRooms}
              handleViewDetails={handleViewDetails}
              handleDelete={handleDelete}
              handleEdit={() => {}}
            />
          </div>
        </CardContent>
      </Card>

      {/* Dialoglar */}
      <Dialog open={isAddRoomDialogOpen} onOpenChange={setIsAddRoomDialogOpen}>
        <AddRoomDialog
          isAddRoomDialogOpen={isAddRoomDialogOpen}
          setIsAddRoomDialogOpen={setIsAddRoomDialogOpen}
        />
      </Dialog>

      <EditRoomDialog
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        selectedRoom={selectedRoom || ({} as Room)}
      />

      <DeleteRoomDialog
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        selectedRoom={selectedRoom || ({} as Room)}
        confirmDelete={confirmDelete}
      />
    </div>
  );
}

"use client";

import { FC } from "react";
import { Room } from "@/types/room";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";

interface RoomMobileCardProps {
  filteredRooms: Room[];
  handleViewDetails: (room: Room) => void;
  handleEdit: (room: Room) => void;
  handleDelete: (room: Room) => void;
}

const RoomMobileCard: FC<RoomMobileCardProps> = ({
  filteredRooms,
  handleViewDetails,
  handleDelete,
}) => {
  return (
    <div className="md:hidden space-y-4 p-4">
      {filteredRooms.map((room) => (
        <Card key={room.id} className="border border-border">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  {room.images && room.images[0] ? (
                    <AvatarImage src={room.images[0]} alt={room.name} />
                  ) : (
                    <AvatarFallback>
                      {room.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{room.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {room.capacity} Kişilik - {room.bedCount} Yatak - {room.type}
                  </p>
                                     <p className="text-xs text-muted-foreground">
                     Oda {room.roomNumber}
                   </p>
                </div>
              </div>
              <Badge
                variant={room.isAvailable ? "default" : "secondary"}
                className={
                  room.isAvailable
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : "bg-red-100 text-red-800 hover:bg-red-100"
                }
              >
                {room.isAvailable ? "Mevcut" : "Mevcut Değil"}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">{room.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Fiyat</p>
                <p className="font-medium text-foreground">{room.price} ₺</p>
              </div>
              <div>
                <p className="text-muted-foreground">Kapasite</p>
                <p className="font-medium text-foreground">{room.capacity} Kişi</p>
              </div>
            </div>

            {room.featureStatus && room.featureStatus.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {room.featureStatus.map((feature) => (
                  <Badge key={feature.id} variant="outline">
                    {feature.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Mobile Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewDetails(room)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-2" />
                Görüntüle
              </Button>
          
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDelete(room)}
                className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash className="h-4 w-4 mr-2" />
                Sil
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RoomMobileCard;

"use client";

import { FC, useState } from "react";
import { Room } from "@/types/room";
import { useTranslations } from "next-intl";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface AddRoomDialogProps {
  isAddRoomDialogOpen: boolean;
  setIsAddRoomDialogOpen: (value: boolean) => void;
}

const AddRoomDialog: FC<AddRoomDialogProps> = ({
  setIsAddRoomDialogOpen,
}) => {
  const t = useTranslations("Rooms");
  const [newRoom, setNewRoom] = useState<Partial<Room & { image?: File }>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewRoom({ ...newRoom, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Oda eklendi:", newRoom);
    setIsAddRoomDialogOpen(false);
    setNewRoom({});
    setPreviewImage(null);
  };

  const handleCancel = () => {
    setIsAddRoomDialogOpen(false);
    setNewRoom({});
    setPreviewImage(null);
  };

  return (
    <DialogContent className="sm:max-w-[700px] w-full max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{t("addRoomTitle")}</DialogTitle>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        {/* Oda Adı */}
        <div className="grid gap-2">
          <Label htmlFor="name">{t("roomName")}</Label>
          <Input
            id="name"
            placeholder={t("roomNamePlaceholder")}
            value={newRoom.name || ""}
            onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
          />
        </div>

        {/* Oda Açıklaması */}
        <div className="grid gap-2">
          <Label htmlFor="description">{t("description")}</Label>
          <Textarea
            id="description"
            placeholder={t("roomDescriptionPlaceholder")}
            value={newRoom.description || ""}
            onChange={(e) =>
              setNewRoom({ ...newRoom, description: e.target.value })
            }
            rows={3}
          />
        </div>

        {/* Oda Türü */}
        <div className="grid gap-2">
          <Label htmlFor="type">{t("roomType")}</Label>
          <Select
            value={newRoom.type || ""}
            onValueChange={(value) => setNewRoom({ ...newRoom, type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder={t("roomTypePlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="STANDARD">Standart</SelectItem>
              <SelectItem value="DELUXE">Deluxe</SelectItem>
              <SelectItem value="SUITE">Süit</SelectItem>
              <SelectItem value="PRESIDENTIAL">Başkanlık</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Yetişkin / Çocuk */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="maxAdults">{t("maxAdults")}</Label>
            <Input
              id="maxAdults"
              type="number"
              placeholder={t("maxAdultsPlaceholder")}
              value={newRoom.maxAdults || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, maxAdults: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="maxChildren">{t("maxChildren")}</Label>
            <Input
              id="maxChildren"
              type="number"
              placeholder={t("maxChildrenPlaceholder")}
              value={newRoom.maxChildren || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, maxChildren: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Kat / Oda Numarası */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="floor">{t("floor")}</Label>
            <Input
              id="floor"
              type="number"
              placeholder={t("floorPlaceholder")}
              value={newRoom.floor || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, floor: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roomNumber">{t("roomNumber")}</Label>
            <Input
              id="roomNumber"
              type="number"
              placeholder={t("roomNumberPlaceholder")}
              value={newRoom.roomNumber || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, roomNumber: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Fiyat */}
        <div className="grid gap-2">
          <Label htmlFor="price">{t("price")}</Label>
          <Input
            id="price"
            type="number"
            placeholder={t("pricePlaceholder")}
            value={newRoom.price || ""}
            onChange={(e) =>
              setNewRoom({ ...newRoom, price: Number(e.target.value) })
            }
          />
        </div>

        {/* Kapasite / Yatak Sayısı */}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="capacity">{t("capacity")}</Label>
            <Input
              id="capacity"
              type="number"
              placeholder={t("capacityPlaceholder")}
              value={newRoom.capacity || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, capacity: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bedCount">{t("bedCount")}</Label>
            <Input
              id="bedCount"
              type="number"
              placeholder={t("bedCountPlaceholder")}
              value={newRoom.bedCount || ""}
              onChange={(e) =>
                setNewRoom({ ...newRoom, bedCount: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Oda Görseli */}
        <div className="grid gap-2">
          <Label htmlFor="roomImage">{t("roomImage")}</Label>
          <Input
            id="roomImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {previewImage && (

            <div className="relative h-40 w-full mt-2">
              <Image
                src={previewImage}
                alt="Oda Önizleme"
                fill
                className="object-cover rounded"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={handleCancel}>
          {t("cancel")}
        </Button>
        <Button onClick={handleSave}>{t("save")}</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddRoomDialog;

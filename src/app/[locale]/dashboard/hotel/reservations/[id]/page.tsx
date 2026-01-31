"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Settings } from "lucide-react";
import { Room } from "@/types/room";

import { rooms } from "@/data/dumy";
import Image from "next/image";

export default function RoomDetailPage() {
  const t = useTranslations("Rooms");
  const params = useParams();
  const router = useRouter();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRoom = rooms.find((r: Room) => r.id === params.id);
    if (foundRoom) {
      setRoom(foundRoom);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="p-4 md:p-6 lg:p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {t("roomNotFound")}
        </h1>
        <Button onClick={() => router.back()}>{t("back")}</Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("back")}
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{room.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              className={`px-3 py-1 rounded-lg text-white ${
                room.isAvailable ? "bg-green-300" : "bg-red-500"
              }`}
            >
              {room.isAvailable ? t("available") : t("notAvailable")}
            </Badge>

            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              {t("edit")}
            </Button>
          </div>
        </div>

        {/* Images & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex justify-center">
            {room.images.length > 0 ? (
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{
                  maxWidth: "800px",
                  height: "420px",
                }}
              >
                <Image
                  src={room.images[0]}
                  alt={`${room.name} main image`}
                  className="w-full h-full object-cover rounded-lg"
                  width={800}
                  height={420}
                />
              </div>
            ) : (
              <div
                className="w-full bg-gray-200 rounded-lg"
                style={{ maxWidth: "800px", height: "500px" }}
              />
            )}
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {t("basicInformation")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 -mt-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("price")}</span>
                  <span className="font-medium">{room.price} ₺</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("capacity")}</span>
                  <span className="font-medium">{room.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t("bedCount")}</span>
                  <span className="font-medium">{room.bedCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t("createdAt")}
                  </span>
                  <span className="font-medium">
                    {new Date(room.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t("updatedAt")}
                  </span>
                  <span className="font-medium">
                    {new Date(room.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("description")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground -mt-3">
                  {room.description || t("noDescription")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">{t("overview")}</TabsTrigger>
            <TabsTrigger value="edit">{t("editRoom")}</TabsTrigger>
          </TabsList>

          {/* Genel Bakış */}
          <TabsContent value="overview" className="p-6 space-y-4">
            <h2 className="text-xl font-semibold -mt-3">{t("roomDetails")}</h2>

            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("hotelId")}</span>
              <span className="font-medium">{room.hotelId}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("roomId")}</span>
              <span className="font-medium">{room.id}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("availability")}</span>
              <span
                className={`px-3 py-1 rounded-lg font-medium text-white ${
                  room.isAvailable ? "bg-green-300" : "bg-red-500"
                }`}
              >
                {room.isAvailable ? t("available") : t("notAvailable")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("capacity")}</span>
              <span className="font-medium">{room.capacity}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">{t("price")}</span>
              <span className="font-medium">{room.price} ₺</span>
            </div>
          </TabsContent>

          {/* Düzenle */}
          <TabsContent value="edit" className="p-6">
            <h2 className="text-xl font-semibold -mt-2">{t("editRoom")}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Güncellenen oda:", room);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Oda adı */}
              <div>
                <label className="block text-sm font-medium mt-5">
                  {t("roomName")}
                </label>
                <input
                  type="text"
                  value={room.name}
                  onChange={(e) => setRoom({ ...room, name: e.target.value })}
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>

              {/* Fiyat */}
              <div>
                <label className="block text-sm font-medium mt-5">
                  {t("price")}
                </label>
                <input
                  type="number"
                  value={room.price}
                  onChange={(e) =>
                    setRoom({ ...room, price: Number(e.target.value) })
                  }
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>

              {/* Kapasite */}
              <div>
                <label className="block text-sm font-medium">
                  {t("capacity")}
                </label>
                <input
                  type="number"
                  value={room.capacity}
                  onChange={(e) =>
                    setRoom({ ...room, capacity: Number(e.target.value) })
                  }
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>

              {/* Yatak sayısı */}
              <div>
                <label className="block text-sm font-medium">
                  {t("bedCount")}
                </label>
                <input
                  type="number"
                  value={room.bedCount}
                  onChange={(e) =>
                    setRoom({ ...room, bedCount: Number(e.target.value) })
                  }
                  required
                  className="mt-1 block w-full border rounded p-2"
                />
              </div>

              {/* Açıklama ve Resim aynı satır */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Açıklama */}
                <div>
                  <label className="block text-sm font-medium">
                    {t("description")}
                  </label>
                  <textarea
                    value={room.description}
                    onChange={(e) =>
                      setRoom({ ...room, description: e.target.value })
                    }
                    required
                    className="mt-1 block w-full border rounded p-2 h-full"
                  />
                </div>

                {/* Resim seçme */}
                <div>
                  <label className="block text-sm font-medium">
                    {t("room-image")}
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (!files) return;
                      const urls = Array.from(files).map((file) =>
                        URL.createObjectURL(file)
                      );
                      setRoom({ ...room, images: urls });
                    }}
                    className="mt-1 block w-full border rounded p-2"
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {room.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`room-${i}`}
                        className="w-24 h-24 object-cover rounded border"
                        width={96}
                        height={96}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Kaydet butonu */}
              <div className="md:col-span-2 flex justify-end">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 text-lg"
                >
                  {t("save")}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

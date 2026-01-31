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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">{room.name}</h3>
                  <p className="text-base opacity-95 leading-relaxed">{room.description || t("noDescription")}</p>
                </div>
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
            <Card className="border-2 border-gray-100 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {t("basicInformation")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">₺</span>
                    <span className="text-sm text-muted-foreground">{t("price")}</span>
                  </div>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{room.price} ₺</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400 text-lg">👥</span>
                    <span className="text-sm text-muted-foreground">{t("capacity")}</span>
                  </div>
                  <span className="font-bold text-green-600 dark:text-green-400">{room.capacity}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 dark:text-purple-400 text-lg">🛏️</span>
                    <span className="text-sm text-muted-foreground">{t("bedCount")}</span>
                  </div>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{room.bedCount}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 dark:text-orange-400 text-lg">📅</span>
                    <span className="text-sm text-muted-foreground">{t("createdAt")}</span>
                  </div>
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    {new Date(room.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 dark:text-indigo-400 text-lg">🔄</span>
                    <span className="text-sm text-muted-foreground">{t("updatedAt")}</span>
                  </div>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {new Date(room.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>

                 {/* Tabs */}
         <Tabs defaultValue="overview" className="w-full">
           <TabsList className="grid w-full grid-cols-2 mb-4">
             <TabsTrigger value="overview" className="text-sm font-medium">
               {t("overview")}
             </TabsTrigger>
             <TabsTrigger value="edit" className="text-sm font-medium">
               {t("editRoom")}
             </TabsTrigger>
           </TabsList>

           {/* Genel Bakış */}
           <TabsContent value="overview" className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {/* Fiyat Kartı */}
               <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <span className="text-blue-600 dark:text-blue-400 text-lg">₺</span>
                     <span className="text-sm text-muted-foreground">{t("price")}</span>
                   </div>
                   <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{room.price} ₺</span>
                 </div>
               </Card>

               {/* Kapasite Kartı */}
               <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <span className="text-green-600 dark:text-green-400 text-lg">👥</span>
                     <span className="text-sm text-muted-foreground">{t("capacity")}</span>
                   </div>
                   <span className="text-xl font-bold text-green-600 dark:text-green-400">{room.capacity}</span>
                 </div>
               </Card>

               {/* Yatak Kartı */}
               <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <span className="text-purple-600 dark:text-purple-400 text-lg">🛏️</span>
                     <span className="text-sm text-muted-foreground">{t("bedCount")}</span>
                   </div>
                   <span className="text-xl font-bold text-purple-600 dark:text-purple-400">{room.bedCount}</span>
                 </div>
               </Card>
             </div>

             {/* Detay Bilgileri */}
             <Card className="p-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">Oda No</span>
                     <Badge variant="secondary" className="font-mono">{room.roomNumber}</Badge>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">Kat</span>
                     <Badge variant="secondary" className="font-mono">{room.floor}. Kat</Badge>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">Oda Tipi</span>
                     <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs">
                       {room.type === 'STANDARD' && 'Standart'}
                       {room.type === 'DELUXE' && 'Deluxe'}
                       {room.type === 'SUITE' && 'Süit'}
                       {room.type === 'JUNIOR_SUITE' && 'Junior Süit'}
                       {room.type === 'PRESIDENTIAL' && 'Kral Dairesi'}
                     </Badge>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">Maks. Yetişkin</span>
                     <div className="flex items-center gap-1">
                       <span className="text-sm">👨‍👩‍👧‍👦</span>
                       <Badge variant="outline" className="font-mono text-xs">{room.maxAdults}</Badge>
                     </div>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">Maks. Çocuk</span>
                     <div className="flex items-center gap-1">
                       <span className="text-sm">👶</span>
                       <Badge variant="outline" className="font-mono text-xs">{room.maxChildren}</Badge>
                     </div>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm text-muted-foreground">{t("availability")}</span>
                     <Badge className={`text-xs ${
                       room.isAvailable 
                         ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                         : "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                     }`}>
                       {room.isAvailable ? t("available") : t("notAvailable")}
                     </Badge>
                   </div>
                 </div>
               </div>
             </Card>
           </TabsContent>

           {/* Düzenle */}
           <TabsContent value="edit" className="space-y-4">
             <form
               onSubmit={(e) => {
                 e.preventDefault();
                 console.log("Güncellenen oda:", room);
               }}
               className="space-y-4"
             >
               {/* Temel Bilgiler */}
               <Card className="p-4">
                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                   Temel Bilgiler
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       {t("roomName")}
                     </label>
                     <input
                       type="text"
                       value={room.name}
                       onChange={(e) => setRoom({ ...room, name: e.target.value })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       {t("price")} (₺)
                     </label>
                     <input
                       type="number"
                       value={room.price}
                       onChange={(e) => setRoom({ ...room, price: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       {t("capacity")}
                     </label>
                     <input
                       type="number"
                       value={room.capacity}
                       onChange={(e) => setRoom({ ...room, capacity: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       {t("bedCount")}
                     </label>
                     <input
                       type="number"
                       value={room.bedCount}
                       onChange={(e) => setRoom({ ...room, bedCount: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                 </div>
               </Card>

               {/* Konum ve Kapasite */}
               <Card className="p-4">
                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                   Konum ve Kapasite
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       Oda No
                     </label>
                     <input
                       type="number"
                       value={room.roomNumber}
                       onChange={(e) => setRoom({ ...room, roomNumber: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       Kat
                     </label>
                     <input
                       type="number"
                       value={room.floor}
                       onChange={(e) => setRoom({ ...room, floor: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       Oda Tipi
                     </label>
                     <select
                       value={room.type}
                       onChange={(e) => setRoom({ ...room, type: e.target.value })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     >
                       <option value="STANDARD">Standart</option>
                       <option value="DELUXE">Deluxe</option>
                       <option value="SUITE">Süit</option>
                       <option value="JUNIOR_SUITE">Junior Süit</option>
                       <option value="PRESIDENTIAL">Kral Dairesi</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       Maks. Yetişkin
                     </label>
                     <input
                       type="number"
                       value={room.maxAdults}
                       onChange={(e) => setRoom({ ...room, maxAdults: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       Maks. Çocuk
                     </label>
                     <input
                       type="number"
                       value={room.maxChildren}
                       onChange={(e) => setRoom({ ...room, maxChildren: Number(e.target.value) })}
                       required
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                   </div>
                 </div>
               </Card>

               {/* Açıklama ve Resim */}
               <Card className="p-4">
                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                   Açıklama ve Görseller
                 </h3>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                       {t("description")}
                     </label>
                     <textarea
                       value={room.description}
                       onChange={(e) => setRoom({ ...room, description: e.target.value })}
                       required
                       rows={4}
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
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
                       className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                     />
                     {room.images.length > 0 && (
                       <div className="flex flex-wrap gap-2 mt-2">
                         {room.images.map((img, i) => (
                           <Image
                             key={i}
                             src={img}
                             alt={`room-${i}`}
                             className="w-16 h-16 object-cover rounded border"
                             width={64}
                             height={64}
                           />
                         ))}
                       </div>
                     )}
                   </div>
                 </div>
               </Card>

                               {/* Kaydet butonu */}
                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
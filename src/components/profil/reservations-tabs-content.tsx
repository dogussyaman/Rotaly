"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquareIcon, XIcon, EditIcon } from "lucide-react";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { reservationService } from "@/services";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Reservation {
  id: string;
  nightCount: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  hotelAddress: string;
  userPhone: string;
  specialRequest: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
  roomId: string;
  paymentCardId: string;
  room: {
    id: string;
    name: string;
    description: string;
    price: number;
    maxAdults: number;
    maxChildren: number;
    floor: number;
    roomNumber: number;
    capacity: number;
    bedCount: number;
    isAvailable: boolean;
    hotelId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    type: string;
    hotel?: {
      name: string;
      address: string;
    };
  };
  user: {
    id: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
  paymentCard: {
    id: string;
    userId: string;
    token: string;
    brand: string;
    last4: string;
    expiresAt: string;
    createdAt: string;
  };
}

export default function ReservationsContent() {
  const t = useTranslations("UserProfile.reservationsDetails");
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentHotel, setCurrentHotel] = useState({
    name: "",
    location: "",
    image: "",
  });

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [editForm, setEditForm] = useState({
    startDate: "",
    endDate: "",
    guests: 1,
    specialRequest: "",
  });

  const defaultMessage = useCallback((hotelName: string) => [
    { id: 1, message: `Welcome to ${hotelName}! How can I assist you with your reservation?`, sender: "bot" },
  ], []);

  const [messages, setMessages] = useState(defaultMessage(currentHotel.name));
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rezervasyonları ve ödeme kartlarını getir
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const reservationsData = await reservationService.getUserReservations();
        console.log("Reservations Data:", reservationsData);
        console.log("Reservations Items:", reservationsData.items);
        setReservations(reservationsData.items || []);
      } catch (error) {
        console.error("Data fetch error:", error);
        setError(t("loadError"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const reservationsData = await reservationService.getUserReservations();
        console.log("Reservations Data:", reservationsData);
        console.log("Reservations Items:", reservationsData.items);
        setReservations(reservationsData.items || []);
      } catch (error) {
        console.error("Data fetch error:", error);
        setError(t("loadError")); // burası artık güncel dilde çalışır
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]); // ✅ dependency eklendi


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      message,
      sender: "user",
    };
    const botResponse = {
      id: Date.now() + 1,
      message: t("chat.botResponse"),
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setMessage("");
  };

  const openCancelModal = (id: string) => {
    setSelectedReservationId(id);
    setIsCancelModalOpen(true);
  };

  const confirmCancelReservation = async () => {
    if (selectedReservationId !== null) {
      try {
        await reservationService.deleteReservation(selectedReservationId);
        setReservations((prev) => prev.filter((res) => res.id !== selectedReservationId));
        setSelectedReservationId(null);
        setIsCancelModalOpen(false);
        
        // Toast bildirimi
        toast.success(t("toast.cancelled"));
      } catch (error) {
        console.error("Cancel reservation error:", error);
        toast.error(t("toast.cancelError"));
      }
    }
  };

  const openEditModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setEditForm({
      startDate: reservation.startDate ? new Date(reservation.startDate).toISOString().split('T')[0] : "",
      endDate: reservation.endDate ? new Date(reservation.endDate).toISOString().split('T')[0] : "",
      guests: reservation.guests || 1,
      specialRequest: reservation.specialRequest || "",
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateReservation = async () => {
    if (!selectedReservation) return;

    try {
      const updateData = {
        startDate: new Date(editForm.startDate).toISOString(),
        endDate: new Date(editForm.endDate).toISOString(),
        guests: editForm.guests,
        specialRequest: editForm.specialRequest,
      };

      await reservationService.updateReservation(selectedReservation.id, updateData);
      
      setReservations((prev) => 
        prev.map((res) => 
          res.id === selectedReservation.id 
            ? { ...res, ...updateData }
            : res
        )
      );
      
      setIsEditModalOpen(false);
      setSelectedReservation(null);
              toast.success(t("toast.updateSuccess"));
    } catch (error) {
      console.error("Update reservation error:", error);
              toast.error(t("toast.updateError"));
    }
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg relative">
        <h2 className="text-3xl font-semibold mb-6 -mt-6 text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">{t("loading")}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg relative">
        <h2 className="text-3xl font-semibold mb-6 -mt-6 text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
                      <Button onClick={() => window.location.reload()}>
            {t("tryAgain")}
          </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg relative">
      <h2 className="text-3xl font-semibold mb-6 -mt-6 text-gray-900 dark:text-white">
        {t("title")}
      </h2>

      {reservations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">{t("noReservations")}</p>
          <Button onClick={() => window.location.href = "/"}>
            {t("startHotelSearch")}
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {reservations.map((res) => (
          <div
            key={res.id}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] flex flex-col md:flex-row cursor-pointer group hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            style={{ minHeight: "200px" }}
          >
            <div className="relative h-52 md:h-auto md:w-80 lg:w-96 w-full">
              <Image
                src="/images/opportunity1.jpg"
                alt={res.room?.hotel?.name || res.room?.name || "Hotel"}
                fill
                className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-1"
                priority
              />
            </div>

            <div className="flex flex-col justify-between p-5 flex-1">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {res.room?.hotel?.name || "Hotel"}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 ml-1">
                  {res.hotelAddress || res.room?.hotel?.address || t("noAddressInfo")}
                </p>
                <p className="text-muted-foreground text-sm mb-1">
                  {t("roomNumber", { roomNumber: res.room?.roomNumber || 1 })} • {t("guests", { guests: res.guests })} • {t("nights", { nights: res.nightCount })}
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  {t("checkIn")}: {new Date(res.startDate).toLocaleDateString('tr-TR')} ({res.checkIn}) • {t("checkOut")}: {new Date(res.endDate).toLocaleDateString('tr-TR')} ({res.checkOut})
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  <strong>{t("room")}:</strong> {res.room?.name} • <strong>{t("payment")}:</strong> {res.paymentMethod}
                </p>
                {res.specialRequest && (
                  <p className="text-muted-foreground text-sm mb-3">
                    <strong>{t("specialRequest")}:</strong> {res.specialRequest}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-400 border border-gray-200">
                    {t("breakfast")}: {t("breakfastNotIncluded")}
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-400 border border-gray-200">
                    {t("parking")}: {t("parkingNotAvailable")}
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100">
                    {t("freeCancellation")}: {t("freeCancellationAvailable")}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-blue-600 dark:text-blue-400 text-l font-bold">
                  {res.totalPrice.toLocaleString('tr-TR')} TL
                </div>

                <div className="flex items-center gap-1 mr-4">
                  <Rating defaultValue={4.5} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton key={index} size={16} className="text-yellow-500" />
                    ))}
                  </Rating>
                  <span className="text-sm text-muted-foreground ml-1">(4.5)</span>
                </div>

                <div className="flex gap-2">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg font-medium text-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5"
                    onClick={() => openEditModal(res)}
                  >
                    <EditIcon className="w-3.5 h-3.5" />
                    {t("editReservation") || "Düzenle"}
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg font-medium text-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5"
                    onClick={() => openCancelModal(res.id)}
                  >
                    <XIcon className="w-3.5 h-3.5" />
                    {t("cancelReservation")}
                  </button>

                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium text-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5"
                    onClick={() => {
                      setCurrentHotel({
                        name: res.room?.hotel?.name || "Hotel",
                        location: res.hotelAddress || res.room?.hotel?.address || "Lokasyon",
                        image: "/images/opportunity1.jpg",
                      });
                      setIsChatOpen(true);
                      setMessages([{ id: 1, message: t("chat.welcomeMessage"), sender: "bot" }]);
                      setMessage("");
                    }}
                  >
                    <MessageSquareIcon className="w-3.5 h-3.5" />
                    {t("askHotel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}

      {/* Chat Modal */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-[450px] h-[500px] flex flex-col p-0 ">
          <DialogHeader className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                <Image src={currentHotel.image} alt={currentHotel.name} fill className="object-cover" />
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold">{currentHotel.name}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">{currentHotel.location}</DialogDescription>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-muted-foreground hover:text-foreground transition"
            />
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 mr-2">
                    <Image
                      src={currentHotel.image}
                      alt="Rotaly Logo"
                      width={35}
                      height={35}
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t flex gap-2 items-center bg-white dark:bg-gray-900">
            <Input
              placeholder={t("chat.placeholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("chat.send")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Reservation Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[500px] p-6">
          <DialogHeader>
            <DialogTitle>{t("editReservation")}</DialogTitle>
            <DialogDescription>
              {t("editDescription")}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="editStartDate">{t("checkIn")} Tarihi</Label>
                <Input
                  id="editStartDate"
                  type="date"
                  value={editForm.startDate}
                  onChange={(e) => setEditForm({...editForm, startDate: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="editEndDate">{t("checkOut")} Tarihi</Label>
                <Input
                  id="editEndDate"
                  type="date"
                  value={editForm.endDate}
                  onChange={(e) => setEditForm({...editForm, endDate: e.target.value})}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="editGuests">{t("guests")} Sayısı</Label>
              <Input
                id="editGuests"
                type="number"
                min="1"
                max="10"
                value={editForm.guests}
                onChange={(e) => setEditForm({...editForm, guests: parseInt(e.target.value)})}
              />
            </div>

            <div>
              <Label htmlFor="editSpecialRequest">{t("specialRequest")}</Label>
              <Textarea
                id="editSpecialRequest"
                value={editForm.specialRequest}
                onChange={(e) => setEditForm({...editForm, specialRequest: e.target.value})}
                placeholder={t("specialRequestPlaceholder")}
                rows={3}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              {t("cancelModal.cancel")}
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white" 
              onClick={handleUpdateReservation}
            >
              {t("update")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cancel Confirmation Modal */}
      <Dialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
        <DialogContent className="sm:max-w-[400px] p-6">
          <DialogHeader>
            <DialogTitle>{t("cancelModal.title")}</DialogTitle>
            <DialogDescription>{t("cancelModal.description")}</DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" onClick={() => setIsCancelModalOpen(false)}>
              {t("cancelModal.cancel")}
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={confirmCancelReservation}>
              {t("cancelModal.confirm")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


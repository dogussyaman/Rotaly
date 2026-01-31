"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, CreditCard, Edit, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { paymentService } from "@/services";
import toast from "react-hot-toast";

interface PaymentCard {
  id: string;
  brand: string;
  last4: string;
  expiresAt: string | Date;
  createdAt: string | Date;
  [key: string]: unknown;
}

export default function PaymentCardsContent() {
  const [cards, setCards] = useState<PaymentCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<PaymentCard | null>(null);

  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Kartları getir
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(null);
        const cardsData = await paymentService.getUserPaymentCards();
        console.log("cardsData", cardsData);
        setCards(cardsData || []);
      } catch (error) {
        console.error("Cards fetch error:", error);
        setError("Kayıtlı kartlar yüklenemedi");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const resetForm = () => {
    setCardForm({
      cardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
    });
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!cardForm.cardNumber.trim()) {
      errors.cardNumber = "Kart numarası gerekli";
    } else if (!/^\d{13,19}$/.test(cardForm.cardNumber.replace(/\s/g, ""))) {
      errors.cardNumber = "Geçerli bir kart numarası girin";
    }

    if (!cardForm.cardHolderName.trim()) {
      errors.cardHolderName = "Kart sahibi adı gerekli";
    }

    if (!cardForm.expiryDate.trim()) {
      errors.expiryDate = "Son kullanma tarihi gerekli";
    } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(cardForm.expiryDate)) {
      errors.expiryDate = "MM/YY formatında girin";
    }

    if (!cardForm.cvv.trim()) {
      errors.cvv = "CVV gerekli";
    } else if (!/^[0-9]{3,4}$/.test(cardForm.cvv)) {
      errors.cvv = "3-4 haneli CVV girin";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddCard = async () => {
    if (!validateForm()) return;

    try {
      const newCard = await paymentService.addPaymentCard(cardForm);
      setCards([...cards, newCard]);
      setIsAddModalOpen(false);
      resetForm();
      toast.success("Kart başarıyla eklendi");
    } catch (error) {
      console.error("Add card error:", error);
      toast.error("Kart eklenirken hata oluştu");
    }
  };

  const handleEditCard = async () => {
    if (!selectedCard) return;

    // Edit modda sadece expiryDate güncellenebilir
    if (!cardForm.expiryDate.trim()) {
      setFormErrors({ expiryDate: "Son kullanma tarihi gerekli" });
      return;
    }
    
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(cardForm.expiryDate)) {
      setFormErrors({ expiryDate: "MM/YY formatında girin" });
      return;
    }

    try {
      const updateData = {
        expiryDate: cardForm.expiryDate,
      };
      
      const updatedCard = await paymentService.updatePaymentCard(selectedCard.id, updateData);
      setCards(cards.map(card => card.id === selectedCard.id ? updatedCard : card));
      setIsEditModalOpen(false);
      setSelectedCard(null);
      resetForm();
      toast.success("Kart başarıyla güncellendi");
    } catch (error) {
      console.error("Update card error:", error);
      toast.error("Kart güncellenirken hata oluştu");
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    if (!confirm("Bu kartı silmek istediğinizden emin misiniz?")) return;

    try {
      await paymentService.deletePaymentCard(cardId);
      setCards(cards.filter(card => card.id !== cardId));
      toast.success("Kart başarıyla silindi");
    } catch (error) {
      console.error("Delete card error:", error);
      toast.error("Kart silinirken hata oluştu");
    }
  };

  const formatCardNumber = (last4: string) => {
    // Güvenlik gereği API'den sadece son 4 hane geliyor
    return '**** **** **** ' + last4;
  };

  const openEditModal = (card: PaymentCard) => {
    setSelectedCard(card);
    setCardForm({
      cardNumber: '', // Edit modda kart numarası değiştirilmez
      cardHolderName: '', // API'de cardHolderName güncellenmesi şu an desteklenmiyor
      expiryDate: new Date(card.expiresAt).toLocaleDateString('tr-TR', { 
        month: '2-digit', 
        year: '2-digit' 
      }).replace(/\./g, '/'), // MM/YY formatına çevir
      cvv: '',
    });
    setIsEditModalOpen(true);
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 -mt-6 text-gray-900 dark:text-white">
          Kayıtlı Kartlarım
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Kartlar yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 -mt-6 text-gray-900 dark:text-white">
          Kayıtlı Kartlarım
        </h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Tekrar Dene
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6 -mt-6">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Kayıtlı Kartlarım
        </h2>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Kart Ekle
        </Button>
      </div>

      {cards.length === 0 ? (
        <div className="text-center py-12">
          <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-4">Henüz kayıtlı kartınız bulunmuyor.</p>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            İlk Kartını Ekle
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <CreditCard className="w-8 h-8" />
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(card)}
                      className="text-white/80 hover:text-white"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="text-white/80 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-mono tracking-wider">
                    {formatCardNumber(card.last4)}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-white/80 mb-1">KART MARKASI</p>
                    <p className="font-semibold">{card.brand}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/80 mb-1">SON KULLANMA</p>
                    <p className="font-semibold">
                      {new Date(card.expiresAt).toLocaleDateString('tr-TR', { 
                        month: '2-digit', 
                        year: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Card Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Yeni Kart Ekle</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="cardNumber">Kart Numarası</Label>
              <Input
                id="cardNumber"
                value={cardForm.cardNumber}
                onChange={(e) => setCardForm({...cardForm, cardNumber: e.target.value})}
                placeholder="1234 5678 9012 3456"
                className={formErrors.cardNumber ? "border-red-500" : ""}
              />
              {formErrors.cardNumber && (
                <p className="text-sm text-red-500 mt-1">{formErrors.cardNumber}</p>
              )}
            </div>

            <div>
              <Label htmlFor="cardHolderName">Kart Sahibi Adı</Label>
              <Input
                id="cardHolderName"
                value={cardForm.cardHolderName}
                onChange={(e) => setCardForm({...cardForm, cardHolderName: e.target.value})}
                placeholder="Ahmet Yıldız"
                className={formErrors.cardHolderName ? "border-red-500" : ""}
              />
              {formErrors.cardHolderName && (
                <p className="text-sm text-red-500 mt-1">{formErrors.cardHolderName}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Son Kullanma</Label>
                <Input
                  id="expiryDate"
                  value={cardForm.expiryDate}
                  onChange={(e) => setCardForm({...cardForm, expiryDate: e.target.value})}
                  placeholder="MM/YY"
                  className={formErrors.expiryDate ? "border-red-500" : ""}
                />
                {formErrors.expiryDate && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.expiryDate}</p>
                )}
              </div>

              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  value={cardForm.cvv}
                  onChange={(e) => setCardForm({...cardForm, cvv: e.target.value})}
                  placeholder="123"
                  className={formErrors.cvv ? "border-red-500" : ""}
                />
                {formErrors.cvv && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.cvv}</p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleAddCard} className="bg-blue-500 hover:bg-blue-600">
              Kart Ekle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Card Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Kart Düzenle</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                🔒 Güvenlik gereği sadece son kullanma tarihi güncellenebilir.
              </p>
            </div>
            
            <div>
              <Label htmlFor="editExpiryDate">Yeni Son Kullanma Tarihi</Label>
              <Input
                id="editExpiryDate"
                value={cardForm.expiryDate}
                onChange={(e) => setCardForm({...cardForm, expiryDate: e.target.value})}
                placeholder="MM/YY"
                className={formErrors.expiryDate ? "border-red-500" : ""}
              />
              {formErrors.expiryDate && (
                <p className="text-sm text-red-500 mt-1">{formErrors.expiryDate}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              İptal
            </Button>
            <Button onClick={handleEditCard} className="bg-blue-500 hover:bg-blue-600">
              Güncelle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
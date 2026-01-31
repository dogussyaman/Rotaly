export interface Reservation {
  id: string;
  nightCount: number;
  checkIn: string;          // Default: "12:00"
  checkOut: string;         // Default: "14:00"
  guests: number;
  startDate: string;        // ISO string
  endDate: string;          // ISO string
  totalPrice: number;
  hotelAddress: string;     // Otelin adresi
  userPhone: string;        // Kullanıcının telefonu
  specialRequest?: string;  // Opsiyonel
  paymentMethod: string;    // Ödeme yöntemi
  createdAt: string;        // ISO string
  updatedAt: string;        // ISO string
  deletedAt?: string | null;

  // Relations
  userId: string;
  roomId: string;
  paymentCardId?: string | null;
  isVerified: boolean;
  
  // Room bilgileri (opsiyonel)
  roomName?: string;
  roomType?: string;
  roomNumber?: number;
  floor?: number;
  maxAdults?: number;
  maxChildren?: number;
  capacity?: number;
  bedCount?: number;
}

export interface Customer {
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
  totalReservations: number;
  totalSpent: number;
  lastReservation: string | null;
  favoriteHotels: number;
  totalComments: number;
  averageRating: number;
  paymentCards: Array<{
    id: string;
    brand: string;
    last4: string;
    expiresAt: string;
  }>;
  supportRequests: number;
  lastSupportRequest: string | null;
  avatar: string;
}

export interface Room {
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
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  bookings: Booking[]; // rezervasyon tipine göre düzenle
  featureStatus: FeatureStatus[]; // özellik tipine göre düzenle
  images: string[];
  type: string; // STANDARD, DELUXE, SUITE, PRESIDENTIAL
}

interface Booking {
  id: string;
  // booking özellikleri buraya eklenebilir
}

interface FeatureStatus {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  bedCount: number;
  isAvailable: boolean;
  hotelId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  // feature status özellikleri buraya eklenebilir
}
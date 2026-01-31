// Hotel Types for Web Frontend
export interface CreateHotelInput {
  name: string;
  description?: string;
  location: string;
  address: string;
  city: string;
  country: string;
  type: "APARTMENT" | "HOTEL" | "VILLA" | "BUNGALOW" | "ROOM" | "RESORT" | "HOSTEL" | "CAMP";
  features?: ("WIFI" | "POOL" | "SPA" | "PARKING" | "GYM" | "PET_FRIENDLY" | "RESTAURANT" | "BREAKFAST_INCLUDED")[];
  discountRate?: number;
  discountPrice?: number;
}

export interface UpdateHotelInput extends Partial<CreateHotelInput> {
  id: string;
}

export interface QueryHotelInput {
  page?: number;
  limit?: number;
  search?: string;
  city?: string;
  country?: string;
  type?: "APARTMENT" | "HOTEL" | "VILLA" | "BUNGALOW" | "ROOM" | "RESORT" | "HOSTEL" | "CAMP";
  isDiscounted?: boolean;
  isActive?: boolean;
  ownerId?: string;
  minRating?: number;
  maxRating?: number;
  minDiscountPrice?: number;
  maxDiscountPrice?: number;
  sortBy?: "name" | "rating" | "createdAt" | "updatedAt" | "discountRate" | "discountPrice";
  sortOrder?: "asc" | "desc";
  // Frontend için ek parametreler
  minPrice?: number;
  maxPrice?: number;
  features?: string[];
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}

export interface Hotel {
  id: string;
  name: string;
  description?: string;
  checkIn?: string;
  checkOut?: string;
  location: string;
  address: string;
  city: string;
  country: string;
  rating?: number;
  discountRate?: number;
  isDiscounted: boolean;
  discountStartDate?: string;
  discountEndDate?: string;
  type: string;
  ownerId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

// Room feature interface - Prisma şemasına uygun
export interface RoomFeatureStatus {
  id: string;
  feature: string; // RoomFeature enum değeri
  isAvailable: boolean;
}

// Room interface - Prisma şemasına uygun
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
  type: string; // RoomType enum değeri
  hotelId: string;
  createdAt: string;
  updatedAt: string;
  featureStatus: RoomFeatureStatus[];
  images: HotelImage[];
}

// Hotel image interface - Prisma şemasına uygun
export interface HotelImage {
  id: string;
  url: string;
  hotelId?: string;
  roomId?: string;
  createdAt: string;
}

// Comment interface - Prisma şemasına uygun
export interface Comment {
  id: string;
  rating: number;
  text: string;
  hotelId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Hotel Props interface - HotelProps modelini temsil eder
export interface HotelProps {
  id: string;
  hotelId: string;
  feature: string; // HotelFeatures enum değeri
  createdAt: string;
}

// Room Feature Status interface - RoomFeatureStatus modelini temsil eder
export interface RoomFeatureStatusNew {
  id: string;
  roomId: string;
  feature: string; // RoomFeature enum değeri
  isAvailable: boolean;
  deletedAt: string | null;
}

// Room interface - Güncellenmiş yapıya uygun
export interface RoomNew {
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
  type: string; // RoomType enum değeri
  hotelId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  featureStatus: RoomFeatureStatusNew[];
}

// Hotel Image interface - Güncellenmiş yapıya uygun
export interface HotelImageNew {
  id: string;
  url: string;
  hotelId: string;
  createdAt: string;
  deletedAt: string | null;
}

// Comment interface - Mevcut yapı
export interface CommentNew {
  id: string;
  rating: number;
  text: string;
  userId: string;
}

// HotelNew interface - Güncellenmiş hotelsData yapısına uygun
export interface HotelNew {
  id: string;
  name: string;
  description: string;
  checkIn: string;
  checkOut: string;
  location: string;
  address: string;
  city: string;
  country: string;
  rating: number;
  discountRate: number | null;
  isDiscounted: boolean;
  discountStartDate: string | null;
  discountEndDate: string | null;
  type: string; // HotelType enum değeri
  ownerId: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  
  // Business/Legal fields
  taxId: string;
  taxOffice: string;
  tradeRegistryNumber: string | number; // Script number olarak üretiyor
  businessLicense: string;
  addressProof: string;
  taxCertificate: string;
  
  // Relations - Güncellenmiş yapıya uygun
  rooms: RoomNew[];
  images: HotelImageNew[];
  comments: CommentNew[];
  props: HotelProps[]; // features yerine props kullanılıyor
  
  // Admin dashboard için ek alanlar (şemada yok ama UI için gerekli)
  price?: string;
  priceValue?: number;
  status?: string;
  image?: string;
  lastBooking?: string;
  totalBookings?: number;
  revenue?: string;
  owner?: {
    id: string;
    name: string;
    surname: string;
    email: string;
  };
  email?: string;
  phone?: string;
}
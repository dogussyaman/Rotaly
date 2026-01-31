// Hotel DTO types based on backend DTOs

export type HotelType = 
  | "APARTMENT"
  | "HOTEL"
  | "VILLA"
  | "BUNGALOW"
  | "ROOM"
  | "RESORT"
  | "HOSTEL"
  | "CAMP";

export type HotelFeature = 
  | "WIFI"
  | "POOL"
  | "SPA"
  | "PARKING"
  | "GYM"
  | "PET_FRIENDLY"
  | "RESTAURANT"
  | "BREAKFAST_INCLUDED";

export interface CreateHotelDto {
  name: string;
  description?: string;
  location: string;
  address: string;
  city: string;
  country: string;
  type: HotelType;
  features?: HotelFeature[];
  discountRate?: number;
  discountPrice?: number;
}

export interface UpdateHotelDto {
  name?: string;
  description?: string;
  location?: string;
  address?: string;
  city?: string;
  country?: string;
  type?: HotelType;
  features?: HotelFeature[];
  discountRate?: number;
  discountPrice?: number;
  isDiscounted?: boolean;
  discountStartDate?: Date;
  discountEndDate?: Date;
  isActive?: boolean;
  taxId?: string;
  taxOffice?: string;
  tradeRegistryNumber?: string;
  businessLicense?: string;
  addressProof?: string;
  taxCertificate?: string;
}

export interface QueryHotelDto {
  city?: string;
  country?: string;
  type?: HotelType;
  isDiscounted?: boolean;
  isActive?: boolean;
  ownerId?: string;
  minRating?: number;
  maxRating?: number;
  minDiscountPrice?: number;
  maxDiscountPrice?: number;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: "name" | "rating" | "createdAt" | "updatedAt" | "discountRate" | "discountPrice";
  sortOrder?: "asc" | "desc";
}


import { Hotel } from "@/types/hotel";
import { Room } from "@/types/room";
import { Reservation } from "@/types/reservation";
import { UserProfileDto } from "@/types/user-dto";

// Mock Users
export const MOCK_USERS: UserProfileDto[] = [
  {
    id: "user-1",
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    phone: "+905551234567",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "admin-1",
    name: "Admin",
    surname: "User",
    email: "admin@rotaly.com",
    phone: "+905559876543",
    role: "ADMIN",
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "owner-1",
    name: "Hotel",
    surname: "Owner",
    email: "owner@hotel.com",
    phone: "+905551112233",
    role: "HOTEL_OWNER",
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

// Mock Hotels
export const MOCK_HOTELS: any[] = [
  {
    id: "hotel-1",
    name: "Rotaly Luxury Resort",
    description: "Antalya'nın kalbinde eşsiz bir tatil deneyimi.",
    location: "Antalya, Turkey",
    address: "Lara Cd. No:123",
    city: "Antalya",
    country: "Turkey",
    rating: 4.8,
    discountRate: 20,
    isDiscounted: true,
    type: "RESORT",
    ownerId: "owner-1",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: ["/images/hotel1.jpg", "/images/hotel2.jpg"],
    features: ["WIFI", "POOL", "SPA", "RESTAURANT"],
    price: 3500,
    checkIn: "14:00",
    checkOut: "12:00"
  },
  {
    id: "hotel-2",
    name: "City Boutique Hotel",
    description: "Şehir merkezinde modern konaklama.",
    location: "Istanbul, Turkey",
    address: "Istiklal Cd. No:45",
    city: "Istanbul",
    country: "Turkey",
    rating: 4.5,
    discountRate: 0,
    isDiscounted: false,
    type: "HOTEL",
    ownerId: "owner-1",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: ["/images/hotel3.jpg"],
    features: ["WIFI", "GYM"],
    price: 2500,
    checkIn: "14:00",
    checkOut: "11:00"
  },
  {
    id: "hotel-3",
    name: "Cappadocia Cave Suites",
    description: "Tarihi mağara oteli deneyimi.",
    location: "Nevşehir, Turkey",
    address: "Göreme Sk. No:1",
    city: "Nevşehir",
    country: "Turkey",
    rating: 4.9,
    discountRate: 10,
    isDiscounted: true,
    type: "HOTEL",
    ownerId: "owner-1",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    images: ["/images/hotel4.jpg"],
    features: ["WIFI", "BREAKFAST_INCLUDED"],
    price: 5000,
    checkIn: "14:00",
    checkOut: "12:00"
  }
];

// Mock Rooms
export const MOCK_ROOMS: any[] = [
  {
    id: "room-1",
    name: "Deluxe Sea View",
    description: "Deniz manzaralı lüks oda",
    price: 3500,
    maxAdults: 2,
    maxChildren: 1,
    floor: 3,
    roomNumber: 301,
    capacity: 3,
    bedCount: 2,
    isAvailable: true,
    type: "DELUXE",
    hotelId: "hotel-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    images: [],
    featureStatus: []
  },
  {
    id: "room-2",
    name: "Standard City View",
    description: "Şehir manzaralı standart oda",
    price: 2500,
    maxAdults: 2,
    maxChildren: 0,
    floor: 2,
    roomNumber: 205,
    capacity: 2,
    bedCount: 1,
    isAvailable: true,
    type: "STANDARD",
    hotelId: "hotel-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    images: [],
    featureStatus: []
  }
];

// Mock Reservations
export const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: "res-1",
    userId: "user-1",
    roomId: "room-1",
    nightCount: 3,
    checkIn: "14:00",
    checkOut: "12:00",
    guests: 2,
    startDate: new Date(Date.now() + 86400000).toISOString(),
    endDate: new Date(Date.now() + 4 * 86400000).toISOString(),
    totalPrice: 10500,
    hotelAddress: "Lara Cd. No:123",
    userPhone: "+905551234567",
    paymentMethod: "CREDIT_CARD",
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    roomName: "Deluxe Sea View",
    roomType: "DELUXE"
  }
];

// Mock Messages
export const MOCK_MESSAGES = [
  {
    id: "msg-1",
    senderId: "user-1",
    receiverId: "owner-1",
    content: "Merhaba, otelinizde evcil hayvan kabul ediliyor mu?",
    isRead: false,
    createdAt: new Date().toISOString()
  },
  {
    id: "msg-2",
    senderId: "owner-1",
    receiverId: "user-1",
    content: "Evet, küçük ırk evcil hayvanları kabul ediyoruz.",
    isRead: true,
    createdAt: new Date().toISOString()
  }
];

// Mock Payment Cards
export const MOCK_CARDS = [
  {
    id: "card-1",
    cardHolderName: "John Doe",
    last4Digits: "4242",
    expiryMonth: 12,
    expiryYear: 2025,
    cardType: "VISA"
  }
];

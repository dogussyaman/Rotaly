import { Hotel } from "@/types/hotel";
import { Reservation } from "@/types/reservation";

export const singleHotelData = {
    id: "1",
    name: "Riad Deluxe",
    location: "Marakeş, Fas",
    image: "/images/hotelfoto1.jpg",
    rating: 4.7,
    ratingCount: 120,
    features: {
      cancelFree: true,
      breakfast: true,
      parking: true,
    },
  };

  export const bookingData = {
    checkIn: "18 Temmuz 2025",
    checkOut: "22 Temmuz 2025",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    roomType: "Deluxe Room",
    nights: 4,
    guests: 2,
    basePrice: 30000,
    taxesAndFees: 10500,
    total: 40500,
  };

  export const paymentMethods = [
    {
      id: 1,
      name: "Visa",
      cardNumber: "**** 8304",
      cardType: "Visa",
    },
    {
      id: 2,
      name: "Mastercard",
      cardNumber: "**** 1234",
      cardType: "Mastercard",
    },
    {
      id: 3,
      name: "Troy",
      cardNumber: "**** 1234",
      cardType: "Troy",
    },
  ];

  export const hotelData = [
    // OTELLER
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "İstanbul, Türkiye",
      category: "otel",
      rating: 5,
      price: "15.250 TL",
      priceValue: 15250,
      image: "/images/opportunity1.jpg",
      cancel: true,
      breakfast: true,
      parking: true,
      amenities: ["Klima", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 2,
      name: "Seaside Resort",
      location: "Antalya, Türkiye",
      category: "otel",
      rating: 4,
      price: "8.750 TL",
      priceValue: 8750,
      image: "/images/opportunity2jpg.jpg",
      cancel: false,
      breakfast: true,
      parking: true,
      amenities: ["Klima", "Wifi", "TV", "Mutfak"],
      nights: 4,
    },
    {
      id: 3,
      name: "City Center Hotel",
      location: "Ankara, Türkiye",
      category: "otel",
      rating: 3,
      price: "4.200 TL",
      priceValue: 4200,
      image: "/images/opportunity3.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: ["Wifi", "TV"],
      nights: 4,
    },
    {
      id: 4,
      name: "Boutique Hotel Izmir",
      location: "İzmir, Türkiye",
      category: "otel",
      rating: 4,
      price: "6.800 TL",
      priceValue: 6800,
      image: "/images/opportunity4.jpg",
      cancel: true,
      breakfast: true,
      parking: false,
      amenities: ["Klima", "Wifi"],
      nights: 4,
    },
    {
      id: 5,
      name: "Mountain View Hotel",
      location: "Trabzon, Türkiye",
      category: "otel",
      rating: 3,
      price: "3.600 TL",
      priceValue: 3600,
      image: "/images/opportunity5.jpg",
      cancel: false,
      breakfast: false,
      parking: true,
      amenities: ["TV"],
      nights: 4,
    },

    // VİLLALAR
    {
      id: 6,
      name: "Luxury Villa Bodrum",
      location: "Bodrum, Türkiye",
      category: "villa",
      rating: 5,
      price: "25.000 TL",
      priceValue: 25000,
      image: "/images/opportunity6.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "Mutfak", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 7,
      name: "Sea Front Villa",
      location: "Kaş, Antalya",
      category: "villa",
      rating: 4,
      price: "18.400 TL",
      priceValue: 18400,
      image: "/images/opportunity7.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "Mutfak", "Wifi"],
      nights: 4,
    },
    {
      id: 8,
      name: "Garden Villa",
      location: "Çeşme, İzmir",
      category: "villa",
      rating: 4,
      price: "12.800 TL",
      priceValue: 12800,
      image: "/images/opportunity8.jpg",
      cancel: false,
      breakfast: false,
      parking: true,
      amenities: ["Mutfak", "Wifi", "TV"],
      nights: 4,
    },

    // BUNGALOVLAR
    {
      id: 9,
      name: "Forest Bungalow",
      location: "Abant, Bolu",
      category: "bungalov",
      rating: 4,
      price: "5.600 TL",
      priceValue: 5600,
      image: "/images/opportunity9.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Mutfak", "Wifi"],
      nights: 4,
    },
    {
      id: 10,
      name: "Lake View Bungalow",
      location: "Sapanca, Sakarya",
      category: "bungalov",
      rating: 3,
      price: "4.800 TL",
      priceValue: 4800,
      image: "/images/opportunity10.jpg",
      cancel: false,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "TV"],
      nights: 4,
    },
    {
      id: 11,
      name: "Mountain Bungalow",
      location: "Uludağ, Bursa",
      category: "bungalov",
      rating: 3,
      price: "3.200 TL",
      priceValue: 3200,
      image: "/images/opportunity11.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },

    // KİRALIK DAİRELER
    {
      id: 12,
      name: "Downtown Apartment",
      location: "Kadıköy, İstanbul",
      category: "kiralik-daire",
      rating: 4,
      price: "7.200 TL",
      priceValue: 7200,
      image: "/images/detail1.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: ["Klima", "Mutfak", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 13,
      name: "Cozy Studio",
      location: "Beşiktaş, İstanbul",
      category: "kiralik-daire",
      rating: 3,
      price: "4.400 TL",
      priceValue: 4400,
      image: "/images/detail2.jpg",
      cancel: false,
      breakfast: false,
      parking: false,
      amenities: ["Mutfak", "Wifi"],
      nights: 4,
    },
    {
      id: 14,
      name: "Modern Loft",
      location: "Alsancak, İzmir",
      category: "kiralik-daire",
      rating: 4,
      price: "6.000 TL",
      priceValue: 6000,
      image: "/images/detail3.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "Mutfak", "Wifi"],
      nights: 4,
    },
    {
      id: 15,
      name: "Historic Apartment",
      location: "Kaleiçi, Antalya",
      category: "kiralik-daire",
      rating: 3,
      price: "5.200 TL",
      priceValue: 5200,
      image: "/images/detail4.jpg",
      cancel: false,
      breakfast: false,
      parking: false,
      amenities: ["Wifi", "TV"],
      nights: 4,
    },

    // PANSİYONLAR
    {
      id: 16,
      name: "Family Pansiyon",
      location: "Amasra, Bartın",
      category: "pansiyon",
      rating: 4,
      price: "2.800 TL",
      priceValue: 2800,
      image: "/images/detail5.jpg",
      cancel: true,
      breakfast: true,
      parking: true,
      amenities: ["Wifi", "TV"],
      nights: 4,
    },
    {
      id: 17,
      name: "Seaside Pansiyon",
      location: "Ayvalık, Balıkesir",
      category: "pansiyon",
      rating: 3,
      price: "2.400 TL",
      priceValue: 2400,
      image: "/images/antalya.jpg",
      cancel: false,
      breakfast: true,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },
    {
      id: 18,
      name: "Village Pansiyon",
      location: "Göreme, Nevşehir",
      category: "pansiyon",
      rating: 4,
      price: "3.600 TL",
      priceValue: 3600,
      image: "/images/barselona.jpg",
      cancel: true,
      breakfast: true,
      parking: true,
      amenities: ["Klima", "Wifi"],
      nights: 4,
    },

    // HOSTELLER
    {
      id: 19,
      name: "Backpacker Hostel",
      location: "Sultanahmet, İstanbul",
      category: "hostel",
      rating: 3,
      price: "800 TL",
      priceValue: 800,
      image: "/images/izmir.jpg",
      cancel: false,
      breakfast: false,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },
    {
      id: 20,
      name: "Youth Hostel",
      location: "Taksim, İstanbul",
      category: "hostel",
      rating: 2,
      price: "600 TL",
      priceValue: 600,
      image: "/images/marakes.jpg",
      cancel: false,
      breakfast: false,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },
    {
      id: 21,
      name: "Budget Hostel",
      location: "Konak, İzmir",
      category: "hostel",
      rating: 2,
      price: "720 TL",
      priceValue: 720,
      image: "/images/paris.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: [],
      nights: 4,
    },

    // EK OTELLER
    {
      id: 22,
      name: "Business Hotel",
      location: "Levent, İstanbul",
      category: "otel",
      rating: 4,
      price: "9.600 TL",
      priceValue: 9600,
      image: "/images/roma.jpg",
      cancel: true,
      breakfast: true,
      parking: true,
      amenities: ["Klima", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 23,
      name: "Airport Hotel",
      location: "Esenboğa, Ankara",
      category: "otel",
      rating: 3,
      price: "3.800 TL",
      priceValue: 3800,
      image: "/images/hotelfoto1.jpg",
      cancel: false,
      breakfast: true,
      parking: true,
      amenities: ["Wifi", "TV"],
      nights: 4,
    },

    // EK VİLLALAR
    {
      id: 24,
      name: "Private Villa",
      location: "Kalkan, Antalya",
      category: "villa",
      rating: 5,
      price: "32.000 TL",
      priceValue: 32000,
      image: "/images/opportunity1.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "Mutfak", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 25,
      name: "Family Villa",
      location: "Datça, Muğla",
      category: "villa",
      rating: 4,
      price: "16.800 TL",
      priceValue: 16800,
      image: "/images/opportunity2jpg.jpg",
      cancel: false,
      breakfast: false,
      parking: true,
      amenities: ["Mutfak", "Wifi", "TV"],
      nights: 4,
    },

    // EK BUNGALOVLAR
    {
      id: 26,
      name: "Romantic Bungalow",
      location: "Çırali, Antalya",
      category: "bungalov",
      rating: 4,
      price: "6.400 TL",
      priceValue: 6400,
      image: "/images/opportunity3.jpg",
      cancel: true,
      breakfast: false,
      parking: true,
      amenities: ["Klima", "Mutfak", "Wifi"],
      nights: 4,
    },

    // EK KİRALIK DAİRELER
    {
      id: 27,
      name: "Luxury Apartment",
      location: "Nişantaşı, İstanbul",
      category: "kiralik-daire",
      rating: 5,
      price: "12.000 TL",
      priceValue: 12000,
      image: "/images/opportunity4.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: ["Klima", "Mutfak", "Wifi", "TV"],
      nights: 4,
    },
    {
      id: 28,
      name: "Student Apartment",
      location: "Çankaya, Ankara",
      category: "kiralik-daire",
      rating: 2,
      price: "2.000 TL",
      priceValue: 2000,
      image: "/images/opportunity5.jpg",
      cancel: false,
      breakfast: false,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },

    // EK PANSİYON
    {
      id: 29,
      name: "Traditional Pansiyon",
      location: "Şirince, İzmir",
      category: "pansiyon",
      rating: 4,
      price: "3.200 TL",
      priceValue: 3200,
      image: "/images/opportunity6.jpg",
      cancel: true,
      breakfast: true,
      parking: true,
      amenities: ["Wifi", "TV"],
      nights: 4,
    },

    // EK HOSTEL
    {
      id: 30,
      name: "Traveler Hostel",
      location: "Konak, İzmir",
      category: "hostel",
      rating: 3,
      price: "920 TL",
      priceValue: 920,
      image: "/images/opportunity7.jpg",
      cancel: true,
      breakfast: false,
      parking: false,
      amenities: ["Wifi"],
      nights: 4,
    },
  ];



  export const cities = [
    { value: "istanbul", name: "İstanbul" },
    { value: "ankara", name: "Ankara" },
    { value: "izmir", name: "İzmir" },
    { value: "antalya", name: "Antalya" },
    { value: "bodrum", name: "Bodrum" },
    { value: "cappadocia", name: "Kapadokya" },
    { value: "trabzon", name: "Trabzon" },
    { value: "bursa", name: "Bursa" },
    { value: "adana", name: "Adana" },
    { value: "gaziantep", name: "Gaziantep" },
    { value: "konya", name: "Konya" },
    { value: "kayseri", name: "Kayseri" },
  ];

// Admin Dashboard Hotels Data

export const customersData = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    hotelId: "H001",
    name: "Ahmet",
    surname: "Yılmaz",
    email: "ahmet.yilmaz@gmail.com",
    phone: "+90 532 123 4567",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2024-12-10T14:20:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 8,
    totalSpent: 15600,
    lastReservation: "2024-12-08T16:45:00Z",
    favoriteHotels: 3,
    totalComments: 5,
    averageRating: 4.2,
    // Payment info
    paymentCards: [
      {
        id: "card-001",
        brand: "Visa",
        last4: "1234",
        expiresAt: "2026-12-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 2,
    lastSupportRequest: "2024-11-20T09:15:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    hotelId: "H001",
    name: "Fatma",
    surname: "Demir",
    email: "fatma.demir@hotmail.com",
    phone: "+90 533 987 6543",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-03-22T08:15:00Z",
    updatedAt: "2024-12-05T11:30:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 12,
    totalSpent: 23400,
    lastReservation: "2024-12-01T13:20:00Z",
    favoriteHotels: 5,
    totalComments: 8,
    averageRating: 4.5,
    // Payment info
    paymentCards: [
      {
        id: "card-002",
        brand: "Mastercard",
        last4: "5678",
        expiresAt: "2025-08-01T00:00:00Z"
      },
      {
        id: "card-003",
        brand: "Troy",
        last4: "9012",
        expiresAt: "2027-03-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 1,
    lastSupportRequest: "2024-10-15T14:30:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    hotelId: "H001",
    name: "Mehmet",
    surname: "Kaya",
    email: "mehmet.kaya@yahoo.com",
    phone: "+90 534 456 7890",
    role: "CUSTOMER",
    isVerified: false,
    createdAt: "2023-07-10T16:45:00Z",
    updatedAt: "2024-11-28T10:15:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 3,
    totalSpent: 4200,
    lastReservation: "2024-11-15T12:00:00Z",
    favoriteHotels: 1,
    totalComments: 2,
    averageRating: 3.8,
    // Payment info
    paymentCards: [],
    // Support history
    supportRequests: 0,
    lastSupportRequest: null,
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    hotelId: "H001",
    name: "Zeynep",
    surname: "Özkan",
    email: "zeynep.ozkan@gmail.com",
    phone: "+90 535 789 1234",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-09-05T14:20:00Z",
    updatedAt: "2024-12-12T09:45:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 15,
    totalSpent: 28900,
    lastReservation: "2024-12-10T18:30:00Z",
    favoriteHotels: 7,
    totalComments: 12,
    averageRating: 4.7,
    // Payment info
    paymentCards: [
      {
        id: "card-004",
        brand: "Visa",
        last4: "3456",
        expiresAt: "2026-06-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 3,
    lastSupportRequest: "2024-12-05T15:20:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    hotelId: "H001",
    name: "Ali",
    surname: "Yıldız",
    email: "ali.yildiz@outlook.com",
    phone: "+90 536 321 6547",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-11-18T12:10:00Z",
    updatedAt: "2024-10-15T16:30:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 6,
    totalSpent: 8900,
    lastReservation: "2024-10-10T11:45:00Z",
    favoriteHotels: 2,
    totalComments: 4,
    averageRating: 4.0,
    // Payment info
    paymentCards: [
      {
        id: "card-005",
        brand: "Mastercard",
        last4: "7890",
        expiresAt: "2025-12-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 1,
    lastSupportRequest: "2024-09-20T13:15:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    hotelId: "H002",
    name: "Selin",
    surname: "Arslan",
    email: "selin.arslan@gmail.com",
    phone: "+90 537 654 3210",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-04-12T09:30:00Z",
    updatedAt: "2024-12-15T17:20:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 20,
    totalSpent: 45600,
    lastReservation: "2024-12-14T20:15:00Z",
    favoriteHotels: 10,
    totalComments: 18,
    averageRating: 4.8,
    // Payment info
    paymentCards: [
      {
        id: "card-006",
        brand: "Visa",
        last4: "2345",
        expiresAt: "2027-01-01T00:00:00Z"
      },
      {
        id: "card-007",
        brand: "Troy",
        last4: "6789",
        expiresAt: "2026-09-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 2,
    lastSupportRequest: "2024-11-30T10:45:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    hotelId: "H002",
    name: "Can",
    surname: "Özkan",
    email: "can.ozkan@hotmail.com",
    phone: "+90 538 987 6543",
    role: "CUSTOMER",
    isVerified: false,
    createdAt: "2023-06-30T15:45:00Z",
    updatedAt: "2024-11-25T12:10:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 2,
    totalSpent: 3200,
    lastReservation: "2024-11-20T14:30:00Z",
    favoriteHotels: 0,
    totalComments: 1,
    averageRating: 3.5,
    // Payment info
    paymentCards: [],
    // Support history
    supportRequests: 0,
    lastSupportRequest: null,
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    hotelId: "H002",
    name: "Deniz",
    surname: "Yılmaz",
    email: "deniz.yilmaz@yahoo.com",
    phone: "+90 539 456 7890",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-08-25T11:20:00Z",
    updatedAt: "2024-12-09T13:40:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 9,
    totalSpent: 16800,
    lastReservation: "2024-12-05T19:20:00Z",
    favoriteHotels: 4,
    totalComments: 6,
    averageRating: 4.3,
    // Payment info
    paymentCards: [
      {
        id: "card-008",
        brand: "Mastercard",
        last4: "0123",
        expiresAt: "2026-03-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 1,
    lastSupportRequest: "2024-11-10T16:25:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    hotelId: "H003",
    name: "Burak",
    surname: "Demir",
    email: "burak.demir@gmail.com",
    phone: "+90 540 123 4567",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-05-08T13:15:00Z",
    updatedAt: "2024-12-03T08:50:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 11,
    totalSpent: 19800,
    lastReservation: "2024-11-28T15:10:00Z",
    favoriteHotels: 6,
    totalComments: 9,
    averageRating: 4.4,
    // Payment info
    paymentCards: [
      {
        id: "card-009",
        brand: "Visa",
        last4: "4567",
        expiresAt: "2025-10-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 2,
    lastSupportRequest: "2024-10-25T11:30:00Z",
    avatar: "/images/userprofile.png"
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    hotelId: "H003",
    name: "Elif",
    surname: "Kaya",
    email: "elif.kaya@outlook.com",
    phone: "+90 541 789 0123",
    role: "CUSTOMER",
    isVerified: true,
    createdAt: "2023-03-15T10:40:00Z",
    updatedAt: "2024-11-20T14:15:00Z",
    deletedAt: null,
    // Related data
    totalReservations: 7,
    totalSpent: 12300,
    lastReservation: "2024-11-15T12:45:00Z",
    favoriteHotels: 3,
    totalComments: 5,
    averageRating: 4.1,
    // Payment info
    paymentCards: [
      {
        id: "card-010",
        brand: "Troy",
        last4: "8901",
        expiresAt: "2026-07-01T00:00:00Z"
      }
    ],
    // Support history
    supportRequests: 1,
    lastSupportRequest: "2024-10-30T09:20:00Z",
    avatar: "/images/userprofile.png"
  }
];
export const rooms = [
  {
    id: "R001",
    name: "Deluxe Deniz Manzaralı Oda",
    description: "Geniş, deniz manzaralı, balkonlu ve lüks donanımlı oda.",
    price: 3250.0,
    maxAdults: 2,
    maxChildren: 1,
    floor: 3,
    roomNumber: 301,
    capacity: 3,
    bedCount: 1,
    isAvailable: true,
    hotelId: "H001",
    createdAt: new Date("2024-01-10T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://imagedelivery.net/Yw_SVblNotg-H4OIK8cT8g/0f44ada7-c450-4cb0-009f-17d24c9c4400/HorizontalHD"],
    type: "DELUXE"
  },
  {
    id: "R002",
    name: "Aile Süiti",
    description: "4 kişilik geniş süit, iki yatak odası, oturma alanı ve mutfak.",
    price: 4800.0,
    maxAdults: 4,
    maxChildren: 2,
    floor: 5,
    roomNumber: 501,
    capacity: 6,
    bedCount: 3,
    isAvailable: true,
    hotelId: "H001",
    createdAt: new Date("2024-01-12T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o0Qzar2_qYMMOmJB8uF96gUnOiQ82G2nNA&s"],
    type: "SUITE"
  },
  {
    id: "R003",
    name: "Ekonomik Tek Kişilik Oda",
    description: "Bütçe dostu, sade ve konforlu tek kişilik oda.",
    price: 1500.0,
    maxAdults: 1,
    maxChildren: 0,
    floor: 1,
    roomNumber: 101,
    capacity: 1,
    bedCount: 1,
    isAvailable: true,
    hotelId: "H001",
    createdAt: new Date("2024-01-15T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EOuqzkVdYSdheGurSafZu-hyOlcv7Oud0A&s"],
    type: "STANDARD"
  },
  {
    id: "R004",
    name: "Kral Dairesi",
    description: "En üst katta panoramik manzaralı, jakuzi ve özel teraslı lüks daire.",
    price: 8500.0,
    maxAdults: 2,
    maxChildren: 1,
    floor: 10,
    roomNumber: 1001,
    capacity: 3,
    bedCount: 1,
    isAvailable: false,
    hotelId: "H001",
    createdAt: new Date("2024-01-20T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://www.asortie.com/blogs/uploads/en_haberler/otel-kral-odasi-hizmetleri.jpg"],
    type: "PRESIDENTIAL"
  },
  {
    id: "R005",
    name: "Standart Çift Kişilik Oda",
    description: "Konforlu ve şık standart çift kişilik oda.",
    price: 2200.0,
    maxAdults: 2,
    maxChildren: 1,
    floor: 2,
    roomNumber: 205,
    capacity: 3,
    bedCount: 1,
    isAvailable: true,
    hotelId: "H001",
    createdAt: new Date("2024-01-25T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    type: "STANDARD"
  },
  {
    id: "R006",
    name: "Junior Süit",
    description: "Geniş oturma alanı ve şehir manzaralı junior süit.",
    price: 3800.0,
    maxAdults: 2,
    maxChildren: 1,
    floor: 4,
    roomNumber: 408,
    capacity: 3,
    bedCount: 1,
    isAvailable: true,
    hotelId: "H001",
    createdAt: new Date("2024-01-28T00:00:00.000Z"),
    updatedAt: new Date("2024-12-10T00:00:00.000Z"),
    deletedAt: null,
    bookings: [],
    featureStatus: [],
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    type: "JUNIOR_SUITE"
  }
];

export const reservations: Reservation[] = [
  {
    id: "res1",
    nightCount: 2,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 2,
    startDate: "2025-08-15T00:00:00.000Z",
    endDate: "2025-08-17T00:00:00.000Z",
    totalPrice: 500,
    hotelAddress: "Otel Sokak No:1, İstanbul",
    userPhone: "05000000001",
    specialRequest: "Deniz manzaralı oda",
    paymentMethod: "Credit Card",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user1",
    roomId: "R001",
    paymentCardId: "card1",
    isVerified: true,
    roomName: "Deluxe Deniz Manzaralı Oda",
    roomType: "DELUXE",
    roomNumber: 301,
    floor: 3,
    maxAdults: 2,
    maxChildren: 1,
    capacity: 3,
    bedCount: 1
  },
  {
    id: "res2",
    nightCount: 1,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 1,
    startDate: "2025-08-20T00:00:00.000Z",
    endDate: "2025-08-21T00:00:00.000Z",
    totalPrice: 250,
    hotelAddress: "Otel Sokak No:1, İstanbul",
    userPhone: "05000000002",
    paymentMethod: "Cash",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user2",
    roomId: "R003",
    paymentCardId: null,
    isVerified: false,
    roomName: "Ekonomik Tek Kişilik Oda",
    roomType: "STANDARD",
    roomNumber: 101,
    floor: 1,
    maxAdults: 1,
    maxChildren: 0,
    capacity: 1,
    bedCount: 1
  },
  {
    id: "res3",
    nightCount: 3,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 4,
    startDate: "2025-09-01T00:00:00.000Z",
    endDate: "2025-09-04T00:00:00.000Z",
    totalPrice: 1200,
    hotelAddress: "Otel Sokak No:2, Ankara",
    userPhone: "05000000003",
    specialRequest: "Ekstra yatak",
    paymentMethod: "Credit Card",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user3",
    roomId: "R002",
    paymentCardId: "card2",
    isVerified: true,
    roomName: "Aile Süiti",
    roomType: "SUITE",
    roomNumber: 501,
    floor: 5,
    maxAdults: 4,
    maxChildren: 2,
    capacity: 6,
    bedCount: 3
  },
  {
    id: "res4",
    nightCount: 2,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 2,
    startDate: "2025-09-10T00:00:00.000Z",
    endDate: "2025-09-12T00:00:00.000Z",
    totalPrice: 800,
    hotelAddress: "Otel Sokak No:3, İzmir",
    userPhone: "05000000004",
    paymentMethod: "Cash",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user4",
    roomId: "R004",
    paymentCardId: null,
    isVerified: false
  },
  {
    id: "res5",
    nightCount: 1,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 1,
    startDate: "2025-09-15T00:00:00.000Z",
    endDate: "2025-09-16T00:00:00.000Z",
    totalPrice: 300,
    hotelAddress: "Otel Sokak No:1, İstanbul",
    userPhone: "05000000005",
    specialRequest: "Yüksek kat",
    paymentMethod: "Credit Card",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user5",
    roomId: "R005",
    paymentCardId: "card3",
    isVerified: true
  },
  {
    id: "res6",
    nightCount: 4,
    checkIn: "12:00",
    checkOut: "14:00",
    guests: 3,
    startDate: "2025-10-01T00:00:00.000Z",
    endDate: "2025-10-05T00:00:00.000Z",
    totalPrice: 1600,
    hotelAddress: "Otel Sokak No:2, Ankara",
    userPhone: "05000000006",
    specialRequest: "Balayı paketi",
    paymentMethod: "Credit Card",
    createdAt: "2024-12-10T00:00:00.000Z",
    updatedAt: "2024-12-10T00:00:00.000Z",
    deletedAt: null,
    userId: "user6",
    roomId: "R006",
    paymentCardId: "card4",
    isVerified: true
  }
];

export const popularHotels: Hotel[] = [
  {
    id: "1",
    name: "Istanbul Grand Hotel",
    description: "Merkezi konumda, lüks bir otel",
    location: "Istanbul, Türkiye",
    address: "İstiklal Caddesi No:10",
    city: "Istanbul",
    country: "Türkiye",
    rating: 4.5,
    isActive: true,
    type: "HOTEL",
    createdAt: "2025-08-15",
    updatedAt: "2025-08-15",
    ownerId: "owner1",
    discountRate: 10,
    isDiscounted: true,
    discountStartDate: "2025-08-01",
    discountEndDate: "2025-08-31"
  },
  {
    id: "2",
    name: "Paris Central Hotel",
    description: "Şehir merkezinde modern otel",
    location: "Île de France, France",
    address: "Rue de Rivoli 5",
    city: "Paris",
    country: "France",
    rating: 4.2,
    isActive: true,
    type: "HOTEL",
    createdAt: "2025-08-15",
    updatedAt: "2025-08-15",
    ownerId: "owner2",
    discountRate: 5,
    isDiscounted: true,
    discountStartDate: "2025-08-10",
    discountEndDate: "2025-08-20"
  },
  {
    id: "3",
    name: "Marseille Seaside Hotel",
    description: "Deniz manzaralı rahat otel",
    location: "Provence-Alpes-Cotes d'Azur, France",
    address: "Quai du Port 12",
    city: "Marseille",
    country: "France",
    rating: 4.0,
    isActive: true,
    type: "HOTEL",
    createdAt: "2025-08-15",
    updatedAt: "2025-08-15",
    ownerId: "owner3",
    discountRate: 8,
    isDiscounted: true,
    discountStartDate: "2025-08-05",
    discountEndDate: "2025-08-25"
  },
  {
    id: "4",
    name: "Rabat Royal Hotel",
    description: "Şehrin kalbinde rahat bir otel",
    location: "Rabat-Sale, Fas",
    address: "Avenue Hassan II 20",
    city: "Rabat",
    country: "Fas",
    rating: 4.3,
    isActive: true,
    type: "HOTEL",
    createdAt: "2025-08-15",
    updatedAt: "2025-08-15",
    ownerId: "owner4",
    discountRate: 7,
    isDiscounted: true,
    discountStartDate: "2025-08-01",
    discountEndDate: "2025-08-31"
  },
  {
    id: "5",
    name: "Istanbul Bosphorus Hotel",
    description: "Boğaz manzaralı lüks otel",
    location: "Istanbul, Türkiye",
    address: "Sahilyolu Cad. No:15",
    city: "Istanbul",
    country: "Türkiye",
    rating: 4.6,
    isActive: true,
    type: "HOTEL",
    createdAt: "2025-08-15",
    updatedAt: "2025-08-15",
    ownerId: "owner5",
    discountRate: 12,
    isDiscounted: true,
    discountStartDate: "2025-08-05",
    discountEndDate: "2025-08-20"
  }
];


// export const hotelsData = [
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440001",
//     "name": "Grand Palace Hotel İstanbul",
//     "description": "İstanbul'un kalbinde, Boğaz manzaralı lüks otel. Tarihi yarımada üzerinde konumlanmış, modern konfor ve Osmanlı mimarisi bir arada.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Sultanahmet, İstanbul",
//     "address": "Sultanahmet Meydanı No:15, Fatih/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.8,
//     "discountRate": 15,
//     "isDiscounted": true,
//     "discountStartDate": "2024-12-01T00:00:00Z",
//     "discountEndDate": "2024-12-31T23:59:59Z",
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440101",
//     "isActive": true,
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "taxId": "1234567890",
//     "taxOffice": "Fatih Vergi Dairesi",
//     "tradeRegistryNumber": "12345678901234",
//     "businessLicense": "BL-2024-001234",
//     "addressProof": "address_proof_doc_url.pdf",
//     "taxCertificate": "tax_certificate_doc_url.pdf",
//     "rooms": [
//       {
//         "id": "room-001",
//         "name": "Deluxe Boğaz Manzaralı Oda",
//         "description": "Boğaz manzaralı, 35 m² genişliğinde, king size yatak ve jakuzili banyo",
//         "price": 2500,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-001-1",
//             "roomId": "room-001",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-001-2",
//             "roomId": "room-001",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-001-3",
//             "roomId": "room-001",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-001-4",
//             "roomId": "room-001",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-001-5",
//             "roomId": "room-001",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-001-2",
//         "name": "Standart Şehir Manzaralı Oda",
//         "description": "Şehir manzaralı, 25 m² genişliğinde, çift kişilik yatak",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 302,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-002-1",
//             "roomId": "room-001-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-002-2",
//             "roomId": "room-001-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-002-3",
//             "roomId": "room-001-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-001-3",
//         "name": "Presidential Suite",
//         "description": "Lüks suite oda, 65 m² genişliğinde, oturma odası ve jakuzili banyo",
//         "price": 4500,
//         "maxAdults": 3,
//         "maxChildren": 2,
//         "floor": 8,
//         "roomNumber": 801,
//         "capacity": 5,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-003-1",
//             "roomId": "room-001-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-2",
//             "roomId": "room-001-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-3",
//             "roomId": "room-001-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-4",
//             "roomId": "room-001-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-5",
//             "roomId": "room-001-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-6",
//             "roomId": "room-001-3",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-003-7",
//             "roomId": "room-001-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-001",
//         "url": "https://www.swissotel.com/assets/0/92/2119/2932/2971/2973/6442451685/d85da0b8-b0b9-43e5-9190-9465d2250dac.jpg",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-002",
//         "url": "https://www.peninsula.com/en/-/media/11---istanbul-property/rooms/room-photos-pit/18-gv6---grand-bosphorus-suite-with-balcony/pit_temp_grand-bosphorus-suite-with-balcony_bedroom_r.jpg?hash=CCE4D06258FC1144664373CF3A534688&mw=905",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-003",
//         "url": "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/149/2021/06/29115305/CORNER-ROOM-BOSPHORUS-VIEW-Bedroom.jpg",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-004",
//         "url": "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/BOP/BOP_094_aspect16x9.jpg",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-005",
//         "url": "https://www.peninsula.com/en/-/media/11---istanbul-property/rooms/room-photos-pit/6---bv1-deluxe-bosphorus-room/new-carpetistanbulaccommodationdeluxe-bosphorus-roombedroom-1r.jpg?hash=D30D166CC970F897780BF3EC978E2A40&mw=905",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "createdAt": "2024-01-15T10:30:00Z",
//         "deletedAt": null
//       }
//     ],
//     "props": [
//       {
//         "id": "prop-001-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "WIFI",
//         "createdAt": "2024-01-15T10:30:00Z"
//       },
//       {
//         "id": "prop-001-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "POOL",
//         "createdAt": "2024-01-15T10:30:00Z"
//       },
//       {
//         "id": "prop-001-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "SPA",
//         "createdAt": "2024-01-15T10:30:00Z"
//       },
//       {
//         "id": "prop-001-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "PARKING",
//         "createdAt": "2024-01-15T10:30:00Z"
//       },
//       {
//         "id": "prop-001-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-15T10:30:00Z"
//       },
//       {
//         "id": "prop-001-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440001",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-15T10:30:00Z"
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-001",
//         "rating": 5,
//         "text": "Muhteşem bir konaklama deneyimi yaşadık. Personel çok ilgili, odalar temiz ve manzara harika!",
//         "userId": "user-001"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440002",
//     "name": "Antalya Sahil Resort",
//     "description": "Antalya'nın en güzel sahilinde, her şey dahil konsepti ile hizmet veren 5 yıldızlı tatil köyü.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Lara Sahili, Antalya",
//     "address": "Lara Sahili, Güzeloba Mah. 2308 Sok. No:1, Muratpaşa/Antalya",
//     "city": "Antalya",
//     "country": "Türkiye",
//     "rating": 4.6,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440102",
//     "isActive": true,
//     "createdAt": "2024-02-10T09:15:00Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "taxId": "9876543210",
//     "taxOffice": "Muratpaşa Vergi Dairesi",
//     "tradeRegistryNumber": "23456789012345",
//     "businessLicense": "BL-2024-002345",
//     "addressProof": "address_proof_doc_url_2.pdf",
//     "taxCertificate": "tax_certificate_doc_url_2.pdf",
//     "rooms": [
//       {
//         "id": "room-002",
//         "name": "Deniz Manzaralı Aile Odası",
//         "description": "Deniz manzaralı, 45 m² genişliğinde, aile için ideal 2+1 oda",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-2-1-1",
//             "roomId": "room-002",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-1-2",
//             "roomId": "room-002",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-1-3",
//             "roomId": "room-002",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-1-4",
//             "roomId": "room-002",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-002-2",
//         "name": "Standart Havuz Manzaralı Oda",
//         "description": "Havuz manzaralı, 30 m² genişliğinde, çift kişilik yatak",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-2-2-1",
//             "roomId": "room-002-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-2-2",
//             "roomId": "room-002-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-2-3",
//             "roomId": "room-002-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-2-4",
//             "roomId": "room-002-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-002-3",
//         "name": "Deluxe Deniz Manzaralı Oda",
//         "description": "Panoramik deniz manzaralı, 40 m² genişliğinde, balkonlu",
//         "price": 3800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 405,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-2-3-1",
//             "roomId": "room-002-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-3-2",
//             "roomId": "room-002-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-3-3",
//             "roomId": "room-002-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-3-4",
//             "roomId": "room-002-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-3-5",
//             "roomId": "room-002-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-2-3-6",
//             "roomId": "room-002-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-006",
//         "url": "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007",
//         "url": "http://pix2.agoda.net/hotelimages/6/6/6_1201211018006071850.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008",
//         "url": "http://pix5.agoda.net/hotelimages/6/6/6_0905131455001101926.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009",
//         "url": "http://pix1.agoda.net/hotelimages/6/6/6_0905131455001101927.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010",
//         "url": "http://pix4.agoda.net/hotelimages/6/6/6_0905131455001101930.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "createdAt": "2024-02-10T09:15:00Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-002",
//         "rating": 5,
//         "text": "Çocuklarla muhteşem bir tatil geçirdik. Aqua park harika!",
//         "userId": "user-002"
//       }
//     ],
//     "props": [
//       {
//         "id": "prop-2-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "WIFI",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "POOL",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "SPA",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "PARKING",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "GYM",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-02-10T09:15:00Z"
//       },
//       {
//         "id": "prop-2-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440002",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-10T09:15:00Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440003",
//     "name": "Sai Kaew Beach Resort Bodrum",
//     "description": "Bodrum'un güzel sahilinde 4 yıldızlı konforlu tatil köyü. Geniş olanakları ve deniz manzaralı odaları ile iş ve tatil misafirleri için ideal.",
//     "checkIn": "14:00",
//     "checkOut": "11:30",
//     "location": "Bodrum Merkez, Muğla",
//     "address": "Cumhuriyet Mah. Atatürk Cad. No:15, Bodrum/Muğla",
//     "city": "Bodrum",
//     "country": "Türkiye",
//     "rating": 4.1,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440103",
//     "isActive": true,
//     "taxId": "4850123456",
//     "taxOffice": "Bodrum Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-003",
//         "name": "Deniz Manzaralı Superior Oda",
//         "description": "Deniz manzaralı, oturma alanı bulunan, LCD TV ve kablosuz internet erişimi",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 201,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-3-1-1",
//             "roomId": "room-003",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-1-2",
//             "roomId": "room-003",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-1-3",
//             "roomId": "room-003",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-1-4",
//             "roomId": "room-003",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-003-2",
//         "name": "Standart Bahçe Manzaralı Oda",
//         "description": "Bahçe manzaralı, 28 m² genişliğinde, rahat ve modern",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 110,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-3-2-1",
//             "roomId": "room-003-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-2-2",
//             "roomId": "room-003-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-2-3",
//             "roomId": "room-003-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-003-3",
//         "name": "Executive Suite Deniz Manzaralı",
//         "description": "Lüks executive suite, 55 m² genişliğinde, oturma odası ve özel balkon",
//         "price": 4200,
//         "maxAdults": 3,
//         "maxChildren": 1,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-3-3-1",
//             "roomId": "room-003-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-2",
//             "roomId": "room-003-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-3",
//             "roomId": "room-003-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-4",
//             "roomId": "room-003-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-5",
//             "roomId": "room-003-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-6",
//             "roomId": "room-003-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-3-3-7",
//             "roomId": "room-003-3",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-011",
//         "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012",
//         "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013",
//         "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014",
//         "url": "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-015",
//         "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "createdAt": "2024-01-01T05:43:30.036Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-003",
//         "rating": 4,
//         "text": "Sahil çok güzel, personel yardımsever. Fitness merkezi ve spa harika!",
//         "userId": "user-003"
//       }
//     ],
//     "createdAt": "2024-01-01T05:43:30.036Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 49065242394217,
//     "businessLicense": "BL-2024-000003",
//     "addressProof": "address_proof_doc_url_3.pdf",
//     "taxCertificate": "tax_certificate_doc_url_3.pdf",
//     "props": [
//       {
//         "id": "prop-3-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "WIFI",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       },
//       {
//         "id": "prop-3-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "POOL",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       },
//       {
//         "id": "prop-3-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "SPA",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       },
//       {
//         "id": "prop-3-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "PARKING",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       },
//       {
//         "id": "prop-3-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       },
//       {
//         "id": "prop-3-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440003",
//         "feature": "GYM",
//         "createdAt": "2024-01-01T05:43:30.036Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440004",
//     "name": "Marine Butik Otel İzmir",
//     "description": "İzmir'de iş ve tatil misafirleri için mükemmel konumda bulunan otel. Konforlu odalar ve çeşitli olanaklar sunuyor.",
//     "checkIn": "15:00",
//     "checkOut": "12:00",
//     "location": "Alsancak, İzmir",
//     "address": "Cumhuriyet Bulvarı No:142, Alsancak/İzmir",
//     "city": "İzmir",
//     "country": "Türkiye",
//     "rating": 3.7,
//     "discountRate": 10,
//     "isDiscounted": true,
//     "discountStartDate": "2024-11-01T00:00:00Z",
//     "discountEndDate": "2024-12-31T23:59:59Z",
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440104",
//     "isActive": true,
//     "taxId": "3510987654",
//     "taxOffice": "İzmir Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-004",
//         "name": "Konfor Odası",
//         "description": "Isıtma, telefon, televizyon ve uydu TV bulunan rahat oda",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "createdAt": "2024-05-15T22:41:33.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-4-1-1",
//             "roomId": "room-004",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-1-2",
//             "roomId": "room-004",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-1-3",
//             "roomId": "room-004",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-004-2",
//         "name": "Deluxe Şehir Manzaralı Oda",
//         "description": "Şehir manzaralı, 32 m² genişliğinde, modern mobilyalar",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 402,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "createdAt": "2024-05-15T22:41:33.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-4-2-1",
//             "roomId": "room-004-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-2-2",
//             "roomId": "room-004-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-2-3",
//             "roomId": "room-004-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-2-4",
//             "roomId": "room-004-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-4-2-5",
//             "roomId": "room-004-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-004",
//         "url": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "createdAt": "2024-05-15T22:41:33.816Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-004",
//         "rating": 4,
//         "text": "Konum mükemmel, temiz odalar. Personel çok nazik ve yardımsever.",
//         "userId": "user-004"
//       }
//     ],
//     "createdAt": "2024-05-15T22:41:33.816Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 31331326297967,
//     "businessLicense": "BL-2024-000004",
//     "addressProof": "address_proof_doc_url_4.pdf",
//     "taxCertificate": "tax_certificate_doc_url_4.pdf",
//     "props": [
//       {
//         "id": "prop-4-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "feature": "WIFI",
//         "createdAt": "2024-05-15T22:41:33.816Z"
//       },
//       {
//         "id": "prop-4-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "feature": "PARKING",
//         "createdAt": "2024-05-15T22:41:33.816Z"
//       },
//       {
//         "id": "prop-4-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440004",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-15T22:41:33.816Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440005",
//     "name": "TRYP Ankara Merkez Otel",
//     "description": "Ankara'da iş ve tatil misafirleri için mükemmel konumda. Modern olanaklar ve konforlu konaklama imkanı sunan 4 yıldızlı otel.",
//     "checkIn": "13:00",
//     "checkOut": "12:00",
//     "location": "Kızılay, Ankara",
//     "address": "Atatürk Bulvarı No:89, Kızılay/Ankara",
//     "city": "Ankara",
//     "country": "Türkiye",
//     "rating": 3.8,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440105",
//     "isActive": true,
//     "taxId": "0610234567",
//     "taxOffice": "Ankara Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-005",
//         "name": "Executive Oda",
//         "description": "Zarif döşenmiş, modern olanaklar ile donatılmış konforlu oda",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 401,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "createdAt": "2024-03-11T05:45:19.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-5-1-1",
//             "roomId": "room-005",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-1-2",
//             "roomId": "room-005",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-1-3",
//             "roomId": "room-005",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-1-4",
//             "roomId": "room-005",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-005-2",
//         "name": "Standart İş Odası",
//         "description": "İş seyahatleri için ideal, 26 m² genişliğinde, çalışma masası",
//         "price": 1500,
//         "maxAdults": 1,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 1,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "createdAt": "2024-03-11T05:45:19.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-5-2-1",
//             "roomId": "room-005-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-2-2",
//             "roomId": "room-005-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-2-3",
//             "roomId": "room-005-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-005-3",
//         "name": "Suite Oda",
//         "description": "Geniş suite oda, 48 m² genişliğinde, oturma alanı ve balkon",
//         "price": 2600,
//         "maxAdults": 3,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "createdAt": "2024-03-11T05:45:19.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-5-3-1",
//             "roomId": "room-005-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-3-2",
//             "roomId": "room-005-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-3-3",
//             "roomId": "room-005-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-3-4",
//             "roomId": "room-005-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-3-5",
//             "roomId": "room-005-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-5-3-6",
//             "roomId": "room-005-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-005",
//         "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "createdAt": "2024-03-11T05:45:19.988Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-005",
//         "rating": 4,
//         "text": "Şehir merkezinde harika konum. Fitness merkezi ve sauna mükemmel!",
//         "userId": "user-005"
//       }
//     ],
//     "createdAt": "2024-03-11T05:45:19.988Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 19483747262949,
//     "businessLicense": "BL-2024-000005",
//     "addressProof": "address_proof_doc_url_5.pdf",
//     "taxCertificate": "tax_certificate_doc_url_5.pdf",
//     "props": [
//       {
//         "id": "prop-5-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "feature": "WIFI",
//         "createdAt": "2024-03-11T05:45:19.988Z"
//       },
//       {
//         "id": "prop-5-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "feature": "GYM",
//         "createdAt": "2024-03-11T05:45:19.988Z"
//       },
//       {
//         "id": "prop-5-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-03-11T05:45:19.988Z"
//       },
//       {
//         "id": "prop-5-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440005",
//         "feature": "PARKING",
//         "createdAt": "2024-03-11T05:45:19.988Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440006",
//     "name": "Grand Palace Hotel İstanbul Deluxe",
//     "description": "İstanbul'un kalbinde, Boğaz manzaralı lüks otel. Tarihi yarımada üzerinde konumlanmış, modern konfor ve Osmanlı mimarisi bir arada.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Sultanahmet, İstanbul",
//     "address": "Sultanahmet Meydanı No:15, Fatih/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.8,
//     "discountRate": 15,
//     "isDiscounted": true,
//     "discountStartDate": "2024-12-01T00:00:00Z",
//     "discountEndDate": "2024-12-31T23:59:59Z",
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440101",
//     "isActive": true,
//     "taxId": "1234567890",
//     "taxOffice": "Fatih Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-001",
//         "name": "Deluxe Boğaz Manzaralı Oda",
//         "description": "Boğaz manzaralı, 35 m² genişliğinde, king size yatak ve jakuzili banyo",
//         "price": 2500,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-1-1",
//             "roomId": "room-001",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-2",
//             "roomId": "room-001",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-3",
//             "roomId": "room-001",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-4",
//             "roomId": "room-001",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-5",
//             "roomId": "room-001",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-6",
//             "roomId": "room-001",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-1-7",
//             "roomId": "room-001",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-002",
//         "name": "Standart Şehir Manzaralı Oda",
//         "description": "Şehir manzaralı, 25 m² genişliğinde, çift kişilik yatak",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 302,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-2-1",
//             "roomId": "room-002",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-2-2",
//             "roomId": "room-002",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-2-3",
//             "roomId": "room-002",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-2-4",
//             "roomId": "room-002",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-003",
//         "name": "Presidential Suite",
//         "description": "Lüks suite oda, 65 m² genişliğinde, oturma odası ve jakuzili banyo",
//         "price": 4500,
//         "maxAdults": 3,
//         "maxChildren": 2,
//         "floor": 8,
//         "roomNumber": 801,
//         "capacity": 5,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-3-1",
//             "roomId": "room-003",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-2",
//             "roomId": "room-003",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-3",
//             "roomId": "room-003",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-4",
//             "roomId": "room-003",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-5",
//             "roomId": "room-003",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-6",
//             "roomId": "room-003",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-7",
//             "roomId": "room-003",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-8",
//             "roomId": "room-003",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-3-9",
//             "roomId": "room-003",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-004",
//         "name": "Executive Balkonlu Oda",
//         "description": "Geniş balkonlu, 28 m² genişliğinde, modern mobilyalar",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 6,
//         "roomNumber": 603,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-4-1",
//             "roomId": "room-004",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-2",
//             "roomId": "room-004",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-3",
//             "roomId": "room-004",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-4",
//             "roomId": "room-004",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-5",
//             "roomId": "room-004",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-6",
//             "roomId": "room-004",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-4-7",
//             "roomId": "room-004",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-005",
//         "name": "Junior Suite Boğaz Görümlü",
//         "description": "Boğaz görümlü junior suite, 45 m² genişliğinde, oturma alanı",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 7,
//         "roomNumber": 705,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "JUNIOR_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-5-1",
//             "roomId": "room-005",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-2",
//             "roomId": "room-005",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-3",
//             "roomId": "room-005",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-4",
//             "roomId": "room-005",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-5",
//             "roomId": "room-005",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-6",
//             "roomId": "room-005",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-7",
//             "roomId": "room-005",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-5-8",
//             "roomId": "room-005",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-006",
//         "name": "Economy Tek Kişilik",
//         "description": "Ekonomik tek kişilik oda, 18 m² genişliğinde",
//         "price": 1200,
//         "maxAdults": 1,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 1,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "ECONOMY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-6-6-1",
//             "roomId": "room-006",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-6-2",
//             "roomId": "room-006",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-6-6-3",
//             "roomId": "room-006",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-001",
//         "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-002",
//         "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-003",
//         "url": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-004",
//         "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-005",
//         "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-03-02T04:53:54.693Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-001",
//         "rating": 5,
//         "text": "Muhteşem bir konaklama deneyimi yaşadık. Personel çok ilgili, odalar temiz ve manzara harika!",
//         "userId": "user-001"
//       },
//       {
//         "id": "comment-002",
//         "rating": 4,
//         "text": "Konum çok iyi, tarihi yerlere yürüme mesafesi. Kahvaltı zengin ve lezzetli.",
//         "userId": "user-002"
//       }
//     ],
//     "createdAt": "2024-03-02T04:53:54.693Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 40404718556013,
//     "businessLicense": "BL-2024-000006",
//     "addressProof": "address_proof_doc_url_6.pdf",
//     "taxCertificate": "tax_certificate_doc_url_6.pdf",
//     "props": [
//       {
//         "id": "prop-6-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "WIFI",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       },
//       {
//         "id": "prop-6-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "POOL",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       },
//       {
//         "id": "prop-6-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "SPA",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       },
//       {
//         "id": "prop-6-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "PARKING",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       },
//       {
//         "id": "prop-6-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       },
//       {
//         "id": "prop-6-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-03-02T04:53:54.693Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440007",
//     "name": "Seaside Resort Antalya",
//     "description": "Antalya'nın pristine sahillerinde, all-inclusive lüks tatil köyü. Özel plajı ve spa merkezi ile unutulmaz tatil deneyimi.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Lara, Antalya",
//     "address": "Lara Sahili Turizm Caddesi No:42, Muratpaşa/Antalya",
//     "city": "Antalya",
//     "country": "Türkiye",
//     "rating": 4.9,
//     "discountRate": 25,
//     "isDiscounted": true,
//     "discountStartDate": "2024-11-15T00:00:00Z",
//     "discountEndDate": "2025-01-15T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440102",
//     "isActive": true,
//     "taxId": "2345678901",
//     "taxOffice": "Antalya Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-007",
//         "name": "Ocean View Superior",
//         "description": "Deniz manzaralı superior oda, 40 m² genişliğinde, özel balkon",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 4,
//         "roomNumber": 402,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-1-1",
//             "roomId": "room-007",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-2",
//             "roomId": "room-007",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-3",
//             "roomId": "room-007",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-4",
//             "roomId": "room-007",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-5",
//             "roomId": "room-007",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-6",
//             "roomId": "room-007",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-7",
//             "roomId": "room-007",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-1-8",
//             "roomId": "room-007",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-008",
//         "name": "Garden Villa",
//         "description": "Bahçe manzaralı villa, 80 m² genişliğinde, özel teras",
//         "price": 5500,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-2-1",
//             "roomId": "room-008",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-2",
//             "roomId": "room-008",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-3",
//             "roomId": "room-008",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-4",
//             "roomId": "room-008",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-5",
//             "roomId": "room-008",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-6",
//             "roomId": "room-008",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-7",
//             "roomId": "room-008",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-8",
//             "roomId": "room-008",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-2-9",
//             "roomId": "room-008",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-009",
//         "name": "Family Suite Deluxe",
//         "description": "Aile için ideal suite, 55 m² genişliğinde, iki yatak odası",
//         "price": 4200,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 305,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "FAMILY_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-3-1",
//             "roomId": "room-009",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-2",
//             "roomId": "room-009",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-3",
//             "roomId": "room-009",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-4",
//             "roomId": "room-009",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-5",
//             "roomId": "room-009",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-6",
//             "roomId": "room-009",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-7",
//             "roomId": "room-009",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-3-8",
//             "roomId": "room-009",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-010",
//         "name": "Honeymoon Suite",
//         "description": "Balayı süiti, 50 m² genişliğinde, jakuzili banyo ve romantik dekorasyon",
//         "price": 6200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 6,
//         "roomNumber": 602,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "HONEYMOON",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-4-1",
//             "roomId": "room-010",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-2",
//             "roomId": "room-010",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-3",
//             "roomId": "room-010",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-4",
//             "roomId": "room-010",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-5",
//             "roomId": "room-010",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-6",
//             "roomId": "room-010",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-7",
//             "roomId": "room-010",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-8",
//             "roomId": "room-010",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-4-9",
//             "roomId": "room-010",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-011",
//         "name": "Standard Double Sea View",
//         "description": "Deniz manzaralı standart oda, 32 m² genişliğinde",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 208,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-5-1",
//             "roomId": "room-011",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-5-2",
//             "roomId": "room-011",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-5-3",
//             "roomId": "room-011",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-5-4",
//             "roomId": "room-011",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-5-5",
//             "roomId": "room-011",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-012",
//         "name": "Presidential Ocean Suite",
//         "description": "Okyanus manzaralı presidential suite, 120 m² genişliğinde, özel asansör",
//         "price": 8500,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 10,
//         "roomNumber": 1001,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-7-6-1",
//             "roomId": "room-012",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-2",
//             "roomId": "room-012",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-3",
//             "roomId": "room-012",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-4",
//             "roomId": "room-012",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-5",
//             "roomId": "room-012",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-6",
//             "roomId": "room-012",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-7",
//             "roomId": "room-012",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-8",
//             "roomId": "room-012",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-7-6-9",
//             "roomId": "room-012",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-006",
//         "url": "https://images.unsplash.com/photo-1597252812804-6a0d0bdcb562?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007",
//         "url": "https://images.unsplash.com/photo-1541832676-9b763b88b95d?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008",
//         "url": "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009",
//         "url": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010",
//         "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-01-08T05:56:54.816Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-003",
//         "rating": 5,
//         "text": "All-inclusive sistemi mükemmel, animasyon ekibi harika. Plaj temiz ve güvenli.",
//         "userId": "user-003"
//       },
//       {
//         "id": "comment-004",
//         "rating": 5,
//         "text": "Çocuklar için aktiviteler çok güzel düzenlenmiş. Yemekler lezzetli ve çeşitli.",
//         "userId": "user-004"
//       }
//     ],
//     "createdAt": "2024-01-08T05:56:54.816Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 37285609051848,
//     "businessLicense": "BL-2024-000007",
//     "addressProof": "address_proof_doc_url_7.pdf",
//     "taxCertificate": "tax_certificate_doc_url_7.pdf",
//     "props": [
//       {
//         "id": "prop-7-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "WIFI",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       },
//       {
//         "id": "prop-7-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "POOL",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       },
//       {
//         "id": "prop-7-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "SPA",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       },
//       {
//         "id": "prop-7-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "PARKING",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       },
//       {
//         "id": "prop-7-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       },
//       {
//         "id": "prop-7-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-08T05:56:54.816Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440008",
//     "name": "Cappadocia Cave Villa",
//     "description": "Kapadokya'nın büyüleyici manzaraları arasında, geleneksel kaya odalarıyla modern konforun buluştuğu eşsiz villa.",
//     "checkIn": "14:30",
//     "checkOut": "11:30",
//     "location": "Göreme, Nevşehir",
//     "address": "Göreme Milli Parkı, Müze Yolu No:8, Göreme/Nevşehir",
//     "city": "Nevşehir",
//     "country": "Türkiye",
//     "rating": 4.7,
//     "discountRate": 20,
//     "isDiscounted": true,
//     "discountStartDate": "2024-10-01T00:00:00Z",
//     "discountEndDate": "2024-12-20T23:59:59Z",
//     "type": "VILLA",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440103",
//     "isActive": true,
//     "taxId": "3456789012",
//     "taxOffice": "Nevşehir Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-013",
//         "name": "Cave Suite Premium",
//         "description": "Peri bacaları manzaralı kaya oda, 45 m² genişliğinde, geleneksel dekorasyon",
//         "price": 3800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 1,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "CAVE_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-8-1-1",
//             "roomId": "room-013",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-2",
//             "roomId": "room-013",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-3",
//             "roomId": "room-013",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-4",
//             "roomId": "room-013",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-5",
//             "roomId": "room-013",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-6",
//             "roomId": "room-013",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-1-7",
//             "roomId": "room-013",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-014",
//         "name": "Traditional Cave Room",
//         "description": "Geleneksel kaya odası, 35 m² genişliğinde, otantik atmosfer",
//         "price": 2900,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 2,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "TRADITIONAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-8-2-1",
//             "roomId": "room-014",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-2-2",
//             "roomId": "room-014",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-2-3",
//             "roomId": "room-014",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-2-4",
//             "roomId": "room-014",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-2-5",
//             "roomId": "room-014",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-015",
//         "name": "Deluxe Cave Villa",
//         "description": "Lüks kaya villa, 70 m² genişliğinde, özel teras ve jakuzili banyo",
//         "price": 5200,
//         "maxAdults": 3,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 3,
//         "capacity": 5,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "DELUXE_VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-8-3-1",
//             "roomId": "room-015",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-2",
//             "roomId": "room-015",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-3",
//             "roomId": "room-015",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-4",
//             "roomId": "room-015",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-5",
//             "roomId": "room-015",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-6",
//             "roomId": "room-015",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-7",
//             "roomId": "room-015",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-8",
//             "roomId": "room-015",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-3-9",
//             "roomId": "room-015",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-016",
//         "name": "Family Cave House",
//         "description": "Aile kaya evi, 85 m² genişliğinde, iki yatak odası ve oturma alanı",
//         "price": 4800,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 4,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "FAMILY_HOUSE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-8-4-1",
//             "roomId": "room-016",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-2",
//             "roomId": "room-016",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-3",
//             "roomId": "room-016",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-4",
//             "roomId": "room-016",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-5",
//             "roomId": "room-016",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-6",
//             "roomId": "room-016",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-4-7",
//             "roomId": "room-016",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-017",
//         "name": "Romantic Cave Suite",
//         "description": "Romantik kaya süiti, 40 m² genişliğinde, şömine ve özel dekorasyon",
//         "price": 4200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 5,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "ROMANTIC",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-8-5-1",
//             "roomId": "room-017",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-2",
//             "roomId": "room-017",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-3",
//             "roomId": "room-017",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-4",
//             "roomId": "room-017",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-5",
//             "roomId": "room-017",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-6",
//             "roomId": "room-017",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-7",
//             "roomId": "room-017",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-8-5-8",
//             "roomId": "room-017",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-011",
//         "url": "http://pix1.agoda.net/hotelimages/cappadocia/1/cappadocia_cave_exterior.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012",
//         "url": "http://pix2.agoda.net/hotelimages/cappadocia/2/cappadocia_fairy_chimneys.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013",
//         "url": "http://pix3.agoda.net/hotelimages/cappadocia/3/cappadocia_cave_room.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014",
//         "url": "http://pix4.agoda.net/hotelimages/cappadocia/4/cappadocia_terrace_view.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-015",
//         "url": "http://pix5.agoda.net/hotelimages/cappadocia/5/cappadocia_restaurant.jpg?s=312x",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-05-28T15:05:22.417Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-005",
//         "rating": 5,
//         "text": "Kapadokya deneyimi için mükemmel bir yer. Balon turu organize ettiler, unutulmaz bir deneyimdi.",
//         "userId": "user-005"
//       }
//     ],
//     "createdAt": "2024-05-28T15:05:22.417Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 63403104699262,
//     "businessLicense": "BL-2024-000008",
//     "addressProof": "address_proof_doc_url_8.pdf",
//     "taxCertificate": "tax_certificate_doc_url_8.pdf",
//     "props": [
//       {
//         "id": "prop-8-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "WIFI",
//         "createdAt": "2024-05-28T15:05:22.417Z"
//       },
//       {
//         "id": "prop-8-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "PARKING",
//         "createdAt": "2024-05-28T15:05:22.417Z"
//       },
//       {
//         "id": "prop-8-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-28T15:05:22.417Z"
//       },
//       {
//         "id": "prop-8-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-05-28T15:05:22.417Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440009",
//     "name": "Boğaziçi Panorama Resort",
//     "description": "Boğaz kenarında, modern hizmetlerle bezenmiş lüks resort. Hem şehir manzarası hem deniz havası bir arada.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Bebek, İstanbul",
//     "address": "Bebek Caddesi No:42, Beşiktaş/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.7,
//     "discountRate": 10,
//     "isDiscounted": true,
//     "discountStartDate": "2025-09-01T00:00:00Z",
//     "discountEndDate": "2025-09-30T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440200",
//     "isActive": true,
//     "taxId": "9876543210",
//     "taxOffice": "Beşiktaş Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-A1",
//         "name": "Superior King Deniz Manzaralı",
//         "description": "Büyük pencerelerden Boğaz manzarası, king size yatak, geniş balkon",
//         "price": 3000,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 4,
//         "roomNumber": 401,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-9-1-1",
//             "roomId": "room-A1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-1-2",
//             "roomId": "room-A1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-1-3",
//             "roomId": "room-A1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-1-4",
//             "roomId": "room-A1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-1-5",
//             "roomId": "room-A1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-A2",
//         "name": "Family Suite",
//         "description": "Geniş aile süiti, iki oda, oturma alanı, ayrı çocuk odası",
//         "price": 4500,
//         "maxAdults": 2,
//         "maxChildren": 3,
//         "floor": 5,
//         "roomNumber": 502,
//         "capacity": 5,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-9-2-1",
//             "roomId": "room-A2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-2-2",
//             "roomId": "room-A2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-2-3",
//             "roomId": "room-A2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-2-4",
//             "roomId": "room-A2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-2-5",
//             "roomId": "room-A2",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-A3",
//         "name": "Romantik Oda",
//         "description": "Hassas dekorasyon, jakuzili banyo, sınırlı Boğaz manzarası",
//         "price": 3500,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 303,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": false,
//         "type": "ROMANTIC",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-9-3-1",
//             "roomId": "room-A3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-3-2",
//             "roomId": "room-A3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-3-3",
//             "roomId": "room-A3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-3-4",
//             "roomId": "room-A3",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-3-5",
//             "roomId": "room-A3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-A4",
//         "name": "Çift Kişilik Standart",
//         "description": "Şehir içi manzaralı, sade bir oda",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 204,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-9-4-1",
//             "roomId": "room-A4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-4-2",
//             "roomId": "room-A4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-9-4-3",
//             "roomId": "room-A4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-101",
//         "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-102",
//         "url": "https://images.unsplash.com/photo-1520637836862-4d197d17c9a4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-103",
//         "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-104",
//         "url": "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-105",
//         "url": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-02-26T12:39:13.497Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-101",
//         "rating": 5,
//         "text": "Boğaz manzaralı terasta kahvaltı harikaydı, personel güleryüzlü!",
//         "userId": "user-101"
//       },
//       {
//         "id": "comment-102",
//         "rating": 4,
//         "text": "Odalar konforlu ancak spa biraz kalabalıktı.",
//         "userId": "user-102"
//       }
//     ],
//     "createdAt": "2024-02-26T12:39:13.497Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 59640911169997,
//     "businessLicense": "BL-2024-000009",
//     "addressProof": "address_proof_doc_url_9.pdf",
//     "taxCertificate": "tax_certificate_doc_url_9.pdf",
//     "props": [
//       {
//         "id": "prop-9-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "WIFI",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       },
//       {
//         "id": "prop-9-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "POOL",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       },
//       {
//         "id": "prop-9-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "SPA",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       },
//       {
//         "id": "prop-9-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       },
//       {
//         "id": "prop-9-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "PARKING",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       },
//       {
//         "id": "prop-9-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "GYM",
//         "createdAt": "2024-02-26T12:39:13.497Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440020",
//     "name": "Sultan Sarnıcı Boutique Hotel",
//     "description": "Tarihi Osmanlı atmosferiyle bezenmiş, eski bir sarnıca dönüştürülmüş butik otel. Şehrin tam merkezinde, dokuyu hissetmek isteyenlere özel.",
//     "checkIn": "14:00",
//     "checkOut": "11:00",
//     "location": "Sultanahmet, İstanbul",
//     "address": "Sarnıç Sokak No:7, Fatih/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.9,
//     "discountRate": 0,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "HOSTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440201",
//     "isActive": true,
//     "taxId": "3333333333",
//     "taxOffice": "Fatih Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-B1",
//         "name": "Tarihi Taş Oda",
//         "description": "Orijinal taş duvarlar ve döşemeler, çift kişilik yatak, sade dizayn",
//         "price": 1200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-10-1-1",
//             "roomId": "room-B1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-10-1-2",
//             "roomId": "room-B1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-10-1-3",
//             "roomId": "room-B1",
//             "feature": "SAFE_BOX",
//             "isAvailable": false,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-B2",
//         "name": "Yüksek Tavanlı Ortak Oda",
//         "description": "Geniş ortak yatakhane, beş kişilik",
//         "price": 800,
//         "maxAdults": 5,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 102,
//         "capacity": 5,
//         "bedCount": 5,
//         "isAvailable": true,
//         "type": "ROOM",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-10-2-1",
//             "roomId": "room-B2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-10-2-2",
//             "roomId": "room-B2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-B1",
//         "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-B2",
//         "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-B3",
//         "url": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-B4",
//         "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-B5",
//         "url": "https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "createdAt": "2024-04-24T03:34:32.078Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-B1",
//         "rating": 5,
//         "text": "Tarihi atmosfer ve sıcak personel çok büyüleyiciydi.",
//         "userId": "user-201"
//       }
//     ],
//     "createdAt": "2024-04-24T03:34:32.078Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 87894059531429,
//     "businessLicense": "BL-2024-000010",
//     "addressProof": "address_proof_doc_url_10.pdf",
//     "taxCertificate": "tax_certificate_doc_url_10.pdf",
//     "props": [
//       {
//         "id": "prop-10-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "feature": "WIFI",
//         "createdAt": "2024-04-24T03:34:32.078Z"
//       },
//       {
//         "id": "prop-10-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440020",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-04-24T03:34:32.078Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440030",
//     "name": "Moda Bungalow Escape",
//     "description": "Kadıköy Moda’da, deniz kenarında, sakin ve yazı hissettiren bungalow konseptinde tatil evi.",
//     "checkIn": "15:00",
//     "checkOut": "10:00",
//     "location": "Moda, İstanbul",
//     "address": "Moda Sahili Yolu No:100, Kadıköy/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.6,
//     "discountRate": 5,
//     "isDiscounted": true,
//     "discountStartDate": "2025-07-01T00:00:00Z",
//     "discountEndDate": "2025-07-31T23:59:59Z",
//     "type": "BUNGALOW",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440301",
//     "isActive": true,
//     "taxId": "4444444444",
//     "taxOffice": "Kadıköy Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-C1",
//         "name": "Deniz Manzaralı Bungalow",
//         "description": "Tek yataklı şirin bir bungalow, ön kısmında küçük teras ve deniz manzarası",
//         "price": 2000,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 0,
//         "roomNumber": 1,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-11-1-1",
//             "roomId": "room-C1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-11-1-2",
//             "roomId": "room-C1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-11-1-3",
//             "roomId": "room-C1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": false,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-C1",
//         "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-C2",
//         "url": "https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-C3",
//         "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-C4",
//         "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-C5",
//         "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "createdAt": "2024-02-22T22:45:10.172Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-C1",
//         "rating": 4,
//         "text": "Sessiz, huzurlu; yalnızca deniz sesi ve rüzgâr vardı.",
//         "userId": "user-301"
//       }
//     ],
//     "createdAt": "2024-02-22T22:45:10.172Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 29719243804058,
//     "businessLicense": "BL-2024-000011",
//     "addressProof": "address_proof_doc_url_11.pdf",
//     "taxCertificate": "tax_certificate_doc_url_11.pdf",
//     "props": [
//       {
//         "id": "prop-11-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "feature": "WIFI",
//         "createdAt": "2024-02-22T22:45:10.172Z"
//       },
//       {
//         "id": "prop-11-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "feature": "PARKING",
//         "createdAt": "2024-02-22T22:45:10.172Z"
//       },
//       {
//         "id": "prop-11-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440030",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-22T22:45:10.172Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440040",
//     "name": "Galata Rooftop Apartment",
//     "description": "Galata Kulesi manzaralı çatı katı dairesi; şehirli, sanatçı ruhlu konaklamalar için ideal.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Galata, İstanbul",
//     "address": "Asmalı Mescit Sokak No:18, Beyoğlu/İstanbul",
//     "city": "İstanbul",
//     "country": "Türkiye",
//     "rating": 4.5,
//     "discountRate": 12.5,
//     "isDiscounted": true,
//     "discountStartDate": "2025-08-01T00:00:00Z",
//     "discountEndDate": "2025-08-15T23:59:59Z",
//     "type": "APARTMENT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440401",
//     "isActive": true,
//     "taxId": "5555555555",
//     "taxOffice": "Beyoğlu Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-D1",
//         "name": "Çatı Katı Stüdyo",
//         "description": "Açık plan stüdyo, çatı katı, geniş pencere ve mutfak, Galata manzarası",
//         "price": 2700,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-12-1-1",
//             "roomId": "room-D1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-12-1-2",
//             "roomId": "room-D1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-12-1-3",
//             "roomId": "room-D1",
//             "feature": "MINIBAR",
//             "isAvailable": false,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-12-1-4",
//             "roomId": "room-D1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-12-1-5",
//             "roomId": "room-D1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-D1",
//         "url": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-D2",
//         "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-D3",
//         "url": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-D4",
//         "url": "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-D5",
//         "url": "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "createdAt": "2024-03-23T05:45:11.713Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-D1",
//         "rating": 5,
//         "text": "Galata manzarası sabah kahvimi özel kıldı!",
//         "userId": "user-401"
//       }
//     ],
//     "createdAt": "2024-03-23T05:45:11.713Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 41736368161340,
//     "businessLicense": "BL-2024-000012",
//     "addressProof": "address_proof_doc_url_12.pdf",
//     "taxCertificate": "tax_certificate_doc_url_12.pdf",
//     "props": [
//       {
//         "id": "prop-12-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "feature": "WIFI",
//         "createdAt": "2024-03-23T05:45:11.713Z"
//       },
//       {
//         "id": "prop-12-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-03-23T05:45:11.713Z"
//       },
//       {
//         "id": "prop-12-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "feature": "PARKING",
//         "createdAt": "2024-03-23T05:45:11.713Z"
//       },
//       {
//         "id": "prop-12-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440040",
//         "feature": "ROOM_SERVICE",
//         "createdAt": "2024-03-23T05:45:11.713Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440050",
//     "name": "Aegean Pearl Resort",
//     "description": "Ege Denizi'nin berrak sularında, lüks tatil deneyimi sunan 5 yıldızlı resort. Özel plajı ve spa merkezi ile unutulmaz anlar.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Çeşme, İzmir",
//     "address": "Altınkum Sahili No:25, Çeşme/İzmir",
//     "city": "İzmir",
//     "country": "Türkiye",
//     "rating": 4.8,
//     "discountRate": 18,
//     "isDiscounted": true,
//     "discountStartDate": "2025-06-01T00:00:00Z",
//     "discountEndDate": "2025-08-31T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440150",
//     "isActive": true,
//     "taxId": "3512345678",
//     "taxOffice": "Çeşme Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-050-1",
//         "name": "Deluxe Sea View",
//         "description": "Deniz manzaralı deluxe oda, 42 m² genişliğinde, özel balkon",
//         "price": 3400,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-13-1-1",
//             "roomId": "room-050-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-1-2",
//             "roomId": "room-050-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-1-3",
//             "roomId": "room-050-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-1-4",
//             "roomId": "room-050-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-1-5",
//             "roomId": "room-050-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-1-6",
//             "roomId": "room-050-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-050-2",
//         "name": "Family Villa",
//         "description": "Aile villası, 75 m² genişliğinde, özel bahçe ve havuz",
//         "price": 5200,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-13-2-1",
//             "roomId": "room-050-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-2",
//             "roomId": "room-050-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-3",
//             "roomId": "room-050-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-4",
//             "roomId": "room-050-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-5",
//             "roomId": "room-050-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-6",
//             "roomId": "room-050-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-7",
//             "roomId": "room-050-2",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-2-8",
//             "roomId": "room-050-2",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-050-3",
//         "name": "Standard Garden View",
//         "description": "Bahçe manzaralı standart oda, 28 m² genişliğinde",
//         "price": 2600,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-13-3-1",
//             "roomId": "room-050-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-3-2",
//             "roomId": "room-050-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-3-3",
//             "roomId": "room-050-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-13-3-4",
//             "roomId": "room-050-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-050-1",
//         "url": "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-050-2",
//         "url": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-050-3",
//         "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-050-4",
//         "url": "https://images.unsplash.com/photo-1551516594-56cb78394645?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-050-5",
//         "url": "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "createdAt": "2024-04-17T05:10:20.462Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-050",
//         "rating": 5,
//         "text": "Ege'nin en güzel tatil köyü, personel çok ilgili ve yardımsever!",
//         "userId": "user-050"
//       }
//     ],
//     "createdAt": "2024-04-17T05:10:20.462Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 49070306502376,
//     "businessLicense": "BL-2024-000013",
//     "addressProof": "address_proof_doc_url_13.pdf",
//     "taxCertificate": "tax_certificate_doc_url_13.pdf",
//     "props": [
//       {
//         "id": "prop-13-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "WIFI",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       },
//       {
//         "id": "prop-13-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "POOL",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       },
//       {
//         "id": "prop-13-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "SPA",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       },
//       {
//         "id": "prop-13-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "PARKING",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       },
//       {
//         "id": "prop-13-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       },
//       {
//         "id": "prop-13-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440050",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-04-17T05:10:20.462Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440051",
//     "name": "Pamukkale Thermal Hotel",
//     "description": "Pamukkale'nin eşsiz doğal güzellikleri arasında, termal suları ile şifa veren butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Pamukkale, Denizli",
//     "address": "Pamukkale Travertenleri Karşısı No:1, Pamukkale/Denizli",
//     "city": "Denizli",
//     "country": "Türkiye",
//     "rating": 4.5,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440151",
//     "isActive": true,
//     "taxId": "2012345678",
//     "taxOffice": "Denizli Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-051-1",
//         "name": "Thermal Suite",
//         "description": "Termal su banyolu suite, 50 m² genişliğinde, Pamukkale manzaralı",
//         "price": 3800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 401,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-14-1-1",
//             "roomId": "room-051-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-2",
//             "roomId": "room-051-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-3",
//             "roomId": "room-051-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-4",
//             "roomId": "room-051-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-5",
//             "roomId": "room-051-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-6",
//             "roomId": "room-051-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-1-7",
//             "roomId": "room-051-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-051-2",
//         "name": "Standard Thermal",
//         "description": "Termal banyo imkanı olan standart oda, 32 m² genişliğinde",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-14-2-1",
//             "roomId": "room-051-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-2-2",
//             "roomId": "room-051-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-2-3",
//             "roomId": "room-051-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-2-4",
//             "roomId": "room-051-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-051-3",
//         "name": "Family Thermal Room",
//         "description": "Aile odası, 45 m² genişliğinde, iki yatak odası",
//         "price": 4200,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-14-3-1",
//             "roomId": "room-051-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-3-2",
//             "roomId": "room-051-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-3-3",
//             "roomId": "room-051-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-3-4",
//             "roomId": "room-051-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-3-5",
//             "roomId": "room-051-3",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-14-3-6",
//             "roomId": "room-051-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-051-1",
//         "url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-051-2",
//         "url": "https://images.unsplash.com/photo-1582739448917-087782c90c89?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-051-3",
//         "url": "https://images.unsplash.com/photo-1559599238-1c4b5ba4f1c9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-051-4",
//         "url": "https://images.unsplash.com/photo-1597252812804-6a0d0bdcb562?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-051-5",
//         "url": "https://images.unsplash.com/photo-1541832676-9b763b88b95d?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "createdAt": "2024-01-22T17:23:11.660Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-051",
//         "rating": 4,
//         "text": "Termal sular gerçekten çok rahatlatıcı, manzara muhteşem!",
//         "userId": "user-051"
//       }
//     ],
//     "createdAt": "2024-01-22T17:23:11.660Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 82070264525940,
//     "businessLicense": "BL-2024-000014",
//     "addressProof": "address_proof_doc_url_14.pdf",
//     "taxCertificate": "tax_certificate_doc_url_14.pdf",
//     "props": [
//       {
//         "id": "prop-14-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "feature": "WIFI",
//         "createdAt": "2024-01-22T17:23:11.660Z"
//       },
//       {
//         "id": "prop-14-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "feature": "SPA",
//         "createdAt": "2024-01-22T17:23:11.660Z"
//       },
//       {
//         "id": "prop-14-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "feature": "PARKING",
//         "createdAt": "2024-01-22T17:23:11.660Z"
//       },
//       {
//         "id": "prop-14-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-22T17:23:11.660Z"
//       },
//       {
//         "id": "prop-14-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440051",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-22T17:23:11.660Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440052",
//     "name": "Olympos Tree Houses",
//     "description": "Antalya Olympos'ta, ağaçlar arasında kurulmuş eşsiz ağaç ev konseptinde konaklama.",
//     "checkIn": "15:00",
//     "checkOut": "10:00",
//     "location": "Olympos, Antalya",
//     "address": "Olympos Sahili, Çıralı Köyü, Kemer/Antalya",
//     "city": "Antalya",
//     "country": "Türkiye",
//     "rating": 4.3,
//     "discountRate": 15,
//     "isDiscounted": true,
//     "discountStartDate": "2025-05-01T00:00:00Z",
//     "discountEndDate": "2025-06-30T23:59:59Z",
//     "type": "TREE_HOUSE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440152",
//     "isActive": true,
//     "taxId": "0712345678",
//     "taxOffice": "Antalya Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-052-1",
//         "name": "Deluxe Tree House",
//         "description": "Lüks ağaç evi, 35 m² genişliğinde, deniz manzaralı teras",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 1,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-15-1-1",
//             "roomId": "room-052-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-1-2",
//             "roomId": "room-052-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-1-3",
//             "roomId": "room-052-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-1-4",
//             "roomId": "room-052-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-052-2",
//         "name": "Family Tree House",
//         "description": "Aile ağaç evi, 50 m² genişliğinde, iki katlı",
//         "price": 3600,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 2,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-15-2-1",
//             "roomId": "room-052-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-2-2",
//             "roomId": "room-052-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-2-3",
//             "roomId": "room-052-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-2-4",
//             "roomId": "room-052-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-2-5",
//             "roomId": "room-052-2",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-052-3",
//         "name": "Standard Tree House",
//         "description": "Standart ağaç evi, 25 m² genişliğinde, doğa manzaralı",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 3,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-15-3-1",
//             "roomId": "room-052-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-15-3-2",
//             "roomId": "room-052-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-052-1",
//         "url": "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-052-2",
//         "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-052-3",
//         "url": "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-052-4",
//         "url": "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-052-5",
//         "url": "https://images.unsplash.com/photo-1517507869123-9ee2f342a1f6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "createdAt": "2024-05-16T18:22:18.963Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-052",
//         "rating": 5,
//         "text": "Doğayla iç içe muhteşem bir deneyim, çocuklar çok sevdi!",
//         "userId": "user-052"
//       }
//     ],
//     "createdAt": "2024-05-16T18:22:18.963Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 97507120837829,
//     "businessLicense": "BL-2024-000015",
//     "addressProof": "address_proof_doc_url_15.pdf",
//     "taxCertificate": "tax_certificate_doc_url_15.pdf",
//     "props": [
//       {
//         "id": "prop-15-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "feature": "WIFI",
//         "createdAt": "2024-05-16T18:22:18.963Z"
//       },
//       {
//         "id": "prop-15-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "feature": "PARKING",
//         "createdAt": "2024-05-16T18:22:18.963Z"
//       },
//       {
//         "id": "prop-15-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-16T18:22:18.963Z"
//       },
//       {
//         "id": "prop-15-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440052",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-05-16T18:22:18.963Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440053",
//     "name": "Marmaris Marina Hotel",
//     "description": "Marmaris Marina'da, yat limanının hemen kenarında, deniz ve tekne manzaralı butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "11:00",
//     "location": "Marmaris, Muğla",
//     "address": "Marmaris Marina, Netsel Yat Limanı Karşısı No:5, Marmaris/Muğla",
//     "city": "Muğla",
//     "country": "Türkiye",
//     "rating": 4.6,
//     "discountRate": 22,
//     "isDiscounted": true,
//     "discountStartDate": "2025-04-01T00:00:00Z",
//     "discountEndDate": "2025-05-31T23:59:59Z",
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440153",
//     "isActive": true,
//     "taxId": "4812345678",
//     "taxOffice": "Marmaris Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-053-1",
//         "name": "Marina View Suite",
//         "description": "Marina manzaralı suite, 55 m² genişliğinde, özel balkon",
//         "price": 4200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-16-1-1",
//             "roomId": "room-053-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-2",
//             "roomId": "room-053-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-3",
//             "roomId": "room-053-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-4",
//             "roomId": "room-053-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-5",
//             "roomId": "room-053-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-6",
//             "roomId": "room-053-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-1-7",
//             "roomId": "room-053-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-053-2",
//         "name": "Superior Marina",
//         "description": "Marina manzaralı superior oda, 38 m² genişliğinde",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 402,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-16-2-1",
//             "roomId": "room-053-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-2-2",
//             "roomId": "room-053-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-2-3",
//             "roomId": "room-053-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-2-4",
//             "roomId": "room-053-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-2-5",
//             "roomId": "room-053-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-2-6",
//             "roomId": "room-053-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-053-3",
//         "name": "Standard City View",
//         "description": "Şehir manzaralı standart oda, 28 m² genişliğinde",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-16-3-1",
//             "roomId": "room-053-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-3-2",
//             "roomId": "room-053-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-3-3",
//             "roomId": "room-053-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-3-4",
//             "roomId": "room-053-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-053-4",
//         "name": "Executive Marina",
//         "description": "Executive marina odası, 42 m² genişliğinde, geniş balkon",
//         "price": 3800,
//         "maxAdults": 3,
//         "maxChildren": 1,
//         "floor": 6,
//         "roomNumber": 601,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-16-4-1",
//             "roomId": "room-053-4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-2",
//             "roomId": "room-053-4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-3",
//             "roomId": "room-053-4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-4",
//             "roomId": "room-053-4",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-5",
//             "roomId": "room-053-4",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-6",
//             "roomId": "room-053-4",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-7",
//             "roomId": "room-053-4",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-16-4-8",
//             "roomId": "room-053-4",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-053-1",
//         "url": "https://images.unsplash.com/photo-1612320583353-539f42427c10?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-053-2",
//         "url": "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-053-3",
//         "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-053-4",
//         "url": "https://images.unsplash.com/photo-1501117716987-67454a23e189?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-053-5",
//         "url": "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "createdAt": "2024-01-17T10:19:52.267Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-053",
//         "rating": 5,
//         "text": "Marina manzarası harika, tekne turları için mükemmel konum!",
//         "userId": "user-053"
//       }
//     ],
//     "createdAt": "2024-01-17T10:19:52.267Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 23341047747101,
//     "businessLicense": "BL-2024-000016",
//     "addressProof": "address_proof_doc_url_16.pdf",
//     "taxCertificate": "tax_certificate_doc_url_16.pdf",
//     "props": [
//       {
//         "id": "prop-16-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "WIFI",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "POOL",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "SPA",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "PARKING",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       },
//       {
//         "id": "prop-16-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440053",
//         "feature": "GYM",
//         "createdAt": "2024-01-17T10:19:52.267Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440054",
//     "name": "Trabzon Highland Resort",
//     "description": "Trabzon'un yüksek yaylalarında, doğa ile iç içe dağ evi konseptinde otel. Uzungöl manzaralı.",
//     "checkIn": "14:30",
//     "checkOut": "11:30",
//     "location": "Uzungöl, Trabzon",
//     "address": "Uzungöl Yolu Üzeri No:12, Çaykara/Trabzon",
//     "city": "Trabzon",
//     "country": "Türkiye",
//     "rating": 4.4,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "MOUNTAIN_RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440154",
//     "isActive": true,
//     "taxId": "6112345678",
//     "taxOffice": "Trabzon Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-054-1",
//         "name": "Lake View Chalet",
//         "description": "Göl manzaralı şale, 60 m² genişliğinde, şömineli",
//         "price": 3600,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 1,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "CHALET",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-17-1-1",
//             "roomId": "room-054-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-1-2",
//             "roomId": "room-054-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-1-3",
//             "roomId": "room-054-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-1-4",
//             "roomId": "room-054-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-1-5",
//             "roomId": "room-054-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-054-2",
//         "name": "Mountain View Room",
//         "description": "Dağ manzaralı oda, 35 m² genişliğinde, ahşap dekorasyon",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 201,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-17-2-1",
//             "roomId": "room-054-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-2-2",
//             "roomId": "room-054-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-2-3",
//             "roomId": "room-054-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-2-4",
//             "roomId": "room-054-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-054-3",
//         "name": "Family Highland Suite",
//         "description": "Yayla suite, 70 m² genişliğinde, iki yatak odası ve oturma alanı",
//         "price": 4800,
//         "maxAdults": 5,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 2,
//         "capacity": 8,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "FAMILY_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-17-3-1",
//             "roomId": "room-054-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-3-2",
//             "roomId": "room-054-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-3-3",
//             "roomId": "room-054-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-3-4",
//             "roomId": "room-054-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-3-5",
//             "roomId": "room-054-3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-17-3-6",
//             "roomId": "room-054-3",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-054-1",
//         "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-054-2",
//         "url": "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-054-3",
//         "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-054-4",
//         "url": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-054-5",
//         "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "createdAt": "2024-03-28T12:45:38.550Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-054",
//         "rating": 4,
//         "text": "Doğa harika, temiz hava ve manzara muhteşem. Huzur dolu bir tatil.",
//         "userId": "user-054"
//       }
//     ],
//     "createdAt": "2024-03-28T12:45:38.550Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 13292462518006,
//     "businessLicense": "BL-2024-000017",
//     "addressProof": "address_proof_doc_url_17.pdf",
//     "taxCertificate": "tax_certificate_doc_url_17.pdf",
//     "props": [
//       {
//         "id": "prop-17-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "feature": "WIFI",
//         "createdAt": "2024-03-28T12:45:38.550Z"
//       },
//       {
//         "id": "prop-17-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "feature": "PARKING",
//         "createdAt": "2024-03-28T12:45:38.550Z"
//       },
//       {
//         "id": "prop-17-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-03-28T12:45:38.550Z"
//       },
//       {
//         "id": "prop-17-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440054",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-03-28T12:45:38.550Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440055",
//     "name": "Fethiye Bay Resort",
//     "description": "Fethiye Körfezi'nde, turkuaz sularla çevrili, lüks tatil köyü. Özel marina ve spa merkezi.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Fethiye, Muğla",
//     "address": "Çalış Sahili No:8, Fethiye/Muğla",
//     "city": "Muğla",
//     "country": "Türkiye",
//     "rating": 4.9,
//     "discountRate": 20,
//     "isDiscounted": true,
//     "discountStartDate": "2025-03-01T00:00:00Z",
//     "discountEndDate": "2025-04-30T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440155",
//     "isActive": true,
//     "taxId": "4812345679",
//     "taxOffice": "Fethiye Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-055-1",
//         "name": "Presidential Bay Suite",
//         "description": "Körfez manzaralı presidential suite, 85 m² genişliğinde, özel havuz",
//         "price": 6800,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-18-1-1",
//             "roomId": "room-055-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-2",
//             "roomId": "room-055-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-3",
//             "roomId": "room-055-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-4",
//             "roomId": "room-055-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-5",
//             "roomId": "room-055-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-6",
//             "roomId": "room-055-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-7",
//             "roomId": "room-055-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-8",
//             "roomId": "room-055-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-1-9",
//             "roomId": "room-055-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-055-2",
//         "name": "Deluxe Sea View",
//         "description": "Deniz manzaralı deluxe oda, 45 m² genişliğinde, balkonlu",
//         "price": 4200,
//         "maxAdults": 3,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 402,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-18-2-1",
//             "roomId": "room-055-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-2",
//             "roomId": "room-055-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-3",
//             "roomId": "room-055-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-4",
//             "roomId": "room-055-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-5",
//             "roomId": "room-055-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-6",
//             "roomId": "room-055-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-2-7",
//             "roomId": "room-055-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-055-3",
//         "name": "Family Garden Villa",
//         "description": "Bahçe villası, 75 m² genişliğinde, özel bahçe ve havuz",
//         "price": 5400,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-18-3-1",
//             "roomId": "room-055-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-2",
//             "roomId": "room-055-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-3",
//             "roomId": "room-055-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-4",
//             "roomId": "room-055-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-5",
//             "roomId": "room-055-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-6",
//             "roomId": "room-055-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-7",
//             "roomId": "room-055-3",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-8",
//             "roomId": "room-055-3",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-3-9",
//             "roomId": "room-055-3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-055-4",
//         "name": "Superior Pool View",
//         "description": "Havuz manzaralı superior oda, 38 m² genişliğinde",
//         "price": 3400,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 305,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-18-4-1",
//             "roomId": "room-055-4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-4-2",
//             "roomId": "room-055-4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-4-3",
//             "roomId": "room-055-4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-4-4",
//             "roomId": "room-055-4",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-4-5",
//             "roomId": "room-055-4",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-18-4-6",
//             "roomId": "room-055-4",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-055-1",
//         "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-055-2",
//         "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-055-3",
//         "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-055-4",
//         "url": "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-055-5",
//         "url": "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "createdAt": "2024-05-25T03:53:58.153Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-055",
//         "rating": 5,
//         "text": "Fethiye'nin en güzel oteli, her şey mükemmel!",
//         "userId": "user-055"
//       }
//     ],
//     "createdAt": "2024-05-25T03:53:58.153Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 46787790365541,
//     "businessLicense": "BL-2024-000018",
//     "addressProof": "address_proof_doc_url_18.pdf",
//     "taxCertificate": "tax_certificate_doc_url_18.pdf",
//     "props": [
//       {
//         "id": "prop-18-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "WIFI",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "POOL",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "SPA",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "PARKING",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       },
//       {
//         "id": "prop-18-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440055",
//         "feature": "GYM",
//         "createdAt": "2024-05-25T03:53:58.153Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440056",
//     "name": "Bursa Thermal Palace",
//     "description": "Bursa'nın ünlü termal kaynaklarında, şifa veren sularıyla tarihi saray konseptinde otel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Çekirge, Bursa",
//     "address": "Çekirge Termal Bölgesi No:20, Osmangazi/Bursa",
//     "city": "Bursa",
//     "country": "Türkiye",
//     "rating": 4.2,
//     "discountRate": 12,
//     "isDiscounted": true,
//     "discountStartDate": "2025-01-01T00:00:00Z",
//     "discountEndDate": "2025-03-31T23:59:59Z",
//     "type": "THERMAL_HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440156",
//     "isActive": true,
//     "taxId": "1612345678",
//     "taxOffice": "Bursa Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-056-1",
//         "name": "Imperial Thermal Suite",
//         "description": "İmparatorluk süiti, 80 m² genişliğinde, özel termal havuz",
//         "price": 5200,
//         "maxAdults": 3,
//         "maxChildren": 2,
//         "floor": 4,
//         "roomNumber": 401,
//         "capacity": 5,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "IMPERIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-19-1-1",
//             "roomId": "room-056-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-2",
//             "roomId": "room-056-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-3",
//             "roomId": "room-056-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-4",
//             "roomId": "room-056-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-5",
//             "roomId": "room-056-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-6",
//             "roomId": "room-056-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-7",
//             "roomId": "room-056-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-8",
//             "roomId": "room-056-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-1-9",
//             "roomId": "room-056-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-056-2",
//         "name": "Deluxe Thermal",
//         "description": "Termal banyo imkanı olan deluxe oda, 48 m² genişliğinde",
//         "price": 3600,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 3,
//         "roomNumber": 302,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-19-2-1",
//             "roomId": "room-056-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-2",
//             "roomId": "room-056-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-3",
//             "roomId": "room-056-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-4",
//             "roomId": "room-056-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-5",
//             "roomId": "room-056-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-6",
//             "roomId": "room-056-2",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-2-7",
//             "roomId": "room-056-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-056-3",
//         "name": "Standard Thermal",
//         "description": "Termal su erişimi olan standart oda, 32 m² genişliğinde",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-19-3-1",
//             "roomId": "room-056-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-3-2",
//             "roomId": "room-056-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-3-3",
//             "roomId": "room-056-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-3-4",
//             "roomId": "room-056-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-19-3-5",
//             "roomId": "room-056-3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-056-1",
//         "url": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-056-2",
//         "url": "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-056-3",
//         "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-056-4",
//         "url": "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-056-5",
//         "url": "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "createdAt": "2024-01-20T22:02:51.500Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-056",
//         "rating": 4,
//         "text": "Termal sular çok rahatlatıcı, tarihi atmosfer harika!",
//         "userId": "user-056"
//       }
//     ],
//     "createdAt": "2024-01-20T22:02:51.500Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 70748685696221,
//     "businessLicense": "BL-2024-000019",
//     "addressProof": "address_proof_doc_url_19.pdf",
//     "taxCertificate": "tax_certificate_doc_url_19.pdf",
//     "props": [
//       {
//         "id": "prop-19-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "feature": "WIFI",
//         "createdAt": "2024-01-20T22:02:51.500Z"
//       },
//       {
//         "id": "prop-19-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "feature": "SPA",
//         "createdAt": "2024-01-20T22:02:51.500Z"
//       },
//       {
//         "id": "prop-19-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "feature": "PARKING",
//         "createdAt": "2024-01-20T22:02:51.500Z"
//       },
//       {
//         "id": "prop-19-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-20T22:02:51.500Z"
//       },
//       {
//         "id": "prop-19-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440056",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-20T22:02:51.500Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440057",
//     "name": "Kas Boutique Cliff Hotel",
//     "description": "Kaş'ın muhteşem uçurumlarında, Akdeniz'e hakim konumda butik otel. Infinity pool ve spa.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Kaş, Antalya",
//     "address": "Kaş Yarımadası, Uçurum Mevkii No:3, Kaş/Antalya",
//     "city": "Antalya",
//     "country": "Türkiye",
//     "rating": 4.7,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "BOUTIQUE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440157",
//     "isActive": true,
//     "taxId": "0712345679",
//     "taxOffice": "Antalya Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-057-1",
//         "name": "Cliff Edge Suite",
//         "description": "Uçurum kenarı süiti, 65 m² genişliğinde, sonsuzluk havuzu",
//         "price": 5800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "CLIFF_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-20-1-1",
//             "roomId": "room-057-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-2",
//             "roomId": "room-057-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-3",
//             "roomId": "room-057-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-4",
//             "roomId": "room-057-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-5",
//             "roomId": "room-057-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-6",
//             "roomId": "room-057-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-7",
//             "roomId": "room-057-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-8",
//             "roomId": "room-057-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-1-9",
//             "roomId": "room-057-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-057-2",
//         "name": "Sea View Deluxe",
//         "description": "Deniz manzaralı deluxe oda, 42 m² genişliğinde, özel teras",
//         "price": 4200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-20-2-1",
//             "roomId": "room-057-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-2",
//             "roomId": "room-057-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-3",
//             "roomId": "room-057-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-4",
//             "roomId": "room-057-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-5",
//             "roomId": "room-057-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-6",
//             "roomId": "room-057-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-2-7",
//             "roomId": "room-057-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-057-3",
//         "name": "Garden View Superior",
//         "description": "Bahçe manzaralı superior oda, 35 m² genişliğinde",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-20-3-1",
//             "roomId": "room-057-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-3-2",
//             "roomId": "room-057-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-3-3",
//             "roomId": "room-057-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-3-4",
//             "roomId": "room-057-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-20-3-5",
//             "roomId": "room-057-3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-057-1",
//         "url": "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-057-2",
//         "url": "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-057-3",
//         "url": "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-057-4",
//         "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-057-5",
//         "url": "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "createdAt": "2024-01-20T04:46:22.988Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-057",
//         "rating": 5,
//         "text": "Manzara nefes kesici, infinity pool harika!",
//         "userId": "user-057"
//       }
//     ],
//     "createdAt": "2024-01-20T04:46:22.988Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 98833029203535,
//     "businessLicense": "BL-2024-000020",
//     "addressProof": "address_proof_doc_url_20.pdf",
//     "taxCertificate": "tax_certificate_doc_url_20.pdf",
//     "props": [
//       {
//         "id": "prop-20-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "WIFI",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       },
//       {
//         "id": "prop-20-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "POOL",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       },
//       {
//         "id": "prop-20-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "SPA",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       },
//       {
//         "id": "prop-20-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "PARKING",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       },
//       {
//         "id": "prop-20-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       },
//       {
//         "id": "prop-20-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440057",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-20T04:46:22.988Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440058",
//     "name": "Eskişehir Modern City Hotel",
//     "description": "Eskişehir şehir merkezinde, modern mimari ve teknoloji ile donatılmış business hotel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Odunpazarı, Eskişehir",
//     "address": "Atatürk Bulvarı No:45, Odunpazarı/Eskişehir",
//     "city": "Eskişehir",
//     "country": "Türkiye",
//     "rating": 4.1,
//     "discountRate": 8,
//     "isDiscounted": true,
//     "discountStartDate": "2025-02-01T00:00:00Z",
//     "discountEndDate": "2025-04-30T23:59:59Z",
//     "type": "BUSINESS_HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440158",
//     "isActive": true,
//     "taxId": "2612345678",
//     "taxOffice": "Eskişehir Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-058-1",
//         "name": "Executive Business Suite",
//         "description": "İş süiti, 55 m² genişliğinde, toplantı alanı ve çalışma masası",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 8,
//         "roomNumber": 801,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-21-1-1",
//             "roomId": "room-058-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-2",
//             "roomId": "room-058-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-3",
//             "roomId": "room-058-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-4",
//             "roomId": "room-058-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-5",
//             "roomId": "room-058-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-6",
//             "roomId": "room-058-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-1-7",
//             "roomId": "room-058-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-058-2",
//         "name": "Superior City View",
//         "description": "Şehir manzaralı superior oda, 38 m² genişliğinde",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 505,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-21-2-1",
//             "roomId": "room-058-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-2-2",
//             "roomId": "room-058-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-2-3",
//             "roomId": "room-058-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-2-4",
//             "roomId": "room-058-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-2-5",
//             "roomId": "room-058-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-058-3",
//         "name": "Standard Business",
//         "description": "İş odası, 28 m² genişliğinde, çalışma masası",
//         "price": 1800,
//         "maxAdults": 1,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 305,
//         "capacity": 1,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-21-3-1",
//             "roomId": "room-058-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-3-2",
//             "roomId": "room-058-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-3-3",
//             "roomId": "room-058-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-3-4",
//             "roomId": "room-058-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-058-4",
//         "name": "Family Comfort",
//         "description": "Aile odası, 48 m² genişliğinde, bağlantılı iki oda",
//         "price": 3600,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 6,
//         "roomNumber": 605,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-21-4-1",
//             "roomId": "room-058-4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-4-2",
//             "roomId": "room-058-4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-4-3",
//             "roomId": "room-058-4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-4-4",
//             "roomId": "room-058-4",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-4-5",
//             "roomId": "room-058-4",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-21-4-6",
//             "roomId": "room-058-4",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-058-1",
//         "url": "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-058-2",
//         "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-058-3",
//         "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-058-4",
//         "url": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-058-5",
//         "url": "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "createdAt": "2024-02-21T16:37:33.877Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-058",
//         "rating": 4,
//         "text": "İş seyahatleri için mükemmel, merkezi konum ve modern olanaklar.",
//         "userId": "user-058"
//       }
//     ],
//     "createdAt": "2024-02-21T16:37:33.877Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 42115343179253,
//     "businessLicense": "BL-2024-000021",
//     "addressProof": "address_proof_doc_url_21.pdf",
//     "taxCertificate": "tax_certificate_doc_url_21.pdf",
//     "props": [
//       {
//         "id": "prop-21-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "feature": "WIFI",
//         "createdAt": "2024-02-21T16:37:33.877Z"
//       },
//       {
//         "id": "prop-21-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "feature": "GYM",
//         "createdAt": "2024-02-21T16:37:33.877Z"
//       },
//       {
//         "id": "prop-21-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "feature": "PARKING",
//         "createdAt": "2024-02-21T16:37:33.877Z"
//       },
//       {
//         "id": "prop-21-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-02-21T16:37:33.877Z"
//       },
//       {
//         "id": "prop-21-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440058",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-21T16:37:33.877Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440059",
//     "name": "Sapanca Lake Resort",
//     "description": "Sapanca Gölü kenarında, doğa ile iç içe huzurlu tatil köyü. Göl manzaralı odalar ve spa.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Sapanca, Sakarya",
//     "address": "Sapanca Gölü Kenarı No:15, Sapanca/Sakarya",
//     "city": "Sakarya",
//     "country": "Türkiye",
//     "rating": 4.5,
//     "discountRate": 16,
//     "isDiscounted": true,
//     "discountStartDate": "2025-04-01T00:00:00Z",
//     "discountEndDate": "2025-06-30T23:59:59Z",
//     "type": "LAKE_RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440159",
//     "isActive": true,
//     "taxId": "5412345678",
//     "taxOffice": "Sakarya Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-059-1",
//         "name": "Lake View Villa",
//         "description": "Göl manzaralı villa, 90 m² genişliğinde, özel bahçe ve jakuzi",
//         "price": 4800,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 1,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-22-1-1",
//             "roomId": "room-059-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-2",
//             "roomId": "room-059-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-3",
//             "roomId": "room-059-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-4",
//             "roomId": "room-059-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-5",
//             "roomId": "room-059-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-6",
//             "roomId": "room-059-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-7",
//             "roomId": "room-059-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-8",
//             "roomId": "room-059-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-1-9",
//             "roomId": "room-059-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-059-2",
//         "name": "Superior Lake",
//         "description": "Göl manzaralı superior oda, 40 m² genişliğinde, balkonlu",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-22-2-1",
//             "roomId": "room-059-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-2",
//             "roomId": "room-059-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-3",
//             "roomId": "room-059-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-4",
//             "roomId": "room-059-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-5",
//             "roomId": "room-059-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-6",
//             "roomId": "room-059-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-2-7",
//             "roomId": "room-059-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-059-3",
//         "name": "Standard Nature",
//         "description": "Doğa manzaralı standart oda, 32 m² genişliğinde",
//         "price": 2400,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-22-3-1",
//             "roomId": "room-059-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-3-2",
//             "roomId": "room-059-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-3-3",
//             "roomId": "room-059-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-3-4",
//             "roomId": "room-059-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-059-4",
//         "name": "Family Lakeside",
//         "description": "Göl kenarı aile odası, 55 m² genişliğinde, iki yatak odası",
//         "price": 4200,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 210,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-22-4-1",
//             "roomId": "room-059-4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-2",
//             "roomId": "room-059-4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-3",
//             "roomId": "room-059-4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-4",
//             "roomId": "room-059-4",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-5",
//             "roomId": "room-059-4",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-6",
//             "roomId": "room-059-4",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-22-4-7",
//             "roomId": "room-059-4",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-059-1",
//         "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-059-2",
//         "url": "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-059-3",
//         "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-059-4",
//         "url": "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-059-5",
//         "url": "https://images.unsplash.com/photo-1551524164-6cf17ac62a5b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "createdAt": "2024-02-18T03:09:10.655Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-059",
//         "rating": 5,
//         "text": "Sapanca Gölü manzarası muhteşem, çok huzurlu bir tatil geçirdik!",
//         "userId": "user-059"
//       }
//     ],
//     "createdAt": "2024-02-18T03:09:10.655Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 19502970705518,
//     "businessLicense": "BL-2024-000022",
//     "addressProof": "address_proof_doc_url_22.pdf",
//     "taxCertificate": "tax_certificate_doc_url_22.pdf",
//     "props": [
//       {
//         "id": "prop-22-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "WIFI",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       },
//       {
//         "id": "prop-22-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "POOL",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       },
//       {
//         "id": "prop-22-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "SPA",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       },
//       {
//         "id": "prop-22-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "PARKING",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       },
//       {
//         "id": "prop-22-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       },
//       {
//         "id": "prop-22-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440059",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-18T03:09:10.655Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440060",
//     "name": "Bodrum Bay Premium Resort",
//     "description": "Bodrum'un en güzel koyunda, lüks tatil deneyimi sunan 5 yıldızlı resort. Özel plajı ve marina ile.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Bodrum, Muğla",
//     "address": "Bodrum Körfezi No:25, Bodrum/Muğla",
//     "city": "Muğla",
//     "country": "Türkiye",
//     "rating": 4.9,
//     "discountRate": 25,
//     "isDiscounted": true,
//     "discountStartDate": "2025-06-01T00:00:00Z",
//     "discountEndDate": "2025-09-30T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440160",
//     "isActive": true,
//     "taxId": "4812345680",
//     "taxOffice": "Bodrum Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-060-1",
//         "name": "Presidential Ocean Suite",
//         "description": "Okyanus manzaralı presidential suite, 120 m²",
//         "price": 8500,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 10,
//         "roomNumber": 1001,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-1-1",
//             "roomId": "room-060-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-2",
//             "roomId": "room-060-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-3",
//             "roomId": "room-060-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-4",
//             "roomId": "room-060-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-5",
//             "roomId": "room-060-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-6",
//             "roomId": "room-060-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-7",
//             "roomId": "room-060-1",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-8",
//             "roomId": "room-060-1",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-1-9",
//             "roomId": "room-060-1",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-2",
//         "name": "Executive Sea View",
//         "description": "Deniz manzaralı executive oda, 65 m²",
//         "price": 5200,
//         "maxAdults": 3,
//         "maxChildren": 1,
//         "floor": 8,
//         "roomNumber": 801,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-2-1",
//             "roomId": "room-060-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-2",
//             "roomId": "room-060-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-3",
//             "roomId": "room-060-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-4",
//             "roomId": "room-060-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-5",
//             "roomId": "room-060-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-6",
//             "roomId": "room-060-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-7",
//             "roomId": "room-060-2",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-2-8",
//             "roomId": "room-060-2",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-3",
//         "name": "Deluxe Bay View",
//         "description": "Körfez manzaralı deluxe oda, 45 m²",
//         "price": 4200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 6,
//         "roomNumber": 601,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-3-1",
//             "roomId": "room-060-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-2",
//             "roomId": "room-060-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-3",
//             "roomId": "room-060-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-4",
//             "roomId": "room-060-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-5",
//             "roomId": "room-060-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-6",
//             "roomId": "room-060-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-3-7",
//             "roomId": "room-060-3",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-4",
//         "name": "Superior Marina",
//         "description": "Marina manzaralı superior oda, 38 m²",
//         "price": 3600,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 5,
//         "roomNumber": 501,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUPERIOR",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-4-1",
//             "roomId": "room-060-4",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-4-2",
//             "roomId": "room-060-4",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-4-3",
//             "roomId": "room-060-4",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-4-4",
//             "roomId": "room-060-4",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-4-5",
//             "roomId": "room-060-4",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-4-6",
//             "roomId": "room-060-4",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-5",
//         "name": "Standard Sea",
//         "description": "Deniz manzaralı standart oda, 32 m²",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 3,
//         "roomNumber": 301,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-5-1",
//             "roomId": "room-060-5",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-5-2",
//             "roomId": "room-060-5",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-5-3",
//             "roomId": "room-060-5",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-5-4",
//             "roomId": "room-060-5",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-6",
//         "name": "Family Ocean Villa",
//         "description": "Okyanus manzaralı aile villası, 85 m²",
//         "price": 6800,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-6-1",
//             "roomId": "room-060-6",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-2",
//             "roomId": "room-060-6",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-3",
//             "roomId": "room-060-6",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-4",
//             "roomId": "room-060-6",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-5",
//             "roomId": "room-060-6",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-6",
//             "roomId": "room-060-6",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-7",
//             "roomId": "room-060-6",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-8",
//             "roomId": "room-060-6",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-6-9",
//             "roomId": "room-060-6",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-7",
//         "name": "Junior Suite Garden",
//         "description": "Bahçe manzaralı junior suite, 42 m²",
//         "price": 3800,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 4,
//         "roomNumber": 401,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "JUNIOR_SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-7-1",
//             "roomId": "room-060-7",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-2",
//             "roomId": "room-060-7",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-3",
//             "roomId": "room-060-7",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-4",
//             "roomId": "room-060-7",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-5",
//             "roomId": "room-060-7",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-6",
//             "roomId": "room-060-7",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-7-7",
//             "roomId": "room-060-7",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-8",
//         "name": "Honeymoon Suite",
//         "description": "Balayı süiti, jakuzili banyo, 50 m²",
//         "price": 5800,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 9,
//         "roomNumber": 901,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "HONEYMOON",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-8-1",
//             "roomId": "room-060-8",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-2",
//             "roomId": "room-060-8",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-3",
//             "roomId": "room-060-8",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-4",
//             "roomId": "room-060-8",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-5",
//             "roomId": "room-060-8",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-6",
//             "roomId": "room-060-8",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-7",
//             "roomId": "room-060-8",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-8",
//             "roomId": "room-060-8",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-8-9",
//             "roomId": "room-060-8",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-9",
//         "name": "Business Suite",
//         "description": "İş süiti, çalışma alanı, 48 m²",
//         "price": 4500,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 7,
//         "roomNumber": 701,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "BUSINESS",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-9-1",
//             "roomId": "room-060-9",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-2",
//             "roomId": "room-060-9",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-3",
//             "roomId": "room-060-9",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-4",
//             "roomId": "room-060-9",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-5",
//             "roomId": "room-060-9",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-6",
//             "roomId": "room-060-9",
//             "feature": "ROOM_SERVICE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-9-7",
//             "roomId": "room-060-9",
//             "feature": "HAIR_DRYER",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-060-10",
//         "name": "Economy Twin",
//         "description": "Ekonomik ikiz yatak odası, 25 m²",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 2,
//         "roomNumber": 201,
//         "capacity": 2,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "ECONOMY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-23-10-1",
//             "roomId": "room-060-10",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-10-2",
//             "roomId": "room-060-10",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-10-3",
//             "roomId": "room-060-10",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-23-10-4",
//             "roomId": "room-060-10",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-060-1",
//         "url": "https://images.unsplash.com/photo-1520637836862-4d197d17c9a4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-060-2",
//         "url": "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-060-3",
//         "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-060-4",
//         "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-060-5",
//         "url": "https://images.unsplash.com/photo-1551524164-6cf17ac62a5b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "createdAt": "2024-03-31T19:06:30.151Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-060",
//         "rating": 5,
//         "text": "Bodrum'un en lüks oteli, mükemmel hizmet!",
//         "userId": "user-060"
//       }
//     ],
//     "createdAt": "2024-03-31T19:06:30.151Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 70276726993599,
//     "businessLicense": "BL-2024-000023",
//     "addressProof": "address_proof_doc_url_23.pdf",
//     "taxCertificate": "tax_certificate_doc_url_23.pdf",
//     "props": [
//       {
//         "id": "prop-23-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "WIFI",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "POOL",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "SPA",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "PARKING",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       },
//       {
//         "id": "prop-23-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440060",
//         "feature": "GYM",
//         "createdAt": "2024-03-31T19:06:30.151Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440006",
//     "name": "Kapadokya Mağara Suites",
//     "description": "Kapadokya'nın eşsiz peribacaları arasında, geleneksel mağara odaları ve modern konforu bir arada sunan butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "11:00",
//     "location": "Göreme, Nevşehir",
//     "address": "Aydınlı Mah. Aydınlı Sok. No:12, Göreme/Nevşehir",
//     "city": "Nevşehir",
//     "country": "Türkiye",
//     "rating": 4.9,
//     "discountRate": 20,
//     "isDiscounted": true,
//     "discountStartDate": "2024-10-15T00:00:00Z",
//     "discountEndDate": "2024-11-15T23:59:59Z",
//     "type": "BOUTIQUE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440106",
//     "isActive": true,
//     "taxId": "5012345678",
//     "taxOffice": "Nevşehir Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-006-1",
//         "name": "Deluxe Mağara Oda",
//         "description": "Geleneksel mağara mimarisi ile modern konforu birleştiren 40 m² genişliğinde özel oda",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-24-1-1",
//             "roomId": "room-006-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-1-2",
//             "roomId": "room-006-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-1-3",
//             "roomId": "room-006-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-1-4",
//             "roomId": "room-006-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-1-5",
//             "roomId": "room-006-1",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-006-2",
//         "name": "Kral Mağara Suite",
//         "description": "Özel jakuzi ve şömine bulunan, 60 m² genişliğinde lüks mağara suite",
//         "price": 5500,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "PRESIDENTIAL",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-24-2-1",
//             "roomId": "room-006-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-2",
//             "roomId": "room-006-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-3",
//             "roomId": "room-006-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-4",
//             "roomId": "room-006-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-5",
//             "roomId": "room-006-2",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-6",
//             "roomId": "room-006-2",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-24-2-7",
//             "roomId": "room-006-2",
//             "feature": "FIREPLACE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-006-1",
//         "url": "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-006-2",
//         "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-006-3",
//         "url": "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-006-4",
//         "url": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-006-5",
//         "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-006-6",
//         "url": "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "createdAt": "2024-05-05T06:58:16.673Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-006",
//         "rating": 5,
//         "text": "Muhteşem bir deneyimdi! Mağara odada kalmak çok özeldi, manzara harika ve personel çok ilgiliydi.",
//         "userId": "user-006"
//       }
//     ],
//     "createdAt": "2024-05-05T06:58:16.673Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 23766270104619,
//     "businessLicense": "BL-2024-000024",
//     "addressProof": "address_proof_doc_url_24.pdf",
//     "taxCertificate": "tax_certificate_doc_url_24.pdf",
//     "props": [
//       {
//         "id": "prop-24-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "WIFI",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       },
//       {
//         "id": "prop-24-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "PARKING",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       },
//       {
//         "id": "prop-24-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       },
//       {
//         "id": "prop-24-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       },
//       {
//         "id": "prop-24-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "TERRACE",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       },
//       {
//         "id": "prop-24-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440006",
//         "feature": "AIRPORT_SHUTTLE",
//         "createdAt": "2024-05-05T06:58:16.673Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440007",
//     "name": "Sapanca Göl Konakları",
//     "description": "Sapanca Gölü'nün eşsiz manzarasına sahip, doğa ile iç içe lüks villa konseptinde konaklama imkanı sunan tesisimiz.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Sapanca, Sakarya",
//     "address": "Kırkpınar Mah. Göl Cad. No:45, Sapanca/Sakarya",
//     "city": "Sakarya",
//     "country": "Türkiye",
//     "rating": 4.7,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "VILLA",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440107",
//     "isActive": true,
//     "taxId": "5412345678",
//     "taxOffice": "Sakarya Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-007-1",
//         "name": "Göl Manzaralı Villa",
//         "description": "120 m² genişliğinde, 2 yatak odası, özel mutfak ve göl manzaralı teras",
//         "price": 4800,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 1,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-25-1-1",
//             "roomId": "room-007-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-1-2",
//             "roomId": "room-007-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-1-3",
//             "roomId": "room-007-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-1-4",
//             "roomId": "room-007-1",
//             "feature": "KITCHEN",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-1-5",
//             "roomId": "room-007-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-1-6",
//             "roomId": "room-007-1",
//             "feature": "FIREPLACE",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-007-2",
//         "name": "Orman Manzaralı Villa",
//         "description": "100 m² genişliğinde, 2 yatak odası, özel bahçe ve barbekü alanı",
//         "price": 4200,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 2,
//         "capacity": 6,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "VILLA",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-25-2-1",
//             "roomId": "room-007-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-2-2",
//             "roomId": "room-007-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-2-3",
//             "roomId": "room-007-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-2-4",
//             "roomId": "room-007-2",
//             "feature": "KITCHEN",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-2-5",
//             "roomId": "room-007-2",
//             "feature": "GARDEN",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-25-2-6",
//             "roomId": "room-007-2",
//             "feature": "BBQ",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-007-1",
//         "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-2",
//         "url": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-3",
//         "url": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-4",
//         "url": "https://images.unsplash.com/photo-1486304873000-235643847519?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-5",
//         "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-6",
//         "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-007-7",
//         "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "createdAt": "2024-05-15T01:55:58.363Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-007",
//         "rating": 5,
//         "text": "Harika bir hafta sonu geçirdik. Göl manzarası eşsiz, villa çok temiz ve konforlu.",
//         "userId": "user-007"
//       }
//     ],
//     "createdAt": "2024-05-15T01:55:58.363Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 65307046369351,
//     "businessLicense": "BL-2024-000025",
//     "addressProof": "address_proof_doc_url_25.pdf",
//     "taxCertificate": "tax_certificate_doc_url_25.pdf",
//     "props": [
//       {
//         "id": "prop-25-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "WIFI",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       },
//       {
//         "id": "prop-25-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "PARKING",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       },
//       {
//         "id": "prop-25-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "KITCHEN",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       },
//       {
//         "id": "prop-25-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "BBQ",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       },
//       {
//         "id": "prop-25-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "GARDEN",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       },
//       {
//         "id": "prop-25-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440007",
//         "feature": "LAKE_VIEW",
//         "createdAt": "2024-05-15T01:55:58.363Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440008",
//     "name": "Alaçatı Taş Evler",
//     "description": "Alaçatı'nın tarihi dokusunu yansıtan, geleneksel taş mimarisi ile restore edilmiş butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Alaçatı, İzmir",
//     "address": "Hacımemiş Mah. 2048 Sok. No:18, Alaçatı/İzmir",
//     "city": "İzmir",
//     "country": "Türkiye",
//     "rating": 4.6,
//     "discountRate": 15,
//     "isDiscounted": true,
//     "discountStartDate": "2024-09-15T00:00:00Z",
//     "discountEndDate": "2024-10-15T23:59:59Z",
//     "type": "BOUTIQUE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440108",
//     "isActive": true,
//     "taxId": "3512345678",
//     "taxOffice": "İzmir Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-008-1",
//         "name": "Standart Taş Oda",
//         "description": "25 m² genişliğinde, geleneksel taş duvarlar ve modern dekorasyon",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-26-1-1",
//             "roomId": "room-008-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-1-2",
//             "roomId": "room-008-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-1-3",
//             "roomId": "room-008-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-008-2",
//         "name": "Deluxe Bahçe Manzaralı Oda",
//         "description": "35 m² genişliğinde, özel bahçe manzaralı, geniş yatak",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-26-2-1",
//             "roomId": "room-008-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-2-2",
//             "roomId": "room-008-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-2-3",
//             "roomId": "room-008-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-2-4",
//             "roomId": "room-008-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-2-5",
//             "roomId": "room-008-2",
//             "feature": "GARDEN_VIEW",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-008-3",
//         "name": "Aile Odası",
//         "description": "50 m² genişliğinde, iki yatak odası, aileler için ideal",
//         "price": 3500,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 201,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-26-3-1",
//             "roomId": "room-008-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-3-2",
//             "roomId": "room-008-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-3-3",
//             "roomId": "room-008-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-3-4",
//             "roomId": "room-008-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-26-3-5",
//             "roomId": "room-008-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-008-1",
//         "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-2",
//         "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-3",
//         "url": "https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-4",
//         "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-5",
//         "url": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-6",
//         "url": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-7",
//         "url": "https://images.unsplash.com/photo-1590073844006-33379778ae09?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-008-8",
//         "url": "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "createdAt": "2024-04-08T13:23:28.386Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-008",
//         "rating": 4,
//         "text": "Alaçatı'nın merkezinde harika bir konaklama. Otelin mimarisi ve bahçesi çok güzel.",
//         "userId": "user-008"
//       }
//     ],
//     "createdAt": "2024-04-08T13:23:28.386Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 34357080967731,
//     "businessLicense": "BL-2024-000026",
//     "addressProof": "address_proof_doc_url_26.pdf",
//     "taxCertificate": "tax_certificate_doc_url_26.pdf",
//     "props": [
//       {
//         "id": "prop-26-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "WIFI",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       },
//       {
//         "id": "prop-26-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "PARKING",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       },
//       {
//         "id": "prop-26-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       },
//       {
//         "id": "prop-26-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       },
//       {
//         "id": "prop-26-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "GARDEN",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       },
//       {
//         "id": "prop-26-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440008",
//         "feature": "TERRACE",
//         "createdAt": "2024-04-08T13:23:28.386Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440009",
//     "name": "Uludağ Kayak Resort",
//     "description": "Uludağ'ın zirvesinde, kayak pistlerine direkt erişimli, kış sporları tutkunları için özel tasarlanmış dağ oteli.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Uludağ, Bursa",
//     "address": "Uludağ Kayak Merkezi, 2. Bölge, Bursa",
//     "city": "Bursa",
//     "country": "Türkiye",
//     "rating": 4.5,
//     "discountRate": 25,
//     "isDiscounted": true,
//     "discountStartDate": "2024-11-01T00:00:00Z",
//     "discountEndDate": "2024-12-15T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440109",
//     "isActive": true,
//     "taxId": "1612345678",
//     "taxOffice": "Bursa Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-009-1",
//         "name": "Dağ Manzaralı Standart Oda",
//         "description": "28 m² genişliğinde, dağ manzaralı, kayak ekipmanı dolabı",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 3,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-27-1-1",
//             "roomId": "room-009-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-1-2",
//             "roomId": "room-009-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-1-3",
//             "roomId": "room-009-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-1-4",
//             "roomId": "room-009-1",
//             "feature": "HEATING",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-009-2",
//         "name": "Deluxe Pist Manzaralı Oda",
//         "description": "35 m² genişliğinde, kayak pistlerine bakan, şömineli",
//         "price": 3500,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 310,
//         "capacity": 4,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-27-2-1",
//             "roomId": "room-009-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-2-2",
//             "roomId": "room-009-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-2-3",
//             "roomId": "room-009-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-2-4",
//             "roomId": "room-009-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-2-5",
//             "roomId": "room-009-2",
//             "feature": "FIREPLACE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-2-6",
//             "roomId": "room-009-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-009-3",
//         "name": "Aile Chalet",
//         "description": "70 m² genişliğinde, iki katlı, özel şömine ve oturma alanı",
//         "price": 5800,
//         "maxAdults": 4,
//         "maxChildren": 3,
//         "floor": 1,
//         "roomNumber": 101,
//         "capacity": 7,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "CHALET",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-27-3-1",
//             "roomId": "room-009-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-2",
//             "roomId": "room-009-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-3",
//             "roomId": "room-009-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-4",
//             "roomId": "room-009-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-5",
//             "roomId": "room-009-3",
//             "feature": "FIREPLACE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-6",
//             "roomId": "room-009-3",
//             "feature": "KITCHEN",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-27-3-7",
//             "roomId": "room-009-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-009-1",
//         "url": "https://images.unsplash.com/photo-1551524164-6cf17ac62a5b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-2",
//         "url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-3",
//         "url": "https://images.unsplash.com/photo-1582739448917-087782c90c89?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-4",
//         "url": "https://images.unsplash.com/photo-1559599238-1c4b5ba4f1c9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-5",
//         "url": "https://images.unsplash.com/photo-1597252812804-6a0d0bdcb562?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-6",
//         "url": "https://images.unsplash.com/photo-1541832676-9b763b88b95d?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-7",
//         "url": "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-8",
//         "url": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-009-9",
//         "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "createdAt": "2024-05-16T04:24:16.521Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-009",
//         "rating": 5,
//         "text": "Pistlere yakınlığı mükemmel, odalar sıcak ve konforlu. Şömine başında dinlenmek harika!",
//         "userId": "user-009"
//       }
//     ],
//     "createdAt": "2024-05-16T04:24:16.521Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 34904695883739,
//     "businessLicense": "BL-2024-000027",
//     "addressProof": "address_proof_doc_url_27.pdf",
//     "taxCertificate": "tax_certificate_doc_url_27.pdf",
//     "props": [
//       {
//         "id": "prop-27-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "WIFI",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "PARKING",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "SPA",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "SKI_IN_OUT",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "FIREPLACE",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       },
//       {
//         "id": "prop-27-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440009",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-05-16T04:24:16.521Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440010",
//     "name": "Mardin Taş Konak",
//     "description": "Mardin'in tarihi dokusunu yansıtan, geleneksel taş mimarisi ile restore edilmiş, Mezopotamya Ovası manzaralı butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Eski Mardin, Mardin",
//     "address": "1. Cadde, No:45, Eski Mardin/Mardin",
//     "city": "Mardin",
//     "country": "Türkiye",
//     "rating": 4.7,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "BOUTIQUE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440110",
//     "isActive": true,
//     "taxId": "4712345678",
//     "taxOffice": "Mardin Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-010-1",
//         "name": "Standart Taş Oda",
//         "description": "25 m² genişliğinde, geleneksel taş duvarlar ve yerel dekorasyon",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 0,
//         "floor": 1,
//         "roomNumber": 102,
//         "capacity": 2,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-28-1-1",
//             "roomId": "room-010-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-1-2",
//             "roomId": "room-010-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-1-3",
//             "roomId": "room-010-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-010-2",
//         "name": "Deluxe Mezopotamya Manzaralı Oda",
//         "description": "35 m² genişliğinde, Mezopotamya Ovası manzaralı, geleneksel mimari",
//         "price": 2500,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-28-2-1",
//             "roomId": "room-010-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-2-2",
//             "roomId": "room-010-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-2-3",
//             "roomId": "room-010-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-2-4",
//             "roomId": "room-010-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-28-2-5",
//             "roomId": "room-010-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-010-1",
//         "url": "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010-2",
//         "url": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010-3",
//         "url": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010-4",
//         "url": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010-5",
//         "url": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-010-6",
//         "url": "https://images.unsplash.com/photo-1486304873000-235643847519?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "createdAt": "2024-02-22T04:19:52.907Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-010",
//         "rating": 5,
//         "text": "Mardin'in tarihini yaşatan harika bir otel. Manzara eşsiz, kahvaltı yerel lezzetlerle dolu.",
//         "userId": "user-010"
//       }
//     ],
//     "createdAt": "2024-02-22T04:19:52.907Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 23152181912398,
//     "businessLicense": "BL-2024-000028",
//     "addressProof": "address_proof_doc_url_28.pdf",
//     "taxCertificate": "tax_certificate_doc_url_28.pdf",
//     "props": [
//       {
//         "id": "prop-28-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "WIFI",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       },
//       {
//         "id": "prop-28-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "PARKING",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       },
//       {
//         "id": "prop-28-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       },
//       {
//         "id": "prop-28-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       },
//       {
//         "id": "prop-28-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "TERRACE",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       },
//       {
//         "id": "prop-28-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440010",
//         "feature": "HISTORICAL_BUILDING",
//         "createdAt": "2024-02-22T04:19:52.907Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440011",
//     "name": "Fethiye Deniz Suites",
//     "description": "Fethiye'nin turkuaz koylarına bakan, özel plaj erişimli, modern tasarımlı butik otel.",
//     "checkIn": "14:00",
//     "checkOut": "11:00",
//     "location": "Çalış Plajı, Fethiye",
//     "address": "Çalış Plajı, Fevzi Çakmak Cad. No:28, Fethiye/Muğla",
//     "city": "Muğla",
//     "country": "Türkiye",
//     "rating": 4.8,
//     "discountRate": 15,
//     "isDiscounted": true,
//     "discountStartDate": "2024-10-01T00:00:00Z",
//     "discountEndDate": "2024-11-01T23:59:59Z",
//     "type": "BOUTIQUE",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440111",
//     "isActive": true,
//     "taxId": "4812345678",
//     "taxOffice": "Muğla Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-011-1",
//         "name": "Deniz Manzaralı Standart Oda",
//         "description": "30 m² genişliğinde, deniz manzaralı balkon, modern dekorasyon",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-29-1-1",
//             "roomId": "room-011-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-1-2",
//             "roomId": "room-011-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-1-3",
//             "roomId": "room-011-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-1-4",
//             "roomId": "room-011-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-011-2",
//         "name": "Deluxe Deniz Manzaralı Suite",
//         "description": "45 m² genişliğinde, panoramik deniz manzarası, jakuzili banyo",
//         "price": 3500,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-29-2-1",
//             "roomId": "room-011-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-2-2",
//             "roomId": "room-011-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-2-3",
//             "roomId": "room-011-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-2-4",
//             "roomId": "room-011-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-2-5",
//             "roomId": "room-011-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-29-2-6",
//             "roomId": "room-011-2",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-011-1",
//         "url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-2",
//         "url": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-3",
//         "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-4",
//         "url": "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-5",
//         "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-6",
//         "url": "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-011-7",
//         "url": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "createdAt": "2024-01-16T03:35:33.430Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-011",
//         "rating": 5,
//         "text": "Deniz manzarası muhteşem, plaj çok temiz ve sakin. Odalar modern ve konforlu.",
//         "userId": "user-011"
//       }
//     ],
//     "createdAt": "2024-01-16T03:35:33.430Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 15275209933906,
//     "businessLicense": "BL-2024-000029",
//     "addressProof": "address_proof_doc_url_29.pdf",
//     "taxCertificate": "tax_certificate_doc_url_29.pdf",
//     "props": [
//       {
//         "id": "prop-29-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "WIFI",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       },
//       {
//         "id": "prop-29-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "POOL",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       },
//       {
//         "id": "prop-29-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "PRIVATE_BEACH",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       },
//       {
//         "id": "prop-29-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       },
//       {
//         "id": "prop-29-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       },
//       {
//         "id": "prop-29-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440011",
//         "feature": "WATER_SPORTS",
//         "createdAt": "2024-01-16T03:35:33.430Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440012",
//     "name": "Trabzon Yaylakent",
//     "description": "Karadeniz'in yemyeşil yaylalarında, doğa ile iç içe, geleneksel mimariye sahip dağ oteli.",
//     "checkIn": "15:00",
//     "checkOut": "11:00",
//     "location": "Uzungöl, Trabzon",
//     "address": "Uzungöl Mah. Göl Cad. No:15, Çaykara/Trabzon",
//     "city": "Trabzon",
//     "country": "Türkiye",
//     "rating": 4.4,
//     "discountRate": null,
//     "isDiscounted": false,
//     "discountStartDate": null,
//     "discountEndDate": null,
//     "type": "MOUNTAIN",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440112",
//     "isActive": true,
//     "taxId": "6112345678",
//     "taxOffice": "Trabzon Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-012-1",
//         "name": "Göl Manzaralı Standart Oda",
//         "description": "25 m² genişliğinde, Uzungöl manzaralı, ahşap dekorasyon",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 3,
//         "bedCount": 2,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-30-1-1",
//             "roomId": "room-012-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-1-2",
//             "roomId": "room-012-1",
//             "feature": "HEATING",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-1-3",
//             "roomId": "room-012-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-1-4",
//             "roomId": "room-012-1",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-012-2",
//         "name": "Dağ Manzaralı Aile Odası",
//         "description": "40 m² genişliğinde, dağ manzaralı, ahşap iç mimari, şömine",
//         "price": 2500,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "FAMILY",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-30-2-1",
//             "roomId": "room-012-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-2-2",
//             "roomId": "room-012-2",
//             "feature": "HEATING",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-2-3",
//             "roomId": "room-012-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-2-4",
//             "roomId": "room-012-2",
//             "feature": "FIREPLACE",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-30-2-5",
//             "roomId": "room-012-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-012-1",
//         "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012-2",
//         "url": "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012-3",
//         "url": "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012-4",
//         "url": "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-012-5",
//         "url": "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "createdAt": "2024-03-14T07:12:41.640Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-012",
//         "rating": 4,
//         "text": "Doğa harikası bir yer, temiz hava ve muhteşem manzara. Yöresel yemekler çok lezzetli.",
//         "userId": "user-012"
//       }
//     ],
//     "createdAt": "2024-03-14T07:12:41.640Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 76848210230531,
//     "businessLicense": "BL-2024-000030",
//     "addressProof": "address_proof_doc_url_30.pdf",
//     "taxCertificate": "tax_certificate_doc_url_30.pdf",
//     "props": [
//       {
//         "id": "prop-30-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "WIFI",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       },
//       {
//         "id": "prop-30-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "PARKING",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       },
//       {
//         "id": "prop-30-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       },
//       {
//         "id": "prop-30-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       },
//       {
//         "id": "prop-30-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "FIREPLACE",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       },
//       {
//         "id": "prop-30-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440012",
//         "feature": "HIKING_TRAILS",
//         "createdAt": "2024-03-14T07:12:41.640Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440013",
//     "name": "Pamukkale Termal Resort",
//     "description": "Pamukkale'nin beyaz travertenlerine yakın, termal su kaynaklarından faydalanan, sağlık ve dinlenme odaklı resort otel.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Pamukkale, Denizli",
//     "address": "Pamukkale Mah. Traverten Cad. No:25, Pamukkale/Denizli",
//     "city": "Denizli",
//     "country": "Türkiye",
//     "rating": 4.6,
//     "discountRate": 20,
//     "isDiscounted": true,
//     "discountStartDate": "2024-09-01T00:00:00Z",
//     "discountEndDate": "2024-10-31T23:59:59Z",
//     "type": "RESORT",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440113",
//     "isActive": true,
//     "taxId": "2012345678",
//     "taxOffice": "Denizli Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-013-1",
//         "name": "Standart Oda",
//         "description": "28 m² genişliğinde, modern dekorasyon, termal havuz erişimi",
//         "price": 2200,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 2,
//         "roomNumber": 205,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-31-1-1",
//             "roomId": "room-013-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-1-2",
//             "roomId": "room-013-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-1-3",
//             "roomId": "room-013-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-1-4",
//             "roomId": "room-013-1",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-013-2",
//         "name": "Deluxe Termal Oda",
//         "description": "35 m² genişliğinde, özel termal jakuzili, travertenlere bakan",
//         "price": 3200,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 3,
//         "roomNumber": 305,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-31-2-1",
//             "roomId": "room-013-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-2-2",
//             "roomId": "room-013-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-2-3",
//             "roomId": "room-013-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-2-4",
//             "roomId": "room-013-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-2-5",
//             "roomId": "room-013-2",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-2-6",
//             "roomId": "room-013-2",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-013-3",
//         "name": "Aile Suite",
//         "description": "55 m² genişliğinde, iki yatak odası, özel termal havuzlu",
//         "price": 4500,
//         "maxAdults": 4,
//         "maxChildren": 2,
//         "floor": 1,
//         "roomNumber": 105,
//         "capacity": 6,
//         "bedCount": 3,
//         "isAvailable": true,
//         "type": "SUITE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-31-3-1",
//             "roomId": "room-013-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-2",
//             "roomId": "room-013-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-3",
//             "roomId": "room-013-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-4",
//             "roomId": "room-013-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-5",
//             "roomId": "room-013-3",
//             "feature": "BATH_TUB",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-6",
//             "roomId": "room-013-3",
//             "feature": "PRIVATE_POOL",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-31-3-7",
//             "roomId": "room-013-3",
//             "feature": "BALCONY",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-013-1",
//         "url": "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-2",
//         "url": "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-3",
//         "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-4",
//         "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-5",
//         "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-6",
//         "url": "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-7",
//         "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-013-8",
//         "url": "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "createdAt": "2024-01-22T07:14:36.581Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-013",
//         "rating": 5,
//         "text": "Termal havuzlar harika, cilt hastalıklarıma çok iyi geldi. Spa merkezi çok kaliteli.",
//         "userId": "user-013"
//       }
//     ],
//     "createdAt": "2024-01-22T07:14:36.581Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 26355721118244,
//     "businessLicense": "BL-2024-000031",
//     "addressProof": "address_proof_doc_url_31.pdf",
//     "taxCertificate": "tax_certificate_doc_url_31.pdf",
//     "props": [
//       {
//         "id": "prop-31-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "WIFI",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "POOL",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "THERMAL_POOL",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "SPA",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       },
//       {
//         "id": "prop-31-7",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440013",
//         "feature": "HEALTH_CENTER",
//         "createdAt": "2024-01-22T07:14:36.581Z"
//       }
//     ]
//   },
//   {
//     "id": "550e8400-e29b-41d4-a716-446655440014",
//     "name": "Adana Şehir Otel",
//     "description": "Adana şehir merkezinde, iş ve turistik seyahatler için ideal konumda bulunan modern şehir oteli.",
//     "checkIn": "14:00",
//     "checkOut": "12:00",
//     "location": "Seyhan, Adana",
//     "address": "Reşatbey Mah. Atatürk Cad. No:28, Seyhan/Adana",
//     "city": "Adana",
//     "country": "Türkiye",
//     "rating": 4.2,
//     "discountRate": 10,
//     "isDiscounted": true,
//     "discountStartDate": "2024-08-15T00:00:00Z",
//     "discountEndDate": "2024-09-15T23:59:59Z",
//     "type": "HOTEL",
//     "ownerId": "550e8400-e29b-41d4-a716-446655440114",
//     "isActive": true,
//     "taxId": "0112345678",
//     "taxOffice": "Adana Vergi Dairesi",
//     "rooms": [
//       {
//         "id": "room-014-1",
//         "name": "Standart İş Odası",
//         "description": "25 m² genişliğinde, çalışma masası, şehir manzaralı",
//         "price": 1500,
//         "maxAdults": 1,
//         "maxChildren": 0,
//         "floor": 3,
//         "roomNumber": 305,
//         "capacity": 1,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "STANDARD",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-32-1-1",
//             "roomId": "room-014-1",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-1-2",
//             "roomId": "room-014-1",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-1-3",
//             "roomId": "room-014-1",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-1-4",
//             "roomId": "room-014-1",
//             "feature": "DESK",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-014-2",
//         "name": "Deluxe Çift Kişilik Oda",
//         "description": "30 m² genişliğinde, şehir manzaralı, modern dekorasyon",
//         "price": 1800,
//         "maxAdults": 2,
//         "maxChildren": 1,
//         "floor": 4,
//         "roomNumber": 405,
//         "capacity": 3,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "DELUXE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-32-2-1",
//             "roomId": "room-014-2",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-2-2",
//             "roomId": "room-014-2",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-2-3",
//             "roomId": "room-014-2",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-2-4",
//             "roomId": "room-014-2",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-2-5",
//             "roomId": "room-014-2",
//             "feature": "DESK",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       },
//       {
//         "id": "room-014-3",
//         "name": "Executive Suite",
//         "description": "45 m² genişliğinde, oturma alanı, lüks dekorasyon",
//         "price": 2800,
//         "maxAdults": 2,
//         "maxChildren": 2,
//         "floor": 5,
//         "roomNumber": 505,
//         "capacity": 4,
//         "bedCount": 1,
//         "isAvailable": true,
//         "type": "EXECUTIVE",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "updatedAt": "2024-11-20T14:22:00Z",
//         "deletedAt": null,
//         "featureStatus": [
//           {
//             "id": "rfs-32-3-1",
//             "roomId": "room-014-3",
//             "feature": "WIFI",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-2",
//             "roomId": "room-014-3",
//             "feature": "AIR_CONDITIONER",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-3",
//             "roomId": "room-014-3",
//             "feature": "TV",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-4",
//             "roomId": "room-014-3",
//             "feature": "MINIBAR",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-5",
//             "roomId": "room-014-3",
//             "feature": "DESK",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-6",
//             "roomId": "room-014-3",
//             "feature": "SAFE_BOX",
//             "isAvailable": true,
//             "deletedAt": null
//           },
//           {
//             "id": "rfs-32-3-7",
//             "roomId": "room-014-3",
//             "feature": "LIVING_ROOM",
//             "isAvailable": true,
//             "deletedAt": null
//           }
//         ]
//       }
//     ],
//     "images": [
//       {
//         "id": "img-014-1",
//         "url": "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014-2",
//         "url": "https://images.unsplash.com/photo-1551524164-6cf17ac62a5b?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014-3",
//         "url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014-4",
//         "url": "https://images.unsplash.com/photo-1582739448917-087782c90c89?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "deletedAt": null
//       },
//       {
//         "id": "img-014-5",
//         "url": "https://images.unsplash.com/photo-1559599238-1c4b5ba4f1c9?w=1200&h=800&fit=crop",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "createdAt": "2024-02-13T01:48:12.688Z",
//         "deletedAt": null
//       }
//     ],
//     "comments": [
//       {
//         "id": "comment-014",
//         "rating": 4,
//         "text": "İş seyahati için ideal, merkezi konum, temiz odalar ve profesyonel personel.",
//         "userId": "user-014"
//       }
//     ],
//     "createdAt": "2024-02-13T01:48:12.688Z",
//     "updatedAt": "2024-11-20T14:22:00Z",
//     "deletedAt": null,
//     "tradeRegistryNumber": 79867195665236,
//     "businessLicense": "BL-2024-000032",
//     "addressProof": "address_proof_doc_url_32.pdf",
//     "taxCertificate": "tax_certificate_doc_url_32.pdf",
//     "props": [
//       {
//         "id": "prop-32-1",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "WIFI",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       },
//       {
//         "id": "prop-32-2",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "PARKING",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       },
//       {
//         "id": "prop-32-3",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "RESTAURANT",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       },
//       {
//         "id": "prop-32-4",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "BUSINESS_CENTER",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       },
//       {
//         "id": "prop-32-5",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "GYM",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       },
//       {
//         "id": "prop-32-6",
//         "hotelId": "550e8400-e29b-41d4-a716-446655440014",
//         "feature": "BREAKFAST_INCLUDED",
//         "createdAt": "2024-02-13T01:48:12.688Z"
//       }
//     ]
//   }
// ]
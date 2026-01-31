// Owner service

import { MOCK_HOTELS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface UpdateOwnerProfileDto {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  taxId?: string;
  address?: string;
}

export const ownerService = {
  async getOwnerProfile() {
    await delay(500);
    return {
      success: true,
      data: {
        id: "owner-1",
        name: "Ahmet",
        surname: "Yılmaz",
        email: "ahmet@example.com",
        phone: "+905559876543",
        companyName: "Yılmaz Turizm Ltd. Şti.",
        taxId: "1234567890",
        address: "Antalya, Türkiye",
        role: "HOTEL_OWNER"
      }
    };
  },

  async updateOwnerProfile(profileData: UpdateOwnerProfileDto) {
    await delay(800);
    return { success: true, message: "Profil güncellendi", data: profileData };
  },

  async getOwnerHotels() {
    await delay(600);
    return { success: true, data: MOCK_HOTELS };
  },

  async getOwnerReservations(page: number = 1, limit: number = 20) {
    await delay(600);
    return {
      success: true,
      data: {
        reservations: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0
        }
      }
    };
  },

  async getOwnerEarnings() {
    await delay(500);
    return {
      success: true,
      data: {
        totalEarnings: 125000,
        pendingEarnings: 15000,
        currency: "TRY"
      }
    };
  },

  async getOwnerStatistics() {
    await delay(500);
    return {
      success: true,
      data: {
        totalReservations: 45,
        occupancyRate: 78,
        averageRating: 4.5,
        totalViews: 1250
      }
    };
  }
};

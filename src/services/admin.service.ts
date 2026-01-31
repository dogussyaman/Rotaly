import { MOCK_USERS, MOCK_HOTELS } from "@/mocks/data";
import type { UpdateAdminProfileDto } from "@/types/admin";
import type { UpdateHotelDto, CreateHotelDto } from "@/types/hotel-dto";
import type { UpdateUserDto } from "@/types/user-dto";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const adminService = {
  // Admin profil bilgilerini getirir (şirket bilgileri, logo vs.)
  async getUserProfile() {
    await delay(500);
    return { success: true, data: { id: "admin-1", role: "ADMIN", companyName: "Rotaly Admin" } };
  },

  // Admin profil bilgilerini günceller (şirket adı, vergi no, adres vs.)
  async updateProfile(data: UpdateAdminProfileDto) {
    await delay(1000);
    return { success: true, data };
  },

  // Toplam kazançları getirir (tüm rezervasyonlardan elde edilen gelir)
  async getTotalEarnings() {
    await delay(500);
    return { success: true, data: 50000 };
  },

  // Toplam rezervasyon sayısını getirir
  async getTotalReservations() {
    await delay(500);
    return { success: true, data: 150 };
  },

  // Toplam müşteri sayısını getirir (CUSTOMER rolündeki kullanıcılar)
  async getTotalCustomers() {
    await delay(500);
    return { success: true, data: MOCK_USERS.length };
  },

  // Toplam aktif otel sayısını getirir
  async getTotalHotels() {
    await delay(500);
    return { success: true, data: MOCK_HOTELS.length };
  },

  // Tüm otelleri getirir (admin paneli için)
  async getAllHotels() {
    await delay(800);
    return { success: true, data: MOCK_HOTELS };
  },

  async getAllUsers() {
    await delay(800);
    return { success: true, data: MOCK_USERS };
  },

  async getUserById(id: string) {
    await delay(500);
    return { success: true, data: MOCK_USERS.find(u => u.id === id) || MOCK_USERS[0] };
  },

  async deleteUser(id: string) {
    await delay(1000);
    return { success: true, message: "User deleted" };
  },

  // Hotel CRUD Operations
  async getHotelById(id: string) {
    await delay(500);
    return { success: true, data: MOCK_HOTELS.find(h => h.id === id) || MOCK_HOTELS[0] };
  },

  async updateHotel(id: string, data: UpdateHotelDto) {
    await delay(1000);
    return { success: true, data: { ...data, id } };
  },

  async deleteHotel(id: string) {
    await delay(1000);
    return { success: true, message: "Hotel deleted" };
  },

  async createHotel(data: CreateHotelDto) {
    await delay(1000);
    return { success: true, data: { ...data, id: "hotel-" + Date.now() } };
  },

  // User CRUD Operations with Pagination
  async getAllUsersWithPagination(page: number = 1, limit: number = 10, search?: string, role?: string) {
    await delay(800);
    return { success: true, data: { users: MOCK_USERS, pagination: { page, limit, total: MOCK_USERS.length } } };
  },

  async updateUser(id: string, data: UpdateUserDto) {
    await delay(1000);
    return { success: true, data: { ...data, id } };
  },

  // Hotel Operations with Pagination
  async getAllHotelsWithPagination(page: number = 1, limit: number = 10, search?: string, isActive?: boolean) {
    await delay(800);
    return { success: true, data: { hotels: MOCK_HOTELS, pagination: { page, limit, total: MOCK_HOTELS.length } } };
  },

  // Company Profile Operations
  async updateCompanyProfile(data: UpdateAdminProfileDto) {
    await delay(1000);
    return { success: true, data };
  }
};

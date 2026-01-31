import { MOCK_RESERVATIONS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const reservationService = {
  async getUserReservations(userId?: string, page = 1, limit = 10) {
    await delay(1000);
    return {
      success: true,
      data: {
        reservations: MOCK_RESERVATIONS,
        pagination: { page, limit, total: MOCK_RESERVATIONS.length, totalPages: 1 }
      }
    };
  },

  async getReservationById(id: string) {
    await delay(500);
    const reservation = MOCK_RESERVATIONS.find(r => r.id === id);
    return { success: true, data: reservation || MOCK_RESERVATIONS[0] };
  },

  async createReservation(reservationData: any) {
    await delay(1000);
    return { success: true, data: { ...reservationData, id: `res-${Date.now()}` } };
  },

  async updateReservation(id: string, updateData: any) {
    await delay(1000);
    return { success: true, data: { ...updateData, id } };
  },

  async deleteReservation(id: string) {
    await delay(1000);
    return { success: true, message: "Reservation deleted" };
  },
};

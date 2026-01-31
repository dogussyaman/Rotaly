import { CreateHotelInput, QueryHotelInput, UpdateHotelInput } from "@/types/hotel";
import { MOCK_HOTELS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const hotelService = {
  async createHotel(hotelData: CreateHotelInput) {
    await delay(1000);
    const newHotel = { ...hotelData, id: `hotel-${Date.now()}` };
    return { success: true, data: newHotel };
  },

  async getHotelById(hotelId: string) {
    await delay(500);
    const hotel = MOCK_HOTELS.find(h => h.id === hotelId);
    // If not found in mock, return the first one as fallback for smoother dev experience, or null
    return { success: true, data: hotel || MOCK_HOTELS[0] };
  },

  async updateHotel(hotelId: string, hotelData: UpdateHotelInput) {
    await delay(1000);
    return { success: true, data: { ...hotelData, id: hotelId } };
  },

  async deleteHotel(hotelId: string) {
    await delay(1000);
    return { success: true, message: "Hotel deleted" };
  },

  async getHotels(queryParams: QueryHotelInput) {
    await delay(800);
    let hotels = [...MOCK_HOTELS];

    if (queryParams.city) {
      hotels = hotels.filter(h => h.city.toLowerCase().includes(queryParams.city!.toLowerCase()));
    }
    
    // Simulate pagination
    const page = queryParams.page || 1;
    const limit = queryParams.limit || 10;
    
    return {
      success: true,
      hotels: hotels,
      pagination: {
        page: page,
        limit: limit,
        total: hotels.length,
        totalPages: Math.ceil(hotels.length / limit)
      }
    };
  },
};

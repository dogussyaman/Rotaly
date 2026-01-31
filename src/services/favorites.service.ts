import { MOCK_HOTELS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const favoritesService = {
  getFavorites: async () => {
    await delay(500);
    // Return first 2 hotels as favorites
    return MOCK_HOTELS.slice(0, 2);
  },
  
  toggleFavorite: async (hotelId: string) => {
    await delay(300);
    return { success: true, message: "Favori durumu güncellendi" };
  },
};

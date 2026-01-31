import { MOCK_ROOMS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface CreateRoomDto {
  name: string;
  description?: string;
  hotelId: string;
  capacity: number;
  price: number;
  amenities?: string[];
  images?: string[];
}

interface UpdateRoomDto {
  name?: string;
  description?: string;
  capacity?: number;
  price?: number;
  amenities?: string[];
  images?: string[];
  isActive?: boolean;
}

export const roomService = {
  async createRoom(roomData: CreateRoomDto) {
    await delay(1000);
    return { success: true, data: { ...roomData, id: "room-" + Date.now() } };
  },

  async getRoomById(roomId: string) {
    await delay(500);
    const room = MOCK_ROOMS.find(r => r.id === roomId);
    return { success: true, data: room || MOCK_ROOMS[0] };
  },

  async updateRoom(roomId: string, roomData: UpdateRoomDto) {
    await delay(1000);
    return { success: true, data: { ...roomData, id: roomId } };
  },

  async deleteRoom(roomId: string) {
    await delay(1000);
    return { success: true, message: "Room deleted" };
  },

  async getRoomsByHotel(hotelId: string) {
    await delay(800);
    // Return all mock rooms for now
    return { success: true, data: MOCK_ROOMS };
  }
};

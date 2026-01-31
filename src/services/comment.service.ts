// Comment service

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock Comments
const MOCK_COMMENTS = [
  {
    id: "comment-1",
    rating: 5,
    text: "Harika bir otel, kesinlikle tavsiye ederim.",
    userId: "user-2",
    hotelId: "hotel-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: "user-2",
      name: "Ayşe",
      surname: "Demir",
      avatar: null
    }
  },
  {
    id: "comment-2",
    rating: 4,
    text: "Genel olarak memnun kaldık ancak havuz biraz kalabalıktı.",
    userId: "user-3",
    hotelId: "hotel-1",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
    user: {
      id: "user-3",
      name: "Mehmet",
      surname: "Kaya",
      avatar: null
    }
  }
];

export const commentService = {
  async createComment(hotelId: string, commentData: { rating: number; text?: string }) {
    await delay(600);
    return {
      success: true,
      data: {
        id: `comment-${Date.now()}`,
        ...commentData,
        userId: "user-1",
        hotelId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        user: {
          id: "user-1",
          name: "John",
          surname: "Doe",
          avatar: null
        }
      }
    };
  },

  async getCommentsByHotel(hotelId: string) {
    await delay(500);
    return { success: true, data: MOCK_COMMENTS };
  },

  async updateComment(commentId: string, commentData: { rating?: number; text?: string }) {
    await delay(500);
    return { success: true, message: "Yorum güncellendi" };
  },

  async deleteComment(commentId: string) {
    await delay(400);
    return { success: true, message: "Yorum silindi" };
  }
};

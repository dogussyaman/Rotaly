import { MOCK_MESSAGES } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const messageService = {
  async sendMessage(messageData: { receiverId: string; content: string }) {
    await delay(500);
    return { success: true, data: { ...messageData, id: "msg-" + Date.now(), createdAt: new Date().toISOString() } };
  },

  async getMessages(receiverId: string, page: number = 1, limit: number = 50) {
    await delay(500);
    return { success: true, data: MOCK_MESSAGES };
  },

  async markAsRead(messageIds: string[]) {
    await delay(500);
    return { success: true, message: "Marked as read" };
  },

  async editMessage(messageId: string, content: string) {
    await delay(500);
    return { success: true, message: "Message updated" };
  },

  async deleteMessage(messageId: string) {
    await delay(500);
    return { success: true, message: "Message deleted" };
  }
};

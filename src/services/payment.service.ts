import { MOCK_CARDS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const paymentService = {
  async getUserPaymentCards() {
    await delay(500);
    return MOCK_CARDS;
  },

  async addPaymentCard(cardData: any) {
    await delay(1000);
    return { ...cardData, id: `card-${Date.now()}` };
  },

  async updatePaymentCard(cardId: string, cardData: any) {
    await delay(1000);
    return { ...cardData, id: cardId };
  },

  async deletePaymentCard(cardId: string) {
    await delay(1000);
    return { success: true, message: "Card deleted" };
  },

  async getDefaultPaymentCard() {
    await delay(500);
    return MOCK_CARDS[0];
  },

  async getPaymentCardStats() {
    await delay(500);
    return { total: MOCK_CARDS.length };
  },
};

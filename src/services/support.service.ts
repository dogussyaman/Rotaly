// Support service

import {
  CreateSupportTicketData,
  SupportListResponse,
  SupportTicketWithMessages,
  SupportCategory,
} from "@/types/support";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock Support Data
const MOCK_TICKETS: any[] = [
  {
    id: "ticket-1",
    subject: "Rezervasyon İptali Hakkında",
    body: "Rezervasyonumu iptal etmek istiyorum ancak sistem izin vermiyor.",
    category: SupportCategory.CANCELLATION,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    closedAt: null,
    status: "open",
    user: {
      id: "user-1",
      name: "John",
      surname: "Doe",
      email: "john@example.com"
    },
    messageCount: 1,
    lastMessage: {
      content: "Talebiniz alınmıştır, en kısa sürede dönüş yapılacaktır.",
      createdAt: new Date().toISOString(),
      senderId: "system"
    }
  }
];

export const supportService = {
  async createSupportTicket(supportData: CreateSupportTicketData) {
    await delay(800);
    const newTicket = {
      id: `ticket-${Date.now()}`,
      ...supportData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      closedAt: null,
      status: "open",
      user: {
        id: "user-1",
        name: "John",
        surname: "Doe",
        email: "john@example.com"
      },
      messageCount: 0
    };
    return { success: true, data: newTicket };
  },

  async getSupportTickets(
    page: number = 1,
    limit: number = 20,
    status: "open" | "closed" | "all" = "all"
  ): Promise<SupportListResponse> {
    await delay(600);
    return {
      supports: MOCK_TICKETS,
      pagination: {
        page,
        limit,
        total: MOCK_TICKETS.length,
        totalPages: 1
      }
    };
  },

  async getSupportTicketById(
    ticketId: string
  ): Promise<SupportTicketWithMessages> {
    await delay(500);
    const ticket = MOCK_TICKETS.find(t => t.id === ticketId) || MOCK_TICKETS[0];
    return {
      ...ticket,
      messages: [
        {
          id: "msg-1",
          content: ticket.body,
          senderId: ticket.user.id,
          createdAt: ticket.createdAt,
          updatedAt: ticket.createdAt,
          sender: {
            id: ticket.user.id,
            name: ticket.user.name,
            surname: ticket.user.surname,
            role: "CUSTOMER"
          }
        }
      ]
    };
  },

  async closeSupportTicket(ticketId: string) {
    await delay(500);
    return { success: true, message: "Destek talebi kapatıldı" };
  },

  async sendMessageToTicket(ticketId: string, content: string) {
    await delay(500);
    return { 
      success: true, 
      data: {
        id: `msg-${Date.now()}`,
        content,
        senderId: "user-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        sender: {
          id: "user-1",
          name: "John",
          surname: "Doe",
          role: "CUSTOMER"
        }
      }
    };
  },

  async sendAIMessage(message: string, conversationHistory?: unknown[]) {
    await delay(1000);
    return {
      success: true,
      data: {
        response: "Yapay zeka servisi şu anda bakım modunda. Lütfen daha sonra tekrar deneyin.",
        ticketCreated: false
      }
    };
  },

  async checkAIStatus() {
    await delay(300);
    return { success: true, data: { available: true } };
  },
};

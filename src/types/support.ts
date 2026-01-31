export enum SupportCategory {
  GENERAL = "GENERAL",
  TECHNICAL = "TECHNICAL",
  BILLING = "BILLING",
  BOOKING = "BOOKING",
  CANCELLATION = "CANCELLATION",
  ACCOUNT = "ACCOUNT",
  OTHER = "OTHER",
}

export interface SupportTicket {
  id: string;
  subject: string;
  body: string;
  category: SupportCategory;
  createdAt: Date;
  updatedAt: Date;
  closedAt: Date | null;
  user: {
    id: string;
    name: string;
    surname: string;
    email: string;
  };
  supportRep?: {
    id: string;
    name: string;
    surname: string;
  } | null;
  messageCount: number;
  lastMessage?: {
    content: string;
    createdAt: Date;
    senderId: string;
  } | null;
}

export interface SupportListResponse {
  supports: SupportTicket[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateSupportTicketData {
  subject: string;
  body: string;
  category?: SupportCategory;
}

export interface SupportMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: Date;
  updatedAt: Date;
  sender: {
    id: string;
    name: string;
    surname: string;
    role: string;
  };
}

export interface SupportTicketWithMessages extends SupportTicket {
  messages: SupportMessage[];
}

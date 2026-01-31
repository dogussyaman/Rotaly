// Chat Types
// Chat ile ilgili TypeScript tip tanımlamaları burada olacak

export interface ChatMessage {
  id?: string // Mesaj tipi tanımları burada olacak
}

export interface ChatState {
  messages?: ChatMessage[] // Chat state tip tanımları burada olacak
} 
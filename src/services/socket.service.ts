// Mock Socket implementation to replace socket.io-client
// import { io, Socket } from 'socket.io-client';

export interface SocketMessage {
  id: string;
  message: string;
  content: string;
  senderId: string;
  receiverId?: string;
  supportId?: string;
  timestamp: Date;
  isAIMessage?: boolean;
}

export interface AIResponse {
  content: string;
  isFromAI: boolean;
  timestamp: Date;
  ticketCreated?: boolean;
  supportId?: string;
}

export interface TypingEvent {
  isTyping: boolean;
  userId: string;
}

class SocketService {
  private socket: any = null; // Mock socket object
  private isConnected = false;
  private eventHandlers: Map<string, Function[]> = new Map();

  connect(token?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('🔌 Mock Socket connecting...');
      
      // Simulate connection delay
      setTimeout(() => {
        this.isConnected = true;
        console.log('✅ Mock Socket connected');
        
        // Trigger connect handlers
        const connectHandlers = this.eventHandlers.get('connect') || [];
        connectHandlers.forEach(handler => handler());
        
        resolve();
      }, 500);
    });
  }

  disconnect(): void {
    if (this.isConnected) {
      console.log('🔌 Mock Socket disconnecting...');
      this.isConnected = false;
      
      // Trigger disconnect handlers
      const disconnectHandlers = this.eventHandlers.get('disconnect') || [];
      disconnectHandlers.forEach(handler => handler());
    }
  }

  // AI Chat methods
  joinAIChatRoom(): void {
    if (this.isConnected) {
      console.log('rooms: Joining AI Chat Room');
    }
  }

  leaveAIChatRoom(): void {
    if (this.isConnected) {
      console.log('rooms: Leaving AI Chat Room');
    }
  }

  sendAIMessage(message: string): void {
    if (this.isConnected) {
      console.log('📤 Sending AI Message:', message);
      
      // Simulate AI response after a delay
      setTimeout(() => {
        const response: AIResponse = {
          content: "Backend bağlantısı olmadığı için bu otomatik bir yanıttır.",
          isFromAI: true,
          timestamp: new Date()
        };
        
        const handlers = this.eventHandlers.get('aiResponse') || [];
        handlers.forEach(handler => handler(response));
      }, 1500);
    }
  }

  onAIResponse(callback: (response: AIResponse) => void): void {
    this.addEventListener('aiResponse', callback);
  }

  onNewMessage(callback: (message: SocketMessage) => void): void {
    this.addEventListener('newMessage', callback);
  }
  
  // Helper to manage event listeners
  private addEventListener(event: string, callback: Function) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event)?.push(callback);
  }
  
  // Helper to remove event listeners (if needed)
  private removeEventListener(event: string, callback: Function) {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(callback);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

export const socketService = new SocketService();

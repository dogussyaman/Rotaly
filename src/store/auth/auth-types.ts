// Basit User interface
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  tokens: {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    expiresAt: string;
    revokedAt?: string;
  }[];
}
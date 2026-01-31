// User DTO types based on backend DTOs

export interface UpdateUserDto {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
}

export interface CreateUserDto {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface UserProfileDto {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone?: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

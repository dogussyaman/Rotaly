import { MOCK_USERS, MOCK_CARDS } from "@/mocks/data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const userService = {
  async getUserProfile() {
    await delay(500);
    // Return first user as "me"
    return { success: true, data: MOCK_USERS[0] };
  },
  
  async updateProfile(userData: {
    name: string;
    surname: string;
    email: string;
    phone: string;
  }) {
    await delay(1000);
    return { success: true, data: { ...MOCK_USERS[0], ...userData } };
  },

  async updateProfileImage(image: string) {
    await delay(1000);
    return { success: true, message: "Profile image updated" };
  },

  async deleteUser(userId: string) {
    await delay(1000);
    return { success: true, message: "User deleted" };
  },

  async getUserById(userId: string) {
    await delay(500);
    const user = MOCK_USERS.find(u => u.id === userId);
    return { success: true, data: user || MOCK_USERS[0] };
  },

  async getAllCreditCards() {
    await delay(500);
    return { success: true, data: MOCK_CARDS };
  },
};

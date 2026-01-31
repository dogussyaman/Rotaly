// Admin types based on backend DTOs

export interface UpdateAdminProfileDto {
  companyName?: string;
  companyTaxId?: string;
  country?: string;
  city?: string;
  state?: string;
  postCode?: string;
  fullAddress?: string;
}

export interface AdminProfileResponse {
  companyName: string;
  companyTaxId: string;
  country: string;
  city: string;
  state: string;
  postCode: string;
  fullAddress: string;
  logo: string[];
  email: string;
}

export interface AdminStatsResponse {
  totalEarnings: number;
  totalReservations: number;
  totalCustomers: number;
  totalHotels: number;
}

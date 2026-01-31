import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Reservation } from "@/types/reservation";

// Basit type'lar
interface PaymentCard {
  id: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  userId: string;
}

interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  capacity: number;
  hotelId: string;
}

interface BookingState {
  reservations: Reservation[];
  currentReservation: Reservation | null;
  paymentCards: PaymentCard[];
  selectedRoom: Room | null;
  bookingForm: {
    checkIn: string;
    checkOut: string;
    guests: number;
    specialRequest: string;
    paymentMethod: string;
    selectedCardId: string | null;
  };
  isLoading: boolean;
  error: string | null;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

const initialState: BookingState = {
  reservations: [],
  currentReservation: null,
  paymentCards: [],
  selectedRoom: null,
  bookingForm: {
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequest: "",
    paymentMethod: "credit_card",
    selectedCardId: null,
  },
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setReservations: (state, action: PayloadAction<Reservation[]>) => {
      state.reservations = action.payload;
    },
    setCurrentReservation: (state, action: PayloadAction<Reservation>) => {
      state.currentReservation = action.payload;
    },
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
    },
    updateReservation: (state, action: PayloadAction<Reservation>) => {
      const index = state.reservations.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
    },
    deleteReservation: (state, action: PayloadAction<string>) => {
      state.reservations = state.reservations.filter(r => r.id !== action.payload);
    },
    setPaymentCards: (state, action: PayloadAction<PaymentCard[]>) => {
      state.paymentCards = action.payload;
    },
    addPaymentCard: (state, action: PayloadAction<PaymentCard>) => {
      state.paymentCards.push(action.payload);
    },
    updatePaymentCard: (state, action: PayloadAction<PaymentCard>) => {
      const index = state.paymentCards.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.paymentCards[index] = action.payload;
      }
    },
    deletePaymentCard: (state, action: PayloadAction<string>) => {
      state.paymentCards = state.paymentCards.filter(c => c.id !== action.payload);
    },
    setSelectedRoom: (state, action: PayloadAction<Room>) => {
      state.selectedRoom = action.payload;
    },
    clearSelectedRoom: (state) => {
      state.selectedRoom = null;
    },
    updateBookingForm: (state, action: PayloadAction<Partial<BookingState['bookingForm']>>) => {
      state.bookingForm = { ...state.bookingForm, ...action.payload };
    },
    resetBookingForm: (state) => {
      state.bookingForm = initialState.bookingForm;
    },
    setPagination: (state, action: PayloadAction<Partial<BookingState['pagination']>>) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setReservations,
  setCurrentReservation,
  addReservation,
  updateReservation,
  deleteReservation,
  setPaymentCards,
  addPaymentCard,
  updatePaymentCard,
  deletePaymentCard,
  setSelectedRoom,
  clearSelectedRoom,
  updateBookingForm,
  resetBookingForm,
  setPagination,
  setLoading,
  setError,
  clearError,
} = bookingSlice.actions;

export default bookingSlice.reducer;

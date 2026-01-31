import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './search-types';

const initialState: SearchState = {
  city: '',
  checkIn: "",
  checkOut: "",
  guests: 1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCheckInDate: (state, action: PayloadAction<string>) => {
      state.checkIn = action.payload;
    },
    setCheckOutDate: (state, action: PayloadAction<string>) => {
      state.checkOut = action.payload;
    },
    setGuestsCount: (state, action: PayloadAction<number>) => {
      state.guests = action.payload;
    },
    clearSearch: (state) => {
      state.city = '';
      state.checkIn = "";
      state.checkOut = "";
      state.guests = 1;
    },
  },
});

export const {
  setCity,
  setCheckInDate,
  setCheckOutDate,
  setGuestsCount,
  clearSearch,
} = searchSlice.actions;

export default searchSlice.reducer;

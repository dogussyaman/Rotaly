import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categories: string[];
  ratings: string[];
  priceRange: [number, number];
  features: string[];
  type?: string;
  minRating?: number;
  maxRating?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

const initialState: FilterState = {
  categories: [],
  ratings: [],
  priceRange: [50, 100000],
  features: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setRatings: (state, action: PayloadAction<string[]>) => {
      state.ratings = action.payload;
      // Rating'leri minRating ve maxRating'e dönüştür
      if (action.payload.length > 0) {
        const ratings = action.payload.map(Number).sort((a, b) => a - b);
        state.minRating = ratings[0];
        state.maxRating = ratings[ratings.length - 1];
      } else {
        state.minRating = undefined;
        state.maxRating = undefined;
      }
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setFeatures: (state, action: PayloadAction<string[]>) => {
      state.features = action.payload;
    },
    setType: (state, action: PayloadAction<string | undefined>) => {
      state.type = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string | undefined>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<"asc" | "desc" | undefined>) => {
      state.sortOrder = action.payload;
    },
    clearFilters: (state) => {
      state.categories = [];
      state.ratings = [];
      state.priceRange = [50, 100000];
      state.features = [];
      state.type = undefined;
      state.minRating = undefined;
      state.maxRating = undefined;
      state.sortBy = undefined;
      state.sortOrder = undefined;
    },
  },
});

export const {
  setCategories,
  setRatings,
  setPriceRange,
  setFeatures,
  setType,
  setSortBy,
  setSortOrder,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

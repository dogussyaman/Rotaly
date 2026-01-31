import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { favoritesService } from "@/services/favorites.service";

// Tipler
interface Hotel {
  id: string;
  name: string;
  description?: string;
  checkIn: string;
  checkOut: string;
  location: string;
  address: string;
  city: string;
  country: string;
  rating?: number;
  price?: number; // Eklendi
  image?: string; // Eklendi
  discountRate?: number;
  isDiscounted: boolean;
  discountStartDate?: string;
  discountEndDate?: string;
  type: string; // This should ideally be HotelType enum
  ownerId: string;
  isActive: boolean;
  images?: Array<{ id: string; url: string }>;
}

interface Favorite {
  id: string;
  userId: string;
  hotelId: string;
  hotel: Hotel;
  createdAt: string;
}

interface FavoriteState {
  items: Favorite[];
  loading: boolean;
  error: string | null;
}

interface RootState {
  favorites: FavoriteState;
}

// Initial state
const initialState: FavoriteState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunk: favori toggle
export const toggleFavoriteAsync = createAsyncThunk<
  Favorite | string,
  { hotelId: string; hotel: Hotel; userId: string },
  { rejectValue: string }
>(
  "favorite/toggleFavorite",
  async ({ hotelId, hotel, userId }, { dispatch, rejectWithValue }) => {
    // Optimistik güncelleme
    dispatch(favoriteSlice.actions.toggleFavorite({ hotelId, hotel, userId }));

    try {
      const response = await favoritesService.toggleFavorite(hotelId);

      if (response.data.action === "added") {
        return response.data.favorite;
      } else {
        return hotelId;
      }
    } catch (error: unknown) {
      let message = "Bilinmeyen bir hata oluştu";

      if (error instanceof Error) {
        message = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as { response?: { data?: { message?: string } } }).response?.data?.message === "string"
      ) {
        message = (error as { response: { data: { message: string } } }).response.data.message;
      }

      // Hata durumunda optimistik güncellemeyi geri al
      dispatch(favoriteSlice.actions.setError(message));
      dispatch(favoriteSlice.actions.removeFavorite(hotelId)); // Hata oluşursa favoriyi geri kaldır
      return rejectWithValue(message);
    }
  }
);

// Slice
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFavorites: (state, action: PayloadAction<Favorite[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<{ hotelId: string; hotel: Hotel; userId: string }>) => {
      const { hotelId, hotel, userId } = action.payload;
      const existingIndex = state.items.findIndex((item) => item.hotelId === hotelId);

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        const newFavorite: Favorite = {
          id: `temp-${Date.now()}`,
          userId,
          hotelId,
          hotel,
          createdAt: new Date().toISOString(),
        };
        state.items.push(newFavorite);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleFavoriteAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleFavoriteAsync.fulfilled, (state, action) => {
        state.loading = false;

        if (typeof action.payload === "string") {
          state.items = state.items.filter((item) => item.hotelId !== action.payload);
        } else {
          const favorite = action.payload;
          const existingIndex = state.items.findIndex((item) => item.hotelId === favorite.hotelId);
          if (existingIndex !== -1) {
            state.items[existingIndex] = favorite;
          } else {
            state.items.push(favorite);
          }
        }
      })
      .addCase(toggleFavoriteAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message || "Favori toggling başarısız oldu";
      });
  },
});

// Export reducer & actions
export const { setLoading, setError, setFavorites, addFavorite, removeFavorite, toggleFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

// Selector’lar
export const selectFavorites = (state: RootState) => state.favorites?.items ?? [];
export const selectFavoritesLoading = (state: RootState) => state.favorites?.loading ?? false;
export const selectFavoritesError = (state: RootState) => state.favorites?.error ?? null;
export const selectIsFavorite = (hotelId: string) => (state: RootState) =>
  state.favorites?.items?.some((item) => item.hotelId === hotelId) ?? false;

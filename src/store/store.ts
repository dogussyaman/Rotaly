import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";
import searchReducer from "./search/search-slice";
import testUserReducer from "./testUser/test-user-slice";
import dashboardReducer from "./dashboard/dashboard-slice";
import bookingReducer from "./booking/booking-slice";
import stepReducer from "./step/step-slice";
import favoriteReducer from "./favorite/favorite-slice";
import hotelReducer from "./hotel/hotel-slice"; // ✅ Otel reducer'ını import ettik
import filterReducer from "./filter/filter-slice";


// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["testUser", "auth", "search", "booking", "step", "dashboard", "favorite", "hotel", "filter"], // ✅ reservationStep kaldırıldı
};

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  testUser: testUserReducer,
  dashboard: dashboardReducer,
  booking: bookingReducer,
  step: stepReducer,
  favorite: favoriteReducer, // ✅ burada reducer'ı ekledik
  hotel: hotelReducer, // ✅ burada hotel reducer'ı ekledik
  filter: filterReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// SSR uyumlu store oluşturma fonksiyonu
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

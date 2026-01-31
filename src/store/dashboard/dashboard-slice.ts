import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DashboardState {
  pageTitle: string;
  userRole: string;
  hotelName: string;
}

const initialState: DashboardState = {
  pageTitle: "",
  userRole: "",
  hotelName: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
    setUserRole: (state, action: PayloadAction<string>) => {
      state.userRole = action.payload;
    },
    setHotelName: (state, action: PayloadAction<string>) => {
      state.hotelName = action.payload;
    },
    clearPageTitle: (state) => {
      state.pageTitle = "";
    },
    clearDashboard: (state) => {
      state.pageTitle = "";
      state.userRole = "";
      state.hotelName = "";
    }
  },
});

export const { setHotelName, setPageTitle, setUserRole, clearPageTitle, clearDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;

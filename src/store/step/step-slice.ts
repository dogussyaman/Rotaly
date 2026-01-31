import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step = Math.min(state.step + 1, 3);
    },
    prevStep: (state) => {
      state.step = Math.max(state.step - 1, 1);
    },
    resetStep: (state) => {
      state.step = 1;
    },
  },
});

export const { setStep, nextStep, prevStep, resetStep } = stepSlice.actions;

export default stepSlice.reducer;


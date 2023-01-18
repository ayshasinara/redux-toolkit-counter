import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    isLoading: false,
  },
  reducers: {
    decreamentByZero: (state) => {
      state.isLoading = false;
      state.value = 0;
    },
    increament: (state) => {
      state.isLoading = false;
      state.value += 1;
    },
    decreament: (state) => {
      state.isLoading = false;
      state.value -= 1;
    },
    // loadingData: (state) => {
    //   state.isLoading = true;
    //   //   state.value = 1;
    // },

    increamentByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { increament, decreament, increamentByAmount, decreamentByZero } =
  counterSlice.actions;
export default counterSlice.reducer;

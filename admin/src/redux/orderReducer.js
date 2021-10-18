import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    pending: false,
    error: false,
  },
  reducers: {
    fetchOrdersStart: (state) => {
      state.pending = true;
    },
    fetchOrdersSuccess: (state, action) => {
      state.pending = false;
      state.orders = action.payload;
    },
    fetchOrdersError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersError } =
  orderSlice.actions;
export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    pending: false,
    error: false,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.pending = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.pending = false;
      state.products = action.payload;
    },
    fetchProductsError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { fetchProductsStart, fetchProductsError, fetchProductsSuccess } =
  productSlice.actions;
export default productSlice.reducer;

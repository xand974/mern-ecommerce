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
    fetchProductsFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export default productSlice.reducer;
export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

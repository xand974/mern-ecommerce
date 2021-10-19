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
    addProductStart: (state) => {
      state.pending = true;
    },
    addProductSuccess: (state, action) => {
      state.pending = false;
      state.products.push(action.payload);
    },
    addProductError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsError,
  fetchProductsSuccess,
  addProductError,
  addProductStart,
  addProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;

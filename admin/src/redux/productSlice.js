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
    updateProductStart: (state) => {
      state.pending = true;
    },
    updateProductSuccess: (state, action) => {
      state.pending = false;
      state.products.map((user) => {
        return user._id === action.payload && action.payload;
      });
    },
    updateProductError: (state) => {
      state.pending = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
      state.pending = true;
    },
    deleteProductSuccess: (state, action) => {
      state.pending = false;
      state.products.filter((user) => {
        return user._id !== action.payload;
      });
    },
    deleteProductError: (state) => {
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
  updateProductError,
  updateProductStart,
  updateProductSuccess,
  deleteProductError,
  deleteProductStart,
  deleteProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;

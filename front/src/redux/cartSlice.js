import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    active: false,
    pending: false,
    error: false,
  },
  reducers: {
    //ajouter produit
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      state.active = true;
    },
    removeItem: (state, action) => {
      if (state.quantity === 0) {
        state.products.filter((product) => product._id !== action.payload);
        state.quantity = 0;
      } else {
        state.quantity -= 1;
      }
    },
    calculateTotalMinus: (state, action) => {
      if (state.total <= 0) {
        state.total = 0;
      } else {
        state.total -= action.payload.price;
      }
    },
    calculateTotalPlus: (state, action) => {
      state.total += action.payload.price;
      state.quantity += 1;
    },
    //reset cart
    resetCart: (state) => {
      state.active = false;
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
    sendCartStart: (state) => {
      state.pending = true;
    },
    sendCartSuccess: (state) => {
      state.pending = false;
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    sendCartError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default cartSlice.reducer;
export const {
  addProduct,
  resetCart,
  sendCartStart,
  sendCartSuccess,
  sendCartError,
  removeItem,
  calculateTotalMinus,
  calculateTotalPlus,
} = cartSlice.actions;

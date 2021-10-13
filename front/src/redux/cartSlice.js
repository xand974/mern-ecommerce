import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    active: false,
  },
  reducers: {
    //ajouter produit
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      state.active = true;
    },
    //reset cart
    resetCart: (state) => {
      state.active = false;
      state.products = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, resetCart } = cartSlice.actions;

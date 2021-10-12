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
    //supprimer produit
  },
});

export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;

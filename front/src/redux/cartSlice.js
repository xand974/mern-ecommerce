import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
  active: false,
  pending: false,
  error: false,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const products = current(state.products);
      const existingProduct =
        products.find((item) => item._id === action.payload._id) ?? null;
      const newTotal =
        state.total + action.payload.price * action.payload.quantity;

      if (!existingProduct) {
        return {
          ...state,
          products: [...state.products, action.payload],
          active: true,
          total: newTotal,
          quantity: state.quantity + 1,
        };
      }
      const newProducts = products.map((item) => {
        if (item.id === existingProduct.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        products: newProducts,
        total: newTotal,
        active: true,
      };
    },
    calculateTotalMinus: (state, action) => {
      const products = current(state.products);
      const product = products.find((item) => item._id === action.payload.id);
      if (!product) return state;
      const newTotal =
        state.total <= 0 ? 0 : state.total - action.payload.price;
      let newProducts;
      if (product.quantity - 1 === 0) {
        newProducts = products.filter((item) => item._id !== action.payload.id);
        const newQuantity = state.quantity === 0 ? 0 : state.quantity - 1;
        return {
          ...state,
          quantity: newQuantity,
          products: newProducts,
          total: newTotal,
        };
      }

      newProducts = products.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        total: newTotal,
        products: newProducts,
      };
    },
    calculateTotalPlus: (state, action) => {
      const products = current(state.products);
      const product = products.find((item) => item._id === action.payload.id);
      if (!product) return state;
      const newProducts = products.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      const newTotal = state.total + action.payload.price;
      return {
        ...state,
        total: newTotal,
        products: newProducts,
      };
    },
    resetCart: (state) => {
      let currentState = current(state);
      currentState = {
        ...initialState,
      };
      return currentState;
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
  calculateTotalMinus,
  calculateTotalPlus,
} = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    userWishList: [],
  },
  reducers: {
    addWishList: (state, action) => {
      state.userWishList.push(action.payload);
    },
    removeWishList: (state, action) => {
      state.userWishList = state.userWishList.filter(
        (w) => w._id !== action.payload
      );
    },
  },
});

export default wishListSlice.reducer;
export const { addWishList, removeWishList } = wishListSlice.actions;

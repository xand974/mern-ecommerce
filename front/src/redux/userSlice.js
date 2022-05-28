import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  pending: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    resetAuth: () => {
      return {
        state: initialState,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, resetAuth, logout } =
  userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pending: false,
    error: false,
  },
  reducers: {
    fetchUsersStart: (state) => {
      state.pending = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    fetchUsersError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { fetchUsersStart, fetchUsersError, fetchUsersSuccess } =
  userSlice.actions;
export default userSlice.reducer;

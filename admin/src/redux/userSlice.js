import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pending: false,
    error: false,
    stats: [],
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
    fetchUsersStatsStart: (state) => {
      state.pending = true;
    },
    fetchUsersStatsSuccess: (state, action) => {
      state.pending = false;
      state.stats = action.payload;
    },
    fetchUsersStatsError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersError,
  fetchUsersSuccess,
  fetchUsersStatsStart,
  fetchUsersStatsSuccess,
  fetchUsersStatsError,
} = userSlice.actions;
export default userSlice.reducer;

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
    createUserStart: (state) => {
      state.pending = true;
    },
    createUserSuccess: (state, action) => {
      state.pending = false;
      state.users.push(action.payload);
    },
    createUserError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateUserStart: (state) => {
      state.pending = true;
    },
    updateUserSuccess: (state, action) => {
      state.pending = false;
      state.users.map((user) => {
        return user._id === action.payload && action.payload;
      });
    },
    updateUserError: (state) => {
      state.pending = false;
      state.error = true;
    },
    deleteUserStart: (state) => {
      state.pending = true;
    },
    deleteUserSuccess: (state, action) => {
      state.pending = false;
      state.users.filter((user) => {
        return user._id !== action.payload;
      });
    },
    deleteUserError: (state) => {
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
  createUserError,
  createUserStart,
  createUserSuccess,
  updateUserError,
  updateUserStart,
  updateUserSuccess,
  deleteUserError,
  deleteUserStart,
  deleteUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;

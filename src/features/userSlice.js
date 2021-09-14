import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.token;

export default userSlice.reducer;

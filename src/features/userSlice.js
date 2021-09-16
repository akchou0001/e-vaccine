import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    token: "",
    mobile: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user.token = "";
      state.user.mobile = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

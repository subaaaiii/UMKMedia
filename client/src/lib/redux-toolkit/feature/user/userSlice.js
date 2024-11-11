import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  verified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getVerified: (state, action) => {
      state.verified = action.payload;
    },
  },
});

export const { setToken, setUser, getVerified } = userSlice.actions;
export default userSlice.reducer;

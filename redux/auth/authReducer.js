// import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   userId: null,
//   login: null,
//   stateChange: false,
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: state,
//   reducers: {
//     updateUserProfile: (state, { payload }) => ({
//       ...state,
//       userId: payload.userId,
//       login: payload.login,
//     }),
//     authStateChange: (state, { payload }) => ({
//       ...state,
//       stateChange: payload.stateChange,
//     }),
//     authSignOut: () => state,
//   },
// });

import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  name: null,
  email: null,
  stateChange: null,
  avatar: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
  },
});
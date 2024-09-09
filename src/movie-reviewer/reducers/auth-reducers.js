import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registrationThunk } from "../services/auth-thunks";

const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
     console.log('log instate.currentUse Data:', state.currentUser); 
   },

   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
  },

  [profileThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },

  [profileThunk.rejected]: (state, { payload }) => {
    state.currentUser = null;
  },

  [profileThunk.pending]: (state, action) => {
    state.currentUser = null;
  },

  [updateUserThunk.fulfilled]: (state, { payload }) => {
    console.log('Updated User Data:', payload); 
    state.currentUser.user = payload;
    console.log('state.currentUse.user.user Data:', state.currentUser.user.user); //relog in and can see updated data
  },

  [registrationThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },
 },
});

export default authSlice.reducer;
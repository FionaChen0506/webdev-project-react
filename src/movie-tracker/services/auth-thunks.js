import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await authService.login(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error); // Use rejectWithValue to handle error
    }
  }
);


export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    return response.data;
   });
   
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
});


export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
      // Make the API call to update the user's profile on the server
      const updatedUser = await authService.updateUser(user);

      return updatedUser; // Return the updated user data received from the server
  }
);


export const registrationThunk = createAsyncThunk(
    "user/register", async (user) => {
        const registeredUser = await authService.register(user);
        return registeredUser;
});
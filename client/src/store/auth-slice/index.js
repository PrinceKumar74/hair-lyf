import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

/* Register User */
export const registerUser = createAsyncThunk(
  "auth/registerUser", // Action type (prefix)
  async (formData) => { // Async function that performs the API call
    const response = await axios.post(
      "http://localhost:5000/api/auth/register", // API endpoint
      // "https://hairlyf-api-1.onrender.com/api/users/register",
      formData, // Data to send to the API
      {
        withCredentials: true, // Allows sending cookies with the request
      }
    );
    return response.data; // The result of the API call
  }
);

/* Login User */
export const loginUser = createAsyncThunk(
  "auth/login", 
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login", 
      // "https://hairlyf-api-1.onrender.com/api/users/login",
      formData,  
      {
        withCredentials: true, 
      }
    );
    return response.data; 
  }
);

const authSlice = createSlice({
  name: "auth",// Name of the slice
  initialState,// Initial state (defined earlier)
  reducers: {
    setUser: (state, action) => {
      // You can define any reducer logic here for synchronous actions
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true; // Set the loading state when the request starts
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false; // Stop the loading state when the request succeeds
        state.user =null;
        state.isAuthenticated = false; 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false; // Stop the loading state when the request fails
        state.user = null; // Clear the user data in case of failure
        state.isAuthenticated = false; // Set authentication to false if the request fails
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;  
        console.log(action);
        state.user = action.payload.success ? action.payload.user: null;
        state.isAuthenticated = action.payload.success 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false; 
        state.user = null; 
        state.isAuthenticated = false;
      })
  },  
});


export const { setUser } = authSlice.actions;
export default authSlice.reducer;
//i have done the login feature and auth logic and can do sign in and sign up  i have set the controllers for routes 

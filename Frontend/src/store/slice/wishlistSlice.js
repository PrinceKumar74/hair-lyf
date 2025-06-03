// import { createSlice } from '@reduxjs/toolkit';
// import {API_BASE_URL} from '../../components/config/apiConfig'

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState: JSON.parse(localStorage.getItem('wishlist')) || [],
//   reducers: {
//     addToWishlist: (state, action) => {
//       const exists = state.find(item => item.id === action.payload.id);
//       if (!exists) {
//         state.push(action.payload);
//       }
//     },      removeFromWishlist: (state, action) => {
//       return state.filter(item => item.id !== action.payload);
//     },
//     clearWishlist: () => {
//       return [];
//     },
//     toggleWishlistItem: (state, action) => {
//       const exists = state.find(item => item.id === action.payload.id);
//       if (exists) {
//         return state.filter(item => item.id !== action.payload.id);
//       } else {
//         state.push(action.payload); 
//       }
//     }
//   },
// });

// // Selectors
// export const selectWishlistItems = (state) => state.wishlist;
// export const selectWishlistCount = (state) => state.wishlist.length;
// export const isInWishlist = (state, id) => 
//   Boolean(state.wishlist.find(item => item.id === id));

// export const {
//   addToWishlist,
//   removeFromWishlist,
//   clearWishlist,
//   toggleWishlistItem
// } = wishlistSlice.actions;

// export default wishlistSlice.reducer;






































// wishlistSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../components/config/apiConfig';
import axios from 'axios';

const handleAxiosError = (error, rejectWithValue) => {
  if (error.response) {
    return rejectWithValue(error.response.data.message || error.response.statusText);
  } else if (error.request) {
    return rejectWithValue('Network error - no response received');
  }
  return rejectWithValue(error.message);
};

// Async Thunks using Axios
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/wishlist`);
      return response.data;
    } catch (error) {
      return handleAxiosError(error, rejectWithValue); // Pass rejectWithValue to handleAxiosError
    }
  }
);

export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/wishlist`, { productId });
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  'wishlist/removeFromWishlist',
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/wishlist/${productId}`);
      return productId; // Return ID for optimistic update
    } catch (error) {
      return handleAxiosError(error);
    }
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    clearWishlistError: (state) => {
      state.error = null;
    },
    // Optional: Local wishlist management while API calls are in progress
    localAddToWishlist: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    localRemoveFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Add to Wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (!state.items.some(item => item.id === action.payload.id)) {
          state.items.push(action.payload);
        }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Remove from Wishlist
      .addCase(removeFromWishlist.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        // Optimistic update
        state.items = state.items.filter(item => item.id !== action.meta.arg);
      })
      .addCase(removeFromWishlist.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        // Revert optimistic update if needed
        if (action.meta.arg) {
          const itemToRestore = action.meta.arg; // You might need to store the whole item
          state.items.push(itemToRestore);
        }
      });
  }
});

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectWishlistStatus = (state) => state.wishlist.status;
export const selectWishlistError = (state) => state.wishlist.error;
export const isInWishlist = (state, id) => 
  state.wishlist.items.some(item => item.id === id);

export const { 
  clearWishlistError,
  localAddToWishlist,
  localRemoveFromWishlist 
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: JSON.parse(localStorage.getItem('wishlist')) || [],
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },      removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearWishlist: () => {
      return [];
    },
    toggleWishlistItem: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.filter(item => item.id !== action.payload.id);
      } else {
        state.push(action.payload); 
      }
    }
  },
});

// Selectors
export const selectWishlistItems = (state) => state.wishlist;
export const selectWishlistCount = (state) => state.wishlist.length;
export const isInWishlist = (state, id) => 
  Boolean(state.wishlist.find(item => item.id === id));

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  toggleWishlistItem
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state now managed by server-side data
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Async thunk to fetch cart items for a user
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/shop/cart/get/${userId}`);
      // Assumes the response structure is { data: { data: [...] } }
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching cart items');
    }
  }
);

// Async thunk to add an item to the cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity = 1 }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/shop/cart/add`, {
        userId,
        productId,
        quantity,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error adding item to cart');
    }
  }
);

// Async thunk to remove an item from the cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }, thunkAPI) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/shop/cart/${userId}/${productId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error removing item from cart');
    }
  }
);

// Async thunk to update the quantity of an item in the cart
export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async ({ userId, productId, quantity }, thunkAPI) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/shop/cart/update-cart`, {
        userId,
        productId,
        quantity,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error updating quantity');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // If you need synchronous actions, they can remain here.
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Remove from Cart
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Cart Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer; */
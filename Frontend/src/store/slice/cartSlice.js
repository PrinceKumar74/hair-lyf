// cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../components/config/apiConfig';

// Helper function to get auth token
const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};

// Async Thunks
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/cart`, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item, { rejectWithValue }) => {
    try {
      // First, get the product details to get the correct variant ID
      const productResponse = await axios.get(`${API_BASE_URL}/api/products/${item.id}`, {
        headers: {
          Authorization: getAuthToken()
        }
      });

      const product = productResponse.data.product;
      
      // Find the matching variant or use the provided variant ID
      let variant;
      if (item.variantId) {
        variant = product.variants?.find(v => v._id === item.variantId);
      } else {
        variant = product.variants?.find(v => v.size === item.size);
      }
      
      if (!variant) {
        // If no variant is found, use the product itself as the variant
        variant = {
          _id: product._id,
          size: item.size,
          variantPrice: product.price,
          stock: product.stock
        };
      }


      // Now add to cart with the correct variant ID
      const response = await axios.post(`${API_BASE_URL}/api/cart`, {
        productId: item.id,
        variantId: variant._id,
        quantity: item.quantity || 1,
        price: variant.variantPrice || item.price,
        size: variant.size || item.size
      }, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const updateCartItemAsync = createAsyncThunk(
  'cart/updateItem',
  async ({ productId, variantId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/cart/${productId}/${variantId}`, {
        quantity
      }, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  'cart/removeItem',
  async ({ productId, variantId }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/cart/${productId}/${variantId}`, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      return { productId, variantId };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const clearCartAsync = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/cart`, {
        headers: {
          Authorization: getAuthToken()
        }
      });
      return [];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isInCart: {} // Track which items are in cart
  },
  reducers: {
    setInCart: (state, action) => {
      state.isInCart[action.payload.id] = true;
    },
    setNotInCart: (state, action) => {
      state.isInCart[action.payload.id] = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response data structure
        const cartItems = action.payload.data || action.payload || [];
        state.items = Array.isArray(cartItems) ? cartItems : [];
        // Update isInCart state
        state.isInCart = {};
        state.items.forEach(item => {
          if (item.productId) {
            state.isInCart[item.productId] = true;
          }
        });
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add to Cart
      .addCase(addToCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response data structure
        const cartItems = action.payload.data || action.payload || [];
        state.items = Array.isArray(cartItems) ? cartItems : [];
        if (action.meta.arg.id) {
          state.isInCart[action.meta.arg.id] = true;
        }
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Cart Item
      .addCase(updateCartItemAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItemAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the response data structure
        const cartItems = action.payload.data || action.payload || [];
        state.items = Array.isArray(cartItems) ? cartItems : [];
      })
      .addCase(updateCartItemAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Remove from Cart
      .addCase(removeFromCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          item => !(item.productId === action.payload.productId && item.variantId === action.payload.variantId)
        );
        if (action.payload.productId) {
          state.isInCart[action.payload.productId] = false;
        }
      })
      .addCase(removeFromCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Clear Cart
      .addCase(clearCartAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.items = [];
        state.isInCart = {};
      })
      .addCase(clearCartAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

// Selector to calculate the total number of items in the cart
export const selectTotalItems = (state) => {
  return state.cart.items.reduce((total, item) => total + (item.quantity || 1), 0);
};

export const { setInCart, setNotInCart } = cartSlice.actions;
export default cartSlice.reducer;
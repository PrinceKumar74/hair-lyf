// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import authReducer from './slice/authSlice';

// Middleware to persist cart state to localStorage
const persistCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Check if the action affects the cart state
  if (
    action.type.endsWith('/addToCart') ||
    action.type.endsWith('/removeFromCart') ||
    action.type.endsWith('/incrementQuantity') ||
    action.type.endsWith('/decrementQuantity')
  ) {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState));
  }
  return result;
};

// Configure the store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});





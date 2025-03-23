import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(state));
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(state));
      return state.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(state));
      const item = state.find(item => item.id === action.payload);
      item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      localStorage.setItem('cart', JSON.stringify(state));
      const item = state.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        return state.filter(i => i.id !== action.payload);
      }
      item.quantity -= 1;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;
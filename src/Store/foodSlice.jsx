import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // This will remove the item from the cart based on its id
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFood, removeFromCart } = foodSlice.actions;
export default foodSlice.reducer;

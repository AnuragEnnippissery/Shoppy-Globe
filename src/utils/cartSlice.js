import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // Optional: Check if item already exists in cart
      const existingItem = state.items.find(i => i.id === item.id);
      // if (!exists) {
      //   state.items.push(item);
      // }
        if (existingItem) {
        existingItem.quantity += 1;
        } else {
          state.items.push({ ...item, quantity: 1 });
        }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    }
  },
});

export const { addToCart,removeFromCart,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
/*
removeTOCart:(state,action)=>{
      const item=action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (exists) {
        state.items.delete(item);
      }
    }
      */

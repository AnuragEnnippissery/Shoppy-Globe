import { createSlice} from '@reduxjs/toolkit';
import { fetchCart,addToCartAsync,removeFromCartAsync,decreaseQuantityAsync } from './cartThunk';


const initialState = {
  items: [],
  loading:false,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
     .addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload.map(p => {
        const product = p.productId;
        return {
          id: product?._id,
          title: product?.title,
          price: product?.price,
          image: product?.image_url || product?.image || "",
          quantity: p?.quantity
        };
      });
    })

      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      });
  }
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

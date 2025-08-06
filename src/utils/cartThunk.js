// cartThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToCartAPI,
  decreaseFromCartAPI,
  removeFromCartAPI,
  fetchCartAPI
} from './cartapi';

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
  const data = await fetchCartAPI(userId);
  console.log("async fetch",data.items)
  return data.items;
});

// export const addToCartAsync = createAsyncThunk('cart/addToCartAsync', async ({ userId, productId }) => {
//   await addToCartAPI(userId, productId);
//   return productId;
// });
export const addToCartAsync = createAsyncThunk(
  'cart/addToCartAsync',
  async ({ userId, productId }) => {
    const item = await addToCartAPI(userId, productId);
    console.log("async thunk",item)
    return item; // { productId: { _id, title, ... }, quantity }
  }
);

export const decreaseQuantityAsync = createAsyncThunk('cart/decreaseQuantityAsync', async ({ userId, productId }) => {
  await decreaseFromCartAPI(userId, productId);
  return productId;
});

export const removeFromCartAsync = createAsyncThunk('cart/removeFromCartAsync', async ({ userId, productId }) => {
  await removeFromCartAPI(userId, productId);
  return productId;
});

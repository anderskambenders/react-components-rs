import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  productsCount: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    update: (state, action) => {
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
    },
  },
});

export const { actions, reducer } = productsSlice;

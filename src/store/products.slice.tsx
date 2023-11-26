import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  productsCount: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setListData: (state, action) => {
      state.products = action.payload.products;
      state.productsCount = action.payload.total;
    },
    setProductData: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { actions, reducer } = productsSlice;

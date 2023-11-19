import { createSlice } from '@reduxjs/toolkit';

export const cardLoadingSlice = createSlice({
  name: 'cardLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    set: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions, reducer } = cardLoadingSlice;

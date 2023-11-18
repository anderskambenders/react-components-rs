import { createSlice } from '@reduxjs/toolkit';

export const listLoadingSlice = createSlice({
  name: 'listLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    set: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { actions, reducer } = listLoadingSlice;

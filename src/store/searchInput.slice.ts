import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { actions, reducer } = searchInputSlice;

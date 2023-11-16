import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchInputState {
  searchInput: string;
}

const initialState: SearchInputState = {
  searchInput: localStorage.getItem('valueKey') || '',
};

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState,
  reducers: {
    set: (state: SearchInputState, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { actions, reducer } = searchInputSlice;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ItemsPerPageState {
  itemsPerPage: number;
}

const initialState: ItemsPerPageState = {
  itemsPerPage: 10,
};

export const itemsPerPageSlice = createSlice({
  name: 'itemsPerPage',
  initialState,
  reducers: {
    set: (state: ItemsPerPageState, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { actions, reducer } = itemsPerPageSlice;

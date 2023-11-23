import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
  itemsPerPage: 10,
};

export const itemsPerPageSlice = createSlice({
  name: 'itemsPerPage',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { actions, reducer } = itemsPerPageSlice;

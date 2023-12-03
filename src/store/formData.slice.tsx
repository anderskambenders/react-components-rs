import { createSlice } from '@reduxjs/toolkit';
import { formData } from '../types';

const initialState: formData = {
  dataList: [],
  newFormSubmitted: false,
};

export const dataListSlice = createSlice({
  name: 'formDataList',
  initialState,
  reducers: {
    addNewSubmit(state, action) {
      state.newFormSubmitted = true;
      state.dataList.unshift(action.payload);
    },
    setNewFormSubmitted(state, action) {
      state.newFormSubmitted = action.payload;
    },
  },
});

export default dataListSlice.reducer;

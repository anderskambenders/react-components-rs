import { createSlice } from '@reduxjs/toolkit';
import { formData } from '../types';

const initialState: formData = {
  dataList: [],
};

export const dataListSlice = createSlice({
  name: 'formDataList',
  initialState,
  reducers: {
    addNewSubmit(state, action) {
      state.dataList.push(action.payload);
    },
  },
});

export default dataListSlice.reducer;

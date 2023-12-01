import { createSlice } from '@reduxjs/toolkit';

export interface IFormData {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  tc: boolean;
  image: string;
  country: string;
}

type formData = {
  dataList: IFormData[];
};

const initialState: formData = {
  dataList: [],
};

export const dataListSlice = createSlice({
  name: 'formDataList',
  initialState,
  reducers: {
    // setLastName(state, action: PayloadAction<string>) {
    //   state.lastData.name = action.payload;
    // },
    // setLastAge(state, action: PayloadAction<string>) {
    //   state.lastData.age = action.payload;
    // },
    // setLastEmail(state, action: PayloadAction<string>) {
    //   state.lastData.email = action.payload;
    // },
    // setLastPassword(state, action: PayloadAction<string>) {
    //   state.lastData.password = action.payload;
    // },
    // setLastConfirmPassword(state, action: PayloadAction<string>) {
    //   state.lastData.confirmPassword = action.payload;
    // },
    // setLastGender(state, action: PayloadAction<string>) {
    //   state.lastData.gender = action.payload;
    // },
    // setLastTC(state, action: PayloadAction<boolean>) {
    //   state.lastData.tc = action.payload;
    // },
    // setLastImage(state, action: PayloadAction<string>) {
    //   state.lastData.image = action.payload;
    // },
    // setLastCountry(state, action: PayloadAction<string>) {
    //   state.lastData.country = action.payload;
    // },
    addNewSubmit(state, action) {
      state.dataList.push(action.payload);
    },
  },
});

export default dataListSlice.reducer;

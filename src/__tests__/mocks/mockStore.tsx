import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../store/productApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const cardLoadingSlice = createSlice({
  name: 'cardLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    set: (state) => {
      state.isLoading = false;
    },
  },
});

interface SearchInputState {
  searchInput: string;
}

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    searchInput: '',
  },
  reducers: {
    set: (state: SearchInputState) => {
      state.searchInput = '';
    },
  },
});

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
    set: (state: ItemsPerPageState) => {
      state.itemsPerPage = 10;
    },
  },
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsCount: 0,
  },
  reducers: {
    update: (state) => {
      state.products = [];
      state.productsCount = 100;
    },
  },
});

export const listLoadingSlice = createSlice({
  name: 'listLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    set: (state) => {
      state.isLoading = false;
    },
  },
});

const reducers = combineReducers({
  searchInput: searchInputSlice.reducer,
  itemsPerPage: itemsPerPageSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  products: productsSlice.reducer,
  listLoading: listLoadingSlice.reducer,
  cardLoading: cardLoadingSlice.reducer,
});

export const mockStore = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof mockStore.getState>;
export type AppDispatch = typeof mockStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

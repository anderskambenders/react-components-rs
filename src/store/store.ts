import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as searchInputReducer } from './searchInput.slice';
import { reducer as itemsPerPageReducer } from './itemsPerPage.slice';
import { reducer as productsReducer } from './products.slice';
import { reducer as listLoadingReducer } from './listLoading.slice';
import { productsApi } from './productApi';

const reducers = combineReducers({
  searchInput: searchInputReducer,
  itemsPerPage: itemsPerPageReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  products: productsReducer,
  listLoading: listLoadingReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

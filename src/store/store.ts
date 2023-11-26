import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as productsReducer } from './products.slice';
import { createWrapper } from 'next-redux-wrapper';
import { productsApi } from './productApi';

const reducers = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  products: productsReducer,
});

export const store = () =>
  configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store, { debug: true });

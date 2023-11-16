import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as searchInputReducer } from './searchInput.slice';

const reducers = combineReducers({
  searchInput: searchInputReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

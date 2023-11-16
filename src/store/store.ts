import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as searchInputReducer } from './searchInput.slice';
import { reducer as itemsPerPageReducer } from './itemsPerPage.slice';

const reducers = combineReducers({
  searchInput: searchInputReducer,
  itemsPerPage: itemsPerPageReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

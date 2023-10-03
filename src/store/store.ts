import { configureStore } from '@reduxjs/toolkit'
import concertsSlice from '../features/slices/concertsSlice';

const store = configureStore({
  reducer : {
    concerts : concertsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
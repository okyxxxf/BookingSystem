import { configureStore } from '@reduxjs/toolkit'
import concertsSlice from '../features/slices/concertsSlice';
import authSlice from '../features/slices/authSlice';
import modalSlice from '../features/slices/modalSlice';

const store = configureStore({
  reducer : {
    concerts : concertsSlice,
    auth : authSlice,
    modal : modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
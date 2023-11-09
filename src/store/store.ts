import { configureStore } from '@reduxjs/toolkit'
import concertsSlice from '../features/slices/concertsSlice';
import authSlice from '../features/slices/authSlice';
import modalSlice from '../features/slices/modalSlice';
import adminSlice from '../features/slices/adminSlice';

const store = configureStore({
  reducer : {
    concerts : concertsSlice,
    auth : authSlice,
    modal : modalSlice,
    admin : adminSlice
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
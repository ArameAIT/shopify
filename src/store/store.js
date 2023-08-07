import { configureStore } from '@reduxjs/toolkit'
import  mainSlice from './Slices/MainSlice';
import  basketSlice  from './Slices/BasketSlice';

const store = configureStore({
  reducer: {
    mainSlice,
    basketSlice
  },
})

export default store;
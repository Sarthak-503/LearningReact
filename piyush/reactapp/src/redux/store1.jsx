import { configureStore } from "@reduxjs/toolkit";
// import {cartReducer} from './slices/CartSlice.jsx'; 
import cartSlice from './slices/CartSlice';
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  devTools: true,
});

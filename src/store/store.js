import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// return info about state
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  }
});
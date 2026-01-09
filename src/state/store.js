// redux/store.js
import {configureStore} from "@reduxjs/toolkit";
import productListSlice from "./product/productListSlice";

// Create the Redux store
export const reduxStore = configureStore({
  reducer: {
    productSlice: productListSlice,
  },
});

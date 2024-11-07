// src/Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";

const Store = configureStore({
  reducer: {
    food: foodSlice,  // Food reducer managing the cart state
  },
});

export default Store;

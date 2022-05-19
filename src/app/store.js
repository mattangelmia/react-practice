import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartProductsReducer from "../features/cartProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartProducts: cartProductsReducer,
  },
});

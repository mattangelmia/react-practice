import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  costTotal: 0,
  itemAmount: 0,
};

export const cartProductsSlice = createSlice({
  name: "CartProducts",
  initialState,
  reducers: {
    addProduct: (state, action, value) => {
      state.cartProducts.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addProduct } = cartProductsSlice.actions;
export default cartProductsSlice.reducer;

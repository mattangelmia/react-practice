import { createSlice } from "@reduxjs/toolkit";
import machine from "../images/machine.png";

const initialState = {
  products: [
    {
      img: machine,
      product: "EM-1010",
      type: "Starter Embroidery Machine",
      needle: "10 NEEDLE",
      head: "SINGLE-HEAD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 5999,
      formerPrice: 7500,
    },
    {
      img: machine,
      product: "TC-1501",
      type: "Commercial Embroidery Machine",
      needle: "15 NEEDLE",
      head: "SINGLE-HEAD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 7999,
      formerPrice: 7500,
    },
    {
      img: machine,
      product: "MT-1501",
      type: "Commercial Embroidery Machine",
      needle: "10 NEEDLE",
      head: "SINGLE-HEAD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.",
      price: 8999,
      formerPrice: 7500,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  addTwo: (state, action, value) => {
    // state.cartProducts.push(action.payload);
    console.log("working");
  },
});
export const { addTwo } = productsSlice.actions;
export default productsSlice.reducer;

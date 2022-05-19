import { createSlice } from "@reduxjs/toolkit";
import machine1 from "../images/machine.png";
import machine2 from "../images/machine2.png";
import machine3 from "../images/machine3.png";

const initialState = {
  products: [
    {
      img: machine1,
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
      img: machine2,
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
      img: machine3,
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

import React from "react";
import Nav from "./Nav";
import Banner from "../images/Banner Image.png";
import Product from "./Product";
import Footer from "./Footer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  const productList = useSelector((state) => state.products.products);
  console.log(productList);
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <div style={{ marginLeft: "5%", paddingTop: "1%" }}>
        <h1>Products Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo nec
          ultrices sit risus nisi non fermentum morbi. Tristique.
        </p>
      </div>
      <Product />
      <div id="banner"></div>
      <Footer />
    </div>
  );
}

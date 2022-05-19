import React from "react";
import ricomaLogo from "../images/Ricoma Logo Gray Copy.png";
import cart from "../images/Path-cart.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartProductModal from "./CartProductModal";
import { useState } from "react";

export default function Nav() {
  const [productCartDisplay, setProductCartDisplay] = useState("none");

  function closeCartModal() {
    setProductCartDisplay("none");
  }

  function openProductModal() {
    setProductCartDisplay("block");
  }

  const productAmount = useSelector(
    (state) => state.cartProducts.cartProducts.length
  );
  console.log(productAmount);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "#002045",
        height: "66px",
        paddingTop: "15px",
      }}
    >
      <CartProductModal
        productCartDisplay={productCartDisplay}
        closeCart={closeCartModal}
      />
      <div>
        <img src={ricomaLogo} alt="ricoma-logo"></img>
      </div>

      <div>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        onClick={openProductModal}
      >
        <img
          src={cart}
          alt="cart"
          style={{ height: "2vh", marginRight: "12%" }}
        ></img>
        <p style={{ color: "white" }}>{productAmount}</p>
      </div>
    </div>
  );
}

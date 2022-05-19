import React from "react";
import machine from "../images/5dfbd03aab1fd7.62443161 copy 7.png";
import { useSelector, useDispatch } from "react-redux";

export default function CartProductModal(props) {
  const cartProductList = useSelector(
    (state) => state.cartProducts.cartProducts
  );
  console.log(cartProductList);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #80808066",
        width: "30vw",
        position: "absolute",
        top: "4vh",
        right: "10vw",
        minHeight: "40vh",
        borderRadius: "2px",
        padding: "1%",
        display: props.productCartDisplay,
        zIndex: "100",
      }}
      id="cart-modal"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10%",
        }}
      >
        <h4>Your Cart</h4>
        <p style={{ fontSize: "25px" }} onClick={props.closeCart}>
          x
        </p>
      </div>
      {cartProductList.map((product, index) => (
        <div key={index}>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={product.img}
                alt="machine"
                style={{ height: "70px" }}
              ></img>
            </div>
            <div style={{ marginLeft: "5%", marginBottom: "5%" }}>
              <h4>{product.product}</h4>
              <p style={{ marginBottom: "0px" }}>Starter Embroidery Machine</p>
              <p>
                {product.head},{product.needle}
              </p>
            </div>
            <div>
              <h5>{product.price}</h5>
            </div>
          </div>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Order Total </h4>
        <h4>$14,226</h4>
      </div>
    </div>
  );
}

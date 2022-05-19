import React from "react";
import machine from "../images/machine.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../features/cartProductsSlice";
import { addTwo } from "../features/productsSlice";

export default function Product() {
  const productList = useSelector((state) => state.products.products);
  console.log(productList);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", position: "relative", top: "14vh" }}
      id="products-section"
    >
      {productList.map((product, index) => (
        <div
          style={{
            width: "27vw",
            marginBottom: "20px",
            margin: "3%",
            borderRadius: "16px",
            border: "1px solid #8080801c",
            background: "white",
          }}
          key={index}
          id="product-item"
        >
          <div
            style={{
              backgroundColor: "#C4C4C4",
              paddingTop: "5%",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={product.img} alt="em" style={{ height: "20vh" }}></img>
          </div>
          <div style={{ padding: "10px" }}>
            <div>
              <h4>{product.product}</h4>
              <h5>{product.type}</h5>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{product.needle}</h5>
                <h5>{product.head}</h5>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <h4>${product.price}</h4>
                <h4>${product.formerPrice}</h4>
                <div
                  style={{
                    background: "#F17D21",
                    width: "10vw",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "1%",
                    borderRadius: "10px",
                    marginBottom: "5%",
                  }}
                  id="order-btn"
                >
                  <p onClick={() => dispatch(addProduct({ ...product }))}>
                    {" "}
                    ORDER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

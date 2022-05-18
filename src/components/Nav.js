import React from "react";
import ricomaLogo from "../images/Ricoma Logo Gray Copy.png";

export default function Nav() {
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
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
        </ul>
      </div>

      <div>
        <p style={{ color: "white" }}>Icon</p>
      </div>
    </div>
  );
}

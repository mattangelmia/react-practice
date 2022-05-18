import React from "react";
import Review from "./Review";

export default function Reviews() {
  return (
    <div>
      <div style={{ paddingTop: "5%" }}>
        <h1 style={{ textAlign: "center" }}>
          Pellentesque Tortor Aliquet aArcu Nunc.
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        id="reviews-section"
      >
        <Review />
        <Review />
      </div>
    </div>
  );
}

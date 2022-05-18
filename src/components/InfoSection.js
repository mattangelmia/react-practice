import React from "react";
import sectionPic from "../images/Group 9269.png";

export default function InfoSection() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          bottom: "10vh",
          width: "100vw",
          height: "20vh",
        }}
        id="section-pic"
      >
        <img src={sectionPic} alt="section-pic" />
      </div>
    </div>
  );
}

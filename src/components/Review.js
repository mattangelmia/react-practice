import React from "react";
import MachinePic from "../images/5dfbd03aab1fd7.62443161 copy 7.png";
import ReviewPic from "../images/Group 5478.png";

export default function Review() {
  return (
    <div
      style={{
        width: "30vw",
        margin: "5%",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
      }}
      id="review"
    >
      <div
        style={{
          backgroundColor: "rgba(15, 100, 200, 1)",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <h3
          style={{
            color: "white",
            marginBottom: "0rem",
            fontSize: "20px",
            textAlign: "center",
            padding: "2%",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
        </h3>
      </div>
      <div
        style={{
          background: "rgba(245, 245, 245, 1)",
          display: "flex",
          justifyContent: "center",
          padding: "10%",
          alignItems: "center",
        }}
      >
        <img
          src={MachinePic}
          alt="machine-pic"
          style={{ height: "10vh" }}
        ></img>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          src={ReviewPic}
          alt="review-pic"
          style={{
            height: "15vh",
            width: "90%",
            objectFit: "contain",
            marginLeft: "5%",
          }}
        ></img>
        <img
          src={ReviewPic}
          alt="review-pic"
          style={{
            height: "15vh",
            width: "90%",
            objectFit: "contain",
            marginBottom: "2%",
            marginLeft: "5%",
          }}
        ></img>
      </div>
      <div>
        <p style={{ fontSize: "10px", padding: "2.5%", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          auctor malesuada hendrerit nec, porttitor nunc tristique. Egestas eget
          fermentum at eget nunc et nisi eu lorem.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "2vh",
          }}
        >
          <div
            style={{
              backgroundColor: " #FE8101",
              width: "25vw",
              paddingTop: "2%",
            }}
          >
            <p
              style={{
                textAlign: "center",
                border: "none",
                color: "white",
              }}
            >
              Dolor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

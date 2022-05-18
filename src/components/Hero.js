import React from "react";
import heroSmallPic from "../images/IMG_9806.jpg";
import formPic from "../images/Group 5846.png";
import reviewPic from "../images/Group 5910.svg";
import bannerPic from "../images/Banner Image.png";
import path from "../images/Path.png";

export default function Hero() {
  return (
    <div>
      <section id="hero-section" style={{}}>
        <div
          style={{
            padding: "7%",
            display: "flex",
            justifyContent: "space-between",
          }}
          id="hero-div"
        >
          <div style={{ width: "35vw", marginLeft: "5%" }} id="hero-div-text">
            <h1
              style={{ color: "white", marginBottom: "5vh", fontSize: "40px" }}
            >
              Dui Augue Aectus In Ut At Lorem
            </h1>
            <p style={{ color: "white", lineHeight: "30px", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
              aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
              bibendum et in mattis nec duis nec, magna. Nunc, mattis purus
              dolor risus commodo. Tempus molestie morbi ultrices nunc.
              <span style={{ backgroundColor: "#FFE600", color: "black" }}>
                Semper nam ridiculus duis bibendum risus, arcu arcu.
              </span>
            </p>
            <p style={{ color: "white", fontSize: "16px", lineHeight: "30px" }}>
              Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
              condimentum posuere cursus quis risus. Mauris, auctor ridiculus
              blandit lacus.<span></span> Porttitor diam a amet pharetra tellus,
              senectus augue. Id sed a quis morbi ac odio cursus metus sit.
              Sapien ut non eu non egestas non mauris. Elit, scelerisque mauris
              aenean justo.
            </p>
            <div id="video-player">
              <div
                id="video-player-btn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={path}
                  alt="path"
                  style={{
                    height: "40px",
                    marginRight: "43%",
                    marginBottom: "25%",
                  }}
                />
              </div>
            </div>
            {/* <img
              src={heroSmallPic}
              alt="smallpic"
              style={{ maxHeight: "230px", borderRadius: "35px" }}
            /> */}
          </div>
          <div>
            <div style={{ padding: "2%" }} id="form-div">
              <form
                style={{
                  background: "white",
                  minHeight: "35vh",
                  minWidth: "40vw",
                  maxWidth: "50vw",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div>
                  <h3
                    style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      borderBottomLeftRadius: "30px",
                    }}
                  >
                    Dictumst dui egestas.
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <h5>First Name</h5>
                    <input style={{ marginRight: "10px" }}></input>
                  </div>
                  <div>
                    <h5>Last Name</h5>
                    <input></input>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <h5>Email Address </h5>
                    <input style={{ marginRight: "10px" }}></input>
                  </div>
                  <div>
                    <h5>Phone Number</h5>
                    <input></input>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <input style={{ width: "20vw" }} id="bottom-input"></input>
                </div>
                <div
                  style={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    id="form-btn"
                    style={{
                      width: "20vw",
                      height: "4vh",
                      backgroundColor: "",
                    }}
                  >
                    <p style={{ textAlign: "center", paddingTop: "5px" }}>
                      {" "}
                      Et nibh lacus elit.
                    </p>
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={formPic}
                    alt="formpic"
                    style={{ height: "8vh" }}
                  ></img>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={reviewPic}
                    alt="formpic"
                    style={{ maxHeight: "10vh" }}
                  ></img>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      width: "20vw",
                      lineHeight: "12px",
                    }}
                    id="form-p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer risus, faucibus sit viverra cras aliquam parturient.
                    Interdum amet imperdiet sit feugiat donec. Proin.
                  </p>
                </div>
              </form>
            </div>
            <div
              style={{ width: "95vw", marginLeft: "5%" }}
              id="hero-div-text-mobile"
            >
              <div id="video-player-mobile">
                <div
                  id="video-player-btn"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "scale(.8)",
                  }}
                >
                  <img
                    src={path}
                    alt="path"
                    style={{
                      height: "40px",
                      marginRight: "43%",
                      marginBottom: "25%",
                    }}
                  />
                </div>
              </div>
              <p
                style={{ color: "white", lineHeight: "30px", fontSize: "16px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                nec aenean leo pulvinar morbi pulvinar sagittis, hac massa.
                Vulputate bibendum et in mattis nec duis nec, magna. Nunc,
                mattis purus dolor risus commodo. Tempus molestie morbi ultrices
                nunc.
                <span style={{ backgroundColor: "#FFE600", color: "black" }}>
                  Semper nam ridiculus duis bibendum risus, arcu arcu.
                </span>
              </p>
              <p
                style={{ color: "white", fontSize: "16px", lineHeight: "30px" }}
              >
                Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
                condimentum posuere cursus quis risus. Mauris, auctor ridiculus
                blandit lacus.<span></span> Porttitor diam a amet pharetra
                tellus, senectus augue. Id sed a quis morbi ac odio cursus metus
                sit. Sapien ut non eu non egestas non mauris. Elit, scelerisque
                mauris aenean justo.
              </p>

              {/* <img
              src={heroSmallPic}
              alt="smallpic"
              style={{ maxHeight: "230px", borderRadius: "35px" }}
            /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

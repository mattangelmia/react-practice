import React from "react";
import path from "../images/Path.png";

export default function VideoModal(props) {
  return (
    <div id="video-popup-1" style={{ display: props.display }}>
      <div id="video-player">
        <div
          id="video-player-btn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={props.showModal}
        >
          <p
            style={{ color: "white" }}
            onClick={props.hideModal}
            id="modal-close-btn"
          >
            x
          </p>
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
    </div>
  );
}

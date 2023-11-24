import React from "react";
import "./FrontCover.css";

function FrontCover() {
  return (
    <div className="front-cover-main-container">
      <div className="front-cover-container">
        <img
          src={process.env.PUBLIC_URL + "/couv-flou.jpg"}
          className="frontPic"
          alt="Front Cover"
        />
        <h1 className="title">
          L’expression de soi, par l’improvisation théâtrale.
        </h1>
      </div>
      <div className="bottom-image-container">
        <img
          src={process.env.PUBLIC_URL + "/ampoule.jpg"}
          className="LightPic"
          alt="Front Light"
        />
      </div>
    </div>
  );
}

export default FrontCover;

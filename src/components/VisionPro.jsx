import React from "react";
import "../css/visionpro.css";
import VisionProLogo from "../assets/visionpro_logo.png";

export default function VisionPro() {
  return (
    <div className="container-visionpro">
      <div className="description-visionpro">
        <img src={VisionProLogo} alt="VisionProLogo" />
        <h3>
          Welcome to the era of
          <br />
          spatial computing.
        </h3>
        <p>
          Pre-order starting 1.19 at 5:00 a.m. PT
          <br />
          Available starting 2.2
        </p>
        <div className="link">
          <a href="/apple-vision-pro/">Learn more</a>
          <i className="gg-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

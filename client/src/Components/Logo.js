import React from "react";
import Fade from "react-reveal/Fade";

export default function Logo() {
  return (
    <Fade right cascade>
      <div className="image-section">
        <img src="https://i.imgur.com/zXsKBiG.png" className="logo" />
      </div>
    </Fade>
  )
}
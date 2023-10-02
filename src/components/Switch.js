import React, { useContext, useEffect, useRef } from "react";
import useSound from "use-sound";
import RotateContext from "../Context/RotateContext";
import "../styles/Switch.css";
import music from "../assets/BeforeYouGo.mp3";

export const Switch = (data) => {
  const { handleRotate } = useContext(RotateContext);
  const [play, { pause }] = useSound(music, { volume: 0.1 });

  const handleSound = (e) => {
    if (!e.target.checked) {
      play();
    } else {
      pause();
    }
  };

  return (
    <div className="switch-box">
      <div className="switch">
        <input type="checkbox" id={data} onChange={handleSound} />
        <label htmlFor={data}>
          <div className="circle"></div>
          <div className="sticker">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </div>

      <div className="switch">
        <input type="checkbox" id="switch-1" onChange={handleRotate} />
        <label htmlFor="switch-1">
          <div className="circle"></div>
          <div className="circle circle-1">
            <div className="circle-secondary"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

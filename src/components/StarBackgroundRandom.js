import React, { useEffect, useState } from "react";
import RotateContext from "../Context/RotateContext";
import { randomIntBetween } from "../helpers/helperBackground";
import useWindowsDimensions from "../Hooks/useWindowsDimensions";
import { StarElement } from "./StarElement";

const initialState = [];
const STARS = 100;
const colors = [
  "rgb(175, 251, 253)",
  "rgb(250, 243, 153)",
  "rgb(245, 136, 121)",
];

export const StarBackgroundRandom = () => {
  const [stars, setStars] = useState(initialState);

  const createStars = (numStars) => {
    for (let i = 0; i < numStars; i++) {
      let size = parseInt(Math.random() * 4);
      let color = colors[parseInt(Math.random() * 2)];

      let star = {
        top: parseInt(Math.random() * 100) + "%",
        left: parseInt(Math.random() * 100) + "%",
        width: size + "px",
        height: size + "px",
        backgroundColor: color,
        boxShadow: "0 0 " + Math.random() * 50 + "px" + color,
      };
      setStars((stars) => [...stars, star]);
    }
  };

  let handleMotion = () => {
    const newPosition = stars.map((star) => {
      return {
        ...star,
        top: parseInt(Math.random() * 100) + "%",
        left: parseInt(Math.random() * 100) + "%",
      };
    });
    setStars(newPosition);
  };

  useEffect(() => {
    // console.log(starRef.current);
    createStars(STARS);
  }, []);

  setTimeout(() => {
    handleMotion();
  }, 1);

  // setInterval(() => {
  //   handleMotion();
  // }, 2);
  // useEffect(() => {
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleMotion();
  //   }, 1);

  //   setInterval(() => {
  //     handleMotion();
  //   }, 100000);
  // }, [stars]);

  return (
    <div className="starsBox">
      {stars.map((el, index) => (
        <StarElement data={el} key={index} />
      ))}
    </div>
  );
};

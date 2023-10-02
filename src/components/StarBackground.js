import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import RotateContext from "../Context/RotateContext";
import { randomIntBetween } from "../helpers/helperBackground";
import useWindowsDimensions from "../Hooks/useWindowsDimensions";
import { StarElement } from "./StarElement";

const initialState = [];
const initialState1 = [];
const colors = [
  "rgb(175, 251, 253)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
  "rgb(250, 243, 153)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
  "rgb(245, 136, 121)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0)",
];

export const StarBackground = () => {
  const [container, setContainer] = useState({});
  const [stars, setStars] = useState(initialState);
  const [stars1, setStars1] = useState(initialState1);
  const [rotate, setRotate] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState(
    useWindowsDimensions()
  );

  const { height, width } = windowDimensions;
  const { rotation, setRotation } = useContext(RotateContext);

  const layout = () => {
    let $body = document.body.style;
    let newSize = Math.max(width, height) * 1.5;

    $body.height = height + "px";

    let container = {
      width: newSize + "px",
      height: newSize + "px",
    };

    setContainer(container);
  };

  const createStars = (numStars) => {
    let $container = document.getElementById("starField");
    let w = $container.clientWidth,
      h = $container.clientWidth;

    for (let i = 0; i < numStars; i++) {
      let size = randomIntBetween(1, 2),
        color = randomIntBetween(1, 11),
        x = Math.min(randomIntBetween(1, w), w - size - 5),
        y = Math.min(randomIntBetween(1, h), h - size - 5);

      let star = {
        top: y + "px",
        left: x + "px",
        width: size + "px",
        height: size + "px",
      };

      let star1 = {
        top: y - 10 + "px",
        left: x - 10 + "px",
        width: size + 20 + "px",
        height: size + 20 + "px",
        backgroundColor: `${colors[color - 1]}`,
      };
      setStars((stars) => [...stars, star]);
      setStars1((stars1) => [...stars1, star1]);
    }
  };

  // const handleResize = () => {
  //   setRotation("");
  //   setStars(initialState);

  //   layout();
  //   createStars(0);
  //   setRotation("rotateL2R");
  // };

  // useLayoutEffect(() => {
  //   layout();

  //   setTimeout(() => {
  //     createStars(300);
  //   }, 300);
  // }, []);
  useEffect(() => {
    layout();

    setTimeout(() => {
      createStars(500);
    }, 300);
  }, []);

  // window.addEventListener("resize", handleResize);
  return (
    <>
      <div className="starfield-container">
        <div id="starField" style={container} className={rotation}>
          {stars.map((el, index) => (
            <StarElement data={el} dataName={"star"} key={index} />
          ))}
          {stars1.map((el, index) => (
            <StarElement data={el} dataName={"star1"} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

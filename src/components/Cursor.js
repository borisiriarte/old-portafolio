import React, { useEffect, useRef, useState } from "react";
import "../styles/Cursor.css";

export const Cursor = () => {
  const [cursor, setCursor] = useState({});
  const [cursorStyle, setCursorStyle] = useState(null);

  const cursorPosition = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursor({ left: x, top: y });
  };

  const mouseOver = (e) => {
    if (e.target.className.includes("hover-me")) {
      setCursorStyle("hover");
    } else {
      setCursorStyle("");
    }
  };

  document.body.addEventListener("mousemove", cursorPosition);
  document.body.addEventListener("mouseover", mouseOver);

  return (
    <>
      <div className="cursor" id="cursor" style={cursor}></div>
      <div
        className={`cursor2 ${cursorStyle}`}
        id="cursor2"
        style={cursor}
      ></div>
    </>
  );
};

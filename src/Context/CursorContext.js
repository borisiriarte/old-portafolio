import { createContext, useState } from "react";

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [style, setStyle] = useState(null);
  const over = (b) => b.addEventListener("mouseover", mouseOver);
  const out = (b) => b.addEventListener("mouseout", mouseOut);
  const mouseOver = (e) => {
    setStyle("hover");
  };

  const mouseOut = (e) => {
    setStyle("");
  };

  const data = {
    style,
    over,
    out,
  };

  return (
    <CursorContext.Provider value={data}>{children}</CursorContext.Provider>
  );
};

export { CursorProvider };
export default CursorContext;

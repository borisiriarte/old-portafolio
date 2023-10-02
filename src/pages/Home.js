import React from "react";

export const Home = ({ data }) => {
  return (
    <div className={`home ${data}`}>
      <h1 className="hover-me">
        BORI<span className="l-letter hover-me">S</span> IRIART
        <span className="l-letter hover-me">E</span>
      </h1>
      <h3>
        DESARROLLADOR FRONT-EN<span className="l-letter">D</span>
      </h3>
    </div>
  );
};

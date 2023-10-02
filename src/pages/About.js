import React from "react";

export const About = ({ data }) => {
  return (
    <div className={`about ${data}`}>
      <div className="about-container">
        <div className="cage1">
          <h2>
            Abou<span className="l-letter">t</span>
          </h2>
        </div>
        <p>
          Soy un desarrollador web autodidacta que reside en Bolivia.
          <br />
          Desde mediados del año 2022 he venido aprendiendo diferentes
          tecnologias relacionadas al diseño web.
          <br />
          Me encanta poder diseñar y poder darle funcionalidad a una página web.
        </p>
      </div>
    </div>
  );
};

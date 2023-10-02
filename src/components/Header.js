import React from "react";
import { Link } from "react-router-dom";
import { NavRouter } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <div className="inner-header">
        <Link to="/">
          <h1 className="hover-me">
            BORI<span className="l-letter hover-me">S</span>
          </h1>
        </Link>

        <NavRouter />
      </div>
    </header>
  );
};

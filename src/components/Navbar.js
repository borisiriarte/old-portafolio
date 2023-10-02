import { Link } from "react-router-dom";

import React from "react";
import { HamburguerMenu } from "./HamburguerMenu";

export const NavRouter = () => {
  return (
    <nav className="navbar hover-me">
      <HamburguerMenu />
      <ol className="navbar-container">
        <li className="hover-me">
          <Link to="/" className="hover-me">
            Home
          </Link>
          <Link to="/about" className="hover-me">
            About
          </Link>
          <Link to="/projects" className="hover-me">
            Projects
          </Link>
          <Link to="/contact" className="hover-me">
            Contact
          </Link>
        </li>
      </ol>
    </nav>
  );
};

import React from "react";

export const HamburguerMenu = () => {
  return (
    <>
      <label htmlFor="nav-hamburger">&#9776;</label>
      <input type="checkbox" id="nav-hamburger" />
    </>
  );
};

// <!-- (A) MENU WRAPPER -->
// <nav id="hamnav">
//   <!-- (B) THE HAMBURGER -->
//   <label for="hamburger">&#9776;</label>
//   <input type="checkbox" id="hamburger"/>

//   <!-- (C) MENU ITEMS -->
//   <div id="hamitems">
//     <a href="a.html">First</a>
//     <a href="b.html">Second</a>
//     <a href="c.html">Third</a>
//     <a href="d.html">Forth</a>
//   </div>
// </nav>

import { useEffect, useState } from "react";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Error404 } from "../pages/Error404";

export const MyRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStorage, setTransitionStorage] = useState("unblur");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStorage("unblur");
    setDisplayLocation(location);
  }, [location]);

  return (
    <div>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home data={transitionStorage} />} />
        <Route path="/about" element={<About data={transitionStorage} />} />
        <Route
          path="/projects"
          element={<Projects data={transitionStorage} />}
        />
        <Route path="/contact" element={<Contact data={transitionStorage} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

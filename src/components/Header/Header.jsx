import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  //Unauthenticate
  const alwaysShows = (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
  return (
    <nav>
      <div className="header-container">
        <div className="message">
          <h1>Hello Friend</h1>
        </div>
        <div className="nav-links pad">{alwaysShows}</div>
      </div>
    </nav>
  );
}

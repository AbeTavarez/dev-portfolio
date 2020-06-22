import React from "react";

import "./Landing.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="split left">
      <div className="centered">
        <img
          src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
          alt="avatar"
          className="ninja-img"
        />
        <h3>Welcome</h3>
        <div className="home-transition">
          <NavLink to="/home">Enter</NavLink>
        </div>
      </div>

      <div>
        <div className="split right">
          <div className="centered">
            <img
              src="https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png"
              alt="avatar"
              className="ninja-img"
            />
            <h1>My sites</h1>
            <h1>My sites</h1>
            <h1>My sites</h1>
            <h1>My sites</h1>
            <h1>My sites</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Layout from "../../shared/Layout";

import "./Landing.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="split left">
      <div className="centered">
        <h3>Welcome</h3>
        <NavLink to="/home">Enter</NavLink>
      </div>
      <div>
        <div className="split right">
          <div className="centered">
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

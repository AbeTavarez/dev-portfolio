import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";

import "./Main.css";

export default function Main() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route exact path="/home" component={() => <Home />} />
        <Route path="/about" component={() => <About />} />
        <Route path="/projects" component={() => <Projects />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route path="/contact" component={() => <Contact />} />
      </Switch>
    </Route>
  );
}

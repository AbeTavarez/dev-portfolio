import React from "react";
import { Route, Switch } from "react-router-dom";

// import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
// import Contact from "../pages/Contact/Contact";
import OpenSource from "../pages/OpenSource/OpenSource";

import "./Main.css";
import underConstruction from "../shared/underConstruction";

export default function Main() {
  return (
    <Route>
      <Switch>
        {/* <Route exact path="/" component={() => <Landing />} /> */}
        <Route exact path="/" component={() => <Home />} />
        <Route path="/projects" component={() => <Projects />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route path="/services" component={() => <Resume />} />
        <Route path="/opensource" component={() => <OpenSource />} />
        {/* <Route path="/services" component={() => <Services />} /> */}
      </Switch>
    </Route>
  );
}

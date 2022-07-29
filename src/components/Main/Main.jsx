import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";

// import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";
// import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services.jsx";
import LearnToCode from "../LearnToCode/LearnToCode";
import JavascriptCourse from "../JavascriptCourse/JavascriptCourse";

import "./Main.css";
import underConstruction from "../shared/underConstruction";

//* Google Analytics 
import ReactGA, { pageview } from 'react-ga';
ReactGA.initialize('G-NKMV7EFHDN')

export default function Main({pageViews}) {

  useEffect (() => {
    ReactGA.pageview(window.location.pathname);
    // pageViews();
  })

  return (
    <Route>
      <Switch>
        {/* <Route exact path="/" component={() => <Landing />} /> */}
        <Route exact path="/" component={() => <Home />} />
        <Route path="/projects" component={() => <Projects />} />
        <Route path="/resume" component={() => <Resume />} />
        <Route path="/services" component={() => <Services />} />
        <Route path="/learntocode" component={() => <LearnToCode />} />
        <Route path="/JavaScriptBeginners" component={() => <JavascriptCourse />} />
      </Switch>
    </Route>
  );
}

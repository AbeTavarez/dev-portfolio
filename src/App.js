import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Footer from "./components/Footer/Footer";

import ReactGA, { pageview } from 'react-ga';
ReactGA.initialize('G-NKMV7EFHDN' )

function App() {

  const pageViewstracking = props => {
    const pathname = props.match.path;

    let pageView;
    if (pathname === '*') pageView = '/not-found';
    else pageview = pathname
    // sending GA page view
    ReactGA.pageview(pageView)
  }



  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

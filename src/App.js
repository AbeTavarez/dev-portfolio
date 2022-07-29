import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Footer from "../Footer/Footer";
import "../shared/Layout";

export default function Layout(props) {
  return (
    <div>
      <div className="layout">
        <div className="layout-children">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
}

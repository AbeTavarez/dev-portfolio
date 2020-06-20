import React from "react";

import "../shared/Layout";

export default function Layout(props) {
  return (
    <div>
      <div className="layout">
        <div className="layout-children">{props.children}</div>
      </div>
    </div>
  );
}

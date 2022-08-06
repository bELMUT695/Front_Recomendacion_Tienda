import React from "react";
import Header from "../components/NavbarMen";
const LayoutMen = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export default LayoutMen;

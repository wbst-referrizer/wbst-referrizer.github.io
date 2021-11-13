import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-wrapper">
      <Header />

      <div className="content">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-300  min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

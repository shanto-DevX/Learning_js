import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Layout = () => {
  return (
    <div className="flex flex-col h-lvh justify-between items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className=" bg-emerald-600">
      <div className=" container mx-auto py-4">
        <div className="menu flex items-center justify-between">
          <Menu />
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

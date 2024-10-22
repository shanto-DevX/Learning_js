import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="menu flex items-center gap-10">
        <a href="#" className="text-xl  text-white font-medium">
          Home
        </a>
        <a href="#" className="text-xl  text-white font-medium">
          About
        </a>
        <a href="#" className="text-xl  text-white font-medium">
          Service
        </a>
        <a href="#" className="text-xl  text-white font-medium">
          Portfolio
        </a>
        <a href="#" className="text-xl  text-white font-medium">
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;

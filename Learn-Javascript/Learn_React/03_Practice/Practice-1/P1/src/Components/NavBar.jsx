import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="menu ">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="menus">
            <Link className="menu-item" to={"/"}>
              Home
            </Link>
            <Link className="menu-item" to={"/About"}>
              About
            </Link>
            <Link className="menu-item" to={"/Service"}>
              Service
            </Link>
            <Link className="menu-item" to={"/Blog"}>
              Blog
            </Link>
            <Link className="menu-item" to={"/Contact"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

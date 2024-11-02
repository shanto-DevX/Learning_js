import React from "react";
import { Link } from "react-router-dom";

const HeadersNav = () => {
  return (
    /*     <div>
      <div className=" bg-emerald-600 text-white py-4 px-6">
        <div className="nav flex justify-between items-center">
          <div className="logo text-xl font-bold">
            <a href="#">Learn React | No Relode</a>
          </div>
          <div className="menu flex gap-5 font-bold">
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/product"> Product</Link>
            <Link to="/contact"> Contact</Link>
          </div>
        </div>
      </div>
      <div className=" bg-red-600 text-white py-4 px-6 my-5">
        <div className="nav flex justify-between items-center">
          <div className="logo text-xl font-bold">
            <a href="#">Learn React | Page Relode</a>
          </div>
          <div className="menu flex gap-5 font-bold">
            <a href="/"> Home </a>
            <a href="/about"> About</a>
            <a href="/product"> Product</a>
            <a href="/contact"> Contact</a>
          </div>
        </div>
      </div>
    </div> */
    <div>
      <div className="container mx-auto py-5 bg-emerald-500 px-5 text-white">
        <div className="nav flex justify-between align-items-center">
          <div className="nav font-bold ">
            <Link to="/">Learn React</Link>
          </div>
          <div className="menu flex gap-5 font-bold">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadersNav;

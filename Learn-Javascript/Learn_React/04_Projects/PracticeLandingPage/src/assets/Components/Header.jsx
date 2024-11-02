import React from "react";
import logo from "../image/Logo_RP.png";
const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="header flex align-center justify-between py-7 bg-[#e5e5e583] px-5 mt-7 rounded-full shadow-lg shadow-[#8E8E8E]/50">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" className="" />
            </a>
          </div>
          <div className="menu flex gap-8 ">
            <a
              href="#"
              className=" font-[600] text-[#242222] hover:text-[#146EF5] hover:transition-all duration-500 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className=" font-[600] text-[#242222] hover:text-[#146EF5] hover:transition-all duration-500 ease-in-out"
            >
              About
            </a>
            <a
              href="#"
              className=" font-[600] text-[#242222] hover:text-[#146EF5] hover:transition-all duration-500 ease-in-out"
            >
              Features
            </a>
            <a
              href="#"
              className=" font-[600] text-[#242222] hover:text-[#146EF5] hover:transition-all duration-500 ease-in-out"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-[600] text-[#242222]  hover:text-[#146EF5] hover:transition-all duration-500 ease-in-out"
            >
              Contact
            </a>
          </div>
          <div className="btn">
            <a
              href="#"
              className="bg-[#146EF5] py-4 px-5 rounded-full text-white font-[600] hover:bg-[#242222] hover:transition-bg duration-500 ease-in-out"
            >
              Check Price
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

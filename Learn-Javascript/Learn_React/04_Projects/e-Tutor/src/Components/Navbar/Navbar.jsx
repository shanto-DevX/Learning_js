import React from "react";
import { NavbarMenu } from "../../mocData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  /*
   * https://react-icons.github.io/react-icons/
   * https://www.framer.com/motion/
   */
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center font-bold">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>
          {/* Menu section */}
          <div className="hiddne lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href="{iten.link}"
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

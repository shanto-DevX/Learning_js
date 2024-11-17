import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center w-lvw bg-gray-200 py-4 px-80">
      <div>Logo</div>
      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } text-xl font-bold`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } text-xl font-bold`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } text-xl font-bold`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>This is menu</h1>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item "
            }
            to="/product/10/soap"
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item "
            }
            to="/profile/helloShanto/Shanto"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

# Note of this projects

---

## ✨ File Structre

#### 📝 Note

---

## ✨ Create Navbar

#### 📝 Note

- Install React Router DOM

```jsx
1️⃣ main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Shop from "./pages/shop/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

```

```jsx
2️⃣ app.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;


```

##### 📝 Note

- app.jsx এর বদলে অন্য ফাইলেও Outlet লেখা যাবে

```jsx
3️⃣ navbar.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";

// Store Nav List
const navItemList = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

// Craete NavItems
const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItemList.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary text-bold" : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <header>
      <nav className=" max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <Link to="/" className="font-bold">
          Logo
        </Link>
        {/* Desktop Menu */}
        <div className="menu hidden md:flex">
          <NavItems />
        </div>
        {/* cart icon */}
        <div>Cart</div>
      </nav>
    </header>
  );
};

export default Navbar;

```

##### 📝 Note

- এই ফাইলের মধ্যে প্রথমে মেনু আইটেম গুলো array তে নেওইয়া হইছে। `navItemList`
- এবার এই আইটেম গুলোতে লুপ এর ব্যবহার করে আইটেম গুলো মেনু তে এড করা হছে।

---

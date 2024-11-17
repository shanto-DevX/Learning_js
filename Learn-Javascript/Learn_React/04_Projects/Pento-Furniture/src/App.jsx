import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      {/* 
      <h1 className="font-primary text-red-900 font-bold mx-auto w-full">
        Hello World Figma to React
      </h1> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;

import React, { useContext } from "react";
import { DataContext } from "../Context/UserContext";

const Hero = () => {
  const userNameIs = useContext(DataContext);
  return (
    <div>
      <h1>Hero Section {userNameIs}</h1>
    </div>
  );
};

export default Hero;

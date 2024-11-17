import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="container mx-auto">
      <div className="bg-gray-500 text-white text-3xl">User: {userid} </div>
    </div>
  );
};

export default User;

import React from "react";

const P_Cards = (e) => {
  return (
    <div>
      <div className="bg-white py-8 px-8 rounded-lg">
        <img
          className="w-32 h-32 rounded-full mb-6 border"
          src={e.img}
          alt=""
        />
        <h1 className="text-3xl font-medium mb-2">Name : {e.name}</h1>
        <h1 className="text-3xl font-medium mb-2">City : {e.city} </h1>
        <h1 className="text-3xl font-medium mb-2">Profetion : {e.prof} </h1>
      </div>
    </div>
  );
};

export default P_Cards;

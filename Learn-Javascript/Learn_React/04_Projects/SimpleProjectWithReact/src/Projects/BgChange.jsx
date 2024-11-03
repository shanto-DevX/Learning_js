import React, { useState } from "react";

const BgChange = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      <div className="buttonList h-lvh flex items-end justify-center pb-8">
        <button
          onClick={() => {
            setColor("black");
          }}
          className="bg-black border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="bg-green-700 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="bg-blue-700 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
          className="bg-red-700 border-2 border-blue-700 text-white py-5 px-10 rounded-full"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="bg-yellow-500 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          yellow
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
          className="bg-pink-700 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          pink
        </button>
        <button
          onClick={() => {
            setColor("teal");
          }}
          className="bg-teal-600 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          teal
        </button>
      </div>
    </div>
  );
};

export default BgChange;

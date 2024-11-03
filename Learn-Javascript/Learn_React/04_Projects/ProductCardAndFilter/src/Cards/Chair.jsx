import React from "react";

import Chair1 from "../assets/image/chair-1.png";
import Chair2 from "../assets/image/chair-2.png";
import Chair3 from "../assets/image/chair-3.png";
import Chair4 from "../assets/image/chair-4.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const Chair = () => {
  return (
    <div>
      <div className="card-item rounded-lg w-3/12 h-3/4 bg-white shadow-md">
        <img
          src={Chair1}
          className=" w-full h-64 object-cover mx-auto bg-gray-100"
          alt=""
        />
        <div className="card-content p-4">
          <p className="text-xl text-gray-500 capitalize">chair</p>
          <h2 className="text-2xl text-gray-700 font-bold capitalize">
            Luxury Chair
          </h2>
          <div className="starIcon flex gap-2 py-3 ">
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStarHalf className="text-xl text-yellow-500" />
          </div>
          <div className="price flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-700 ">$499</p>
            <a
              href="#"
              className="bg-gray-700 h-10 w-10 flex  pt-1 justify-center text-white rounded-full text-xl hover:bg-orange-500"
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="card-item rounded-lg w-3/12 h-3/4 bg-white shadow-md">
        <img
          src={Chair2}
          className=" w-full h-64 object-cover mx-auto bg-gray-100"
          alt=""
        />
        <div className="card-content p-4">
          <p className="text-xl text-gray-500 capitalize">chair</p>
          <h2 className="text-2xl text-gray-700 font-bold capitalize">
            Luxury Chair
          </h2>
          <div className="starIcon flex gap-2 py-3 ">
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStarHalf className="text-xl text-yellow-500" />
          </div>
          <div className="price flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-700 ">$499</p>
            <a
              href="#"
              className="bg-gray-700 h-10 w-10 flex  pt-1 justify-center text-white rounded-full text-xl hover:bg-orange-500"
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="card-item rounded-lg w-3/12 h-3/4 bg-white shadow-md">
        <img
          src={Chair3}
          className=" w-full h-64 object-cover mx-auto bg-gray-100"
          alt=""
        />
        <div className="card-content p-4">
          <p className="text-xl text-gray-500 capitalize">chair</p>
          <h2 className="text-2xl text-gray-700 font-bold capitalize">
            Luxury Chair
          </h2>
          <div className="starIcon flex gap-2 py-3 ">
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStarHalf className="text-xl text-yellow-500" />
          </div>
          <div className="price flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-700 ">$499</p>
            <a
              href="#"
              className="bg-gray-700 h-10 w-10 flex  pt-1 justify-center text-white rounded-full text-xl hover:bg-orange-500"
            >
              +
            </a>
          </div>
        </div>
      </div>
      <div className="card-item rounded-lg w-3/12 h-3/4 bg-white shadow-md">
        <img
          src={Chair4}
          className=" w-full h-64 object-cover mx-auto bg-gray-100"
          alt=""
        />
        <div className="card-content p-4">
          <p className="text-xl text-gray-500 capitalize">chair</p>
          <h2 className="text-2xl text-gray-700 font-bold capitalize">
            Luxury Chair
          </h2>
          <div className="starIcon flex gap-2 py-3 ">
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStar className="text-xl text-yellow-500" />
            <FaStarHalf className="text-xl text-yellow-500" />
          </div>
          <div className="price flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-700 ">$499</p>
            <a
              href="#"
              className="bg-gray-700 h-10 w-10 flex  pt-1 justify-center text-white rounded-full text-xl hover:bg-orange-500"
            >
              +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chair;

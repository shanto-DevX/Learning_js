import React from "react";
import sofa1 from "../assets/image/sofa-1.png";
import sofa2 from "../assets/image/sofa-2.png";
import sofa3 from "../assets/image/sofa-3.png";
import sofa4 from "../assets/image/sofa-4.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const ProductPage = () => {
  return (
    <div className="h-lvh w-full bg-gray-200 flex justify-center items-top">
      <div className="container mx-auto mt-24">
        <div className="product-wrapper bg-white p-24 rounded-xl ">
          <div className="productTitle text-center">
            <h1 className="text-3xl font-bold text-gray-700">
              Best Selling Product
            </h1>
            <div className="productList bg-slate-100  shadow-md inline-block py-6 px-2 mt-5 rounded-full">
              <a
                href="#"
                className="text-xl capitalize px-12 bg-white mx-2 py-3 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors active:bg-orange-600 active:text-white"
              >
                Chair
              </a>
              <a
                href="#"
                className="text-xl capitalize px-12 bg-white mx-2 py-3 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors active:bg-orange-600 active:text-white"
              >
                Bed
              </a>
              <a
                href="#"
                className="text-xl capitalize px-12 bg-white mx-2 py-3 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors active:bg-orange-600 active:text-white"
              >
                Sofa
              </a>
              <a
                href="#"
                className="text-xl capitalize px-12 bg-white mx-2 py-3 rounded-full border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors active:bg-orange-600 active:text-white"
              >
                Lamp
              </a>
            </div>
          </div>
          <div className="cardSection flex justify-between gap-6 mt-14">
            <div className="card-item rounded-lg w-3/12 h-3/4 bg-white shadow-md">
              <img
                src={sofa1}
                className=" w-full h-64 object-cover mx-auto bg-gray-100"
                alt=""
              />
              <div className="card-content p-4">
                <p className="text-xl text-gray-500 capitalize">sofa</p>
                <h2 className="text-2xl text-gray-700 font-bold capitalize">
                  Luxury Sofa
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
                src={sofa2}
                className=" w-full h-64 object-cover mx-auto bg-gray-100"
                alt=""
              />
              <div className="card-content p-4">
                <p className="text-xl text-gray-500 capitalize">sofa</p>
                <h2 className="text-2xl text-gray-700 font-bold capitalize">
                  Luxury Sofa
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
                src={sofa3}
                className=" w-full h-64 object-cover mx-auto bg-gray-100"
                alt=""
              />
              <div className="card-content p-4">
                <p className="text-xl text-gray-500 capitalize">sofa</p>
                <h2 className="text-2xl text-gray-700 font-bold capitalize">
                  Luxury Sofa
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
                src={sofa4}
                className=" w-full h-64 object-cover mx-auto bg-gray-100"
                alt=""
              />
              <div className="card-content p-4">
                <p className="text-xl text-gray-500 capitalize">sofa</p>
                <h2 className="text-2xl text-gray-700 font-bold capitalize">
                  Luxury Sofa
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
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

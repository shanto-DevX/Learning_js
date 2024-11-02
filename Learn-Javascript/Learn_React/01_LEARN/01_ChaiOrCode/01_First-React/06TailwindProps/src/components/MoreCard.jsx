import React from "react";

// const MoreCard = (props) => { 1st step to get dat from oBJ
const MoreCard = ({ data }) => {
  return (
    <div>
      <div className="">
        <div className="card m-5 bg-gray-100 p-4 rounded text-gray-700">
          <img
            className="w-full h-auto max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover"
            src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="des my-3">
            <h2 className="font-bold text-3xl capitalize">
              {/* Saiful Islam Shanto */}
              {/* {props.nameIs} */}
              {/* {props.data.nameIs}1st step to get dat from oBJ */}
              {data.nameIs}
            </h2>
            <p className="font-medium text-xl">
              {/* Web DEsign & Devloper */}
              {/* {props.desIs} */}
              {/* {props.data.desIs} 1st step to get dat from oBJ*/}
              {data.desIs}
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            deleniti, labore animi repudiandae esse molestiae?
          </p>
          <button className="bg-red-800 px-4 py-3 rounded-xl mt-4 text-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;

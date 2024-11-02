import React from "react";

const Card = ({ data }) => {
  return (
    <div className="">
      <div className="card m-5 bg-gray-100 p-4 rounded text-gray-700">
        <img
          className="w-full h-auto max-w-md mx-auto sm:max-w-sm md:max-w-lg lg:max-w-xl object-cover"
          src={data.imgURL}
          alt=""
        />
        <div className="des my-3">
          <h2 className="font-bold text-3xl capitalize">{data.name}</h2>
          <p className="font-medium text-xl">{data.designation}</p>
        </div>
        <p>{data.pera}</p>
        <button className="bg-emerald-800 px-4 py-3 rounded-xl mt-4 text-white">
          {data.btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;

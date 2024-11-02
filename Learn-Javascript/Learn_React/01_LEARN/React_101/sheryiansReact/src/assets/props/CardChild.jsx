import React from "react";

const CardChild = (props) => {
  return (
    <div className="flex">
      <div className="bg-white text-black p-6  inline-block text-start rounded">
        <img className="h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
        <h1 className="text-2xl  font-semibold mb-4">
          Name : {props.userName}
        </h1>
        <h2 className="text-2xl mb-3">City : {props.city}</h2>
        <h2 className="text-2xl mb-3">profession : {props.prof}</h2>
        <button className="bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default CardChild;

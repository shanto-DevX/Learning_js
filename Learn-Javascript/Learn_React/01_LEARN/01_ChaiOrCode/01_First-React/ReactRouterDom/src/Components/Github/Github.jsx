import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  /*   const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/shanto-DevX")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []); */

  const data = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="text-left bg-gray-700 text0-whitee p-4 text-3xl font-medium text-white">
        <div className="flex justify-center gap-5 items-center">
          <img src={data.avatar_url} alt="" className="w-72" />
          <div>
            <h1> Id : {data.id}</h1>
            <h1> Name : {data.name}</h1>
            <h1> Followers : {data.followers}</h1>
            <h1> Location : {data.location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shanto-DevX");
  return response.json();
};

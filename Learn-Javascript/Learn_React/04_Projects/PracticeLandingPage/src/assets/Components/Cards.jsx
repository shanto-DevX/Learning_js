import React, { useEffect, useState } from "react";

import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=6"
    );

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-7 bg-slate-100 py-7">
      <div className="container mx-auto ">
        <div className="card-list flex items-center justify-between flex-wrap gap-x-2 gap-y-6  ">
          {data.map(function (elem, id) {
            return (
              <div
                key={id}
                className="card-item bg-white p-4 rounded-xl w-[32.5%]"
              >
                <img
                  src={elem.download_url}
                  alt=""
                  className="w-full h-64 mb-2 rounded-xl object-cover"
                />
                <p className="text-[1.25rem] py-1">ID : {elem.id}</p>
                <h2 className="font-bold text-3xl py-1">{elem.author}</h2>
                <p className="text-[1rem] ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam magni provident sit harum enim minima consectetur
                  voluptatum iusto, quasi, unde accusamus fugiat est ut
                  dignissimos!
                </p>
                <div className="btn">
                  <a
                    href={elem.url}
                    className="bg-[#146EF5] py-4 px-5 mt-3 rounded-xl text-white font-[600] inline-block hover:bg-[#242222] hover:text-[#fff] hover:transition-bg duration-500 ease-in-out"
                    target="_blank"
                  >
                    Check Price
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;

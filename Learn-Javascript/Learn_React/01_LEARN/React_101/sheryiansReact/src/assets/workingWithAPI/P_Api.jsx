import axios from "axios";
import React, { useState } from "react";

const P_Api = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=5"
    );
    setData(response.data);
    console.log(response.data);
  };
  return (
    <div>
      <div className="m-8">
        <button
          onClick={getData}
          className="w-80 bg-emerald-500 text-white text-2xl font-bold active:scale-90 py-4 rounded"
        >
          Get Data
        </button>
        <div className="bg-gray-900 my-5 p-2 flex flex-wrap">
          {data.map(function (e, id) {
            return (
              <div key={id} className="m-3 bg-white p-5 rounded w-96">
                <img
                  src={e.download_url}
                  alt=""
                  className="w-full rounded inline-block "
                />
                <h1 className="font-semibold">ID : {e.id}</h1>
                <h1 className="font-semibold">Author : {e.author}</h1>
                <h1 className="font-semibold">Url : {e.url}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default P_Api;

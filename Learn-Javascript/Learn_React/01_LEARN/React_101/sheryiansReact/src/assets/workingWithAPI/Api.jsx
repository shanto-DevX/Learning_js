import axios from "axios";
import { useState } from "react";
const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setData(response.data);
  };

  return (
    <div className="m-8">
      <h1 className="font-bold text-3xl mb-5">Working with api</h1>

      <div>
        <button
          onClick={getData}
          className="bg-emerald-500 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90"
        >
          Get Data
        </button>
        <div className="p-5 bg-gray-900 text-white my-5">
          <h1>Show Data</h1>
          {data.map(function (elm, idx) {
            return (
              <div key={idx} className="my-10">
                <img src={elm.download_url} alt="" className="w-80" />
                <h1>{elm.author}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Api;

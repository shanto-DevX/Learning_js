import { useEffect, useState } from "react";

const UseEffect = () => {
  /* useEffect(() => {
    console.log("হেলো রিয়েক্ট");
  }, [0, 1, 2, 3, 4]); */

  let [data, seTData] = useState();

  useEffect(() => {
    (async () => {
      let resp = await fetch("https://dummyjson.com/products/1");
      let json = await resp.json();
      seTData(json);
    })();
  }, []);

  /*   useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => seTData(json));
  }, []); */

  return (
    <div>
      <h1>Hello UseEffect</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default UseEffect;

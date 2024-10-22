import React, { useState } from "react";

const FunctionWithHooks = () => {
  /*   const [userName, ChangeName] = useState("Shanto246");
  const ChangeNameIs = () => {
    ChangeName("Shanto");
  }; */

  const [countNumber, setCount] = useState(0);
  let count = () => {
    setCount(countNumber + 1);
  };
  return (
    <div>
      <div>
        {/* <h1>User Name is {userName} </h1>
        <button onClick={ChangeNameIs}>Change User Name</button> */}

        <h1 className="count__num">Number Count is : {countNumber}</h1>
        <button onClick={count}>Increment</button>
        <button
          onClick={() => {
            setCount(countNumber - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default FunctionWithHooks;

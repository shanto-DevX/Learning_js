import React, { useState } from "react";

const TwoWayBinding = () => {
  // const [userName, setUser] = useState("Shanto");
  const [userName, setUser] = useState("");
  const formHandlar = (e) => {
    e.preventDefault();
    console.log(userName);
    setUser("");
  };
  return (
    <div>
      <form
        className="m-5"
        onSubmit={(e) => {
          formHandlar(e);
        }}
      >
        <input
          type="text"
          placeholder="Name"
          // value={userName}
          value={userName}
          onChange={(e) => {
            // console.log(e);
            // console.log(e.target);
            // console.log(e.target.value);
            setUser(e.target.value);
          }}
          className="bg-slate-100 p-4 w-1/2 rounded border-2 border-solid border-indigo-500"
        />
        <br />
        <button className="bg-slate-600 text-white rounded p-4 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TwoWayBinding;

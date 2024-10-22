import React, { useState } from "react";

const PracticeTwoWayBinding = () => {
  const [userName, SetUserName] = useState("");

  const formHendaling = (e) => {
    e.preventDefault();
    console.log(userName);
    SetUserName("");
  };
  return (
    <div>
      <div>
        <form
          className="m-5"
          onSubmit={(e) => {
            formHendaling(e);
          }}
        >
          <p>Two Way Binding From Hendaling</p>
          <input
            value={userName}
            onChange={(e) => {
              SetUserName(e.target.value);
            }}
            type="text"
            placeholder="Name"
            className="bg-slate-100 p-4 w-1/2 rounded border-2 border-solid border-indigo-500"
          />
          <br />
          <button className="bg-slate-600 text-white rounded p-4 mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PracticeTwoWayBinding;

import React from "react";

const FromHandeling = () => {
  const formHandeling = (e) => {
    e.preventDefault();
    console.log("Form SUbmited");
  };
  return (
    <div>
      <form onSubmit={formHandeling} className="m-5">
        <p>Form Hendaling</p>
        <input
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
  );
};

export default FromHandeling;

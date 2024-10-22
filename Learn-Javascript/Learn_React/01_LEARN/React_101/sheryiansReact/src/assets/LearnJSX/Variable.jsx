import React from "react";

const Variable = () => {
  const textIs = "Hello From JSX Variable";
  const learning = "React JSX";
  return (
    <div>
      <h1 className="text-5xl bg-pink-600 text-white">{textIs}</h1>
      <h1>{learning}</h1>
    </div>
  );
};

export default Variable;

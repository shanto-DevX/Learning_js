import React from "react";
import Background from "./Components/Background";
import Forground from "./Components/Forground";

const App = () => {
  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Forground />
      </div>
    </div>
  );
};

export default App;

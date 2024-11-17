import React from "react";
import PasswordGenerator from "./Components/PasswordGenerator";
import PracticePasswordGenerator from "./Components/PracticePasswordGenerator";
import SelfPracticePasswordGen from "./Components/SelfPracticePasswordGen";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-white mt-8 font-bold">
        Password Generator
      </h1>
      {/* <PasswordGenerator /> */}
      {/* <PracticePasswordGenerator /> */}
      <SelfPracticePasswordGen />
    </div>
  );
};

export default App;

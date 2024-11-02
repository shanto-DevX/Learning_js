import React, { createContext } from "react";

export const DataContext = createContext();

// const UserContext = (props) => {
const UserContext = ({ children }) => {
  const userName = "Shanto";
  //   console.log(props.children);

  return (
    <div>
      <h1>
        <DataContext.Provider value={userName}>{children}</DataContext.Provider>
      </h1>
    </div>
  );
};

export default UserContext;

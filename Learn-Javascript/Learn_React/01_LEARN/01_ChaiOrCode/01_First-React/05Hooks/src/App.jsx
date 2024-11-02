import React, { useState } from "react";

const App = () => {
  let [counter, setCouter] = useState(0);

  const addValue = () => {
    /* if (counter < 20) {
      setCouter(counter + 1);
    } */

    /* if (counter == 20) {
      setCouter((counter = 20));
    } else {
      setCouter(counter + 1);
    } */

    setCouter((counter) => (counter < 20 ? counter + 1 : 20));
  };

  const removeValue = () => {
    /* if (counter > 0) {
      setCouter(counter - 1);
    } */

    /* if (counter > 0) {
      setCouter(counter - 1);
    } else {
      setCouter((counter = 0));
    } */

    setCouter((counter) => (counter > 0 ? counter - 1 : 0));
  };

  return (
    <div>
      <h1>Lest Run Hooks</h1>
      <div>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </div>
  );
};

export default App;

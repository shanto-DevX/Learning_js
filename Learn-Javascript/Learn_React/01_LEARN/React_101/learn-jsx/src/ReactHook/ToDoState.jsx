import React, { useState } from "react";

const ToDoState = () => {
  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      {/* <h1>{list.length}</h1> */}

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeList(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Add TO DO"
      />
      <button onClick={addToList}>Click</button>
    </div>
  );
};

export default ToDoState;

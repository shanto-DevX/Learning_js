import { useState } from "react";

const UseStateIs = () => {
  // {/* ✨ Usestate() */}
  // let [number, setNumber] = useState(0);

  /* let [numberIs, setNumber] = useState(0);

  const change = () => {
    setNumber(numberIs + 1);
  }; */
  // {/* 💀-------------- end) */}

  // {/* ✨ Usestate pass object */}
  /*   const [myObj, setMyObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  }); */

  /* const change = () => {
    setMyObj({
      key1: "Update value 1",
      key2: "Update value 2",
      key3: "Update value 3",
    });
  }; */
  /*   const change = () => {
    setMyObj((pervOBJ) => ({
      ...pervOBJ,
      key1: " NEW VALUE OF KEY 1",
      key2: " NEW VALUE OF KEY 2",
      key3: " NEW VALUE OF KEY 3",
    }));
  }; */

  /*   let [myObjIs, setObjIs] = useState({
    key1: "Javascript",
    key2: "php",
    key3: "python",
    key4: "c++",
    key5: "c",
  }); */

  /*   let change = () => {
    setObjIs({
      key1: "Learn Javascript",
      key2: "Learn php",
      key3: "Learn python",
      key4: "Learn c++",
      key5: "Learn c",
    });
  }; */

  /*   let change = () => {
    setObjIs((e) => ({
      ...e,

      key1: "Learn Javascript",
      key2: "Learn php",
      key3: "Learn python",
      key4: "Learn c++",
      key5: "Learn c",
    }));

    setObjIs((ex) => ({
      ...ex,

      key5: "HOLA Learn c",
    }));
  }; */

  // {/* 💀-------------- end) */}

  // {/* ✨ Usestate JSON Project */}

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeITEM = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  // {/* 💀 end) */}

  // {/* ✨ Usestate JSON Project */}
  // {/* 💀 end) */}

  return (
    <>
      <h1>Learnning UseState()</h1>
      <div>
        {/* ✨ Usestate() */}

        {/* <h1>Number : {number}</h1> */}
        {/* <button onClick={() => setNumber(number + 1)}>click</button> */}

        {/* <h1>Nubmer : {numberIs} </h1> */}
        {/* <button onClick={change}>Click</button> */}

        {/* 💀 end) */}

        {/* ✨ Usestate pass object */}
        {/* <h1>{myObj.key1}</h1> */}
        {/* <button onClick={change}>Change</button> */}

        {/* <h1>{myObjIs.key5}</h1> */}
        {/* <button onClick={change}>click</button> */}
        {/* 💀 end) */}

        {/* ✨ Usestate() */}
        {/* 💀 end) */}
      </div>
      <div>
        {/* ✨ Usestate JSON PROJECTS */}
        {/*         <div>
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
                            removeITEM(index);
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
            placeholder="Item"
          />
          <button onClick={addToList}>ADD</button>
        </div> */}
        {/* 💀 end) */}
      </div>
    </>
  );
};

export default UseStateIs;

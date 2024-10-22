import { useRef } from "react";

/* 
// => 1️⃣ Change Text Useing useref() -> Current Statement
const UseRefTest = () => {
  let addHtml = useRef();

  const change = () => {
    // addHtml.current.textContent = "Change Text Done";
    // addHtml.current.innerText = "Change Text Done";
    // addHtml.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  };
  return (
    <>
      <h1>Hello UseRef Test</h1>
      <div>
        <h1 ref={addHtml}>Hello useRef</h1>
        <button onClick={change}>change</button>
      </div>
    </>
  );
}; */

/* 
// => 1️⃣.1️⃣ Change Text Useing useref() -> Without Current Statement
const UseRefTest = () => {
  let addHtml = useRef();

  const change = () => {
    // addHtml.textContent = "Change Text Done";
    // addHtml.innerText = "Change Text Done";
    // addHtml.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  };
  return (
    <>
      <h1>Hello UseRef Test</h1>
      <div>
        <h1 ref={(h1) => (addHtml = h1)}>Hello useRef</h1>
        <button onClick={change}>change</button>
      </div>
    </>
  );
};
 */

// export default UseRefTest;

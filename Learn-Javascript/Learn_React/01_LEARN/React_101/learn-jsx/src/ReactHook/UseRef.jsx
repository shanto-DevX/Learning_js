import { useRef } from "react";
const UseRef = () => {
  {
    /* ✨ Change InnterHtml & innerText Value */
  }
  /*   let headingIs = useRef();
        const change = () => {
            // headingIs.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";

            // * Without Current Statemnt
            // headingIs.innerText = "Hello useRef without Current Statement";
        } */

  // ----------------------------------------------------------

  /*   
  
  //   const headeingIs = useRef();
  let headeingIs = useRef();
  const changeIs = () => {
    // headeingIs.current.innerText = "Hello World UseRed()";
    // headeingIs.current.innerHTML = " <hr> <i>Learn JSX Useref()</i> <hr>";

    // -> Without current statement
    headeingIs.innerHTML = " <hr> <i>Learn JSX Useref()</i> <hr>";
  }; */

  {
    /* ✨ END */
  }

  {
    /* ✨ Change Attribute Value  */
  }
  /* let myImg = useRef();
  const showImg = () => {
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute("height", "200px");
    myImg.current.setAttribute("width", "300px");
  }; */

  // ----------------------------------------------------------

  /* let myImgs = useRef();
  const changeImg = () => {
    myImgs.current.src = "https://placehold.co/600x400?text=Hello+World";

    myImgs.current.setAttribute("Height", "200px");
    myImgs.current.setAttribute("weight", "200px");
  }; */

  {
    /* ✨ END */
  }

  {
    /* ✨ Input  */
  }

  /* let firstName = useRef();
  let lastName = useRef(); 

    const showName = () => {
    let FName = firstName.current.value;
    let lName = lastName.current.value;

    alert(`${FName} ${lName}`);
  };
  
  
  */

  // For Multipale Ref
  /*   let firstName,
    lastName,
    Age = useRef();

  const showName = () => {
    let FName = firstName.value;
    let lName = lastName.value;
    let age = Age.value;

    alert(`First Name : ${FName} \nLast Name : ${lName} \nAge : ${age}`);
  }; */

  {
    /* ✨ Add & Remove Class  */
  }
  /*   let myGeadLine = useRef();
  const change = () => {
    myGeadLine.current.classList.remove("text-success");
    myGeadLine.current.classList.add("text-primary");
  };

  let myHeading = useRef();
  const changeBTN = () => {
    // myHeading.current.classList.remove("bg-dark");
    // myHeading.current.classList.add("bg-primary");

    myHeading.current.classList.remove("text-white", "bg-dark", "text-center");
    myHeading.current.classList.add("text-danger", "bg-primary", "text-left");
  }; */

  let number = useRef(0);
  const change = () => {
    number.current++;
    console.log(number.current);
  };
  return (
    <>
      <h2>Learn Useref</h2>
      {/* ✨ Change InnterHtml & innerText Value */}
      <div>
        {/* <h1 ref={headingIs}></h1> */}
        {/* <h1 ref={(h1) => (headingIs = h1)}></h1> */}
        {/* <button onClick={change}> click </button> */}

        {/* ---------------------------------------- */}

        {/* <h1 ref={(h1) => (headeingIs = h1)}></h1> */}
        {/* <button onClick={changeIs}>CHange Content</button> */}

        {/* ---------------------------------------- */}
      </div>
      {/* ✨ Change Attribute Value  */}
      <div>
        {/* <img ref={myImg} src="https://placehold.co/600x400" alt="img" /> */}
        {/* <button onClick={showImg}>Click</button> */}

        {/* // -----------------------------*/}

        {/* <img ref={myImgs} src="https://placehold.co/600x400" alt="image" /> */}
        {/* <button onClick={changeImg}>change Image</button> */}
      </div>
      {/* ✨ Input  */}
      <div>
        {/* <input ref={firstName} type="text" placeholder="First Name" />
            <br />
            <input ref={lastName} type="text" placeholder="Last Name" />
            <br /> */}

        {/*  <input
              ref={(a) => (firstName = a)}
              type="text"
              placeholder="First Name"
            />
            <br />
            <input ref={(b) => (lastName = b)} type="text" placeholder="Last Name" />
            <br />
            <input ref={(ageIs) => (Age = ageIs)} type="text" placeholder="Age" />
            <br />
            <button onClick={showName}>Show Name</button> */}
      </div>
      {/* ✨ Css Class  */}
      <div>
        {/* <h1 className="text-success" ref={myGeadLine}>
          This is Head Line
        </h1>
        <button onClick={change}>Change Color</button> */}

        {/* <h1
          className="text-white p-2 fs-5 text-center mx-4 bg-dark"
          ref={myHeading}
        >
          Hello World, Css Class add
        </h1>
        <button onClick={changeBTN}>change</button> */}
      </div>
      {/* ✨ Persisted Mutable  */}
      <div>
        <button onClick={change}>Increment</button>
      </div>
    </>
  );
};

export default UseRef;

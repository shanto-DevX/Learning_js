// import Condition from "./moreLearn/Condition";
// import Conditional_randaring from "./moreLearn/Conditional_randaring";
// import Hello from "./moreLearn/Hello";
// import IIFF from "./moreLearn/IIFF";
// import Loop from "./moreLearn/Loop";

// import { useRef } from "react";

// import Hero from "./Components/Hero";
// import UseRef from "./ReactHook/UseRef";
// import UseRefTest from "./ReactHook/UseRefTest";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import Menu from "./Components/Menu";
import Form_useState from "./ReactHook/Form_useState";
import TEST_Form_useState from "./ReactHook/TEST_Form_useState";
import ToDoState from "./ReactHook/ToDoState";
import UseEffect from "./ReactHook/UseEffect";
import UseStateIs from "./ReactHook/UseStateIs";

function App() {
  const itemObj = {
    name: "Saiful Islam Shanto",
    learning: "React JSx",
    city: "Narayanganj",
  };

  const helloInfo = {
    learn: "React, jsx",
    parent: "App.jsx",
    child: "Hero.jsx",
  };

  const sumfunct = () => {
    alert(20 + 10);
  };

  const clickBTN = () => {
    ("Click Fucntion Working!");
  };

  const print1To10 = () => {
    for (let i = 0; i <= 10; i++) {
      i;
    }
  };

  function showAlert() {
    alert(" HEllo World Reguler function");
  }

  const showAlert2 = () => {
    alert(" HEllo World with arrow function");
  };

  const postFromData = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  /*   let headingIs = useRef();
  const change = () => {
    headingIs.current.innerText = "Hello  useRef";
  }; */

  return (
    <div>
      {/* <Condition /> */}
      {/* <IIFF /> */}
      {/* <Loop /> */}
      {/* <Hello /> */}
      {/* <Conditional_randaring /> */}
      {/* * Learning Props * */}
      {/* ✨ Props String Pass */}
      {/* <Hero title="Learning React Props" des="Props Is Uni Direactional" /> */}
      {/* ✨ Props Js Object Pass */}
      {/* <Hero item={itemObj} helloInfos={helloInfo} /> */}
      {/* ✨ Props Js Using Function */}
      {/* <Hero btnClick={clickBTN}  /> */}
      {/* <Hero btnSum={sumfunct} /> */}
      {/* <Hero forLoops={print1To10} /> */}
      {/* ✨ Props Using in Click Event */}
      {/* 🗨️ Component Load এর সাথে সাথে এক্সিকিউট হয়ে যাবে */}
      {/* <button onClick={alert("Hello World")}>Click</button> */}
      {/* 🗨️ Component Load এর সাথে সাথে এক্সিকিউট হয়ে যাবে */}
      {/* <button
        onClick={() => {
          alert("Hello World Inside With Arrow Function");
        }}
      >
        Click - Inside Button - AF
      </button>
      <br />
      <button
        onClick={function demo() {
          alert("Hello World Inside With Regular Function");
        }}
      >
        Click - Inside Button - RF
      </button>
      <br />
      <button onClick={showAlert}>Click</button> <br />
      <button onClick={showAlert2}>Click</button> <br /> */}

      {/* ✨ Form Submit */}
      {/* <div>
        <form action="#" onSubmit={postFromData}>
          <input type="text" placeholder="Name" />
          <button type="submit">submit</button>
        </form>
      </div> */}

      {/* ✨ React HOOK */}
      {/* <UseRef /> */}
      {/* <UseRefTest /> */}
      {/* <UseStateIs /> */}
      {/* <ToDoState /> */}
      {/* <Form_useState /> */}
      {/* <TEST_Form_useState /> */}
      {/* <UseEffect /> */}

      {/* ✨ React Router DOM */}
      {/*       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/*       <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id/:name" element={<ProductPage />}></Route>
          <Route
            path="/profile/:facebbokID/:youtubeId"
            element={<ProfilePage />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

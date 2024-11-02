import Header from "./assets/Components/Header";
import Hero from "./assets/Components/Hero";
import Service from "./assets/Components/Service";
// import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import FromHandeling from "./assets/LearnJSX/FromHandeling";
import FunctionWithHooks from "./assets/LearnJSX/FunctionWithHooks";
import PracticeTwoWayBinding from "./assets/LearnJSX/PracticeTwoWayBinding";
import TwoWayBinding from "./assets/LearnJSX/TwoWayBinding";
import Variable from "./assets/LearnJSX/Variable";
import Props from "./assets/props/Props";
import Api from "./assets/workingWithAPI/Api";
import P_Api from "./assets/workingWithAPI/P_Api";
// Pages Add

import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Product from "./assets/Pages/Product";
import Contact from "./assets/Pages/Contact";
import HeadersNav from "./assets/Components/HeadersNav";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./assets/Context/UserContext";

function App() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <>
      {/*       <h1>Hello World from APP.jsx</h1>
      <hr />
      <Variable />
      <hr />
      <FunctionWithHooks />
      <hr />
      <FromHandeling />
      <hr />
      <TwoWayBinding />
      <br />
      <hr />
      <br />
      <PracticeTwoWayBinding /> */}
      {/* 📂 Componets */}
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Service /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* Componets End */}

      {/* 📂 Props */}
      {/* <Props />  */}

      {/* 📂 Api Intrgation */}
      {/* <Api /> */}
      {/* <P_Api /> */}

      {/* 📂 React Router DOM */}
      {/*       <div>
        <HeadersNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div> */}

      {/*   <div>
        <HeadersNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}

      {/* 📂 Context API - USERCONTEXT */}
      <div>
        <h1>Hello APP {data}</h1>
        <Hero />
        <About />
        <Product />
        <Contact />
      </div>
    </>
  );
}

export default App;

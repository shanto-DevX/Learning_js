import Header from "./assets/Components/Header";
import Hero from "./assets/Components/Hero";
import Service from "./assets/Components/Service";
import Contact from "./assets/Components/Contact";
import Footer from "./assets/Components/Footer";
import FromHandeling from "./assets/LearnJSX/FromHandeling";
import FunctionWithHooks from "./assets/LearnJSX/FunctionWithHooks";
import PracticeTwoWayBinding from "./assets/LearnJSX/PracticeTwoWayBinding";
import TwoWayBinding from "./assets/LearnJSX/TwoWayBinding";
import Variable from "./assets/LearnJSX/Variable";

function App() {
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
      <Header />
      <Hero />
      <Service />
      <Contact />
      <Footer />
      {/* Componets End */}
    </>
  );
}

export default App;

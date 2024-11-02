import Hero from "./Components/Page/Hero";
import About from "./Components/Page/About";
import Service from "./Components/Page/Service";
import Contact from "./Components/Page/Contact";
import Footer from "./Components/Page/Footer";
import Blog from "./Components/Page/Blog";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello world React!</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />

      <Hero />
      <About />
      <Service />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

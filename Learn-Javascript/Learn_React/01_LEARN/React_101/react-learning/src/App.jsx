/* function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
 */

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Form from "./components/From";
import List from "./components/List";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Hello />
      <List />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
};

export default App;

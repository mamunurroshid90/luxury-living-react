import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Project } from "./components/Project/Project";
import { Service } from "./components/Service/Service";
import { Testimonial } from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="">
      <Home></Home>
      <Project></Project>
      {/* <Service></Service> */}
      {/* <Testimonial></Testimonial> */}
      {/* <Contact></Contact> */}
      {/* <About></About> */}
    </div>
  );
}

export default App;

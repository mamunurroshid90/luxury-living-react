import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Home/Hero";
import { Nav } from "./components/Home/Nav";
import { Project } from "./components/Project/Project";
import { Service } from "./components/Service/Service";
import { Testimonial } from "./components/Testimonial/Testimonial";

function App() {
  return (
    <main>
      <div className="bg-[#F7F7F7]">
        <header>
          <Nav />
        </header>
        <Hero />
      </div>
      <Project></Project>
      <Service></Service>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <About></About>
    </main>
  );
}

export default App;

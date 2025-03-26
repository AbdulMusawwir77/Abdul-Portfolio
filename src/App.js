import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import Projects from './components/Projects'
import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        {/* <Projects /> */}
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

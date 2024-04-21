// import components
import Banner from "./components/Banner";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Skills />
      <Service />
      <Testimonials />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">CHRISTIAN SALAMAT</h6>
        <p>Copyright 2024 © Powered by React.js</p>
      </footer>
    </div>
  );
};

export default App;

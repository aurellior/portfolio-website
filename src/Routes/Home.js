import React from "react";
import ScrollButton from "../Components/ScrollButton";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="relative antialiased font-jakarta">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Home;

{
}

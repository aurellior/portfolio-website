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
  /* <span className="text-black inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-8 leading-tight [&_li]:block  text-center">
                  <li>Coming Soon.</li>
                  <li>Segera Hadir.</li>
                  <li>即将推出.</li>
                  <li>近日公開.</li>
                  <li>À venir.</li>
                  <li>เร็วๆ นี้.</li>
                  <li>Prossimamente.</li>
                  <li>Muy pronto.</li>
                  <li aria-hidden="true">Coming Soon.</li>
                </ul>
              </span>
              <div>
                <h1 className="text-black/60 font-normal text-[18px]">
                  Aurellio Dhiya Wisnu Rajendra
                </h1>
              </div> */
}

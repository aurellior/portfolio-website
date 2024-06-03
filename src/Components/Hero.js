import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="sticky bg-black md:h-screen h-[700px] z-10">
      <div className="flex items-center md:h-[650px] h-[650px] sticky justify-center bg-black overflow-hidden z-10 ">
        <div className="w-full font-medium text-6xl md:text-7xl [text-wrap:balance] text-transparent text-white text-left flex justify-center items-center flex-col">
          <div className="absolute italic text-white/[.05] z-0 md:text-[750px] text-[200px] font-extrabold">
            Hello
          </div>
          <div className="z-10 md:text-[64px] text-[28px]">
            <h1 className="">Hello, I'm Aurellio</h1>
            <h1>
              a
              <span className="text-[#ED4C51] font-bold ">
                {"<frontendDeveloper/>"}
              </span>
            </h1>
          </div>
          <a
            className=""
            href="https://drive.google.com/file/d/1Z3ElimXNf_Ai5cEsWpzOuUxYoOHIOzx7/view?usp=sharing"
            target="_blank"
          >
            <div className="mt-[60px] relative bg-black flex overflow-x-hidden order-2 border-2 border-[#252525] rounded-lg hover:bg-white  hover:text-transparent text-white">
              <div className="p-2 animate-marquee3 whitespace-nowrap text-black">
                <p className="text-xl mx-4">View Resume</p>
              </div>
              <div className="absolute top-0 p-2 animate-marquee4 whitespace-nowrap text-black">
                <p className="text-xl mx-4">View Resume</p>
              </div>
              <div className="absolute top-0 p-2 hover:hidden whitespace-nowrap ">
                <p className="text-xl mx-4">View Resume</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

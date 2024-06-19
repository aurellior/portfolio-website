import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { IconContext } from "react-icons";

const Skills = () => {
  return (
    <div className="sticky z-10 bg-[#ED4C51] overflow-hidden py-[100px] px-[80px]">
      <div className=" flex flex-col items-center justify-center gap-[100px]">
        <div className="absolute italic text-white/[.03] z-0 md:text-[500px] text-[200px] font-extrabold">
          //SKILLS//
        </div>
        <h1 className="text-white font-bold md:text-[80px] text-[50px] z-10">
          //SKILLS//
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-[70px] z-10">
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <FaHtml5 />
              <h1 className="text-white text-[24px] font-medium">HTML</h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <FaCss3Alt />
              <h1 className="text-white text-[24px] font-medium">CSS</h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <IoLogoJavascript />
              <h1 className="text-white text-[24px] font-medium">Javascript</h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <RiReactjsFill />
              <h1 className="text-white text-[24px] font-medium">ReactJS</h1>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <FaGitAlt />
              <h1 className="text-white text-[24px] font-medium">Git</h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <RiTailwindCssFill />
              <h1 className="text-white text-[24px] font-medium">Tailwind</h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <DiVisualstudio />
              <h1 className="text-white text-[24px] font-medium">
                Visual Studio Code
              </h1>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "80px" }}>
            <div className="flex flex-col justify-center items-center w-[228px] gap-[12px]">
              <FaFigma />
              <h1 className="text-white text-[24px] font-medium">Figma</h1>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Skills;

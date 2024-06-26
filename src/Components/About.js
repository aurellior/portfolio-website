import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <div
      id="About"
      className="sticky bg-[#1D1D1D] overflow-hidden z-10 px-[80px] py-[100px]"
    >
      <div className="flex flex-col gap-[46px]  text-white">
        <h1 className="md:text-[100px] text-[50px] font-bold">/About</h1>
        <div className="flex md:flex-row flex-col md:px-[70px]  gap-[46px]">
          <IconContext.Provider
            id="Icon"
            value={{ color: "#ED4C51", size: "250px" }}
          >
            <div>
              <GoArrowUpRight />
            </div>
          </IconContext.Provider>

          <div className="flex flex-col md:text-[20px] text-[14px] gap-4 text-justify items-center justify-center ">
            <p>
              I'm Aurellio, a bachelor of Computer Science student with skill of
              programming to deliver an immersive and engaging user experience
              through efficient website development. Proficient with HTML, CSS
              and Javascript, with extensive knowledge of Front-End and UI/UX
              Design. Seeking to use proven skills especially in React.js to
              drive innovation with the ability to follow industry and
              technological trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

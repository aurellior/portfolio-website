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
              Hi, I’m Aurellio — a Computer Science graduate passionate about
              creating immersive and engaging user experiences through efficient
              web development. Skilled in HTML, CSS, and JavaScript, with strong
              expertise in Front-End and UI/UX Design. Proficient in React.js, I
              aim to deliver innovative solutions while staying aligned with the
              latest industry and technology trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

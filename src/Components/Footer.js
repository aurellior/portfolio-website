import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from "react-icons";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="sticky  bg-[#333132] bottom-0 z-0">
      <div className="px-[80px] py-[100px]">
        <div className="flex flex-row items-center mb-[100px] gap-[28px] ">
          <h1 className="md:text-[90px] text-[40px] font-bold text-[#E3E4DC]">
            CONTACT ME
          </h1>
          <IconContext.Provider value={{ color: "#ED4C51", size: "120px" }}>
            <div>
              <GoArrowUpRight />
            </div>
          </IconContext.Provider>
        </div>

        <div className="grid md:grid-cols-4 gap-10 grid-cols-1 items-center ">
          <a href="mailto: aurelliorr@gmail.com" target="_blank">
            <IconContext.Provider value={{ color: "white", size: "46px" }}>
              <div className="flex items-center ">
                <CgMail />
                <p className="text-white p-[12px]">aurelliorr@gmail.com</p>
              </div>
            </IconContext.Provider>
          </a>
          <a
            href="https://www.linkedin.com/in/aurelliorajendra/"
            target="_blank"
          >
            <IconContext.Provider value={{ color: "white", size: "46px" }}>
              <div className="flex items-center ">
                <FaLinkedin />
                <p className="text-white p-[12px]">Aurellio Rajendra</p>
              </div>
            </IconContext.Provider>
          </a>
          <a href="https://github.com/aurellior" target="_blank">
            <IconContext.Provider value={{ color: "white", size: "46px" }}>
              <div className="flex items-center ">
                <FaGithub />
                <p className="text-white p-[12px]">aurellior</p>
              </div>
            </IconContext.Provider>
          </a>
          <a href="https://www.instagram.com/aurellior/" target="_blank">
            <IconContext.Provider value={{ color: "white", size: "46px" }}>
              <div className="flex items-center ">
                <FaInstagram />
                <p className="text-white p-[12px]">@aurellior</p>
              </div>
            </IconContext.Provider>
          </a>
        </div>
      </div>

      <div className="font-roboto relative flex overflow-x-hidden mt-auto ">
        <div className="py-5 animate-marquee whitespace-nowrap text-[90px] mx-4 font-extrabold text-[#E3E4DC]">
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
        </div>
        <div className="py-5 absolute top-0 animate-marquee2 whitespace-nowrap text-[90px] mx-4 font-extrabold text-[#E3E4DC]">
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
          <span>AR //</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

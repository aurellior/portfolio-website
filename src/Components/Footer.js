import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IconContext } from "react-icons";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandValorant } from "react-icons/tb";

const Footer = () => {
  return (
    <footer id="contact" className="sticky  bg-[#333132] bottom-0 z-0">
      <div className="md:px-[80px] px-[28px] md:py-[100px] py-[50px]">
        <div className="flex flex-row items-center mb-[60px] md:mb-[60px] gap-[28px] ">
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

      <div className="flex overflow-hidden py-[14px]">
        <div className="flex items-center space-x-5 animate-loop text-[60px] font-extrabold text-white">
          <span>
            <h1 className="">PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <h1 className="text-stroke text-transparent">PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <h1>PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <h1 className="text-stroke text-transparent">PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
        </div>

        <div
          className="flex items-center space-x-5 animate-loop text-[60px] font-extrabold text-white"
          aria-hidden="true"
        >
          <span>
            <h1>PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <h1 className="text-stroke text-transparent">PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <h1>PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <h1 className="text-stroke text-transparent">PORTFOLIO</h1>
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className="relative flex  overflow-x-hidden mt-auto ">
        <div className="flex items-center py-5  animate-marquee whitespace-nowrap md:text-[60px] text-[60px] font-extrabold text-[#E3E4DC]">
          <span>
            <img src={Text1} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>

          <span>
            <img src={Text2} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <img src={Text1} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <img src={Text2} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
        </div>

        <div className="flex items-center py-5 absolute top-0 animate-marquee2 whitespace-nowrap md:text-[60px] text-[60px] mx-4 font-extrabold text-[#E3E4DC]">
          <span>
            <img src={Text1} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <img src={Text2} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <img src={Text1} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
          <span>
            <img src={Text2} className="w-[400px]" />{" "}
          </span>
          <span>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <div className="flex items-center px-[20px]">
                <TbBrandValorant />
              </div>
            </IconContext.Provider>{" "}
          </span>
        </div>
      </div> */
}

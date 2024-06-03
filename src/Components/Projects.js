import React from "react";
import Porto1 from "../img/porto1.png";
import Porto2 from "../img/porto2.png";
import Porto3 from "../img/porto3.png";
import Porto4 from "../img/porto4.png";
import Porto5 from "../img/porto5.png";
import Porto6 from "../img/porto6.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col sticky z-10  bg-black px-[80px] py-[100px] gap-[56px]"
    >
      <h1 className="md:text-[100px] text-[60px] text-white font-bold">
        /Projects
      </h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[10px]">
        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100">
          <a href="https://anugrahsahabatjaya.com/" target="_blank">
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto1}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px]  w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white md:text-[20px] text-[14px] font-medium">
                    Anugrah Sahabat Jaya
                  </h1>
                  <div className="text-white mdL:text-[14px] text-[12px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Freelance</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  PHP, Laravel, Tailwind
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100 ">
          <a href="https://pokemon-hazel-omega.vercel.app/" target="_blank">
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto2}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px]  w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white text-[20px] font-medium">
                    Pokemon
                  </h1>
                  <div className="text-white text-[14px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Personal Project</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  ReactJS, Tailwind, React Spring, PokeAPI
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100 ">
          <a
            href="https://final-project-react-kappa.vercel.app/"
            target="_blank"
          >
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto3}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px] w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white text-[20px] font-medium">
                    Yu-Gi-Oh!
                  </h1>
                  <div className="text-white text-[14px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Personal Project</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  ReactJS, ChakraUI, Yi-Gi-Oh! API, Sort
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100 ">
          <a href="https://mading-jwp.vercel.app/homeadmin" target="_blank">
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto4}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px] w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white text-[20px] font-medium">
                    Mading JWP
                  </h1>
                  <div className="text-white text-[14px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Lembaga Sertifikasi Profesi (LSP)</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  ReactJS, Login, CRUD
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100 ">
          <a href="https://yflix-web-streaming.vercel.app/" target="_blank">
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto5}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px] w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white text-[20px] font-medium">Yflix</h1>
                  <div className="text-white text-[14px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Personal Project</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  HTML, CSS
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center items-center mb-[24px] hover:bg-white/[.1] rounded-lg p-8 duration-100 ">
          <a href="https://music-io-web-music.vercel.app/" target="_blank">
            <div className="flex flex-col lg:w-[400px] 2xl:w-[500px] w-[300px] gap-[24px] rounded-lg">
              <img
                src={Porto6}
                className="h-[380px] lg:w-[400px] 2xl:w-[500px]  w-[300px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[18px] items-center">
                  <h1 className="text-white text-[20px] font-medium">
                    Music.io
                  </h1>
                  <div className="text-white text-[14px] bg-[#ED4C51] rounded-full py-[8px] px-[14px] flex items-center">
                    <p>Personal Project</p>
                  </div>
                </div>
                <p className="text-[#8B8689] md:text-[18px] text-[14px]">
                  HTML, CSS
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

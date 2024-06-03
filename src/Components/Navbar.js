import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: "Home", text: "Home" },
    { id: "Projects", text: "Projects" },
    { id: "About", text: "About" },
  ];

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 4000,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black sticky flex justify-between items-center h-24 w-full mx-auto md:px-[80px] px-[40px]  text-white z-10">
      {/* Logo */}
      <div className="w-[60px]">
        <img src={Logo} alt="" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClickScroll(item.id)}
            className="p-3 m-2 cursor-pointer duration-300 hover:text-[#ED4C51]"
          >
            {item.text}
          </li>
        ))}
        <li className="p-3 m-2 bg-[#ED4C51] rounded-full cursor-pointer duration-300">
          <li onClick={scrollToBottom}>Contact Me</li>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

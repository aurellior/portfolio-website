import React from "react";
import { useState } from "react";
import ButtonBg from "../img/button.png";
import ButtonBg2 from "../img/button1.png";
import ButtonUp from "../img/button2.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="fixed bottom-0 w-full z-20">
      <button
        className="p-[8px] my-[24px] mx-[24px] float-right text-black text-sm font-bold hover:bg-lime-300 bg-lime-400 rounded"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="currentColor"
        >
          <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollButton;

import React from "react";
import { SapZap } from "../../images";

const Navbar = () => {
  return (
    <div className="w-full backdrop-blur-sm bg-accent/30 shadow-lg fixed top-0 left-0 z-50 h-[64px] flex justify-center">
      <div className="w-full flex items-center justify-between max-w-[1240px] px-4">
        <div className="relative text-xl font-bold text-heading">
          <div className="absolute top-3 overflow-hidden rounded-full scale-150 hover:-backdrop-hue-rotate-30 hover:-hue-rotate-60 hover:-rotate-[360deg] transition-all hover:transition-all">
            <img src={SapZap}/>
          </div>
          SapZap
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-heading hover:text-gray-300">Home</button>
          <button className="text-heading hover:text-gray-300">About</button>
          <button className="text-heading hover:text-gray-300">Services</button>
          <button className="text-heading hover:text-gray-300">Contact</button>
        </div>
        <div className="md:hidden">
          <button className="text-heading">Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

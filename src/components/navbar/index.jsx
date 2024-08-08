import React from "react";

const Navbar = () => {
  return (
    <div className="w-full backdrop-blur-sm bg-white/30 shadow-lg fixed top-0 left-0 z-50 h-[64px] flex justify-center">
      <div className="w-full flex items-center justify-between max-w-[1240px] px-4">
        <div className="text-xl font-bold text-heading">
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

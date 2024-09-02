import React, { useEffect, useState } from "react";
import { SapZap } from "../../images";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
    setTheme(theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
    setTheme(theme);
  }, []);

  return (
    <div className="w-full backdrop-blur-sm shadow-lg fixed top-0 left-0 z-50 h-[64px] flex justify-center">
      <div className="flex-1 bg-primary">

      </div>
      <div className="w-full flex items-center bg-background/40 justify-between max-w-[1240px]">
        <div className="relative bg-primary h-full w-full max-w-[200px] text-xl font-bold text-heading">
          <h2 className="h-full flex flex-1  text-background justify-center items-center italic text-2xl tracking-wider">SAPZAP</h2>
          <div className="-skew-x-[50deg] absolute -right-12 w-24 top-0 block bg-primary h-full"></div>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-heading hover:text-gray-300">Home</button>
          <button className="text-heading hover:text-gray-300">About</button>
          <button className="text-heading hover:text-gray-300">Services</button>
          <button className="text-heading">
            {theme == "light" ? (
              <svg
                onClick={() => changeTheme("dark")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => changeTheme("light")}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-heading">Menu</button>
        </div>
        
      </div>
      <div className="flex-1 block bg-background/40  backdrop-blur-sm">

      </div>
    </div>
  );
};

export default Navbar;

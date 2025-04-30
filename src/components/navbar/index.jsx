import React, {useEffect, useState} from "react";
import {SapZap} from "../../images";
import {RiSunLine} from "react-icons/ri";
import {RiMoonLine} from "react-icons/ri";

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.body.classList = [theme];
    setTheme(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      changeTheme("dark");
    } else {
      changeTheme(theme);
    }
  }, []);

  return (
    <div className="w-full backdrop-blur-sm shadow-lg fixed top-0 left-0 z-50 h-[64px] flex justify-center">
      <div className="flex-1 bg-primary"></div>
      <div className="w-full flex items-center bg-background/40 justify-between max-w-[1240px]">
        <div className="relative bg-[linear-gradient(80deg,_theme(colors.primary),_theme(colors.secondary))] h-full w-full max-w-[200px] text-xl font-bold text-heading">
          <h2 className="h-full flex flex-1 text-background justify-center items-center italic text-2xl tracking-wider">
            SAPZAP
          </h2>
          <div className="-skew-x-[50deg] bg-[linear-gradient(142deg,_theme(colors.secondary),_theme(colors.primary))] absolute -right-12 w-24 top-0 block h-full"></div>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* <button className="text-heading hover:text-gray-300">Home</button>
          <button className="text-heading hover:text-gray-300">About</button>
          <button className="text-heading hover:text-gray-300">Services</button> */}
          <button className="text-heading">
            {theme && theme == "light" ? (
              <RiMoonLine className="mr-4" onClick={()=>changeTheme('dark')} size={30} />
            ) : (
              <RiSunLine className="mr-4" onClick={()=>changeTheme('light')} size={30} />
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-heading">Menu</button>
        </div>
      </div>
      <div className="flex-1 block bg-background/40  backdrop-blur-sm"></div>
    </div>
  );
};

export default Navbar;

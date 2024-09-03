import React from "react";
import Project from "./Project";
import {Companies} from "../../../data/service.jsx";
const Projects = () => {
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-full flex flex-col max-w-[1240px]">
      <div className="w-full my-2 py-4 flex justify-center items-center">
          <h2 className="flex items-end text-heading pr-4 w-auto text-6xl font-semibold">Projects<div className="h-2 ml-2 w-2 mb-1 rounded-full bg-primary"></div></h2>
          
          <div className="w-full mt-5 pl-5 border-t-2 hidden sm:block">
            <h2 className="text-sm w-[260px] text-subheading/80 font-semibold ml-auto italic tracking-widest">Actions speak louder than words.</h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:Grid-cols-2">
          {Companies.map(item=><Project item={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Projects;

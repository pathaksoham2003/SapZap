import React from "react";
import Project from "./Project";
import {Companies} from "../../../data/service.jsx";
const Projects = () => {
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-full flex flex-col max-w-[1240px]">
        <div className="w-full my-2 py-4 flex justify-center">
          <h2 className="text-heading text-5xl">Projects</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:Grid-cols-4">
          {Companies.map(item=><Project item={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Company from "./Company";
import {Companies} from "../../../data/service.jsx";
const Experience = () => {
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-full flex flex-col max-w-[1240px]">
        <div className="w-full my-2 py-4 flex justify-center items-center">
          <h2 className="flex items-end text-heading pr-4 w-auto text-6xl font-semibold">Experience <div className="h-2 ml-2 w-2 mb-1 rounded-full bg-primary"></div></h2>
          
          <div className="h-[1px] w-full ml-16 bg-white"></div>
        </div>
        <div className="w-full flex flex-col">
          {Companies.map(item=><Company item={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Experience;

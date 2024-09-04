import React from "react";
import Company from "./Company";
import {Companies} from "../../../data/service.jsx";
const Experience = () => {
  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-full flex flex-col max-w-[1240px]">
        <div className="w-full flex justify-center items-center">
          <h2 className="flex items-end text-heading pr-4 w-auto text-6xl py-0 font-semibold">Experience <div className="h-2 ml-2 w-2 mb-1 rounded-full bg-primary"></div></h2>
          
          <div className="w-full mt-5 pl-5 border-t-2 hidden sm:block">
            <h2 className="text-sm w-[340px] text-subheading/80 font-semibold ml-auto italic tracking-widest">The only source of knowledge is experience.</h2>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {Companies.map(item=><Company item={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default Experience;

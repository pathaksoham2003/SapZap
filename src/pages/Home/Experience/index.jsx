import React from "react";
import Company from "./Company";
import {Companies} from "../../../data/service.jsx";
import {motion} from "framer-motion";
import SectionHeader from "../../../components/Headers/SectionHeader.jsx";
const Experience = () => {
  return (
    <div className="relative w-full flex justify-center items-center pt-10">
      <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
              transition={{ duration: 2 }}
              className="absolute top-50 left-0 w-60 h-80 rotate-45 bg-gradient-to-br from-indigo-500/30 via-blue-500/50 to-transparent blur-[100px] pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
              transition={{ duration: 2 }}
              className="absolute top-0 right-0 w-60 h-80 rotate-45 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-transparent blur-[100px] pointer-events-none"
            />
      <div className="w-full flex flex-col max-w-[1240px]">
        <SectionHeader title="Experience" subtitle="The only source of knowledge is experience."/>
        <div className="w-full flex flex-col">
          {Companies.map((item) => (
            <Company item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

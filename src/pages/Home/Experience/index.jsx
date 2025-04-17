import React from "react";
import Company from "./Company";
import {Companies} from "../../../data/service.jsx";
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-full flex flex-col max-w-[1240px]">
        <div className="w-full flex justify-center items-center">
          <motion.h2
            initial={{opacity: 0, y: 10}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            className="flex items-end text-heading pr-4 w-auto text-6xl py-0 font-semibold"
          >
            Experience
            <motion.div className="h-2 ml-2 w-2 mb-1 rounded-full bg-primary"></motion.div>{" "}
          </motion.h2>

          <div className="w-full mt-5 pl-5 border-t-2 hidden sm:block">
            <motion.h2
              nitial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.5}}
              viewport={{once: true}}
              className="text-sm w-[340px] text-subheading/80 font-semibold ml-auto italic tracking-widest"
            >
              The only source of knowledge is experience.
            </motion.h2>
          </div>
        </div>
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

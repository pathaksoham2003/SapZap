import React from "react";
import {motion} from "framer-motion";
import {RESUME} from "../../../data/service";
import ResumeCard from "./ResumeCard";
const Resume = () => {
  return (
    <motion.div className="w-full flex justify-center items-center pt-10">
      <motion.div className="w-full flex flex-col max-w-[1240px]">
        <motion.h2 className="text-heading">
          Get my different profile resume here!
        </motion.h2>
        <motion.div className="w-full flex flex-wrap">
          {RESUME.map((item, index) => (
            <ResumeCard key={index} resume={item} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;

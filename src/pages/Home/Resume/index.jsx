import React from "react";
import {motion} from "framer-motion";
import {RESUME} from "../../../data/service";
import ResumeCard from "./ResumeCard";
import SectionHeader from "../../../components/Headers/SectionHeader";
const Resume = () => {
  return (
    <motion.div className="w-full flex justify-center items-center pt-10">
      <motion.div className="w-full flex flex-col max-w-[1240px]">
       <SectionHeader title="Resume" subtitle="Why 3? Experience at companies + freelancing"/>
        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {RESUME.map((item, index) => (
            <ResumeCard key={index} resume={item} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;

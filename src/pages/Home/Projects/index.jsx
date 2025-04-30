import React, { useState } from "react";
import Project from "./Project";
import { Companies, ProjectData } from "../../../data/service.jsx";
import { motion } from "framer-motion";
import ServiceCards from "../../ServiceCards.jsx";
import SectionHeader from "../../../components/Headers/SectionHeader.jsx";

const Projects = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-full flex flex-col max-w-[1240px]">
        <SectionHeader title="Projects" subtitle="Actions speak louder than words"/>
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-center my-4">
            <motion.div
              className="flex flex-wrap p-3 rounded-lg bg-gray-500/20 justify-center gap-2 md:gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {[
                "M E (A) R N",
                "Java + SpringBoot",
                "AI ML & Python",
              ].map((label, index) => (
                <motion.h2
                  key={index}
                  onClick={() => setTab(index)}
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`${index == tab ? "bg-gradient-to-tr font-semibold from-primary shadow-md shadow-gray-500 to-secondary text-black hover:bg-subheading transition-colors duration-500 " : "text-heading"}  rounded-md px-6 md:px-8 py-2 cursor-pointer`}
                >
                  {label}
                </motion.h2>
              ))}
            </motion.div>
          </div>
          <div className=""></div>
        </div>
        <ServiceCards tab={tab} />
      </div>
    </div>
  );
};

export default Projects;

import React, {useState} from "react";
import Project from "./Project";
import {Companies, ProjectData} from "../../../data/service.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className="w-full flex flex-col max-w-[1240px]">
        <div className="w-full my-2 py-4 flex justify-center items-center">
          <h2 className="flex items-end text-heading pr-4 w-auto text-6xl font-semibold">
            Projects
            <div className="h-2 ml-2 w-2 mb-1 rounded-full bg-primary"></div>
          </h2>

          <div className="w-full mt-5 pl-5 border-t-2 hidden sm:block">
            <h2 className="text-sm w-[260px] text-subheading/80 font-semibold ml-auto italic tracking-widest">
              Actions speak louder than words.
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-center my-4">
            <motion.div
              className="w-full flex flex-wrap justify-center gap-2 md:gap-4"
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.2}}
              viewport={{once: true}}
            >
              {[
                "Frontend Development",
                "Backend Development",
                "AI ML & Other",
              ].map((label, index) => (
                <motion.h2
                  key={index}
                  onClick={() => setTab(index)}
                  initial={{opacity: 0, y: 10}}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: index * 0.2}}
                  className="bg-subheading/80 text-background transition-colors duration-500 rounded-md px-6 md:px-8 py-2 cursor-pointer hover:bg-subheading"
                >
                  {label}
                </motion.h2>
              ))}
            </motion.div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {ProjectData[tab].map((item) => (
            <Project item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

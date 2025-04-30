import React from "react";
import {motion} from "framer-motion";
const CompanyProject = ({item}) => {
  return (
    <div className="w-full m-2 flex flex-col">
      <motion.h2
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.5, delay: 0}}
        viewport={{once: true}}
        className="text-lg md:text-2xl w-full font-semibold text-heading pt-4 pb-1"
      >
        {item.name}
      </motion.h2>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <ul className="w-full flex md:pl-10 flex-col">
          {item.implementations.map((item, index) => (
            <motion.li
              key={index}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 1.5, delay: 0.4 * index}}
              viewport={{once: true}}
              className={`md:text-lg ${
                item.id !== 0 ? "mt-2" : "mt-0"
              }  list-disc text-subheading`}
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="flex flex-wrap  md:pl-4 items-start w-full md:max-w-[150px]">
          <div className="flex flex-wrap items-start w-full md:max-w-[150px]">
            {item.technologies.map((item, index) => (
              <motion.div key={index} className="bg-gradient-to-r from-primary via-secondary m-1 pr-10 rounded-l-lg">
                <motion.h2
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.4 * index}}
                  viewport={{once: true}}
                  className="p-1 pl-2 text-black font-semibold whitespace-nowrap"
                >
                  {item}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProject;

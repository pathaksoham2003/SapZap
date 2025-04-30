import React from "react";
import {AI} from "../../../../images";
import CompanyProject from "./CompanyProject";
import {motion} from "framer-motion";
const Company = ({item}) => {
  return (
    <div className="w-full flex mt-10 flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <motion.h2
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 0.5}}
          viewport={{once: true}}
          className="text-3xl text-heading font-bold"
        >
          {item.companyName}
        </motion.h2>
        <motion.h2
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 0.5}}
          viewport={{once: true}}
          className="text-heading"
        >
          {item.start_date} - {item.end_date}
        </motion.h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <motion.h2
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 1}}
          viewport={{once: true}}
          className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold my-2"
        >
          {item.role}
        </motion.h2>

        <motion.h2
          initial={{opacity: 0, y: 10}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 1}}
          viewport={{once: true}}
          className="text-heading"
        >
          {item.location}
        </motion.h2>
      </div>
      <div></div>
      <div className="w-full flex flex-col pl-4">
        {item.projects.map((item) => (
          <CompanyProject item={item} />
        ))}
      </div>
    </div>
  );
};

export default Company;

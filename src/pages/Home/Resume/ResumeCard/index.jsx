import React from "react";
import {motion} from "framer-motion";
const ResumeCard = ({resume}) => {
  return (
    <motion.div className="p-5">
      <motion.div className="rounded-xl border-heading">
        <motion.div className="overflow-hidden h-[200px] rounded-t-3xl">
          <motion.img src={resume.path} />
        </motion.div>
        <motion.div className="p-5">
          <motion.h2 className="text-heading font-semibold text-2xl">
            {resume.name}
          </motion.h2>
          <motion.h2 className="text-heading">{resume.description}</motion.h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeCard;

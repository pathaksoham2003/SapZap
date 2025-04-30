import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  subtitle,
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex whitespace-nowrap items-end text-heading pr-4 w-auto text-6xl py-0 font-semibold"
      >
        {title}
        <motion.div
          className={`h-2 ml-2 w-2 mb-1 rounded-full bg-gradient-to-tr ${gradientFrom} ${gradientTo}`}
        />
      </motion.h2>

      <div
        className={`border-t-2 border-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-border h-[2px] w-full`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-sm whitespace-nowrap text-subheading/80 font-semibold ml-auto w-max italic tracking-widest mt-2"
        >
          {subtitle}
        </motion.h2>
      </div>
    </div>
  );
};

export default SectionHeader;

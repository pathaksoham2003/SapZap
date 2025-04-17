import React from "react";
import { HeroSoham } from "../../../images";
import Social from "../../../components/Social";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center pt-[80px]">
      {/* Animated color gradients */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-60 h-80 rotate-45 bg-gradient-to-br from-indigo-500 via-blue-500 to-transparent blur-[100px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-60 h-80 rotate-45 bg-gradient-to-br from-purple-500 via-pink-500 to-transparent blur-[100px] pointer-events-none"
      />
      <div className="relative w-full flex flex-col lg:flex-row max-w-[1240px] px-6">
        <motion.div
          className="flex flex-col w-full lg:w-1/2 pt-4 items-center lg:items-start justify-center text-center lg:text-left text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-heading flex text-6xl sm:text-7xl font-semibold pt-5"
          >
            Hi, I
            <motion.span className="text-5xl sm:text-6xl text-primary">' </motion.span>
            m Soham
            <motion.div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary"></motion.div>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-heading text-xl sm:text-2xl py-5"
          >
            I'm a Full Stack Developer & AI Researcher
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-subheading text-lg sm:text-xl max-w-[500px]"
          >
            I've spent the last 3 years building and scaling software for some
            pretty cool companies. I also teach neural networks to remember
            things. In case you need a developer or a teacher, let's connect!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <Social />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="invisible h-0 md:visible  flex w-full lg:w-1/2 justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <img src={HeroSoham} className="w-full max-w-[400px] lg:max-w-[500px] h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

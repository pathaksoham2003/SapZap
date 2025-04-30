import {motion} from "framer-motion";

export default function Temp() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gray-900 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Animated color gradients */}
      <motion.div
        initial={{opacity: 0, scale: 0, rotate: 45}}
        animate={{opacity: 0.7, scale: 1, rotate: 45}}
        transition={{duration: 2}}
        className="absolute top-[-10%] left-[-10%] w-72 h-96 rotate-45 bg-gradient-to-br from-indigo-500 via-blue-500 to-transparent blur-[120px]"
      />
      <motion.div
        initial={{opacity: 0, scale: 0, rotate: 45}}
        animate={{opacity: 0.7, scale: 1, rotate: 45}}
        transition={{duration: 2}}
        className="absolute top-[-10%] right-[-10%] w-72 h-96 rotate-45 bg-gradient-to-br from-purple-500 via-pink-500 to-transparent blur-[120px]"
      />

      {/* Content - Fade-in when in view */}
      <motion.div
        className="relative flex flex-col items-center justify-center text-center text-white px-6"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.5, ease: "easeOut"}}
        viewport={{once: true}}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 0.2}}
          viewport={{once: true}}
        >
          We Transform Your Ideas For <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Websites And Apps
          </span>{" "}
          Into Reality
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 0.4}}
          viewport={{once: true}}
        >
          We specialize in crafting a unique digital presence that helps
          businesses grow and stand out in their industries.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-xl text-lg font-semibold"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1.5, delay: 0.6}}
          viewport={{once: true}}
        >
          Book a Consultation Call →
        </motion.button>
      </motion.div>
    </div>
  );
}

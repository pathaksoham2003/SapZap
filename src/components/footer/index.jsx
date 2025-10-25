import React, { useState } from "react";
import {
  FaWhatsapp,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { BGLessSoham } from "../../assets";
import { LiaConnectdevelop } from "react-icons/lia";
import { motion } from "framer-motion";

const Footer = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleSocialOpen = (url) => {
    window.open(url, "__blank");
  };

  return (
    <footer className="w-full text-heading bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        
        <motion.div
          className="relative flex text-black pr-28 from-30% rounded-l-full items-center overflow-hidden"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <div className="absolute right-16 top-0 h-full w-full bg-gradient-to-r transform skew-x-[-40deg] from-secondary via-secondary to-transparent origin-left z-0"></div>
          <div className="relative z-10 flex items-center space-x-4 pr-16">
            <img
              src={BGLessSoham}
              alt="Technolkar Logo"
              className="h-32 w-32 object-contain"
            />
            <div>
              <h1 className="text-3xl font-semibold">Soham Pathak</h1>
              {/* <p className="mt-2">+91 7887557175</p> */}
              <p>pathaksoham2003@gmail.com</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="relative flex text-black pl-28 from-30% rounded-r-full items-center overflow-hidden"
          initial={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute left-16 top-0 h-full w-full bg-gradient-to-l transform skew-x-[-40deg] from-primary via-primary to-transparent origin-left z-0"></div>

          <div className="relative z-10 flex items-center space-x-4 pl-16">
            {/* <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleSocialOpen("https://wa.me/917887557175")}
            >
              <FaWhatsapp
                size={30}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <span className="mt-2 text-sm text-black">WhatsApp</span>
            </div> */}

            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                handleSocialOpen(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=pathaksoham2003@gmail.com"
                )
              }
            >
              <FaGoogle
                size={30}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <span className="mt-2 text-sm text-black">Gmail</span>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                handleSocialOpen("https://www.youtube.com/@MoneySutraFinServ")
              }
            >
              <FaYoutube
                size={30}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <span className="mt-2 text-sm text-black">YouTube</span>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() =>
                handleSocialOpen(
                  "https://www.linkedin.com/in/soham-pathak-86726b22a/"
                )
              }
            >
              <FaLinkedin
                size={30}
                className="text-black group-hover:scale-110 transition-transform"
              />
              <span className="mt-2 text-sm text-black">LinkedIn</span>
            </div>

            <motion.div
              className="w-32 h-32 bg-black flex justify-center items-center rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            >
              <LiaConnectdevelop size={90} className="text-secondary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        {animationComplete && (
          <>
            <p>
              Developed by{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Soham Pathak
              </a>
            </p>
            <p>© Copyright 2024, All Rights Reserved by Soham Pathak</p>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;

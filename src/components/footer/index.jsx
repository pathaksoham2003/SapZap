import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {HeroSoham} from "../../images";
import {BGLessSoham} from "../../assets";

const Footer = () => {
  return (
    <footer className="w-full text-heading bg-background px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        <div className="flex text-black bg-gradient-to-r pr-28 from-secondary to-transparent from-30% rounded-l-full items-center space-x-4">
          <img
            src={BGLessSoham} 
            alt="Technolkar Logo"
            className="h-32 w-32 object-contain"
          />
          <div className="">
            <h1 className="text-3xl font-semibold">Soham Pathak</h1>
            <p className="mt-2">+91 7887557175</p>
            <p>pathaksoham2003@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Socials</h2>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-pink-400"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <FaLinkedinIn /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          Developed by{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Soham Pathak
          </a>
        </p>
        <p>© Copyright 2024, All Rights Reserved by Soham Pathak</p>
      </div>
    </footer>
  );
};

export default Footer;

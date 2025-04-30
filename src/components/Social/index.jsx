import React from "react";
import {
  FaWhatsapp,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Social = () => {
  const handleSocialOpen = (url) => {
    window.open(url, "__blank");
  };

  return (
    <div className="bg-gradient-to-r from-primary rounded-l-xl pr-12">
      <div className="flex justify-evenly mt-3 min-w-[200px] p-2.5">
        <FaWhatsapp
          size={30}
          className="text-heading ml-4 cursor-pointer"
          onClick={() => handleSocialOpen("https://wa.me/917887557175")}
        />
        <FaGoogle
          size={30}
          className="text-heading ml-4 cursor-pointer"
          onClick={() =>
            handleSocialOpen(
              "https://mail.google.com/mail/?view=cm&fs=1&to=pathaksoham2003@gmail.com"
            )
          }
        />
        <FaYoutube
          size={30}
          className="text-heading ml-4 cursor-pointer"
          onClick={() =>
            handleSocialOpen("https://www.youtube.com/@MoneySutraFinServ")
          }
        />
        <FaLinkedin
          size={30}
          className="text-heading ml-4 cursor-pointer"
          onClick={() =>
            handleSocialOpen(
              "https://www.linkedin.com/in/soham-pathak-86726b22a/"
            )
          }
        />
      </div>
    </div>
  );
};

export default Social;

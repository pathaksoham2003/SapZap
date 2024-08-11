import React from "react";
import { SapZap } from "../../images";

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-accent py-6">
      <div className="w-full flex max-w-[1204px]">
        <div className="w-52 h-52 rounded-full overflow-hidden">
          <img src={SapZap} />
        </div>
        <div className="flex flex-col ml-8">
          <h2 className="text-heading text-4xl">Soham Pathak</h2>
          <p className="w-[300px] ">
            {" "}
            Professional Web-Developer and AI Engineer
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pathaksoham2003@gmail.com">Send email</a>
          <a href="https://www.linkedin.com/in/soham-pathak-86726b22a/">Linkedin</a>
          <a href="https://github.com/pathaksoham2003">Github</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

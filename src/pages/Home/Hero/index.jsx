import React from "react";
import { HeroSoham, Kangaroo } from "../../../images";
import Social from "../../../components/Social";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center pt-[60px]">
      <div className=" w-full flex max-w-[1240px]">
        <div className="flex flex-col w-1/2 mt-20 pt-4">
          <h2 className="text-heading flex text-7xl font-semibold pt-5">
            Hi, I<span className="text-6xl text-primary">' </span>m Soham
            <div className="h-5 w-5 rounded-full bg-primary"></div>
          </h2>
          <h2 className="text-heading text-2xl py-5">
            I'm a Full Stack Developer & AI Researcher
          </h2>
          <p className="text-subheading text-xl pr-10">
            I've spend the last 3 years building and scaling software for some
            pretty cool companies. I also teach neural networks to remember
            things. In case you need developer or a teacher. Let's Connect!
          </p>
          <h2 className="animate-trans-right repeat-1 border-4 font-bold text-xl text-primary mt-14 border-primary relative flex items-center justify-center max-w-[250px] py-2 my-5 text-center rounded-lg px-5">
            Get In Touch
            <img className="absolute -right-12 h-32" src={Kangaroo} />
          </h2>
          <div>
            <Social/>
          </div>
        </div>
        <div className="flex">
          <img src={HeroSoham} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

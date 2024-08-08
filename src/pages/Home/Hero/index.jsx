import React from "react";
import { HeroSoham, Kangaroo } from "../../../images";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center pt-20">
      <div className=" w-full flex max-w-[1240px]">
        <div className="flex flex-col w-1/2 mt-20 pt-4">
          <h2 className="text-heading text-5xl py-5">
            Get your imagination to reality
          </h2>
          <p className="text-subheading text-2xl pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore
            mollitia eaque maiores consectetur corporis, ut rerum velit, alias
            inventore odio vel odit, quae libero dolor unde provident dolorem
            iste.
          </p>
          <h2 className="border-4 font-bold text-xl text-primary mt-14 border-primary relative flex items-center justify-center max-w-[250px] py-2 my-5 text-center rounded-lg px-5">
            Get In Touch
            <img className="absolute -right-12 h-32" src={Kangaroo}/>
          </h2>
        </div>
        <div className="flex">
          <img src={HeroSoham} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

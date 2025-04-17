import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import Connect from "./Connect";
import Experience from "./Experience";
import Counting from "./Counting";
import InfiniteTextStrip from "../../components/InfiniteStrip";
import Temp from "../Temp";
import ServiceCards from "../ServiceCards";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="w-full flex flex-1 flex-col min-h-screen">
      <Hero />
      <Resume/>
      <InfiniteTextStrip/>
      <Experience />
      <Counting />
      <Projects />
      <Connect />
      <Temp/>
      <div className="h-10">

      </div>
      <ServiceCards/>
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import Connect from "./Connect";
import Experience from "./Experience";
import Counting from "./Counting";
import InfiniteTextStrip from "../../components/InfiniteStrip";

const Home = () => {
  return (
    <div className="w-full flex flex-1 flex-col min-h-screen">
      <Hero />
      <InfiniteTextStrip/>
      <Experience />
      <Counting />
      <Projects />
      <Connect />
    </div>
  );
};

export default Home;

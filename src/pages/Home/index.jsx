import React from "react";
import Hero from "./Hero";
import Projects from "../Project";
import Connect from "./Connect";
import Experience from "./Experience";
import Counting from "./Counting";

const Home = () => {
  return (
    <div className="w-full flex flex-1 flex-col min-h-screen">
      <Hero />
      <Counting />
      <Projects />
      <Experience />
      <Connect />
    </div>
  );
};

export default Home;

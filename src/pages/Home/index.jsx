import React from "react";
import Hero from "./Hero";
import Project from "../Project";
import Connect from "./Connect";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="w-full flex flex-1 flex-col min-h-screen">
      <Hero />
      <Experience />
      <Project />
      <Connect />
    </div>
  );
};

export default Home;

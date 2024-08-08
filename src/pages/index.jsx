import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Root = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

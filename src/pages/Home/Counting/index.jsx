import React from "react";
import Counter from "../../../components/Counter";

const Counting = () => {
  return (
    <div className="w-full flex justify-center mt-20 bg-gradient-to-t from-primary py-10">
      <div className="w-full flex justify-center max-w-[1204px]">
        <div className="w-full flex flex-col md:flex-row justify-between max-w-[1000px]">
          <div className="text-2xl text-heading text-center font-semibold">
            <span className="text-6xl font-bold">
              <Counter className={"text-heading"} value={10} />+
            </span>{" "}
            <br /> Projects Completed
          </div>
          <div className="text-2xl text-heading text-center font-semibold">
            <span className="text-6xl font-bold">
              <Counter className={"text-heading"} value={1} />+
            </span>{" "}
            <br /> Year of Experience
          </div>
          <div className="text-2xl text-heading text-center font-semibold">
            <span className="text-6xl font-bold">
              <Counter className={"text-heading"} value={5} />+
            </span>{" "}
            <br /> Development Frameworks
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;

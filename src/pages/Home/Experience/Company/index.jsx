import React from "react";
import { AI } from "../../../../images";
import CompanyProject from "./CompanyProject";

const Company = ({ item }) => {
  return (
    <div className="w-full flex mt-10 flex-col mx-2">
      <div className="w-full flex justify-between">
        <h2 className="text-3xl text-heading font-bold">{item.companyName}</h2>
        <h2 className="text-heading">
          {item.start_date} - {item.end_date}
        </h2>
      </div>
      <div className="w-full flex justify-between">
        <h2 className="text-primary font-semibold my-2">{item.role}</h2>
        <h2 className="text-heading">{item.location}</h2>
      </div>
      <div></div>
      <div className="w-full flex flex-col pl-4">
        {item.projects.map((item) => (
          <CompanyProject item={item} />
        ))}
      </div>
    </div>
  );
};

export default Company;

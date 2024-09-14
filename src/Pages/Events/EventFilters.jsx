// All Videos Header Filters

import React, { Fragment, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

let categData = [
  "Tech & Enterpreneurship",
  "Finance",
  "Tech & Investor",
  "Teamwork",
];
let locData = ["Local", "My country", "International"];
let JobTypeData = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Internship",
  "Other (Please Specify)",
];
let expData = [
  "Entry-Level",
  "Mid-Level",
  "Senior",
  "Executive",
  "Internship",
  "No Experience required",
  "Other (Please Specify)",
];
let salRangeData = [
  "$30,000 - $50,000",
  "$50,000 - $50,000",
  "$50,000 - $120,000",
  "$120,000 and above",
  "Other (Please Specify)",
];
let eduData = [
  "High School",
  "Bachelor's Degree",
  "Associate Degree",
  "Master's Degree",
  "Ph.D or Doctorate",
  "Professional Certification",
  "Other (Please Specify)",
];
let compData = ["English", "Hindi", "French", "Spanish"];

function JobFilters() {
  // States for Selected Filter Data

  const [catSelectData, setCatSelectData] = useState("Select Categories");
  const [locSelectData, setLocSelectData] = useState("Select Location");
  const [JobTypeSelectData, setJobTypeSelectData] = useState("Select JobType");
  const [expSelectData, setexpSelectData] = useState("Select Experience");
  const [salRangeSelectData, setsalRangeSelectData] = useState(
    "Select Salary Range"
  );
  const [eduSelectData, setEduSelectData] = useState("Select Education");
  const [compSelectData, setCompSelectData] = useState("Select Company");

  // States for Open Filter

  const [catDrop, setCatDrop] = useState(false);
  const [locDrop, setLocDrop] = useState(false);
  const [JobTypeDrop, setJobTypeDrop] = useState(false);
  const [expDrop, setexpDrop] = useState(false);
  const [salRangeDrop, setsalRangeDrop] = useState(false);
  const [eduDrop, setEduDrop] = useState(false);
  const [compDrop, setCompDrop] = useState(false);

  // All Videos Header Filters

  return (
    <Fragment>
      <div className="flex items-center  overflow-y-visible JobFilScr bg-white w-full h-full px-3">
        <Link to="/filterevent" className="m-0 flex gap-2 items-center">
          <LuSettings2 /> |{" "}
        </Link>
        <Link
          to="/filterevent"
          className="px-4 py-1 ms-2 m-0 rounded-3xl cursor-pointer Video_Nav_Filters"
        >
          All
        </Link>
        <p
          className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters"
          onMouseOver={() => setCatDrop(true)}
          onMouseLeave={() => setCatDrop(false)}
        >
          Categories <RiArrowDropDownLine />
          {catDrop && (
            <div
              className="absolute w-[40vh] top-6 z-10"
              onClick={() => setCatDrop(false)}
            >
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {catSelectData} <RiArrowDropUpLine />
              </p>
              <div className="bg-white p-3 shadow-lg rounded-lg mt-2">
                {categData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setCatSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>
        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center  cursor-pointer Video_Nav_Filters text-sm relative"
          onMouseOver={() => setLocDrop(true)}
          onMouseLeave={() => setLocDrop(false)}
        >
          Location <RiArrowDropDownLine />
          {locDrop && (
            <div
              className="absolute w-[40vh] top-6 z-10 "
              onClick={() => setLocDrop(false)}
            >
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {locSelectData} <RiArrowDropUpLine />
              </p>
              <div className="bg-white p-3 shadow-lg rounded-lg mt-2">
                {locData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setLocSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>
        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters text-sm"
          onMouseOver={() => setJobTypeDrop(true)}
          onMouseLeave={() => setJobTypeDrop(false)}
        >
          Job Type <RiArrowDropDownLine />
          {JobTypeDrop && (
            <div className="absolute w-[40vh] top-6 z-10 ">
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {JobTypeSelectData} <RiArrowDropUpLine />
              </p>
              <div
                className="bg-white p-3 shadow-lg rounded-lg mt-2"
                onClick={() => setJobTypeDrop(false)}
              >
                {JobTypeData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setJobTypeSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>
        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters text-sm"
          onMouseOver={() => setexpDrop(true)}
          onMouseLeave={() => setexpDrop(false)}
        >
          Experience <RiArrowDropDownLine />
          {expDrop && (
            <div className="absolute w-[40vh] top-6 z-[110] ">
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {expSelectData} <RiArrowDropUpLine />
              </p>
              <div
                className="bg-white p-3 shadow-lg rounded-lg mt-2"
                onClick={() => setexpDrop(false)}
              >
                {expData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setexpSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>
        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters text-sm"
          onMouseOver={() => setsalRangeDrop(true)}
          onMouseLeave={() => setsalRangeDrop(false)}
        >
          Salary Range <RiArrowDropDownLine />
          {salRangeDrop && (
            <div className="absolute w-[40vh] top-6 z-10 ">
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {salRangeSelectData} <RiArrowDropUpLine />
              </p>
              <div
                className="bg-white p-3 shadow-lg rounded-lg mt-2"
                onClick={() => setsalRangeDrop(false)}
              >
                {salRangeData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setsalRangeSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>

        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters text-sm"
          onMouseOver={() => setEduDrop(true)}
          onMouseLeave={() => setEduDrop(false)}
        >
          Education <RiArrowDropDownLine />
          {eduDrop && (
            <div className="absolute w-[40vh] top-6 z-10 ">
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {eduSelectData} <RiArrowDropUpLine />
              </p>
              <div
                className="bg-white p-3 shadow-lg rounded-lg mt-2"
                onClick={() => setEduDrop(false)}
              >
                {eduData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setEduSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>

        <p
          className="px-4 py-1 flex-shrink-0 w-auto ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters text-sm"
          onMouseOver={() => setCompDrop(true)}
          onMouseLeave={() => setCompDrop(false)}
        >
          Company <RiArrowDropDownLine />
          {compDrop && (
            <div className="absolute w-[40vh] top-6 z-10 right-1 ">
              <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                {compSelectData} <RiArrowDropUpLine />
              </p>
              <div
                className="bg-white p-3 shadow-lg rounded-lg mt-2"
                onClick={() => setCompDrop(false)}
              >
                {compData.map((elm, ind) => (
                  <p
                    key={ind}
                    className="py-2"
                    onClick={(e) => setCompSelectData(e.target.textContent)}
                  >
                    {elm}
                  </p>
                ))}
              </div>
            </div>
          )}
        </p>
      </div>
    </Fragment>
  );
}

export default JobFilters;

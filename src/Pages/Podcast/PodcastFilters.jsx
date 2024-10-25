// All Videos Header Filters

import React, { Fragment, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import {Link} from 'react-router-dom';
let categData = ["Tech & Enterpreneurship","Finance","Tech & Investor","Teamwork",];
let durData = ["15 min", "30 min", "1 hour", "3 hour"];
let revData = ["All", "Finance", "Tech & Investor", "Teamwork"];
let subData = ["All", "Top", "Popular", "Subscribers"];
let lanData = ["English", "Hindi", "French", "Spanish"];

function PodcastFilters() {
  // States for Selected Filter Data

  const [catSelectData, setCatSelectData] = useState("Select Categories");
  const [durSelectData, setDurSelectData] = useState("Select Duration");
  const [revSelectData, setRevSelectData] = useState("Select Rebiews");
  const [subSelectData, setSubSelectData] = useState("Select Subscribe");
  const [lanSelectData, setLanSelectData] = useState("Select Language");

  // States for Open Filter

  const [catDrop, setCatDrop] = useState(false);
  const [durDrop, setDurDrop] = useState(false);
  const [revDrop, setRevDrop] = useState(false);
  const [subDrop, setSubDrop] = useState(false);
  const [lanDrop, setLanDrop] = useState(false);

  

  return (
    <Fragment>
        <div className="flex items-center bg-white h-[10%] px-3">
          <Link to='/filterpodcast' className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer ">
            <LuSettings2 className="text-xl"/> <pre className="text-xl"> |</pre>
          </Link>
          <Link to='/filterpodcast' className="px-4 py-1 m-0  ms-2 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters">All</Link>
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
            className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters"
            onMouseOver={() => setDurDrop(true)}
            onMouseLeave={() => setDurDrop(false)}
          >
            Duration <RiArrowDropDownLine />
            {durDrop && (
              <div
                className="absolute w-[40vh] top-6 z-10 "
                onClick={() => setDurDrop(false)}
              >
                <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                  {durSelectData} <RiArrowDropUpLine />
                </p>
                <div className="bg-white p-3 shadow-lg rounded-lg mt-2">
                  {durData.map((elm, ind) => (
                    <p
                      key={ind}
                      className="py-2"
                      onClick={(e) => setDurSelectData(e.target.textContent)}
                    >
                      {elm}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </p>
          <p
            className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters"
            onMouseOver={() => setRevDrop(true)}
            onMouseLeave={() => setRevDrop(false)}
          >
            Reviews <RiArrowDropDownLine />
            {revDrop && (
              <div className="absolute w-[40vh] top-6 z-10 ">
                <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                  {revSelectData} <RiArrowDropUpLine />
                </p>
                <div
                  className="bg-white p-3 shadow-lg rounded-lg mt-2"
                  onClick={() => setRevDrop(false)}
                >
                  {revData.map((elm, ind) => (
                    <p
                      key={ind}
                      className="py-2"
                      onClick={(e) => setRevSelectData(e.target.textContent)}
                    >
                      {elm}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </p>
          <p
            className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters"
            onMouseOver={() => setSubDrop(true)}
            onMouseLeave={() => setSubDrop(false)}
          >
            Subscribed <RiArrowDropDownLine />
            {subDrop && (
              <div className="absolute w-[40vh] top-6 z-10 ">
                <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                  {subSelectData} <RiArrowDropUpLine />
                </p>
                <div
                  className="bg-white p-3 shadow-lg rounded-lg mt-2"
                  onClick={() => setSubDrop(false)}
                >
                  {subData.map((elm, ind) => (
                    <p
                      key={ind}
                      className="py-2"
                      onClick={(e) => setSubSelectData(e.target.textContent)}
                    >
                      {elm}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </p>
          <p
            className="px-4 py-1 ms-2 m-0 rounded-3xl flex items-center relative cursor-pointer Video_Nav_Filters"
            onMouseOver={() => setLanDrop(true)}
            onMouseLeave={() => setLanDrop(false)}
          >
            Language <RiArrowDropDownLine />
            {lanDrop && (
              <div className="absolute w-[40vh] top-6 z-10 ">
                <p className="bg-white p-3 shadow-lg rounded-lg flex justify-between items-center">
                  {lanSelectData} <RiArrowDropUpLine />
                </p>
                <div
                  className="bg-white p-3 shadow-lg rounded-lg mt-2"
                  onClick={() => setLanDrop(false)}
                >
                  {lanData.map((elm, ind) => (
                    <p
                      key={ind}
                      className="py-2"
                      onClick={(e) => setLanSelectData(e.target.textContent)}
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

export default PodcastFilters;

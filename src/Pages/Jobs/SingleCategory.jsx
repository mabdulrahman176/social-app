import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

function Calendar2() {
  let navigate = useNavigate();
  let location = useLocation();

  const { title, data } = location.state || { title: "Jobs", data: [] }; // Extract title and data from location state

  return (
    <div className="h-full w-full bg-white">
      <h4 className="flex items-center gap-3 ms-4 pt-3 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/jobs")}
        />
        {title}
      </h4>
      <div className="overflow-y-scroll Podcast_Top_Videos h-[90%] px-4">
        <div>
          <div className="flex gap-1 flex-wrap w-full Podcast_Top_Videos">
            {data.map((elm, ind) => {
              const isLong = elm.jobTitle && elm.jobTitle.length > 20;
              const truncatedDescription = isLong
                ? elm.jobTitle.substring(0, 25) + "..."
                : elm.jobTitle;

              return (
                <div
                  key={ind}
                  className="h-[40vh] sm:w-[32.4%] w-[49.3%] gap-1 flex-shrink-0 shadow rounded-lg border relative"
                >
                  <div className="w-full">
                    <div className="flex gap-2 mt-2">
                      <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" />
                      <div>
                        <h1 className="font-semibold">{truncatedDescription}</h1>
                        <p className="font-light text-md">{elm.applicationDeadline}</p>
                      </div>
                    </div>
                    <p className="mt-7 ps-4 text-md opacity-65">{elm.location}</p>
                    <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                    <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      onClick={() => navigate("/jobdetail")}
                    >
                      {elm.jobType === " " ? "Apply Now" : "Applied"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Calendar2;

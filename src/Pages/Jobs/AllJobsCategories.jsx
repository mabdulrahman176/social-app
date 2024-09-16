import React, { useState, useEffect } from "react";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { useNavigate, Link } from "react-router-dom";
import { fetchData } from "../../API";

const CalendarSearch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(); // Use the function from api.js
        console.log(result);
        setData(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const handleSeeAllClick = (title) => {
    navigate("/singlecategory", { state: { title, data } });
  };

  return (
    <div className="ps-6 overflow-y-scroll Podcast_Top_Videos mt-1 h-[89%] bg-white">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold my-3">Jobs</p>
        <button
          className="p-2 text-[blue] me-5"
          onClick={() => handleSeeAllClick("Jobs")}
        >
          See all
        </button>
      </div>
      <div>
        <div className="flex gap-2 overflow-x-scroll w-full Podcast_Top_Videos">
          {data.slice(0, 4).map((elm, ind) => {
            const isLong = elm.jobTitle && elm.jobTitle.length > 25;
            const truncatedDescription = isLong
              ? elm.jobTitle.substring(0, 25) + "..."
              : elm.jobTitle;

            return (
              <div
                key={ind}
                className="h-[40vh] md:w-[33%] sm:w-[40%] w-[50%] flex-shrink-0 shadow rounded-lg border relative"
              >
                <div className="w-full">
                  <div className="flex gap-2 mt-2">
                    <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" />
                    <div>
                      <div className="relative inline-block group">
                        <h1 className="font-semibold">{truncatedDescription}</h1>
                        {isLong && (
                          <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                            {elm.jobTitle}
                          </span>
                        )}
                      </div>
                      <p className="font-light text-md">{elm.applicationDeadline}</p>
                    </div>
                  </div>
                  <p className="mt-7 ps-4 text-md opacity-65">{elm.location}</p>
                  <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                  {elm.jobType === " " ? (
                    <Link
                      to={"/jobdetail"}
                      state={{ id: elm._id }}
                      className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                      Apply Now
                    </Link>
                  ) : (
                    <div className="text-center flex items-center">
                      <Link
                        to={"/jobdetail"}
                        state={{ id: elm._id }}
                        className="w-[90%] mx-auto flex text-xs mt-7 justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      >
                        Applied
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-bold my-3">Related to your interest</p>
        <button
          className="p-2 text-[blue] me-5"
          onClick={() => handleSeeAllClick("Related to your interest")}
        >
          See all
        </button>
      </div>
      <div className="flex gap-2 overflow-x-scroll w-full Podcast_Top_Videos">
        {data.slice(0, 4).map((elm, ind) => {
          const isLong = elm.jobTitle && elm.jobTitle.length > 20;
          const truncatedDescription = isLong
            ? elm.jobTitle.substring(0, 25) + "..."
            : elm.jobTitle;

          return (
            <div
              key={ind}
              className="h-[40vh] md:w-[33%] sm:w-[40%] w-[50%] flex-shrink-0 shadow rounded-lg border relative"
            >
              <div className="w-full">
                <div className="flex gap-2 mt-2">
                  <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" />
                  <div>
                    <div className="relative inline-block group">
                      <h1 className="font-semibold">{truncatedDescription}</h1>
                      {isLong && (
                        <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                          {elm.jobTitle}
                        </span>
                      )}
                    </div>
                    <p className="font-light text-md">{elm.applicationDeadline}</p>
                  </div>
                </div>
                <p className="mt-7 ps-4 text-md opacity-65">{elm.location}</p>
                <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                {elm.jobType === " " ? (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                    Apply Now
                  </button>
                ) : (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                    Applied
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-bold my-3">Recommended Jobs</p>
        <button
          className="p-2 text-[blue] me-5"
          onClick={() => handleSeeAllClick("Recommended Jobs")}
        >
          See all
        </button>
      </div>
      <div className="flex gap-2 overflow-x-scroll w-full Podcast_Top_Videos">
        {data.slice(0, 4).map((elm, ind) => {
          const isLong = elm.jobTitle && elm.jobTitle.length > 20;
          const truncatedDescription = isLong
            ? elm.jobTitle.substring(0, 25) + "..."
            : elm.jobTitle;

          return (
            <div
              key={ind}
              className="h-[40vh] md:w-[33%] sm:w-[40%] w-[50%] flex-shrink-0 shadow rounded-lg border relative"
            >
              <div className="w-full">
                <div className="flex gap-2 mt-2">
                  <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" />
                  <div>
                    <div className="relative inline-block group">
                      <h1 className="font-semibold">{truncatedDescription}</h1>
                      {isLong && (
                        <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                          {elm.jobTitle}
                        </span>
                      )}
                    </div>
                    <p className="font-light text-md">{elm.applicationDeadline}</p>
                  </div>
                </div>
                <p className="mt-7 ps-4 text-md opacity-65">{elm.location}</p>
                <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                {elm.jobType === " " ? (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                    Apply Now
                  </button>
                ) : (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                    Applied
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default CalendarSearch;

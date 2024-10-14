import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { fetchData } from "../../API";

const CalendarSearch = () => {
  const [data, setData] = useState([]);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };
const currentUser = getUserId()
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
  const formatDate = (dateString) => {
    // Normalize the date input by replacing dashes with slashes
    const normalizedDateString = dateString.replace(/[-]/g, "/");

    // Split the date parts
    const dateParts = normalizedDateString.split("/");

    let day, month, year;

    // Check for different formats
    if (dateParts.length === 3) {
      // Check if the first part is a year (YYYY/MM/DD) or day (DD/MM/YYYY)
      if (dateParts[0].length === 4) {
        // Format: YYYY/MM/DD
        year = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        day = dateParts[2];
      } else {
        // Format: DD/MM/YYYY
        day = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        year = dateParts[2];
      }

      // Create a new Date object
      const date = new Date(year, month, day);

      // Ensure the date is valid
      if (
        date.getDate() == day &&
        date.getMonth() == month &&
        date.getFullYear() == year
      ) {
        // Format and return the date in DD/MM/YYYY
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(
          -2
        )}/${year}`;
      }
    }

    return "Invalid date format";
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
                    <img
                      src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"}
                      onLoad={(e) => (e.target.style.opacity = 1)}
                      onError={(e) => (e.target.src = "/placeholder.jpg")}
                      style={{
                        height: "40px",
                        width: "40px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      className="rounded-full"
                      alt="Profile"
                    />
                    <div>
                      <div className="relative inline-block group">
                        <h1 className="font-semibold">
                          {truncatedDescription}
                        </h1>
                        {isLong && (
                          <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                            {elm.jobTitle}
                          </span>
                        )}
                      </div>
                      <p className="font-light text-md">
                        {formatDate(elm.applicationDeadline)}
                      </p>
                    </div>
                  </div>
                  <p className="mt-7 ps-4 text-md opacity-65">{elm.location}({elm.workplaceType})</p>
                  <p className="ps-4 text-sm opacity-65 mt-3">
                    {elm.salaryRange}
                  </p>
                  {elm.userId === currentUser ? (
                    <Link
                      to={"/mycreatedjob"}
                      state={{ id: elm._id }}
                      className="w-[90%] flex justify-center items-center mx-auto  text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                     View Details
                    </Link>
                  ) : (
                    <div className="text-center flex items-center">
                      <Link
                        to={"/jobdetail"}
                        state={{ id: elm._id }}
                        className="w-[90%] mx-auto flex  text-xs mt-7 justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      >
                       Apply Now
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
                  {/* <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" /> */}
                  <img
                    src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"}
                    onLoad={(e) => (e.target.style.opacity = 1)}
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                    style={{
                      height: "40px",
                      width: "40px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="rounded-full"
                    alt="Profile"
                  />
                  <div>
                    <div className="relative inline-block group">
                      <h1 className="font-semibold">{truncatedDescription}</h1>
                      {isLong && (
                        <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                          {elm.jobTitle}
                        </span>
                      )}
                    </div>
                    <p className="font-light text-md">
                      {formatDate(elm.applicationDeadline)}
                    </p>
                  </div>
                </div>
                <p className="mt-7 ps-4 text-md opacity-65">{elm.location}({elm.workplaceType})</p>
                <p className="ps-4 text-sm opacity-65 mt-3">
                  {elm.salaryRange}
                </p>
                {elm.userId === currentUser ? (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/mycreatedjob")}
                  >
                   View Details
                  </button>
                ) : (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                   Apply Now
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
                  {/* <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" /> */}
                  <img
                    src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"}
                    onLoad={(e) => (e.target.style.opacity = 1)}
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                    style={{
                      height: "40px",
                      width: "40px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="rounded-full"
                    alt="Profile"
                  />
                  <div>
                    <div className="relative inline-block group">
                      <h1 className="font-semibold">{truncatedDescription}</h1>
                      {isLong && (
                        <span className="hidden group-hover:block absolute top-full left-0 bg-white p-2 border border-gray-300 z-10 ">
                          {elm.jobTitle}
                        </span>
                      )}
                    </div>
                    <p className="font-light text-md">
                      {formatDate(elm.applicationDeadline)}
                    </p>
                  </div>
                </div>
                <p className="mt-7 ps-4 text-md opacity-65">{elm.location}({elm.workplaceType})</p>
                <p className="ps-4 text-sm opacity-65 mt-3">
                  {elm.salaryRange}
                </p>
                {elm.userId === currentUser ? (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/mycreatedjob")}
                  >
                    View Details
                  </button>
                ) : (
                  <button
                    className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    onClick={() => navigate("/jobdetail")}
                  >
                   Apply Now
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

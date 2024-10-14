import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function AppliedJobs() {
const [appliedjobs ,setAppliedJobs] = useState([])
  const   getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  useEffect( ()=>{
    const appliedJobs = async () =>{
      try {
        const response = await axios.get(`${API_BASE_URL}/appliedjobs/my/${getUserId()}`);
        const result = response.data;
        const info = result.data
        console.log("appleid job data ",info)

        setAppliedJobs(info)
      }catch (error) {
        console.error('Error fetching wishlist items:', error);
      }
    }
    appliedJobs()
  },[])

  let navigate = useNavigate()

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
    <Fragment>
      <div className="sm:ps-6 w-full h-full bg-white" >
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/settings")}
          />{" "}
          Applied Jobs
        </h4>
        <div className="overflow-y-scroll w-[98%] mx-auto Podcast_Top_Videos h-[90%]">
          <div>
          <div className="flex  gap-1 flex-wrap w-full   ">
          {appliedjobs.map((elm, ind) => {

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
                      
                      className="w-[90%] mx-auto flex text-xs mt-7 cursor-not-allowed justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                     Applied
                    </Link>
                  </div>
                )}
              </div>
            </div>
            )
          }



           
          )}
        </div>
          </div>
       

          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default AppliedJobs;

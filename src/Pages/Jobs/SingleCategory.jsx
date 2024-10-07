import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function Calendar2() {
  let navigate = useNavigate();
  let location = useLocation();

  const { title, data } = location.state || { title: "Jobs", data: [] }; // Extract title and data from location state
  const formatDate = (dateString) => {
    if (!dateString) return "Invalid date"; // Return a message for undefined dates

    // Normalize the date input by replacing dashes with slashes
    const normalizedDateString = dateString.replace(/[-]/g, "/");

    // Split the date parts
    const dateParts = normalizedDateString.split("/");

    let day, month, year;

    // Check for different formats
    if (dateParts.length === 3) {
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

      const date = new Date(year, month, day);
      if (
        date.getDate() === parseInt(day) &&
        date.getMonth() === month &&
        date.getFullYear() === parseInt(year)
      ) {
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(-2)}/${year}`;
      }
    }

    return "Invalid date format";
  };
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
                      <img
                         src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"}
                        onLoad={(e) => (e.target.style.opacity = 1)}
                        onError={(e) => (e.target.src = "/placeholder.png")}
                        style={{ height: "40px", width: "40px", opacity: 0, transition: "opacity 0.3s ease" }}
                        className="rounded-full"
                        alt="Profile"
                      />
                      <div>
                        <h1 className="font-semibold">{truncatedDescription}</h1>
                        <p className="font-light text-md">{formatDate(elm.applicationDeadline)}</p>
                      </div>
                    </div>
                    <p className="mt-7 ps-4 text-md opacity-65">{elm.location}({elm.workplaceType})</p>
                    <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                    <button
  className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
  onClick={() => navigate("/jobdetail", { state: { id: elm._id, title: elm.jobTitle } })}
>
  {elm.jobType === " " ? "Apply Now" : "Apply Now"}
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

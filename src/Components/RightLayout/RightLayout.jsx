import React from "react";
import { BsCalendar4Event, BsSuitcaseLg } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { FaPodcast } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Right Side Bar Section

const RightLayout = ({state}) => {

  let locationPath = useLocation().pathname;


  return (
    <div className="text-white h-full w-full bg-gray-500">
      <h1 className="py-2 px-4">Explore</h1>
      <hr />
      <ul className="w-full overflow-x-hidden" onClick={()=>state.setRightSidebar(false)}>
        <li className="mb-2">
          <Link
            to="/videos"
            className={`flex items-center py-2 ms-2 mt-2 px-4 rounded-lg ${
              locationPath === "/videos" ? "Right_Side_Selected" : ""
            } transition-all duration-200 transform`}
          >
            <CiVideoOn className="mr-2" />
            <span className="text-sm">Videos</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/podcast"
            className={`flex items-center py-2 ms-2 px-4 rounded-lg  transition-all duration-200 transform ${
              locationPath === "/podcast" ? "Right_Side_Selected" : ""
            }`}
          >
            <FaPodcast className="mr-2" />
            <span className="text-sm">Podcast</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/events"
            className={`flex items-center py-2 ms-2 px-4 rounded-lg transition-all duration-200 transform ${
              locationPath === "/events" ? "Right_Side_Selected" : ""
            }`}
          >
            <BsCalendar4Event className="mr-2" />
            <span className="text-sm">Events</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/jobs"
            className={`flex items-center py-2 ms-2 px-4 rounded-lg transition-all duration-200 transform ${
              locationPath === "/jobs" ? "Right_Side_Selected" : ""
            }`}
          >
            <BsSuitcaseLg className="mr-2" />
            <span className="text-sm">Jobs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RightLayout;

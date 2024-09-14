import React from "react";
import { useNavigate } from "react-router-dom"; 
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiNotification2Line } from "react-icons/ri";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ state }) => {
  const navigate = useNavigate(); 

  return (
    <nav className="w-full overflow-x-hidden flex justify-between px-2 items-center py-1">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden"
          onClick={() => state.setRightSidebar(!state.rightSidebar)}
        />
      </div>

      <div className="flex gap-2 w-[80%] justify-center relative">
        <div className="flex justify-center lg:w-1/2 w-full mx-2 relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-3xl w-full border-[1px] outline-none px-2 py-1 border-gray-200"
            onClick={() => navigate("/search")} // Navigate to Search component on click
          />
          <div className="rounded-r-3xl border-[1px] bg-gray-200 border-gray-200 px-4 grid place-items-center border-l-0">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <div className="bg-gray-200 w-8 grid place-items-center rounded-full">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>

      <div className="flex gap-4 items-center mx-1">
        <RiNotification2Line />
        <img className="w-5 h-5 rounded-full" src="/insta.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

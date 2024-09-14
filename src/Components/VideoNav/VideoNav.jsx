import React, { Fragment } from "react";
import { LuSettings2 } from "react-icons/lu";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function VideoNav() {
  const navigate = useNavigate();
  const handleFilter = () => {
    navigate("/filters");
  };

  return (
    <Fragment>
      <div className="flex items-center bg-white h-[10%] px-3">
        <div className="flex gap-3 w-[80%]  justify-center">
          <div className="flex justify-center w-1/2">
            <div className="relative w-full ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10  py-2 bg-[#F6F6FF] rounded-3xl border-[1px] outline-none border-gray-200"
                name=""
                id=""
              />
            </div>
          </div>
          <div
            onClick={handleFilter}
            className="bg-[#F6F6FF] px-2 rounded-xl flex items-center cursor-pointer"
          >
            <p className="m-0 flex gap-2 items-center">
              <LuSettings2 /> |{" "}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default VideoNav;

// Single Video Section from Videos

import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoSquare } from "react-icons/bs";
import { FaChevronLeft, FaTiktok } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Model from "../ModalReport/Model";
import Review from "../Podcast/Review";

const ProfileVideo = () => {
  let navigate = useNavigate();

  // State for Open Report-Model
  const [repModOpen, setRepModOpen] = useState(false);
  const [revModOpen, setRevModOpen] = useState(false);

  // Single Video Section from Videos

  return (
    <Fragment>
      <section className="h-full w-full relative flex items-center bg-white">
        {revModOpen && (
          <div className="h-[95%] left-0 w-full absolute top-0 z-20 flex  justify-center items-center">
            <Review setRevModOpen={setRevModOpen} />
          </div>
        )}
        {repModOpen && (
          <div className="h-full w-full absolute top-0 z-20 flex  justify-center items-center">
            <Model setRepModOpen={setRepModOpen} />
          </div>
        )}
        <div className="w-[80%] sm:w-[65%] md:w-[55%] h-[95%] mx-auto rounded-xl relative">
          <div className="absolute z-10 rounded-lg left-0 top-0 h-full w-full ShadedBG">
            <div
              className="absolute cursor-pointer flex gap-2 items-center ps-2 text-lg text-white left-0 z-10"
              onClick={() => navigate("/profile")}
            >
              <FaChevronLeft className="text-xs" />
              Videos
            </div>
            <div className="absolute z-10 bottom-3 w-[60%] sm:w-[43%] p-3 text-white">
              <a href="/#" className="text-xl font-semibold">
                @azita-darvishi
              </a>
              <p className="py-1 w-[80%] text-sm">
                checking out new apple vision pro. Its amazing
              </p>
              <div className="flex">
                <p className="p-1 px-2 gap-2 rounded-lg flex items-center text-xs SVTBottom">
                  {/* <FontAwesomeIcon icon={faTicket} /> */}
                  <FaTiktok />
                  see you again
                </p>
              </div>
            </div>

            <div className="absolute bottom-3 z-10 right-2 text-white">
              <div className="relative cursor-pointer rounded-full flex justify-center">
                <img
                  src="/profile.png"
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-full"
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute -bottom-2   p-1 text-xs bg-blue-700 rounded-full"
                />
              </div>

              <div
                className="text-center cursor-pointer mt-5"
                onClick={() => setRepModOpen(true)}
              >
                <p className="text-xs">
                  {/* <RiGitRepositoryCommitsFill  /> */}
                  <BsInfoSquare className="block text-lg mx-auto" />
                  Report
                </p>
              </div>

              <div
                className="text-center cursor-pointer mt-5"
                onClick={() => setRevModOpen(true)}
              >
                <p className="text-xs">
                  <CiStar className="block text-2xl mx-auto" />
                  Reviews
                </p>
              </div>

              <div className="text-center cursor-pointer mt-5 mb-3">
                <p className="text-xs m-0">
                  <FaRegShareFromSquare className="block text-lg mx-auto" />
                  Share
                </p>
              </div>
            </div>
          </div>

          {/* <video
            src={source}
            autoPlay
            className="h-full relative z-0 rounded-xl w-full bg-slate-300 object-fill"
          ></video> */}
        </div>
      </section>
    </Fragment>
  );
};

export default ProfileVideo;

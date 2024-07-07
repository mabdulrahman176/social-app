import React, { Fragment, useState } from "react";
import { BsCalendar4Event, BsSuitcaseLg } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { LuPodcast } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

import PublicProfileVideos from "./PublicProfileVideos";
import PublicProfilePodcats from "./PublicProfilePodcats";
import PublicProfileEvents from "./PublicProfileEvents";
import PublicProfileJobs from "./PublicProfileJobs";
import { FaPlus } from "react-icons/fa";

const ProfilePublic = () => {
  const [activeTab, setActiveTab] = useState("Video");

  return (
    <Fragment>
      <div className="bg-white h-full w-full">
          <div className="w-[25%] h-[6%]  flex items-center gap-3 ps-3">
            {/* <FaArrowLeft className="border-2 rounded-[7px] text-2xl font-semibold p-1" /> */}
            <p className="text-lg flex items-center px-3">Profile</p>
          </div>
        <div className="flex justify-center h-[32%]">

          <div className="flex sm:w-[75%] gap-2 w-[95%] items-center">
            <div className=" rounded-full flex justify-end w-[40%] relative">
              <img
                className="rounded-full w-[120px] h-[120px]"
                src="./profile.png"
                alt=""
              />
              <FaPlus className="absolute -ml-8 -bottom-1 font-extralight text-white p-2 text-2xl bg-blue-700 rounded-full" />
            </div>
            <div className="py-3 px-6 w-[60%]">
              <h1 className="text-xl ">Profile reviews</h1>
              <div className="flex py-1 space-x-2">
                <FaStar className="text-[#FFDD55] text-lg" />
                <FaStar className="text-[#FFDD55] text-lg" />
                <FaStar className="text-[#FFDD55] text-lg" />
                <FaStar className="text-[#FFDD55] text-lg" />
                <FaStar className="text-[#FFDD55] text-lg" />
                <h1 className="text-sm">4.7 out of 5</h1>
              </div>
              <p className="text-sm opacity-65">1,478 global rating</p>
              <div className="flex text-blue-600 text-sm py-2">
                <a href="/">view personal info</a>
                <MdKeyboardArrowRight className="text-2xl " />
              </div>
              <div className="flex gap-2">
                <button className="px-8 p-0 rounded-2xl text-white text-xs	py-2 bg-[#6165F3]">
                  Subscribe
                </button>
                <button className=" rounded-2xl px-8 py-2 text-xs bg-[#F6F6FF]">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex text-[25px] items-center justify-center border-t-[2px] h-[8%]">
          <div className="w-[50%] flex justify-between py-2">
            <CiVideoOn className="cursor-pointer opacity-70" onClick={() => setActiveTab("Video")} />
            <LuPodcast className="cursor-pointer opacity-70" onClick={() => setActiveTab("Podcast")} />
            <BsCalendar4Event className="cursor-pointer opacity-70" onClick={() => setActiveTab("Event")} />
            <BsSuitcaseLg className="cursor-pointer opacity-70" onClick={() => setActiveTab("Job")} />
          </div>
        </div>
        <section className="h-[54%] w-full overflow-y-scroll Podcast_Top_Videos">
          {activeTab === "Video" ? (
            <PublicProfileVideos />
          ) : activeTab === "Podcast" ? (
            <PublicProfilePodcats />
          ) : activeTab === "Event" ? (
            <PublicProfileEvents />
          ) : activeTab === "Job" ? (
            <PublicProfileJobs />
          ) : (
            ""
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default ProfilePublic;

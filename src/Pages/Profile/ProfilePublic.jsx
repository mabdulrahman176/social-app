import React, { Fragment, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { fetchProfile } from "../../API";

const ProfilePublic = () => {
  // useEffect(()=>{handleSubmit()},[])
  const [activeTab, setActiveTab] = useState("Video");
  const [profile, setProfile] = useState({});
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('file is ',file)
  };

  const handleSubmit = async () => {
    const formData = new FormData(); 
    // formData.append('profileData', JSON.stringify(profile)); // Appending profile data as a string
    if (file) {
      formData.append('profilePic', file); // Appending the file
    }
console.log(formData)
const req = await fetch('http://localhost:5000/users/13be212c-271f-419a-adc7-0ed309af052b', {
  credentials: 'include',
  method: "PUT",
  body: formData,
});
    const d = await req.json();
    console.log(d);
    // navigate('/jobs')
    // JobStates.setJobSubmitted(!JobStates.jobSubmitted)
  };

  const _onChange_ = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };



  useEffect(() => {
    const getprofileData = async () => {
      try {
        const result = await fetchProfile('13be212c-271f-419a-adc7-0ed309af052b'); // Use the function 
        console.log(result);
        setProfile((prev)=>{
          return {
            ...prev,
            ...result
          }
        });
        console.log("[profile")
        console.log(profile)
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getprofileData();
  }, []);


  return (
    <Fragment>
      <div className="bg-white h-full w-full">
        <div className="w-full md:w-[25%] h-auto md:h-[6%] flex items-center gap-3 ps-3">
          <p className="text-lg flex items-center px-3">Profile</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center h-auto md:h-[32%] mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-[75%] items-center">
            <div className="rounded-full flex justify-center md:justify-end w-[60%] md:w-[40%] relative">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <img
                // loading="lazy"
                  className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover"
                  src={profile.picUrl}
                  alt=""
                />
                <FaPlus className="absolute lg:bottom-2 -bottom-3 md:bottom-1 text-white text-xl p-1 bg-blue-700 rounded-full" />
              </label>
            </div>
            <div className="py-3 px-4 md:px-6 w-full md:w-[60%]">
              <h1 className="text-lg md:text-xl">Profile reviews</h1>
              <div className="flex py-1 space-x-2">
                <FaStar className="text-[#FFDD55] text-sm md:text-lg" />
                <FaStar className="text-[#FFDD55] text-sm md:text-lg" />
                <FaStar className="text-[#FFDD55] text-sm md:text-lg" />
                <FaStar className="text-[#FFDD55] text-sm md:text-lg" />
                <FaStar className="text-[#FFDD55] text-sm md:text-lg" />
                <h1 className="text-xs md:text-sm">4.7 out of 5</h1>
              </div>
              <p className="text-xs md:text-sm opacity-65">1,478 global rating</p>
              <div className="flex text-blue-600 text-xs md:text-sm py-2">
                <Link to='/personaldetails'>view personal info</Link>
                <MdKeyboardArrowRight className="text-xl md:text-2xl" />
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  className="px-6 py-2 rounded-2xl text-white text-xs bg-[#6165F3]"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button onClick={()=>console.log(profile)} className="px-6 py-2 rounded-2xl text-xs bg-[#F6F6FF]">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex text-[25px] items-center justify-center border-t-[2px] h-[8%]">
          <div className="w-[50%] flex justify-between py-2">
            <CiVideoOn
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Video")}
            />
            <LuPodcast
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Podcast")}
            />
            <BsCalendar4Event
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Event")}
            />
            <BsSuitcaseLg
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Job")}
            />
          </div>
        </div>
        <section className="h-[54%] w-full overflow-y-scroll Podcast_Top_Videos">
          <div style={{ display: activeTab === "Video" ? "block" : "none" }}>
            <PublicProfileVideos />
          </div>
          <div style={{ display: activeTab === "Podcast" ? "block" : "none" }}>
            <PublicProfilePodcats />
          </div>
          <div style={{ display: activeTab === "Event" ? "block" : "none" }}>
            <PublicProfileEvents />
          </div>
          <div style={{ display: activeTab === "Job" ? "block" : "none" }}>
            <PublicProfileJobs />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ProfilePublic;

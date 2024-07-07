import React, { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";


const JobCreationform = () => {
  const navigate = useNavigate();
  let { JobStates} = useContext(myContext)



  const handleSubmit = ()=>{
    navigate('/jobs')
    JobStates.setJobSubmitted(!JobStates.jobSubmitted)
  }



  return (
    <div className=" bg-white h-full w-full ">
      <h4 className="flex items-center  gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/jobs")}
        />{" "}
        Job Creation
      </h4>
      <div className="flex flex-wrap  justify-between overflow-y-scroll Podcast_Top_Videos h-[90%] w-[90%] mx-auto">
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobtitle">
            Job title *
          </label>
          <input
            type="text"
            id="jobtitle"
            placeholder="Enter title"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="education">
            Education Level *
          </label>
          <select
            id="education"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="$30,300-$90,000">$30,300-$90,000</option>
            <option value="$20,300-$70,000">$20,300-$70,000</option>
            <option value="$40,300-$60,000">$40,300-$60,000</option>
            <option value="$50,300-$80,000">$50,300-$80,000</option>
            <option value="$60,300-$70,000">$60,300-$70,000</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobdescription">
            Job description *
          </label>
          <textarea
            id="jobdescription"
            rows="4"
            className="w-full md:w-80 rounded-md border focus:outline-none focus:ring-2 focus:ring-slate-600"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="companysize">
            Company Size *
          </label>
          <select
            id="companysize"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="$30,300-$90,000">$30,300-$90,000</option>
            <option value="$20,300-$70,000">$20,300-$70,000</option>
            <option value="$40,300-$60,000">$40,300-$60,000</option>
            <option value="$50,300-$80,000">$50,300-$80,000</option>
            <option value="$60,300-$70,000">$60,300-$70,000</option>
          </select>
        <div className="">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="category">
            Job Category *
          </label>
          <select
            id="category"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>
        </div>


        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="workplace">
            Workplace type *
          </label>
          <select
            id="workplace"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          
        <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="workplace">Select Location*</label>
          
          <div className="">
            <input
              type="text"
              id="location"
              placeholder="Select location"
              className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
            />
            <input
              type="text"
              id="location"
              placeholder="Write location"
              className=" w-full mt-2 border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
            />
          </div>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="skills">
            Add Skills *
          </label>
          <input
            type="text"
            id="skills"
            placeholder="Enter skills"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobtype">
            Job type *
          </label>
          <select
            id="jobtype"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="deadline">
            Application Deadline *
          </label>
          <select
            id="deadline"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="1-week">1 week</option>
            <option value="2-weeks">2 weeks</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="experience">
            Experience Level *
          </label>
          <select
            id="experience"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="entry-level">Entry-Level</option>
            <option value="mid-level">Mid-Level</option>
            <option value="senior-level">Senior-Level</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="language">
            Language *
          </label>
          <select
            id="language"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="salary">
            Salary Range *
          </label>
          <select
            id="salary"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="$30,000-$50,000">$30,000-$50,000</option>
            <option value="$30,000-$70,000">$30,000-$70,000</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobshift">
            Job Shift *
          </label>
          <select
            id="jobshift"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="programming">Programming</option>
            <option value="design">UI Designer</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="Travel">
            Travel Requirement *
          </label>
          <select
            id="Travel"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="Travel">Programming</option>
            <option value="design">UI Designer</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="workplacetype">
            Workplace type *
          </label>
          <select
            id="workplacetype"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
          </select>
        </div>
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="Skils">
            Skills *
          </label>
          <input
            type="text"
            placeholder="Enter Skill"
            className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>
      <div className="flex w-full justify-center mt-8">
        <button className="w-64 h-12 rounded-full  buyticket text-white text-center" 
        onClick={handleSubmit}>
          Post Job
        </button>
      </div>

      <br /> <br />
      </div>

    </div>
  );
};

export default JobCreationform;

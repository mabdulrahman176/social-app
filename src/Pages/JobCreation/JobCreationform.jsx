import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";

const JobCreationform = () => {
  const navigate = useNavigate();
  const { JobStates } = useContext(myContext);
  const [state, setState] = useState({
    languages: [],
    skills: [],
  });
  const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }

  const handleSubmit = async () => {
    // Convert languages and skills strings to arrays
  //  Null check if sent empty
   const languages= state.languages.length>0?convertStringToArray(state.languages):[]
   const skills=  state.skills.length>0?convertStringToArray(state.skills):[]
   console.log({languages,skills})
    const dataToSubmit = {
      ...state,
      languages,
      skills,
      userId:getUserId()
    };

    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/jobs/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    });

    const d = await req.json();
    console.log(d);
    console.log(dataToSubmit);

    // Update the context state
    JobStates.setJobSubmitted(!JobStates.jobSubmitted);

    // Navigate to another page if needed
    // navigate("/jobs");
  };

  const _onChange_ = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function convertStringToArray(str) {
    // Split the string by commas and trim any whitespace
    return str
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  }

  return (
    <div className="bg-white h-full w-full">
      <h4 className="flex items-center gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/jobs")}
        />{" "}
        Job Creation
      </h4>
      <div className="flex flex-wrap justify-between overflow-y-scroll Podcast_Top_Videos h-[90%] w-[90%] mx-auto">
        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="jobtitle"
          >
            Job title *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="jobtitle"
            name="jobTitle"
            placeholder="Enter title"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="education"
          >
            Education Level *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="education"
            name="educationLevel"
            placeholder="Enter Education"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="jobdescription"
          >
            Job description *
          </label>
          <textarea
            onChange={_onChange_}
            id="jobdescription"
            name="jobDescription"
            rows="4"
            className="w-full md:w-80 rounded-md border focus:outline-none focus:ring-2 focus:ring-slate-600"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="companysize"
          >
            Company Size *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="companysize"
            name="companySize"
            placeholder="Enter Company Size"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="category"
          >
            Job Category *
          </label>
          <select
            onChange={_onChange_}
            id="category"
            name="jobCategory"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="workplace"
          >
            Workplace type *
          </label>
          <select
            onChange={_onChange_}
            id="workplace"
            name="workplaceType"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="location"
          >
            Select Location*
          </label>
          <div className="">
            <input
              type="text"
              onChange={_onChange_}
              id="location"
              name="location"
              placeholder="Select location"
              className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
            />
          </div>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="skills"
          >
            Add Skills *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="skills"
            name="skills"
            placeholder="Enter skills (comma separated)"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="jobtype"
          >
            Job type *
          </label>
          <select
            onChange={_onChange_}
            id="jobtype"
            name="jobType"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="deadline"
          >
            Application Deadline *
          </label>

          <input
            type="date"
            onChange={_onChange_}
            id="deadline"
            name="applicationDeadline"
            placeholder="Enter skills (comma separated)"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>
        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="experience"
          >
            Experience Level *
          </label>
          <select
            onChange={_onChange_}
            id="experience"
            name="experienceLevel"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="entry-level">Entry-Level</option>
            <option value="mid-level">Mid-Level</option>
            <option value="senior-level">Senior-Level</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="language"
          >
            Language *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="language"
            name="languages"
            placeholder="Enter languages (comma separated)"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="salary"
          >
            Salary Range *
          </label>

          <input
            type="text"
            onChange={_onChange_}
            id="salary"
            name="salaryRange"
            placeholder="Enter Salary Range"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="jobshift"
          >
            Job Shift *
          </label>

          <input
            type="text"
            onChange={_onChange_}
            id="jobshift"
            name="jobShift"
            placeholder="Job Shift Type"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="travel"
          >
            Travel Requirement *
          </label>
          <select
            onChange={_onChange_}
            id="travel"
            name="travelRequirement"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
          >
            <option value="none">None</option>
            <option value="occasionally">Occasionally</option>
            <option value="frequently">Frequently</option>
          </select>
        </div>

        <div className="flex w-full justify-center mt-8">
          <button
            className="w-64 h-12 rounded-full buyticket text-white text-center"
            onClick={handleSubmit}
          >
            Post Job
          </button>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default JobCreationform;

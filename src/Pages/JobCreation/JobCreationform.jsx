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
  const [loading, setLoading] = useState(false);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log("submitting");
    
    const languages = state.languages.length > 0 ? convertStringToArray(state.languages) : [];
    const skills = state.skills.length > 0 ? convertStringToArray(state.skills) : [];
    const dataToSubmit = {
      ...state,
      languages,
      skills,
      userId: getUserId(),
    };

    try {
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
      JobStates.setJobSubmitted(!JobStates.jobSubmitted);
      // Optionally navigate to another page
      // navigate("/jobs");
    } catch (error) {
      console.error("Error submitting job:", error);
    } finally {
      setLoading(false);
    }
  };

  const _onChange_ = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function convertStringToArray(str) {
    return str
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  }

  return (
    <div className="bg-white h-full w-full">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <h4 className="flex items-center gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/jobs")}
        />
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
            required
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
          <select
            onChange={_onChange_}
            id="education"
            name="educationLevel"
            required
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
           
          >
            <option value="">Select Education Level</option>
            <option value="high-school">High School</option>
            <option value="bachelor's-degree">Bachelor's Degree</option>
            <option value="associate-degree">Associate Degree</option>
            <option value="master-degree">Master Degree</option>
            <option value="phd-or-doctorate-degree">Ph.D. or Doctorate</option>
            <option value="professional-certification">Professional Certification</option>
            <option value="other">Other</option>
          </select>
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
            required
          ></textarea>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="companysize"
          >
            Company Size *
          </label>
          <select
            onChange={_onChange_}
            id="companysize"
            name="companySize"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
            required
          >
            <option value="">Select Company Size</option>
            <option value="startup">Startup (1-50 employees)</option>
            <option value="small-business">Small Business (51-500 employees)</option>
            <option value="medium-enterprise">Medium Enterprise (501-1000 employees)</option>
            <option value="large-corporation">Large Corporation (1000+ employees)</option>
            <option value="any-size">Any Size</option>
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
            required
          >
            <option value="">Select Workplace Type</option>
            <option value="on-site">On-site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="flexible">Flexible</option>
            <option value="location-dependent">Location Dependent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="location"
          >
            Select Location*
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="location"
            name="location"
            placeholder="Select location"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
            required
          />
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
            required
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
            required
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
            <option value="other">Other</option>
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
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
            required
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
            required
          >
            <option value="">Select Experience Level</option>
            <option value="entry-level">Entry-Level</option>
            <option value="mid-level">Mid-Level</option>
            <option value="senior-level">Senior-Level</option>
            <option value="executive">Executive</option>
            <option value="internship">Internship</option>
            <option value="no-experience-required">No Experience required</option>
            <option value="other">Other</option>
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
            required
          />
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="salary"
          >
            Salary Range *
          </label>
          <select
            onChange={_onChange_}
            id="salary"
            name="salaryRange"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
            required
          >
            <option value="">Select Salary Range</option>
            <option value="$300000 - below">$300000 - below</option>
            <option value="$50000 - $80000">$50000 - $80000</option>
            <option value="$80000 - $120000">$80000 - $120000</option>
            <option value="$120000 and above">$120000 and above</option>
          </select>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <label
            className="block text-gray-600 text-sm font-bold mt-4"
            htmlFor="jobshift"
          >
            Job Shift *
          </label>
          <select
            onChange={_onChange_}
            id="jobshift"
            name="jobShift"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
            required
          >
            <option value="">Select Job Shift</option>
            <option value="day">Day Shift</option>
            <option value="night">Night Shift</option>
            <option value="rotating">Rotating Shifts</option>
            <option value="domestic">Domestic Travel</option>
            <option value="variable">Variable</option>
            <option value="other">Other</option>
          </select>
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
            required
          >
            <option value="">Select Travel Requirement</option>
            <option value="no-travel">No Travel</option>
            <option value="occasional">Occasional Travel</option>
            <option value="frequent">Frequent Travel</option>
            <option value="domestic">Domestic Travel</option>
            <option value="international">International Travel</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex w-full justify-center mt-8">
          <button
            className="w-64 h-12 rounded-full buyticket text-white text-center"
            onClick={handleSubmit}
            disabled={loading}
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCreationform;

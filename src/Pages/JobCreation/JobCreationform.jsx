import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";
import { LuImagePlus } from "react-icons/lu"; // Make sure to import the icon

const JobCreationForm = () => {
  const navigate = useNavigate();
  const { JobStates } = useContext(myContext);
  const [state, setState] = useState({
    skills: [],
    singleLang: "", // Initialize singleLang
  });
  const [loading, setLoading] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null); // State to hold file object

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImageFile(file);
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    console.log("submitting");

    const skills = state.skills.length > 0 ? convertStringToArray(state.skills) : [];
    const formData = new FormData();
    formData.append("userId", getUserId());
    formData.append("logo", coverImageFile);  // Append the image file
    formData.append("skills", JSON.stringify(skills));
   
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });

    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/jobs/`, {
        credentials: "include",
        method: "POST",
        body: formData, // Send the FormData
      });

      const d = await req.json();
      console.log(d);
      console.log(formData);
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
        {/* Job Title */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobtitle">
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
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="companyName">
            Company Name *
          </label>
          <input
            type="text"
            onChange={_onChange_}
            id="companyName"
            name="companyName"
            required
            placeholder="Enter company name"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
          />
        </div>
<div className="sm:w-[40%] w-[45%]">
        <div className="mt-2 mb-2">
          <h1>Customize Cover</h1>
          <div className="bg-[#f0f0fe] w-full h-[25vh] rounded-lg flex items-center justify-center relative overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="absolute w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageUpload}
            />
            {coverImage ? (
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <LuImagePlus className="text-blue-800 ms-8 text-3xl" />
            )}
          </div>
        </div>
        </div>
 

        {/* Job Description */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobdescription">
            Job description *
          </label>
          <textarea
            onChange={_onChange_}
            id="jobdescription"
            name="jobDescription"
            cols="6"
            rows="6"
            className="w-full md:w-80 rounded-md border focus:outline-none focus:ring-2 focus:ring-slate-600"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

       {/* Education Level */}
       <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="education">
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
            <option value="High-School">High School</option>
            <option value="Bachelor's-Degree">Bachelor's Degree</option>
            <option value="Associate-Degree">Associate Degree</option>
            <option value="Master-Degree">Master Degree</option>
            <option value="Ph.D.-or-Doctorate-Degree">Ph.D. or Doctorate</option>
            <option value="Professional-Certification">Professional Certification</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Company Size */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="companysize">
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
            <option value="Startup">Startup (1-50 employees)</option>
            <option value="Small-Business">Small Business (51-500 employees)</option>
            <option value="Medium-Enterprise">Medium Enterprise (501-1000 employees)</option>
            <option value="Large-Corporation">Large Corporation (1000+ employees)</option>
            <option value="Any-Size">Any Size</option>
          </select>
        </div>

        {/* Workplace Type */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="workplace">
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
            <option value="On-Site">On-site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Flexible">Flexible</option>
            <option value="Location-Dependent">Location Dependent</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="location">
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

        {/* Skills */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="skills">
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

        {/* Job Type */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobtype">
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
            <option value="Full-time">Full time</option>
            <option value="Part-time">Part time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="deadline">
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

        {/* Experience Level */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="experience">
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
            <option value="Entry-Level">Entry-Level</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior-Level">Senior-Level</option>
            <option value="Executive">Executive</option>
            <option value="Internship">Internship</option>
            <option value="No-Experience-Required">No Experience required</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Language */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="singleLang">
            Language *
          </label>
          <select
            onChange={_onChange_}
            id="singleLang"
            name="singleLang" // Matches state key
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
            required
          >
            <option value="Language">Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="salary">
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

        {/* Job Shift */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="jobshift">
            Job Shift *
          </label>
          <select
            onChange={_onChange_}
            id="jobshift"
            name="jobShift"
            className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
            required
          >
            <option value="Job">Select Job Shift</option>
            <option value="Day">Day Shift</option>
            <option value="Night">Night Shift</option>
            <option value="Rotating">Rotating Shifts</option>
            <option value="Domestic">Domestic Travel</option>
            <option value="Variable">Variable</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Travel Requirement */}
        <div className="sm:w-[40%] w-[45%]">
          <label className="block text-gray-600 text-sm font-bold mt-4" htmlFor="travel">
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
            <option value="No-travel">No Travel</option>
            <option value="Occasional">Occasional Travel</option>
            <option value="Frequent">Frequent Travel</option>
            <option value="Domestic">Domestic Travel</option>
            <option value="International">International Travel</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
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

export default JobCreationForm;

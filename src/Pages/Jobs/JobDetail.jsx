import React, { useContext, useState, useEffect } from "react";
import { CiBookmark, CiCalendar, CiClock1 } from "react-icons/ci";
import { FaAngleLeft, FaBuilding, FaBookReader } from "react-icons/fa";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import JobAppliedSuccess from "./JobAppliedSuccess";
import { myContext } from "../../Context/CreateContext";

function Jobdetail() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [poster, setPoster] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("single job details ", job);
  useEffect(() => {
    const getData = async () => {
      if (loc.state && loc.state.id) {
        try {
          const result_ = await getJob(loc.state.id);
          console.log("Fetched job data poster:", result_.poster); // Log fetched data
          setJob(result_.job);
          setPoster(result_.poster);
        } catch (error) {
          console.error("Error fetching job data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("No job ID provided in location state");
        setLoading(false);
      }
    };
    getData();
  }, [loc.state]);
  console.log("Location state in Jobdetail:", loc.state);

  const getJob = async (id) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/jobs/${id}`,
      {
        method: "GET",
      }
    );

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    const d = await req.json();
    return d;
  };

  let { JobAppliedStates } = useContext(myContext);

  // Loading indicator or error handling can be added here
  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (!job) {
    return <div>No job found</div>; // Handle case when job is not found
  }

  const formatDate = (dateString) => {
    // Normalize the date input by replacing dashes with slashes
    const normalizedDateString = dateString.replace(/[-]/g, "/");

    // Split the date parts
    const dateParts = normalizedDateString.split("/");

    let day, month, year;

    // Check for different formats
    if (dateParts.length === 3) {
      // Check if the first part is a year (YYYY/MM/DD) or day (DD/MM/YYYY)
      if (dateParts[0].length === 4) {
        // Format: YYYY/MM/DD
        year = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        day = dateParts[2];
      } else {
        // Format: DD/MM/YYYY
        day = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        year = dateParts[2];
      }

      // Create a new Date object
      const date = new Date(year, month, day);

      // Ensure the date is valid
      if (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      ) {
        // Format and return the date in DD/MM/YYYY
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(
          -2
        )}/${year}`;
      }
    }

    return "Invalid date format";
  };

  return (
    <div className="h-full w-full bg-white relative">
      {JobAppliedStates.jobAppliedSuccess && <JobAppliedSuccess />}
      <h4 className="flex items-center gap-3 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/jobs")}
        />
        Jobs Details
      </h4>
      <div className="w-[95%] mx-auto h-[90%] overflow-y-scroll Podcast_Top_Videos">
        <div className="flex justify-between flex-wrap lg:flex-nowrap">
          <div className="marketing lg:w-[49%] w-[90%] mx-auto">
            <p className="text-xl font-bold">{job.jobTitle}</p>
            <div className="lg:block sm:flex justify-between">
              <div className="lg:w-full sm:w-[45%]">
                <div className="flex gap-3 my-4">
                  <img
                    src={poster.picUrl ? poster.picUrl : "/profile.png"}
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />
                  <div>
                    <p className="text-xl">Tangent Insurance Company</p>
                    <p className="text-[gray] text-sm">
                      {job.location} ({job.workplaceType}) {job.jobType}
                    </p>
                  </div>
                </div>
                <p>Application Deadline</p>
                <p className="text-[gray] mb-5 text-xs">
                  {formatDate(job.applicationDeadline)}
                </p>
                <div className="flex gap-3">
                  <CiCalendar className="text-xl" />
                  <div className="text-sm">
                    <p>{job.salaryRange}</p>
                    <p>{job.experienceLevel}</p>
                  </div>
                </div>
                <div className="flex gap-3 text-sm my-3">
                  <FaBuilding className="text-[gray] text-lg" />
                  <p>{job.companySize}</p>
                </div>
              </div>
              <div className="lg:w-full sm:w-[45%]">
                <div className="flex items-center gap-3 text-sm">
                  <CiClock1 className="text-lg" />
                  <p>{job.jobShift}</p>
                </div>
                <div className="flex gap-3 text-sm my-3">
                  <GiSkills className="text-xl text-[gray]" />
                  <div>
                    <p>{job.skills.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FaBookReader className="text-lg text-[gray]" />
                  <p>{job.educationLevel}</p>
                </div>
                <div className="flex items-center gap-3 text-sm my-3">
                  <BsFillBrightnessAltHighFill className="text-lg text-[gray]" />
                  <p>
                    See similar jobs from this company.
                    <Link to="/singlecategory" className="text-[blue]">
                      See jobs
                    </Link>
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  <div>
                    <p>Don't worry, your personal details will not be</p>
                    <p>shared with the employer.</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <img
                    src={poster.picUrl ? poster.picUrl : "/profile.png"}
                    alt=""
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <p className="text-[gray]">Posted by:</p>
                  <p className="text-lg font-semibold">
                    {poster.name ? poster.name : "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about lg:w-[49%] w-[90%] mx-auto lg:mt-0 mt-6">
            <div className="flex items-center gap-3">
              <CiBookmark />
              <p className="text-xl font-bold">About the job</p>
            </div>
            <div className="text-[15px] text-[gray] h-auto overflow-y-scroll Podcast_Top_Videos">
              <p className="text-lg font-bold text-black">About The Role</p>
              <p>{job.jobDescription}</p>
              <p className="text-lg font-bold text-black">Travel Requirement</p>
              <p>{job.travelRequirement}</p>
            </div>
            <div className="text-[15px] h-auto overflow-y-scroll Podcast_Top_Videos">
              <p className="text-lg font-bold">Languages</p>
              <div className="text-lg my-2">{job.singleLang}</div>
            </div>
            <button
              className="h-[7vh] w-full linear_gradient rounded-3xl mt-6 btn1"
              onClick={() =>
                navigate("/jobapply", {
                  state: { id: job._id, userId: job.userId },
                })
              }
            >
              Apply Now
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Jobdetail;

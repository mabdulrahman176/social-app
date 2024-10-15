import React, { useState, useEffect } from "react";
import {  CiCalendar, CiClock1 } from "react-icons/ci";
import { FaAngleLeft, FaBuilding, FaBookReader } from "react-icons/fa";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import JobAppliedSuccess from "./JobAppliedSuccess";
// import { myContext } from "../../Context/CreateContext";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify'; // Import toast components
// import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function MyCreatedJob() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  // const [poster, setPoster] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (loc.state && loc.state.id) {
        try {
          const result_ = await getJob(loc.state.id);
          setJob(result_.job);
          // setPoster(result_.poster);
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

  const getJob = async (id) => {
    const req = await fetch(
      `${API_BASE_URL}/jobs/${id}`,
      { method: "GET" }
    );

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`);
    }

    const d = await req.json();
    return d;
  };

  // const { JobAppliedStates } = useContext(myContext);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  if (!job) {
    return <div>No job found</div>; // Handle case when job is not found
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Invalid date";
    const normalizedDateString = dateString.replace(/[-]/g, "/");
    const dateParts = normalizedDateString.split("/");

    let day, month, year;
    if (dateParts.length === 3) {
      if (dateParts[0].length === 4) {
        year = dateParts[0];
        month = dateParts[1] - 1;
        day = dateParts[2];
      } else {
        day = dateParts[0];
        month = dateParts[1] - 1;
        year = dateParts[2];
      }

      const date = new Date(year, month, day);
      if (
        date.getDate() === parseInt(day) &&
        date.getMonth() === month &&
        date.getFullYear() === parseInt(year)
      ) {
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(-2)}/${year}`;
      }
    }

    return "Invalid date format";
  };

  // const getUserId = () => {
  //   const str = document.cookie;
  //   const userKey = str.split('=')[1];
  //   return userKey;
  // };

  // const user_id = getUserId();
  
//   const handleSaveToWishlist = async (jobId) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/wishlist`, {
//         wishItemType: 'job',
//         wishItemId: jobId,
//         userId: user_id,
//       });
      
//       console.log('Wishlist item saved:', response.data);
//       toast.success('Job saved to wishlist!'); // Use toast for success notification
//     } catch (error) {
//       console.error('Error saving to wishlist:', error);
//       toast.error('Could not save to wishlist. Please try again.'); // Use toast for error notification
//     }
//   };

  return (
    <div className="h-full w-full bg-white relative">
      {/* <ToastContainer /> Include ToastContainer for notifications */}
      {/* {JobAppliedStates.jobAppliedSuccess && <JobAppliedSuccess />} */}
      <h4 className="flex items-center gap-3 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)}
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
                    src={job.logoUrl ? job.logoUrl : "/placeholder.jpg"}
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />
                  <div>
                    <p className="text-xl">{job.companyName}</p>
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
                <Link to="/userprofile"
                    state={{id:job.userId ? job.userId : "unkown"}}
                >
                  {/* <div className="flex items-center gap-1 mt-2">
                  <img
                    src={poster.picUrl ? poster.picUrl : "/placeholder.jpg"}
                    alt=""
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <p className="text-[gray]">Posted by:</p>
                  <p className="text-lg font-semibold">
                    {poster.name ? poster.name : "Unknown"}
                  </p>
                </div> */}
                </Link>
              
              </div>
            </div>
          </div>
          <div className="about lg:w-[49%] w-[90%] mx-auto lg:mt-0 mt-6">
            <div className="flex justify-between">
              <p className="text-xl font-bold">About the job</p>
              {/* <CiBookmark
                className="text-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent bubbling up to parent elements
                  handleSaveToWishlist(job._id); // Pass the job ID
                }}
              /> */}
            </div>
            <div className="text-[15px] text-[gray] h-auto overflow-y-scroll Podcast_Top_Videos">
              <p className="text-lg font-bold text-black">About The Role</p>
              <p>{job.jobDescription}</p>
              <p className="text-lg font-bold text-black">Travel Requirement</p>
              <p>{job.travelRequirement}</p>
            </div>
            <div className="text-[15px] h-auto overflow-y-scroll Podcast_Top_Videos">
              <p className="text-lg font-bold">Language</p>
              <div className="text-lg my-2">{job.singleLang}</div>
            </div>
            {/* <button
              className="h-[7vh] w-full linear_gradient rounded-3xl mt-6 btn1"
              onClick={() =>
                navigate("/jobapply", {
                  state: { id: job._id, userId: job.userId },
                })
              }
            >
              Apply Now
            </button> */}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default MyCreatedJob;

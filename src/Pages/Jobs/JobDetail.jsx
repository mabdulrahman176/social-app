import React, { useContext, useState, useEffect } from "react";
import { CiBookmark, CiCalendar, CiClock1 } from "react-icons/ci";
import { FaAngleLeft, FaBuilding, FaBookReader,  } from "react-icons/fa";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import JobAppliedSuccess from "./JobAppliedSuccess";
import { myContext } from "../../Context/CreateContext";

function Jobdetail() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [job, setJob] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        if (loc.state) {
          const result_ = await getJob(loc.state.id);
          // console.log({jobIs:result_.job})
         setJob(()=>{
          return {
            ...result_.job
          }
         })
         console.log({job})
        }
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [loc.state]);

  const getJob = async (id) => {
    const req = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "GET",
    });
    const d = await req.json();
    return d;
  };

  let { JobAppliedStates } = useContext(myContext);

  return (
    <>
      <div className="h-full w-full bg-white relative">
        {JobAppliedStates.jobAppliedSuccess && <JobAppliedSuccess />}
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft className="cursor-pointer" onClick={() => navigate("/jobs")} /> 
          Jobs Details
        </h4>
        <div className="w-[95%] mx-auto h-[90%] overflow-y-scroll Podcast_Top_Videos">
          {/* {data.map((item,i) => ( */}
            <div className="flex justify-between flex-wrap lg:flex-nowrap">
              <div className="marketing lg:w-[49%] w-[90%] mx-auto">
                <p className="text-xl font-bold">{job.jobTitle}</p>
                <div className="lg:block sm:flex justify-between">
                  <div className="lg:w-full sm:w-[45%]">
                    <div className="flex gap-3 my-4">
                      <img
                        src="https://media.istockphoto.com/id/2155393401/photo/global-communication.webp?b=1&s=170667a&w=0&k=20&c=rjq4l1sBcWx2TR_ak_OJNX4i7pScNH2sb-j09y4a3QI="
                        alt=""
                        className="h-[40px] w-[40px] rounded-full"
                      />
                      <div>
                        <p className="text-sm">{job.jobCategory}</p>
                        <p className="text-[gray] text-sm">
                          {job.location} ({job.workplaceType}) {job.jobType}
                        </p>
                      </div>
                    </div>
                    <p className="text-[gray] mb-5 text-xs">{job.applicationDeadline}</p>
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
                        <p>{job.skills}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FaBookReader className="text-lg text-[gray]" />
                      <p>{job.educationLevel}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm my-3">
                      <BsFillBrightnessAltHighFill className="text-lg text-[gray]" />
                      <p>
                        See similar job from this company.{" "}
                        <Link to="/singlecategory" className="text-[blue]">
                          See jobs
                        </Link>
                      </p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      {/* <FaPersonWalkingArrowRight className="text-xl text-[gray]" /> */}
                      <div>
                        <p>Don't worry, your personal details will not be</p>
                        <p>shared with the employer.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <img
                        src="https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis="
                        alt=""
                        className="h-[30px] w-[30px] rounded-full"
                      />
                      <p className="text-[gray]">Posted by:</p>
                      <p className="text-lg font-semibold">James</p>
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
                  <div className="text-lg my-2">
                    {job.languages && job.languages.length > 0 ? (
                      job.languages.map((e, i) => <p key={i}>{e}</p>)
                    ) : (
                      "No languages specified"
                    )}
                  </div>
                  <p className="text-lg font-bold">Job Category</p>
                  <p className="text-lg my-3">{job.jobCategory}</p>
                </div>
                <button
                  className="h-[7vh] w-full linear_gradient rounded-3xl mt-6 btn1"
                  onClick={() => navigate("/jobapply")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Jobdetail;

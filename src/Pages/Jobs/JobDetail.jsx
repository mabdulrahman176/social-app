import React, { useContext } from "react";
import { CiBookmark, CiCalendar } from "react-icons/ci";
import { FaAngleLeft, FaBuilding } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { GiSkills } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import JobAppliedSuccess from "./JobAppliedSuccess";
import { myContext } from "../../Context/CreateContext";

let skillsData = [
  "UI/UX",
  "MERN Stack",
  "Figma",
  "Python",
  "JavaScript",
  "HTML CSS",
  "React",
];

function Jobdetail() {
  const navigate = useNavigate();

  let { JobAppliedStates } = useContext(myContext);
  return (
    <>
      <div className="h-full w-full bg-white relative">
        {JobAppliedStates.jobAppliedSuccess && <JobAppliedSuccess />}
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/jobs")}
          />{" "}
          Jobs Details
        </h4>
        <div className="w-[95%] mx-auto h-[90%] overflow-y-scroll Podcast_Top_Videos">
          <div className="flex justify-between flex-wrap lg:flex-nowrap">
            <div className="marketing lg:w-[49%] w-[90%] mx-auto">
              <p className="text-xl font-bold">Marketing head</p>
              <div className="lg:block sm:flex justify-between ">
                <div className="lg:w-full sm:w-[45%]">
                  <div className="flex gap-3 my-4">
                    <img
                      src="https://media.istockphoto.com/id/2155393401/photo/global-communication.webp?b=1&s=170667a&w=0&k=20&c=rjq4l1sBcWx2TR_ak_OJNX4i7pScNH2sb-j09y4a3QI="
                      alt=""
                      className="h-[40px] w-[40px] rounded-full"
                    />
                    <div className="div">
                      <p className="text-sm">Tangent Engineering, Inc.</p>
                      <p className="text-[gray] text-sm">
                        United State (Hybrid) Full- <br />
                        time
                      </p>
                    </div>
                  </div>
                  <p className="text-[gray] mb-5 text-xs">3 week ago</p>
                  <div className="flex gap-3">
                    <CiCalendar className="text-xl" />
                    <div className="text-sm">
                      <p>$80k/yr- $100k/yr + Bonus,Profit Sharing.</p>
                      <p>Mid-Senior Level</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm my-3">
                    <FaBuilding className="text-[gray] text-lg" />
                    <p>500+ Employees . Professional Services</p>
                  </div>
                </div>
                <div className="lg:w-full sm:w-[45%]">
                  <div className="flex items-center gap-3  text-sm">
                    <CiClock1 className=" text-lg" />
                    <p>Day Shift 9AM - 6PM</p>
                  </div>

                  <div className="flex gap-3 text-sm my-3">
                    <GiSkills className="text-xl text-[gray]" />
                    <div className="div">
                      <p>Skills: Marketing, Control System design,</p>
                      <p>Managment, +8 more</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <FaBookReader className=" text-lg text-[gray]" />
                    <p>Bachelors in Design</p>
                  </div>

                  <div className="flex items-center gap-3 text-sm my-3">
                    <BsFillBrightnessAltHighFill className=" text-lg text-[gray]" />
                    <p>
                      See similar job from this company.{" "}
                      <Link to="/singlecategory" className="text-[blue]">
                        See jobs
                      </Link>
                    </p>
                  </div>

                  <div className="flex gap-3 text-sm ">
                    <FaPersonWalkingArrowRight className="text-xl text-[gray]" />
                    <div className="div">
                      <p>Don't worry you personal details will not be</p>
                      <p>Shared with employer</p>
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
              <div className="text-[15px] text-[gray] h-[40vh] overflow-y-scroll Podcast_Top_Videos">
                <p>About The Role</p>
                <p>
                  We seek a skilled UX/UI expert with industrial-strenght design
                  skills to help us build the Xymbia platform
                </p>
                <p>About Us</p>
                <p>
                  Headquarteered in New York, NY, Xymbia inc. is on a mission to
                  rapidly enable trusted collabrations between professionais,
                  companies, and their customers.our vision is to enable people
                  to solve the most challanging problems of our time together.
                </p>
                <p>About You</p>
                <p>
                  Your a highly technical and accomplished UX designer and want
                  to work on the software that will power the next genration of
                  models for work.
                </p>
              </div>
              <p className="text-lg font-bold my-3">Skills</p>
              <div className="flex gap-2 text-sm overflow-x-scroll Podcast_Top_Videos">
                {skillsData.map((elm, ind) => (
                  <div
                    key={ind}
                    className="p-1 flex-shrink-0 px-4 bg-[#ecebeb] text-center text-xs rounded-full"
                  >
                    {elm}
                  </div>
                ))}
              </div>

              <p className="text-lg font-bold my-3">Industry</p>
              <div className="flex gap-2 text-sm overflow-x-scroll Podcast_Top_Videos">
                {skillsData.map((elm, ind) => (
                  <div
                    key={ind}
                    className="p-1 flex-shrink-0 px-4 bg-[#ecebeb] text-center text-xs rounded-full"
                  >
                    {elm}
                  </div>
                ))}
              </div>

              <button
                className="h-[7vh] w-full linear_gradient rounded-3xl  mt-6  btn1"
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

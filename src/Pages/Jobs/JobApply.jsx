import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";


function Apply() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  let { JobAppliedStates } = useContext(myContext)



  const handleApply = ()=>{
    JobAppliedStates.setJobAppliedSuccess(true)
    navigate('/jobdetail');
  }


  let navigate = useNavigate()
  return (
    <>
      <div className="h-full bg-white w-full">
      <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/jobdetail")}
          />{" "}
          Apply to tangent
        </h4>
        <div className="w-[80%] h-[90%] mx-auto overflow-x-scroll Podcast_Top_Videos md:pb-0 pb-4">
        <div className="flex justify-between md:flex-nowrap flex-wrap">
          <div className="md:w-[40%] w-[80%] mx-auto sm:mx-0">
            <form action="" className="mt-8">
              <label htmlFor="" className="block text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <label htmlFor="" className="block text-sm mt-5 mb-2">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label htmlFor="" className="block text-sm mb-2 mt-5">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="mt-5 text-sm">Upload resume*</p>
              <div className="h-[7vh] w-[70%] flex justify-center items-center px-5 rounded-3xl bg-[#e7e7f5] text-[blue] mt-2 relative text-xs ms-3">
                Upload resume
                <input type="file" name="" className="opacity-0 cursor-pointer h-full w-full rounded-full absolute left-0 top-0" id="" />
              </div>
            </form>
          </div>

          <div className="second md:w-[45%] w-[80%] mx-auto sm:mx-0">
            <form action="" className="mt-8">
            <label htmlFor="" className="block text-sm mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <label htmlFor="" className="block text-sm mt-5 mb-2">
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter Your Country Code"
                className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <p className="block text-sm mt-5 mb-2">
                Additional Details
              </p>
              <input
                type="text"
                className="placeholder:text-xs border-b ms-3 w-[100%] outline-none"
                placeholder="Where do you live?"
              />
              <p className="text-[gray] text-sm mt-5 ms-3">
                How many year of experiance do you have with figma?
              </p>
              <input
                type="text"
                className="placeholder:text-xs border-b w-full outline-none ms-3 ps-3 mb-10"
              />
            </form>

           <div className="flex items-center justify-between">
            <div className="h-[7vh] text-sm w-[48%] flex items-center justify-center PodcastSuccessGradient p-0 rounded-full" onClick={()=>navigate('/jobdetail')}>
           <button className="h-[93%] w-[98%] rounded-full bg-white">
              
              <button className="PodcastSuccessGradientText">Discard</button>
            </button>
            </div>
            <button className="h-[7vh] w-[48%] text-sm PodcastSuccessGradient rounded-3xl text-[white]" onClick={handleApply}>
              Apply
            </button>
           </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Apply;

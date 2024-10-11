import React, { Fragment, useContext } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { myContext } from "../../Context/CreateContext";
import { useNavigate } from "react-router-dom";


function JobAppliedSuccess(props) {
const navigate = useNavigate()
  // let { JobAppliedStates } = useContext(myContext)


  return (
    <Fragment>
      <div className="h-full w-full absolute top-0 left-0 bg-white flex flex-col justify-center  items-center">
        <RxCross2
          className="cursor-pointer  absolute top-5 left-3"
          
          onClick={() => 
          navigate("/appliedjobs")
      // JobAppliedStates.setJobAppliedSuccess(false)
}
          
        />

        <div className="flex flex-col justify-center">
          <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
            <MdDone className=" text-[#333af3] text-[12px]  " />
          </div>
          <h2 className="text-center py-6 text-xl font-semibold">
            Your Application was sent to <br />
            Tangent!
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default JobAppliedSuccess;

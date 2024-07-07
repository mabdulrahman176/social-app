import React, { Fragment } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


function PassChangeSuccess({setPassChange}) {


    let navigate = useNavigate()

    const handleChange = () => {
        setPassChange(false)
        navigate('/settings')
    }




  return (
    <Fragment>
      <div className="h-full w-full absolute top-0 left-0 z-20 bg-white flex flex-col justify-center  items-center">
        <RxCross2
          className="cursor-pointer  absolute top-5 left-3"
          onClick={handleChange}
          
        />

        <div className="flex flex-col justify-center">
          <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
            <MdDone className=" text-[#333af3] text-[12px]  " />
          </div>
          <h2 className="text-center py-6 text-xl font-semibold">
            Password Changed <br />
            Successfully
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default PassChangeSuccess;

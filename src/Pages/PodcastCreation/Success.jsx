import React, { useContext } from "react";
import { MdDone } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { myContext } from '../../Context/CreateContext';


const Success = () => {

  let { PodcastStates } = useContext(myContext)


  return (
    <div className="h-full w-full bg-white flex flex-col justify-center relative items-center">
          <RxCross2 className='cursor-pointer  absolute top-5 left-3' onClick={()=>PodcastStates.setPodcastSubmitted(false)}/>

      <div className="flex flex-col justify-center">
        <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
        <MdDone
          className=" text-[#333af3] text-[12px]  "
        />
        </div>
        <h2 className="text-center py-6 text-xl font-semibold">
          Podcast Successfully <br />
           Published
        </h2>
      </div>
      <div className="flex gap-3 mt-10">
        <div className="PodcastSuccessGradient rounded-full m-0 p-0 flex justify-center items-center">
        <div className="bg-white h-[95%] rounded-full w-[99%] m-0 p-0">
        <div className="flex items-center PodcastSuccessGradientText  justify-center gap-2 rounded-3xl w-40 h-10 ">
          <IoIosLink className="text-[#69CFDD]" />
          <p >Copy link</p>
        </div>
        </div>
        </div>
        <div className="flex items-center justify-center gap-2 PodcastSuccessGradient rounded-3xl w-40 h-10 ">
          <FaShareFromSquare size={20} className=" text-white" />
          <p className="  text-white">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Success;

import React from "react";
import Form from "./Form";
import { FaAngleLeft } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const PodcastForm = () => {
  let navigate = useNavigate();
  return (
    <>
        
        <h4 className="flex items-center bg-white  gap-3 ps-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/podcast")}
          />{" "}
          Create podcast
        </h4>
      <div className="h-[90%] w-full bg-white overflow-y-scroll Podcast_Top_Videos">
        <div className="md:w-[85%] w-[95%] px-5 mx-auto">
          <div className="flex justify-between items-center">
            <div className=" sm:w-[35%] w-[45%] h-[25vh] border-gray-500 rounded border-[3px]  flex justify-center relative items-center border-dashed">
              <input type="file" name="" className="h-full w-full absolute opacity-0 cursor-pointer" id="" />
              <h5 className="text-center text-xs font-thin text-gray-500">
                Record or upload <br />
                some audio, <br /> and it'll appear here{" "}
              </h5>
            </div>

            <div className=" sm:w-[35%] w-[45%] h-[25vh]">
              <h1 className="text-xs">Cutomize Cover</h1>
              <div className="bg-[#f0f0fe] flex items-center w-[100%] rounded-xl h-[90%] ">
                
                <LuImagePlus
                  className=" text-blue-800 ms-8 text-3xl"
                />
              </div>
            </div>
          </div>
          <Form />
        </div>
        <br />
      </div>
    </>
  );
};

export default PodcastForm;

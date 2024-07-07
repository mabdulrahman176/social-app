import React, { useContext } from "react";
import AddSpeaker from "./AddSpeaker";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";

const Form = () => {
  let { PodcastStates} = useContext(myContext)
  const navigate = useNavigate();
  
  
  const handleSubmit = ()=>{
    navigate('/podcast')
    PodcastStates.setPodcastSubmitted(!PodcastStates.podcastSubmitted)
  }

  return (
    <>
      <div className="flex justify-between relative w-full">
        

        <div className="sm:w-[35%] w-[45%]">
          <div className="pt-3">
            <label className="block text-gray-600 text-sm font-bold" htmlFor="">
              Episode Title<span className="text-red-800">*</span>
            </label>
            <input
              className=" w-full border py-2 p-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              id="username"
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div className="pt-5">
            <label className="block text-gray-600 text-sm font-bold" htmlFor="">
              Episode description<span className="text-red-800">*</span>
            </label>
            <textarea name="" id="" className=" w-full h-[15vh] border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs" placeholder="Enter Description"></textarea>
          </div>
          <div className="pt-5">
            <label className="block text-gray-600 text-sm font-bold" htmlFor="">
              Podcast type<span className="text-red-800">*</span>
            </label>
            <input
              className=" w-full border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              id="username"
              type="text"
              placeholder=" Podcast type"
            />
          </div>
        </div>

        <div className="sm:w-[40%] w-[45%]">
          <div className="flex justify-between">
            <div className="w-[49%] py-3">
              <label className="block text-gray-600 text-sm font-bold" htmlFor="">
                Season#
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                id="username"
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div className="w-[49%] py-3">
              <label className="block text-gray-600 text-sm font-bold" htmlFor="">
                Episode#
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                id="username"
                type="text"
                placeholder="Enter Title"
              />
            </div>
          </div>

          <div className="mt-2">
            <AddSpeaker />
          </div>
          <button
            className=" w-full  mt-14 border rounded-full buyticket text-center text-white  py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Publish Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;

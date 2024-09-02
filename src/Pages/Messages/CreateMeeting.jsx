import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Zoommeeting() {
  return (
    <>
      <div className="bg-white w-full h-full">
        <div className="main h-full overflow-y-scroll Podcast_Top_Videos w-[90%] m-auto">
          <div className='flex items-center gap-4 px-4 py-4 md:px-8 md:py-8'>
            <Link to='/messages/user1'> 
              <FaArrowLeftLong size={30} className='border-2 border-black p-2 rounded-md'/>
            </Link>
            <h1 className='text-xl md:text-3xl font-bold'>Create a Zoom Meeting</h1>
          </div>

          <p className="text-lg md:text-xl font-semibold">To:</p>
          <div className="h-auto w-full md:w-[15%] bg-gray-100 rounded-xl py-2 px-4 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="font-medium ml-2">Haroon</p>
          </div>

          <form action="" className="mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="" className="block text-lg md:text-xl font-medium">
                  Meeting Title *
                </label>
                <input
                  type="text"
                  placeholder="First interview"
                  className="w-full md:w-[60%] border outline-none rounded-lg p-3 mb-4 mt-1"
                />
                <label htmlFor="" className="block text-lg md:text-xl font-medium">
                  Select your time zone *
                </label>
                <select
                  name=""
                  id=""
                  className="border w-full md:w-[60%] p-3 rounded-lg outline-none mt-1 mb-4"
                >
                  <option value="">
                    <p className="text-gray-500">
                      UTC+5:45 Eastern Standard Time, Nepal 4:30 PM
                    </p>
                  </option>
                  <option value=""></option>
                </select>

                <label htmlFor="" className="block text-lg md:text-xl font-medium">
                  Select date *
                </label>
                <select
                  name=""
                  id=""
                  className="border w-full md:w-[60%] p-3 rounded-lg outline-none mt-1 mb-4"
                >
                  <option value="">
                    <p className="text-gray-500">Select date</p>
                  </option>
                  <option value=""></option>
                </select>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="" className="block text-lg md:text-xl font-medium">
                      Start time *
                    </label>
                    <select
                      name=""
                      id=""
                      className="border w-full p-3 rounded-lg outline-none mt-1 mb-4"
                    >
                      <option value="">
                        <p className="text-gray-500">Entry-Level</p>
                      </option>
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="" className="block text-lg md:text-xl font-medium">
                      End time *
                    </label>
                    <select
                      name=""
                      id=""
                      className="border w-full p-3 rounded-lg outline-none mt-1 mb-4"
                    >
                      <option value="">
                        <p className="text-gray-500">Entry-Level</p>
                      </option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <label htmlFor="" className="block text-lg md:text-xl font-medium">
                  Paste Call Link *
                </label>
                <div className="h-[8vh] w-full md:w-[60%] border rounded-lg pt-3 p-2">
                  <p className="text-gray-500">Paste Link</p>

                  <label htmlFor="" className="block text-lg md:text-xl font-medium mt-4">
                    Any Text *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    className="w-full border outline-none rounded-lg p-3 mb-7 mt-1"
                  />

                  <button className="h-[7vh] w-full linear_gradient rounded-3xl text-white mt-5">
                    Schedule meeting
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Zoommeeting;

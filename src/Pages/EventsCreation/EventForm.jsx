import React, { useContext } from "react";
import AddSpeaker from "../PodcastCreation/AddSpeaker";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";
import { FaAngleLeft } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";

const EventForm = () => {
  const navigate = useNavigate();
  let { EventStates } = useContext(myContext);

  const handleSubmit = () => {
    navigate("/podcast");
    EventStates.setEventSubmitted(!EventStates.eventSubmitted);
  };

  return (
    <>
      <h4 className="flex items-center bg-white  gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/events")}
        />{" "}
        Create Event
      </h4>
      <div className="w-full h-[90%] bg-white overflow-y-scroll Podcast_Top_Videos">
        <div className="flex sm:w-[80%] w-[95%] justify-between mx-auto h-full">
          <div className="sm:w-[40%] w-[45%]">
            <div className="mt-2 mb-2">
              <h1>Cutomize Cover</h1>
              <div className="bg-[#f0f0fe] w-full h-[25vh] rounded-lg flex items-center">
                <LuImagePlus className=" text-blue-800 ms-8 text-3xl" />
              </div>
            </div>
            <div className="my-4">
              <label
                className="block text-gray-600 text-sm font-bold "
                htmlFor=""
              >
                Events Title
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor=""
              >
                Events description
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter description "
              />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor="category"
              >
                Podcast Category*
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id="category"
                type="category"
                name="category"
                required
              >
                <option value="">Slect Event category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
            <div className="my-4">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor="date"
              >
                Select Date*
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                type="date"
                id="date"
                placeholder="select Date"
              />
            </div>
            <div className="">
              <label
                htmlFor="country"
                className="block text-gray-600 text-sm font-bold"
              >
                Select Location*
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id="country"
                name="country"
                required
              >
                <option value="">Select Country and City</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className="my-4">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Add Tickets Type *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select Event Formate</option>
              </select>
            </div>
            <div className="">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor=""
              >
                Basic <span className="text-2xl">×</span>
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                id=""
                placeholder="Enter price $35.00"
              />
            </div>
            <br />
          </div>

          <div className="sm:w-[40%] w-[45%]">
            <div className="my-4">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Event Type *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select event type</option>
              </select>
            </div>
            <div className="">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor="date"
              >
                Duration*
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                type="date"
                id="date"
                placeholder="select Date"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Event Formate *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select event type</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Network opportun *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select type</option>
              </select>
            </div>
            <div className="my-4">
              <AddSpeaker />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-600 text-sm font-bold"
                htmlFor="media"
              >
                Add Media
              </label>
              <input
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="media"
                id=""
                placeholder="Add imges and Vidoes"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Manage Privacy Settings *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select event type</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                className="block text-gray-600 text-sm font-bold"
              >
                Number of People *
              </label>
              <select
                className=" w-full border py-2 ps-3 rounded-lg  text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                id=""
                name=""
                required
              >
                <option value="">Select event type</option>
              </select>
            </div>
            <button
              className=" w-full h-12  mt-14 border rounded-3xl buyticket text-white  py-2 px-3 leading-tight focus:outline-none text-sm focus:shadow-outline"
              onClick={handleSubmit}
            >
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventForm;

import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const data = [
  { id: 1, text: "I just don't like it" },
  { id: 2, text: "It's a spam" },
  { id: 3, text: "Nudity and sexual activity" },
  { id: 4, text: "Hate speech or symbols" },
  { id: 5, text: "False information" },
  { id: 6, text: "Harassment" },
  { id: 7, text: "Scam or fraud" },
  { id: 8, text: "Suicide or self injury" },
  { id: 9, text: "Eating Disorder" },
  { id: 10, text: "Bullying" },
  { id: 11, text: "Other reasons" },
];

const Model = (props) => {
  const [clickedItems, setClickedItems] = useState({});
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleClick = (id) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReportClick = () => {
    setIsReportModalOpen(true);
  };

  const handleArrowClick = (direction) => {
    if (direction === "right") {
      setIsReportModalOpen(true);
    } else {
      setIsReportModalOpen(false);
    }
  };

  return (
    <React.Fragment>
      <section>
        <FontAwesomeIcon
          className="absolute w-4 h-4 rounded-full left-2 cursor-pointer"
          icon={faAngleLeft}
          onClick={() => handleArrowClick("left")}
        />
      </section>
      {!isReportModalOpen && (
        <div className=" flex relative shadow-lg items-center md:h-[74%] h-[90%] md:w-[67%] w-[50%] md:pb-0 pb-3 bg-white">
          <RiCloseLine
            className="absolute z-20 right-2 top-2 cursor-pointer"
            onClick={() => props.setRepModOpen(false)}
          />
          <section className="flex md:flex-nowrap flex-wrap relative items-center w-full h-[100%] font-[450] text-xs">
            <img
              className="md:w-[50%] w-full md:h-full h-[50%] relative"
              src="/VideoBoy.jpeg"
              alt="Img-1"
            />

            {/* <FontAwesomeIcon
              className="absolute bottom-8 rounded-full p-1  text-sm w-2 h-2 left-2 text-white bg-[#00000072]"
              icon={faUser}
            /> */}

            <div className="flex flex-col md:w-[55%] md:h-[90%] w-full h-[50%] ">
              <h1 className="font-semibold py-3 text-center">Report</h1>

              <hr className="bg-gray-300 w-full h-[1px]" />
              <h1 className="text-center font-semibold">
                Why you are reporting this video?
              </h1>
              <div className="px-4 overflow-y-scroll JobFilScr">
                {data.map((val) => (
                  <div
                    key={val.id}
                    className="flex items-center w-full p-2 text-black border-gray-300 border-b-[1px]"
                    onClick={() => handleClick(val.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h1 className="flex-1">{val.text}</h1>
                    {/* {clickedItems[val.id] && ( */}
                      <input type="radio" className="border-[2px] border-blue-600" name="name"/>
                    {/* )} */}
                  </div>
                ))}
              </div>
              <button
                className="mt-4 p-2 w-11/12 self-center linear_gradient text-white rounded"
                onClick={handleReportClick}
              >
                Report
              </button>
            </div>
          </section>
        </div>
      )}
      <section>
        <FontAwesomeIcon
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
          icon={faAngleRight}
          onClick={() => handleArrowClick("right")}
        />
      </section>

      {isReportModalOpen && (
        <div className="relative shadow-lg md:h-[74%] h-[90%] md:w-[67%] w-[50%] overflow-y-scroll Podcast_Top_Videos flex items-center  bg-white ">
          <RiCloseLine
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => props.setRepModOpen(false)}
          />

          <section className="flex md:flex-nowrap flex-wrap md:items-center w-full h-[100%] font-[450] text-xs">
            <img className="md:w-[45%] w-full md:h-full h-[45%]" src="/VideoBoy.jpeg" alt="" />
            <div className="flex flex-col md:w-[50%] md:h-full h-[50%] w-full md:p-4">
              <div className="flex items-center justify-between py-4">
                <h1>{""}</h1>
                <h1 className="font-semibold">Report</h1>
                <div className="flex items-center gap-1 text-end float-right ">
                  <section className="h-1 w-1 bg-black rounded-full"></section>
                  <section className="h-1 w-1 bg-black rounded-full"></section>
                  <section className="h-1 w-1 bg-black rounded-full"></section>
                </div>
              </div>
              <hr className="bg-gray-300 w-full h-[1px]" />
              <h1 className="text-center font-semibold pt-2 pb-6">
                Please specify why you are reporting this.
              </h1>
              <div className="px-4 flex flex-col justify-between h-full">
                <textarea
                  className="w-full outline-none h-20 p-2 border-none bg-gray-100 rounded"
                  placeholder="The person is..."
                ></textarea>
              </div>
              <button className="mt-4  p-2 linear_gradient w-1/2 self-center text-white rounded-2xl">
                Submit
              </button>
            </div>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};

export default Model;

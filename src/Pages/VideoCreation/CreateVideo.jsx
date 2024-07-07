import React, { useEffect, useState } from "react";
// import img1 from "./img3.jpeg";
import { GrCut } from "react-icons/gr";
import { RxCross2, RxText } from "react-icons/rx";
import { BsCcCircle } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import {  useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { FaCaretLeft, FaShareFromSquare } from "react-icons/fa6";
import { MdArrowDropDown, MdDone } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { TiGroupOutline } from "react-icons/ti";
import { PiEyeClosed } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

const Video = () => {
  const [inputData, setInpData] = useState("");
  const [inpType, setInpType] = useState("");
  const [first, setFirst] = useState("first");
  const [postPriv, setPostPriv] = useState("Anyone");
  const [postPrivShow, setPostPrivShow] = useState(false);
  const [vidPosSucc, setVidPostSucc] = useState(false);

  const navigate = useNavigate();
  let location = useLocation().state.data;

  useEffect(() => {
    setInpType(location[0].type);
    let inpURL = URL.createObjectURL(location[0]);
    setInpData(inpURL);
  }, [location]);

  const handleNavigate = () => {
    navigate("/videos");
    setVidPostSucc(false);
  };

  return (
    <>
      <div className="h-full flex items-center bg-white w-full relative overflow-y-scroll Podcast_Top_Videos">
        {vidPosSucc && (
          <div className="h-full w-full bg-white z-40 flex flex-col top-0 left-0 justify-center absolute items-center">
            <RxCross2
              className="cursor-pointer  absolute top-5 left-3"
              onClick={handleNavigate}
            />

            <div className="flex flex-col justify-center">
              <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
                <MdDone className=" text-[#333af3] text-[12px]  " />
              </div>
              <h2 className="text-center py-6 text-xl font-semibold">
                Video Successfully <br />
                Published
              </h2>
            </div>
            <div className="flex gap-3 mt-10">
              <div className="PodcastSuccessGradient rounded-full m-0 p-0 flex justify-center items-center">
                <div className="bg-white h-[95%] rounded-full w-[99%] m-0 p-0">
                  <div className="flex items-center PodcastSuccessGradientText  justify-center gap-2 rounded-3xl w-40 h-10 ">
                    <IoIosLink className="text-[#69CFDD]" />
                    <p>Copy link</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 PodcastSuccessGradient rounded-3xl w-40 h-10 ">
                <FaShareFromSquare size={20} className=" text-white" />
                <p className="  text-white">Share</p>
              </div>
            </div>
          </div>
        )}

        {first === "first" ? (
          <div className="md:w-[40%] sm:w-[50%] w-[60%] flex flex-col justify-center h-full mx-auto">
            {/* header   */}
            <div className="w-full flex justify-between items-center pb-2">
              <div
                className="flex w-[20%] cursor-pointer  justify-between font-normal"
                onClick={() => navigate("/videos")}
              >
                <RxCross1 size={23} />
                <h3 className="">Cancel</h3>
              </div>
              <button
                className="bg-[#eff0fe] w-24 h-8 rounded-xl text-[blue]"
                onClick={() => setFirst("second")}
              >
                Next
              </button>
            </div>
            {/* img-section */}
            <div className="w-full h-[78%] rounded-lg">
              {/* <img className="w-full h-full rounded-lg" src={img1} alt="" /> */}
              {inpType === "image/jpeg" || inpType === "image/png" ? (
                <img
                  className="w-full h-full rounded-lgbg-gray-200 "
                  src={inputData}
                  alt=""
                />
              ) : inpType === "video/mp4" ? (
                <video
                  controls
                  className="w-full h-full rounded-lg bg-gray-200 object-fill"
                  src={inputData}
                  alt=""
                />
              ) : (
                <h1 className="h-full w-full flex justify-center items-center bg-gray-200">
                  No Data Recieved
                </h1>
              )}
            </div>
            {/* edit-section */}
            <div className="w-[80%] bg-[#eff0fe] h-10  mt-3 rounded-2xl flex justify-evenly items-center mx-auto">
              <GrCut />
              <RxText />
              <BsCcCircle />
              <GrGallery />
            </div>
          </div>
        ) : first === "second" ? (
          <div className="md:w-[40%] sm:w-[50%] w-[60%] h-full flex flex-col justify-center mx-auto">
            {/* header   */}
            <div className="w-full flex justify-between  items-center pb-4">
              <div className="flex gap-2 items-center font-normal">
                <FaCaretLeft
                  className="cursor-pointer"
                  onClick={() => setFirst("first")}
                />
                <h3
                  className="cursor-pointer flex items-center"
                  onClick={() => setPostPrivShow(!postPrivShow)}
                >
                  {postPriv} <MdArrowDropDown />
                </h3>
              </div>
              <button
                className="bg-[#eff0fe] w-24 h-8 rounded-xl text-[blue]"
                onClick={() => setVidPostSucc(true)}
              >
                post
              </button>
            </div>
            <input type="text" className="mb-2 py-1 text-gray-400 ps-3 text-sm outline-none border-none" placeholder="Add Description ........"/>
              
            {/* img-section */}
            <div className="w-full flex items-center justify-center h-[80%]  rounded-lg relative">
              {/* <img className="w-full h-full rounded-lg" src={img1} alt="" /> */}
              {postPrivShow && (
                <div
                  className="w-[90%] h-[60%] absolute bg-white rounded-xl z-30"
                  onClick={() => setPostPrivShow(false)}
                >
                  <hr className="w-[13%] bg-black h-[3px] rounded-full mx-auto mt-2" />
                  <p className="text-sm my-2 text-center">
                    Who can see this post?
                  </p>
                  <hr className="h-[1px] border-[#31313164]" />
                  <p
                    className="ps-3 flex items-center gap-2 text-sm p-2 py-5 cursor-pointer"
                    onClick={() => setPostPriv("Anyone")}
                  >
                    <GiWorld className="text-md" /> Anyone
                  </p>
                  <hr className="h-[1px] border-[#31313164]" />
                  <p
                    className="ps-3 flex items-center gap-2 text-sm p-2 py-5 cursor-pointer"
                    onClick={() => setPostPriv("Subscribers only")}
                  >
                    <TiGroupOutline className="text-md" /> Subscribers only
                  </p>
                  <hr className="h-[1px] border-[#31313164]" />
                  <p
                    className="ps-3 flex items-center gap-2 text-sm p-2 py-5 cursor-pointer"
                    onClick={() => setPostPriv("Archieve")}
                  >
                    <PiEyeClosed className="text-md" /> Archieve
                  </p>
                </div>
              )}
              <p
                className="absolute flex items-center gap-2 right-2 top-3 bg-gray-300 px-4 rounded-full z-30 cursor-pointer text-xs py-1"
                onClick={() => setFirst("first")}
              >
                Edit <CiEdit />
              </p>

              {inpType === "image/jpeg" || inpType === "image/png" ? (
                <img
                  className="w-full h-full rounded-lg bg-gray-200 "
                  src={inputData}
                  alt=""
                />
              ) : inpType === "video/mp4" ? (
                <video
                  controls
                  className="w-full h-full rounded-lg bg-gray-200 object-fill"
                  src={inputData}
                  alt=""
                />
              ) : (
                <h1 className="h-full w-full flex justify-center items-center bg-gray-200">
                  No Data Recieved
                </h1>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Video;

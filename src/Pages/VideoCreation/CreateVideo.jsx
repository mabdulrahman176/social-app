import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrCut } from "react-icons/gr";
import { BsCcCircle } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FaCaretLeft, FaShareFromSquare } from "react-icons/fa6";
import { MdArrowDropDown, MdDone } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import { TiGroupOutline } from "react-icons/ti";
import { PiEyeClosed } from "react-icons/pi";
import { IoIosLink } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Video = () => {
  const [inputData, setInpData] = useState("");
  const [inpType, setInpType] = useState("");
  const [step, setStep] = useState("upload");
  const [postPriv, setPostPriv] = useState("Anyone");
  const [postPrivShow, setPostPrivShow] = useState(false);
  const [vidPostSucc, setVidPostSucc] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/videos");
    setVidPostSucc(false);
  };

  const handleVideoUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setInpType(selectedFile.type);
      const videoURL = URL.createObjectURL(selectedFile);
      setInpData(videoURL);
      setFile(selectedFile);
      setErrorMessage("");
    } else {
      setErrorMessage("Please upload a valid video file.");
      setInpData("");
      setInpType("");
      setFile(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage("No video file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      const userId = 1; // Replace with actual user ID
      const response = await axios.post(`http://localhost:5000/upload/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setVidPostSucc(true);
    } catch (error) {
      setErrorMessage("Failed to upload video.");
      console.error("Error uploading video:", error);
    }
  };

  useEffect(() => {
    if (vidPostSucc) {
      const timer = setTimeout(() => {
        navigate("/success"); // Navigate to success page after successful post
      }, 3000); // Delay before navigation
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [vidPostSucc, navigate]);

  return (
    <>
      <div className="h-full flex items-center bg-white w-full relative overflow-y-scroll Podcast_Top_Videos">
        {vidPostSucc && (
          <div className="h-full w-full bg-white z-40 flex flex-col top-0 left-0 justify-center absolute items-center">
            <RxCross2
              className="cursor-pointer absolute top-5 left-3"
              onClick={handleNavigate}
            />

            <div className="flex flex-col justify-center">
              <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
                <MdDone className="text-[#333af3] text-[12px]" />
              </div>
              <h2 className="text-center py-6 text-xl font-semibold">
                Video Successfully <br />
                Published
              </h2>
            </div>
            <div className="flex gap-3 mt-10">
              <div className="PodcastSuccessGradient rounded-full m-0 p-0 flex justify-center items-center">
                <div className="bg-white h-[95%] rounded-full w-[99%] m-0 p-0">
                  <div className="flex items-center PodcastSuccessGradientText justify-center gap-2 rounded-3xl w-40 h-10 ">
                    <IoIosLink className="text-[#69CFDD]" />
                    <p>Copy link</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 PodcastSuccessGradient rounded-3xl w-40 h-10 ">
                <FaShareFromSquare size={20} className="text-white" />
                <p className="text-white">Share</p>
              </div>
            </div>
          </div>
        )}

        {step === "upload" ? (
          <div className="md:w-[40%] sm:w-[50%] w-[60%] flex flex-col justify-center h-full mx-auto">
            <div className="w-full flex justify-between items-center pb-2">
              <div
                className="flex w-[20%] cursor-pointer justify-between font-normal"
                onClick={() => navigate("/videos")}
              >
                <h3>Cancel</h3>
              </div>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-upload"
                onChange={handleVideoUpload}
              />
              <label
                htmlFor="video-upload"
                className="bg-[#eff0fe] w-28 whitespace-nowrap h-8 rounded-xl text-[blue] text-center cursor-pointer"
              >
                Upload Video
              </label>
            </div>
            <div className="w-full h-[78%] rounded-lg">
              {inpType === "video/mp4" || inpType.startsWith("video/") ? (
                <video
                  controls
                  className="w-full h-full rounded-lg bg-gray-200 object-fill"
                  src={inputData}
                  alt=""
                />
              ) : (
                <h1 className="h-full w-full flex justify-center items-center bg-gray-200">
                  Upload Your Video Here
                </h1>
              )}
            </div>
            <div className="w-full flex justify-end pt-4">
              <button
                className="bg-[#eff0fe] w-24 h-8 rounded-xl text-[blue]"
                onClick={() => setStep("post")}
                disabled={!file}
              >
                Next
              </button>
            </div>
            {errorMessage && (
              <div className="error-message text-red-500 text-center mt-4">
                {errorMessage}
              </div>
            )}
          </div>
        ) : step === "post" ? (
          <div className="md:w-[40%] sm:w-[50%] w-[60%] h-full flex flex-col justify-center mx-auto">
            <div className="w-full flex justify-between items-center pb-4">
              <div className="flex gap-2 items-center font-normal">
                <FaCaretLeft
                  className="cursor-pointer"
                  onClick={() => setStep("upload")}
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
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
            <input
              type="text"
              className="mb-2 py-1 text-gray-400 ps-3 text-sm outline-none border-none"
              placeholder="Add Description ........"
            />
            <div className="w-full flex items-center justify-center h-[80%] rounded-lg relative">
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
                    onClick={() => setPostPriv("Archive")}
                  >
                    <PiEyeClosed className="text-md" /> Archive
                  </p>
                </div>
              )}

              {inpType === "video/mp4" || inpType.startsWith("video/") ? (
                <video
                  controls
                  className="w-full h-full rounded-lg bg-gray-200 object-fill"
                  src={inputData}
                  alt=""
                />
              ) : (
                <h1 className="h-full w-full flex justify-center items-center bg-gray-200">
                  No Video Received
                </h1>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Video;

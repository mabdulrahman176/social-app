import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [videoDesc, setDesc] = useState('');
  const [videoTags, setTags] = useState([]);
  const [postPriv, setPostPriv] = useState("Anyone");
  const [postPrivShow, setPostPrivShow] = useState(false);
  const [vidPostSucc, setVidPostSucc] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tagInput, setTagInput] = useState("");
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

    setLoading(true);
    const formData = new FormData();
    formData.append("video", file);
    formData.append("videoDesc", videoDesc);
    formData.append("videoTags", JSON.stringify(videoTags));
    formData.append("videoVisibility", postPriv);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/upload/${getUserId()}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log({ response });
      setVidPostSucc(true);
    } catch (error) {
      setErrorMessage("Failed to upload video.");
      console.error("Error uploading video:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const descOnChange = (e) => {
    setDesc(e.target.value);
  };

  const tagOnChange = (e) => {
    const value = e.target.value;
    const tagsArray = value.split('#').filter(tag => tag.trim() !== '');

    if (tagsArray.length <= 6) {
      setTags(tagsArray);
      setTagInput(value);
      setErrorMessage("");
    } else {
      setErrorMessage("You can add a maximum of 6 tags.");
    }
  };

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: videoDesc || 'Check out this video!',
          text: 'Watch this video I just uploaded!',
          url: window.location.href, // You can also use a specific URL if you have it.
        });
        console.log('Share successful!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  useEffect(() => {
    if (vidPostSucc) {
      const timer = setTimeout(() => {
        navigate("/videos");
      }, 3000);
      return () => clearTimeout(timer);
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
              <div className="flex items-center justify-center gap-2 PodcastSuccessGradient rounded-3xl w-40 h-10 " onClick={shareContent}>
                <FaShareFromSquare size={20} className="text-white" />
                <p className="text-white">Share</p>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="spinner-border text-white" role="status">
              <span className="sr-only">Loading...</span>
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
                className="bg-[#eff0fe] w-28 whitespace-nowrap h-8 rounded-xl text-[blue] flex items-center justify-center cursor-pointer"
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
                className="bg-[#eff0fe] w-24 h-8 mt-4 rounded-xl text-[blue]"
                onClick={handleSubmit}
                disabled={loading}
              >
                Post
              </button>
            </div>
            <input
              onChange={descOnChange}
              type="text"
              className="mb-2 py-1 text-gray-400 ps-3 text-sm outline-none border-none"
              placeholder="Add Description ........"
            />
            <input
              value={tagInput}
              onChange={tagOnChange}
              type="text"
              className="mb-2 py-1 text-gray-400 ps-3 text-sm outline-none border-none"
              placeholder="Add Tags (use # to separate) ........"
              disabled={videoTags.length >= 6}
            />
            <div className="w-full flex items-center justify-center h-[80%] rounded-lg relative">
              {postPrivShow && (
                <div
                  className="w-[90%] h-[60%] absolute top-2 bg-white rounded-xl z-30"
                  onClick={() => setPostPrivShow(false)}
                >
                  <div
                    className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 cursor-pointer"
                    onClick={() => setPostPriv("Anyone")}
                  >
                    <GiWorld />
                    <p>Anyone</p>
                  </div>
                  <div
                    className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-200 cursor-pointer"
                    onClick={() => setPostPriv("Friends")}
                  >
                    <TiGroupOutline />
                    <p>Friends</p>
                  </div>
                  <div
                    className="w-full flex justify-between items-center px-4 py-2 cursor-pointer"
                    onClick={() => setPostPriv("Only Me")}
                  >
                    <PiEyeClosed />
                    <p>Only Me</p>
                  </div>
                </div>
              )}
              <video
                controls
                className="w-full h-full rounded-lg bg-gray-200 object-fill"
                src={inputData}
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Video;

import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsInfoSquare } from "react-icons/bs";
import { FaChevronLeft, FaTiktok } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Model from "../ModalReport/Model";
import Review from "../Podcast/Review";

const Video = () => {
  let navigate = useNavigate();
  const { src } = useParams();
  const [repModOpen, setRepModOpen] = useState(false);
  const [revModOpen, setRevModOpen] = useState(false);
  const [video, setVideo] = useState();
  
const handleProfile = ()=>{
  navigate('/profile')
}

  // Decode the video URL from params
  const videoId = decodeURIComponent(src);  

  const getVideo=async()=>{
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/${videoId}`)
    const data = await req.json()
    console.log("video data")
    console.log({data})
    setVideo(data)
  }


  useEffect(() => {
        getVideo()
  }, [videoId])

  return (
    <Fragment>
      <section className="h-full w-full relative flex items-center bg-white">
        {revModOpen && (
          <div className="h-[95%] left-0 w-full absolute top-0 z-20 flex justify-center items-center">
            <Review videoId={videoId} setRevModOpen={setRevModOpen} />
          </div>
        )}
        {repModOpen && (
          <div className="h-full w-full absolute top-0 z-20 flex justify-center items-center">
            <Model setRepModOpen={setRepModOpen} />
          </div>
        )}
        <div className="w-[80%] sm:w-[65%] md:w-[55%] h-[95%] mx-auto rounded-xl relative">
          <div className="absolute z-10 rounded-lg left-0 top-0 h-full w-full ShadedBG">
            <div
              className="absolute cursor-pointer flex gap-2 items-center ps-2 text-lg text-white left-0 z-10"
              onClick={() => navigate("/videos")}
            >
              <FaChevronLeft className="text-xs" />
              Videos
            </div>
            <div className="absolute z-10 bottom-3 w-[60%] sm:w-[43%] p-3 text-white">
              <a href="/#" className="text-xl font-semibold">
                {video?video.user.name:'NO_NAME'}
              </a>
              <p className="py-1 w-[80%] text-sm">
                {video && video.data.videoDesc}
              </p>
              {/* <div className="flex">
                <p className="p-1 px-2 gap-2 rounded-lg flex items-center text-xs SVTBottom">
                  <FaTiktok />
                  See you again
                </p>
              </div> */}
            </div>
            {/* <div className="absolute bottom-3 z-10 right-2 text-white" onClick={handleProfile}> */}
            <div className="absolute bottom-3 z-10 right-2 text-white">
              <div className="relative cursor-pointer rounded-full flex justify-center">
                <img
                  src={video && video.user.picUrl}
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-full"
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute -bottom-2 p-1 text-xs bg-blue-700 rounded-full"
                />
              </div>
              <div
                className="text-center cursor-pointer mt-5"
                onClick={() => setRepModOpen(true)}
              >
                <p className="text-xs">
                  <BsInfoSquare className="block text-lg mx-auto" />
                  Report
                </p>
              </div>
              <div
                className="text-center cursor-pointer mt-5"
                // onClick={() =>console.log("opening reviews")}
                onClick={() => setRevModOpen(true)}
              >
                <p className="text-xs">
                  <CiStar className="block text-2xl mx-auto" />
                  Reviews
                </p>
              </div>
              <div className="text-center cursor-pointer mt-5 mb-3">
                <p className="text-xs m-0">
                  <FaRegShareFromSquare className="block text-lg mx-auto" />
                  Share
                </p>
              </div>
            </div>
          </div>
          <video
            src={video && video.data.videoUrl}
            // src={videoId}
            autoPlay
            className="h-full relative z-0 rounded-xl w-full bg-slate-300 object-fill"
            controls
          ></video>
        </div>
      </section>
    </Fragment>
  );
};

export default Video;

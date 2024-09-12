import React, { useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import ProfileVideo from "./ProfileVideo"; // Import the ProfileVideo component
import { useNavigate } from "react-router-dom";

// Main ProfileVideo Section for All Videos
const AllVideos = (props) => {
  // const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, setVideo] = useState([]);
  // const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // const openVideoModal = (video) => {
  //   setSelectedVideo(video);
  //   setIsVideoModalOpen(true);
  // };
  useEffect(() => {
    setVideo(props.videos)
    console.log("in videos")
    console.log(props.videos)
    return ()=>{
      setVideo([])
    }
  }, [props.video])
const navigate = useNavigate();
  // const closeVideoModal = () => {
  //   setIsVideoModalOpen(false);
  //   setSelectedVideo(null);
  // };

  return (
    <React.Fragment>
      <div className="bg-white px-2 h-full w-full">
        <div className="flex flex-wrap gap-1 bg-white w-[95%] mx-auto">
        {(video && video.length>0)?video.map((video,ind) => (
          <div
           onClick={() => navigate(`/video/${encodeURIComponent(video._id)}`)}
           key={ind} className="w-[32%] cursor-pointer grid place-items-center  relative h-[30vh] sm:h-[40vh]" 
           >
            <video
              src={video.videoUrl}
              className=" w-[100%] h-[100%] overflow-y-hidden object-fill"
            ></video>
            <CiPlay1 className="absolute text-2xl text-white" />
          </div>
        )):<p className="text-center w-full">No videos yet</p>}
        </div>
      </div>

      {/* {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeVideoModal}
            >
              &times;
            </button>
          Use the ProfileVideo component and pass the selected video 
            <ProfileVideo src={selectedVideo.src}  />
          </div>
        </div>
      )} */}
    </React.Fragment>
  );
};

export default AllVideos;

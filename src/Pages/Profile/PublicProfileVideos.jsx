import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import ProfileVideo from "./ProfileVideo"; // Import the ProfileVideo component
import { useNavigate } from "react-router-dom";

// Data for the Videos
const videos = [
  { id: 1, src: "./video1.mp4" },
  { id: 2, src: "./video2.mp4" },
  { id: 3, src: "./video3.mp4" },
  { id: 4, src: "./video4.mp4" },
  { id: 5, src: "./video2.mp4" },
  { id: 6, src: "./video3.mp4" },
];

// Main ProfileVideo Section for All Videos
const AllVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // const openVideoModal = (video) => {
  //   setSelectedVideo(video);
  //   setIsVideoModalOpen(true);
  // };
const navigate = useNavigate();
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <React.Fragment>
      <div className="bg-white px-2 h-full w-full">
        <div className="flex flex-wrap gap-1 bg-white w-[95%] mx-auto">
        {videos.map((video,ind) => (
          <div key={ind} className="w-[32%] cursor-pointer grid place-items-center  relative h-[30vh] sm:h-[40vh]" onClick={()=>navigate(`/ProfileVideo/${video.src}`)}>
            <video
              src={video.src}
              className=" w-[100%] h-[100%] overflow-y-hidden object-fill"
            ></video>
            <CiPlay1 className="absolute text-2xl text-white" />
          </div>
        ))}
        </div>
      </div>

      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeVideoModal}
            >
              &times;
            </button>
            {/* Use the ProfileVideo component and pass the selected video */}
            <ProfileVideo src={selectedVideo.src}  />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AllVideos;

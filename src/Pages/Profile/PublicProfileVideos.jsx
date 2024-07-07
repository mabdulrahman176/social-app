
import React from "react";
import { CiPlay1 } from "react-icons/ci";



      // Data for the Videos

const videos = [
  {
    id: 1,
    src: "./video1.mp4",
  },
  {
    id: 2,
    src: "./video2.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  },
  {
    id: 1,
    src: "./video1.mp4",
  },
 
  {
    id: 3,
    src: "./video3.mp4",
  },
  {
    id: 2,
    src: "./video2.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  },
    
];



      // Main Video Section for All Videos

const AllVideos = () => {

  return (
    <React.Fragment>
      <div className="bg-white px-2 h-full w-full">
      <div className="flex flex-wrap gap-1 bg-white w-[95%] mx-auto">
        {videos.map((video,ind) => (
          <div key={ind} className="w-[32.4%] border grid place-items-center  relative h-[30vh] sm:h-[40vh]" >
            <video
              src={video.src}
              className=" w-[100%] h-[100%] overflow-y-hidden object-cover"
            ></video>
            <CiPlay1 className="absolute text-3xl text-white" />
          </div>
        ))}
      </div>
      <br />

      </div>
    </React.Fragment>
  );
};

export default AllVideos;

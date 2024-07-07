import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


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
    id: 2,
    src: "./video2.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  },
  {
    id: 3,
    src: "./video3.mp4",
  }
  
  
];



      // Main Video Section for All Videos

const AllVideos = () => {

  // let { CreationStates } = useContext(myContext)


  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="bg-white px-2 h-[89%] overflow-y-scroll Podcast_Top_Videos mt-1">
      <h1 className="text-xl font-bold my-3 sm:w-[90%] lg:w-[80%] mx-auto ">Enterpreneur & Invester Videos</h1>
      <div className="flex flex-wrap justify-center gap-1 sm:w-[90%] lg:w-[80%]  mx-auto">
        {videos.map((video,ind) => (
          <div key={ind} className="w-[32%] cursor-pointer grid place-items-center  relative h-[30vh] sm:h-[40vh]" onClick={()=>navigate(`/video/${video.src}`)}>
            <video
              src={video.src}
              className=" w-[100%] h-[100%] overflow-y-hidden object-fill"
            ></video>
            <CiPlay1 className="absolute text-2xl text-white" />
          </div>
        ))}
      </div>
      </div>
    </React.Fragment>
  );
};

export default AllVideos;

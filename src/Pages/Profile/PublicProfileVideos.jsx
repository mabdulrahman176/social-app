
import React, { useEffect, useState } from "react";

import { CiPlay1, CiEdit, CiTrash } from "react-icons/ci"; // Import icons
import ProfileVideo from "./ProfileVideo"; // Import the ProfileVideo component
import { useNavigate } from "react-router-dom";

// Main ProfileVideo Section for All Videos

const AllVideos_ = (props) => {
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
}
const AllVideos = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [visibleId, setVisibleId] = useState(null); // State for showing icons menu
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const navigate = useNavigate();

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };


  const handleIconClick = (event, action) => {
    event.stopPropagation(); // Prevent navigation on icon click

    if (action === "edit") {
      setIsEditModalOpen(true); // Open the edit modal
    } else if (action === "delete") {
      setIsDeleteModalOpen(true); // Open the delete modal
    }
  };

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
=======
          {videos.map((video, ind) => (
            <div 
              key={ind} 
              className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
              onClick={() => navigate(`/ProfileVideo/${video.src}`)}
              onMouseEnter={() => setVisibleId(video.id)} // Show icons on hover
              onMouseLeave={() => setVisibleId(null)} // Hide icons on hover leave
            >
              <video
                src={video.src}
                className="w-[100%] h-[100%] overflow-y-hidden object-fill"
              ></video>
              <CiPlay1 className="absolute text-3xl text-white" />
              
              {/* Icons container */}
              {visibleId === video.id && (
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                  <CiEdit 
                    className="text-white text-3xl cursor-pointer hover:text-gray-300"
                    onClick={(e) => handleIconClick(e, "edit")} // Trigger edit action
                  /> 
                  {/* <CiTrash 
                    className="text-white text-3xl cursor-pointer hover:text-gray-300"
                    onClick={(e) => handleIconClick(e, "delete")} // Trigger delete action
                  /> */}
                </div>
              )}
            {/* </div> */}
          ))
        {/* </div> */}
      {/* </div> */}

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (

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

            {/* Use the ProfileVideo component and pass the selected video */}
            <ProfileVideo src={selectedVideo.src} />
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p>Are you sure you want to delete this video?</p>
            <div className="flex justify-end mt-4">
              <button 
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded" 
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="linear_gradient text-white px-4 py-2 rounded"
                onClick={() => {
                  console.log("Deleting video...");
                  setIsDeleteModalOpen(false); // Close modal after delete action
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p>Edit Video Details</p>
            {/* Your edit form goes here */}
            <div className="flex justify-end mt-4">
              <button 
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded" 
                onClick={() => setIsEditModalOpen(false)}
              >
                Close
              </button>
              <button 
                className="linear_gradient text-white px-4 py-2 rounded"
                onClick={() => {
                  console.log("Editing video...");
                  setIsEditModalOpen(false); // Close modal after edit action
                }}
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )} 
    </React.Fragment>
  );
};

export default AllVideos;

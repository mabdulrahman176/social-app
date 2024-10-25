import React, { useEffect, useState } from "react";
import { CiPlay1, CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { deleteVideo } from '../../DeleteAPI';

const AllVideos = (props) => {
  const [videosList, setVideosList] = useState([]); // Renamed state to avoid conflict
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [visibleId, setVisibleId] = useState(null);
  const [videoToDelete, setVideoToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  const handleIconClick = (event, action, video) => {
    event.stopPropagation();
    if (action === "delete") {
      setVideoToDelete(video.data._id);
      setIsDeleteModalOpen(true);
    }
  };

  const handleDelete = async () => {
    if (videoToDelete) {
      try {
        await deleteVideo(videoToDelete);
        setVideosList((prevVideos) => prevVideos.filter((v) => v.data._id !== videoToDelete));
      } catch (error) {
        console.error('Error deleting video:', error);
      }
      setIsDeleteModalOpen(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchVideos = () => {
      // Check if props.videos is defined and is an array
      if (Array.isArray(props.videos)) {
        setVideosList(props.videos); // Updated to use renamed state
      } else {
        console.warn("Expected props.videos to be an array, received:", props.videos);
        setVideosList([]);
      }
      setLoading(false);
    };

    fetchVideos();

    return () => {
      // Cleanup if necessary
    };
  }, [props.videos]);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };
  const currentUserId = getUserId();
  return (
    <React.Fragment>
      <div className="bg-white px-2 h-full w-full">
        <div className="flex flex-wrap gap-1 bg-white w-[95%] mx-auto">
          {loading ? (
            <p className="text-center w-full">Loading...</p>
          ) : videosList.length > 0 ? (
            videosList.map((videoItem, index) => (
              <div
                key={index}
                className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
                onClick={() => navigate(`/profilevideos/${encodeURIComponent(videosList[index].data._id)}`, { state: { videos: videosList } })} // Simplified navigation
                // onClick={()=>console.log("video id",videosList[index].data._id)}
                
                onMouseEnter={() => setVisibleId(videoItem.data._id)}
                onMouseLeave={() => setVisibleId(null)}
              >
                <video
                  src={videoItem.data.videoUrl}
                  className="w-[100%] h-[100%] overflow-y-hidden object-fill"
                  // controls
                ></video>
                <CiPlay1 className="absolute text-2xl text-white" />

                {visibleId === videoItem.data._id &&  videoItem.data.userId === currentUserId &&  (
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <CiTrash
                      className="text-red-600 text-3xl cursor-pointer hover:text-red-700"
                      onClick={(e) => handleIconClick(e, "delete", videoItem)} // Updated to use videoItem
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center w-full">No videos yet</p>
          )}
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
            <video src={selectedVideo.data.videoUrl} controls className="w-full h-full" />
          </div>
        </div>
      )}

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
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AllVideos;

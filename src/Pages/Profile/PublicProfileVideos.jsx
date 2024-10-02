import React, { useEffect, useState } from "react";
import { CiPlay1, CiTrash } from "react-icons/ci"; // Import icons
import { useNavigate } from "react-router-dom";
import { deleteVideo } from '../../DeleteAPI';

const AllVideos = (props) => {
  const [video, setVideo] = useState([]); // State to hold the video list
  const [selectedVideo, setSelectedVideo] = useState(null); // State for the selected video
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // State for the video modal
  const [visibleId, setVisibleId] = useState(null); // State for showing icons on hover
  const [videoToDelete, setVideoToDelete] = useState(null); // State for the video to delete
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal
  const [loading, setLoading] = useState(true); // Loading state

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
    event.stopPropagation(); // Prevent navigation on icon click
    if (action === "edit") {
      setSelectedVideo(video);
    } else if (action === "delete") {
      setVideoToDelete(video._id); // Set the video to delete
      setIsDeleteModalOpen(true); // Open the delete modal
    }
  };

  const handleDelete = async () => {
    if (videoToDelete) {
      try {
        console.log('Attempting to delete video with ID:', videoToDelete);
        await deleteVideo(videoToDelete); // Call deleteVideo with the video ID
        console.log('Video deleted successfully.');
        setVideo(video.filter((v) => v._id !== videoToDelete)); // Remove deleted video from state
      } catch (error) {
        console.error('Error deleting video:', error);
      }
      setIsDeleteModalOpen(false); // Close modal after delete action
    }
  };

  useEffect(() => {
    setLoading(true); // Start loading
    const fetchVideos = () => {
      setVideo(props.videos); // Set the video list from props
      setLoading(false); // Stop loading after setting the videos
    };

    fetchVideos(); // Fetch videos

    return () => {
      setVideo([]); // Clean up on unmount
    };
  }, [props.videos]); // Ensure we are watching the correct prop (props.videos)

  return (
    <React.Fragment>
      <div className="bg-white px-2 h-full w-full">
        <div className="flex flex-wrap gap-1 bg-white w-[95%] mx-auto">
          {loading ? (
            <p className="text-center w-full">Loading...</p>
          ) : video && video.length > 0 ? (
            video.map((video, ind) => (
              <div
                key={ind}
                className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
                onClick={() => navigate(`/video/${encodeURIComponent(video._id)}`)}
                onMouseEnter={() => setVisibleId(video._id)} // Set _id for hover
                onMouseLeave={() => setVisibleId(null)} // Reset on leave
              >
                <video
                  src={video.videoUrl}
                  className="w-[100%] h-[100%] overflow-y-hidden object-fill"
                ></video>
                <CiPlay1 className="absolute text-2xl text-white" />

                {/* Show Edit/Delete icons on hover */}
                {visibleId === video._id && (
                  <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <CiTrash
                      className="text-red-600 text-3xl cursor-pointer hover:text-red-700"
                      onClick={(e) => handleIconClick(e, "delete", video)} // Trigger delete action
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
            {/* <ProfileVideo src={selectedVideo.videoUrl} /> Pass videoUrl */}
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
                onClick={handleDelete} // Call handleDelete on confirmation
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

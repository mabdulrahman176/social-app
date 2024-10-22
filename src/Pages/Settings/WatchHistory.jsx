import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
// import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import toast components
import "react-toastify/dist/ReactToastify.css"; 


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const CardComponent = ({ title, videoUrl, videoId, navigate ,videos}) => (
  <div
    className="lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] relative m-0 text-white cursor-pointer"
    onClick={() => navigate(`/watchhistory/${encodeURIComponent(videoId)}`,{state:{id:videos}})}
  >
    <video
      className="h-full w-full rounded-lg object-cover"
      src={videoUrl}
      muted
      controls
    />
    <div className="absolute inset-0 flex justify-between ShadedBG rounded-lg">
      <h5 className="text-sm ps-3 absolute bottom-2">{title} </h5>
      
    </div>
  </div>
);

function WatchHistory() {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [recentdata, setRecentData] = useState([]);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  const user_id = getUserId();
  console.log("user id in watch", getUserId());
  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/views/${getUserId()}`);
        const data = await response.json();
        console.log("resonse data is", data);
        const info = data.video;
       
        console.log("map info is",videos)
        setVideos(data.video);
        console.log("watch data info", info);
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };

    fetchViews();
  }, []);

  const formatDuration = (duration) => {
    const seconds = Math.floor(duration / 1000);
    return seconds < 60
      ? `${seconds} seconds`
      : `${Math.floor(seconds / 60)} min${seconds > 60 ? "s" : ""}`;
  };

  const handleSaveToWishlist = async (podcastId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        wishItemType: "podcast",
        wishItemId: podcastId,
        userId: user_id,
      });
      toast.success("Podcast saved to wishlist!"); // Show success toast
    } catch (error) {
      console.error("Error saving to wishlist:", error);
      toast.error("Could not save to wishlist. Please try again."); // Show error toast
    }
  };

  return (
    <div className="bg-white w-full h-full ">
       <ToastContainer /> {/* Include the ToastContainer here */}
      <h4 className="flex items-center gap-3 ms-2 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />{" "}
        Watched Content
      </h4>
      <div className="h-[90%] w-full overflow-y-scroll Podcast_Top_Videos">
        <div className="w-[95%] mx-auto">
          <div className=" flex items-center justify-between ">
            <p>Videos</p>
            <Link to="/videos" className="text-blue-400 text-sm">
              See all
            </Link>
          </div>
          <div className="mt-3 flex w-full overflow-x-scroll gap-1 Podcast_Top_Videos">
            {videos.map((elm) => (
              <div
                key={elm._id}
                // className=""
              >
                <CardComponent
                  title={elm.data.videoDesc}
                  videoUrl={elm.data.videoUrl}
                  videoId={elm.data._id}
                  navigate={navigate}
                  videos={videos}
                />
              </div>
            ))}
          </div>
          
     
      <div className="flex justify-start ps-5 gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
        {recentdata.map((elm, ind) => (
          <div
            key={ind}
            className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
            onClick={() =>
              navigate(`/podcastdetails`, { state: { id: elm._id } })
            } // Navigate on click
          >
            <div className="absolute h-full w-full ShadedBG rounded-lg">
              <IoBookmarkOutline
                className="absolute right-1 top-1 text-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering onClick of parent div
                  handleSaveToWishlist(elm._id); // Save to wishlist
                }}
              />
              <div className="absolute bottom-1 left-1">
                <p className="text-sm">{elm.episodeTitle}</p>
                <Link
                  to="/userprofile"
                  state={{ id: elm.userID ? elm.userID : "unknown" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm">{elm.user ? elm.user.name : ""}</p>
                </Link>
                <p className="text-xs flex gap-1 items-center">
                  <CiPlay1 /> {formatDuration(elm.podcastDuration)}
                </p>
              </div>
            </div>
            <img
              src={elm.picUrl ? elm.picUrl : "/loading.jpg"}
              alt={`Img-${ind}`}
              className="h-full w-full rounded-lg"
            />
          </div>
        ))}
      </div>
  
        </div>
        <br />
      </div>
    </div>
  );
}

export default WatchHistory;

import React, { useEffect, useState } from "react";
import { fetchPodcast } from "../../API";
import { Link, useNavigate } from "react-router-dom";
import img from "./img2.jpeg";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import axios from "axios";

const RelatedPodcast = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [recentdata, setRecentData] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPodcast();
        setRecentData(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const formatDuration = (duration) => {
    const seconds = Math.floor(duration / 1000);
    return seconds < 60
      ? `${seconds} seconds`
      : `${Math.floor(seconds / 60)} min${seconds > 60 ? 's' : ''}`;
  };

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  const user_id = getUserId();

  const handleSaveToWishlist = async (podcastId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        wishItemType: "podcast",
        wishItemId: podcastId,
        userId: user_id,
      });
      alert("Podcast saved to wishlist!");
    } catch (error) {
      console.error("Error saving to wishlist:", error);
      alert("Could not save to wishlist. Please try again.");
    }
  };

  return (
    <div className="flex justify-start ps-5 gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
      {recentdata.map((elm, ind) => (
        <div
          key={ind}
          className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
          onClick={() => navigate(`/podcastdetails`, { state: { id: elm._id } })} // Navigate on click
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
              <p className="text-sm">{elm.user ? elm.user.name : ""}</p>
              <p className="text-xs flex gap-1 items-center">
                <CiPlay1 /> {formatDuration(elm.podcastDuration)}
              </p>
            </div>
          </div>
          <img
            src={elm.picUrl ? elm.picUrl : img}
            alt={`Img-${ind}`}
            className="h-full w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default RelatedPodcast;

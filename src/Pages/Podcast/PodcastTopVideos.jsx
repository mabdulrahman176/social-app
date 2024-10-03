import React, { useState, useEffect, Fragment } from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import img from './img2.jpeg';
import RelatedPodcast from './RelatedPodcast';
import { Link, useNavigate } from "react-router-dom";
import { fetchPodcast } from "../../API";
import axios from "axios";

function PodcastTopVideos() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [recentdata, setRecentData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPodcast();
        console.log({ result });
        setRecentData(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const navigate = useNavigate();

  const formatDuration = (duration) => {
    const seconds = Math.floor(duration / 1000);
    
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} min${minutes > 1 ? 's' : ''}`;
    }
  };

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const user_id = getUserId();

  const handleSaveToWishlist = async (podcastId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        wishItemType: 'podcast',
        wishItemId: podcastId,
        userId: user_id,
      });
      console.log('Wishlist item saved:', response.data);
      alert('Podcast saved to wishlist!');
    } catch (error) {
      console.error('Error saving to wishlist:', error);
      alert('Could not save to wishlist. Please try again.');
    }
  };

  return (
    <Fragment>
      <section className="w-full h-[89%] bg-white mt-1 text-white overflow-y-scroll Podcast_Top_Videos">
        <h1 className="flex items-center text-xl font-bold my-3 ps-3 text-black">Recently Played</h1>
        <section className="h-[90%] w-full">
          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {recentdata.map((elm, ind) => (
              <div
                key={ind}
                className="cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[22vw] flex-shrink-0 rounded-lg relative"
                onClick={() => navigate(`/podcastdetails`, { state: { id: elm._id } })}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <div className="absolute right-1 top-1">
                    <IoBookmarkOutline
                      className="text-2xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering onClick of parent div
                        handleSaveToWishlist(elm._id);
                      }}
                    />
                  </div>
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm">{elm.episodeTitle}</p>
                    <p className="text-sm">{elm.user ? elm.user.name : ""}</p>
                    <p className="text-xs flex gap-1 items-center">
                      <CiPlay1 /> {formatDuration(elm.podcastDuration)}
                    </p>
                  </div>
                </div>
                <img src={elm.picUrl ? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>

          {/* Related Podcasts */}
          <div className="flex justify-start ps-5 gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
  {recentdata.slice(0, 3).map((elm, ind) => (
    <div
      key={ind}
      className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
      onClick={() => navigate(`/podcastdetails`, { state: { id: elm._id } })} // Handle navigation
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
      <img src={elm.picUrl ? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
    </div>
  ))}
</div>



          <h1 className="ps-3 text-xl font-bold my-3 text-black">Suggested Podcast</h1>

          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {recentdata.map((elm, ind) => (
              <div
                key={ind}
                className="cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[22vw] flex-shrink-0 rounded-lg relative"
                onClick={() => navigate(`/podcastdetails`, { state: { id: elm._id } })}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <IoBookmarkOutline
                    className="absolute right-1 top-1 text-2xl cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering onClick of parent div
                      handleSaveToWishlist(elm._id);
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
                <img src={elm.picUrl ? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>

          <RelatedPodcast />
        </section>
      </section>
    </Fragment>
  );
}

export default PodcastTopVideos;

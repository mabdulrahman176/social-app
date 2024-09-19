import React, { useState, useEffect,Fragment } from "react";
import { CiPlay1 } from "react-icons/ci";
// import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import img from './img2.jpeg'
import RelatedPodcast from './RelatedPodcast'
import { Link, useNavigate } from "react-router-dom";
import { fetchPodcast } from "../../API";

function PodcastTopVideos() {

 const [recentdata, setRecentData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchPodcast(); // Use the function from api.js
        console.log({result});
        setRecentData(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const navigate = useNavigate();
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
                onClick={() => navigate(`/podcastdetails`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <IoBookmarkOutline className="absolute right-1 top-1" />
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm">{elm.episodeTitle}</p>
                    <p className="text-xs flex gap-1 items-center">
                      <CiPlay1 /> {elm.podcastType}
                    </p>
                  </div>
                </div>
                <img src={elm.picUrl? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>


{/* <RelatedPodcast/> */}
<div className="flex justify-start  ps-5 gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
    {recentdata.slice(0,3).map((elm, ind) => (
      <Link to={"/podcastdetails"}
      state={{ id: elm._id }}
        key={ind}
        className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
        onClick={() => navigate(`/podcastdetails`)}
      >
        <div className="absolute h-full w-full ShadedBG rounded-lg">
          <IoBookmarkOutline className="absolute right-1 top-1" />
          <div className="absolute bottom-1 left-1">
            <p className="text-sm">{elm.episodeTitle}</p>
            {/* we have to show user name in this p tag */}
            {/* <p className="text-sm">{elm.user.name}</p> */}
            <p className="text-xs flex gap-1 items-center">
              <CiPlay1 /> {elm.podcastType}
            </p>
          </div>
        </div>
        <img src={elm.picUrl ? elm.picUrl :img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
      </Link>
    ))}
  </div>

          <h1 className="ps-3 text-xl font-bold my-3 text-black">Suggested Podcast</h1>

          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {recentdata.map((elm, ind) => (
              <div
                key={ind}
                className="cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[22vw] flex-shrink-0 rounded-lg relative"
                onClick={() => navigate(`/podcastdetails/`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <IoBookmarkOutline className="absolute right-1 top-1" />
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm">{elm.episodeTitle}</p>
                    <p className="text-xs flex gap-1 items-center">
                      <CiPlay1 /> {elm.podcastType}
                    </p>
                  </div>
                </div>
                <img src={elm.picUrl ? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>


<RelatedPodcast/>
        </section>
      </section>
    </Fragment>
  );
}

export default PodcastTopVideos;

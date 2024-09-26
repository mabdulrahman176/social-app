import React, { useEffect, useState } from 'react'
import { fetchPodcast } from "../../API";
import { Link, useNavigate } from 'react-router-dom';
import img from './img2.jpeg'
import { CiPlay1 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";

const RelatedPodcast = () => {

    const [recentdata, setRecentData] = useState([]);
    const navigate = useNavigate();

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
  

  return (
    <div className="flex justify-start  ps-5 gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
    {recentdata.map((elm, ind) => (
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
            <p className="text-sm">{elm.user ? elm.user.name : ""}</p>
            <p className="text-xs flex gap-1 items-center">
              <CiPlay1 /> {elm.podcastType}
            </p>
          </div>
        </div>
        <img src={elm.picUrl ? elm.picUrl : img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
      </Link>
    ))}
  </div>
  )
}

export default RelatedPodcast

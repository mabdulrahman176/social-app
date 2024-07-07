
import React, { Fragment } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";

let similarPodcastData = [
  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
];

const ApplePodcast = () => {
  return (
    <Fragment>
    <div className=" overflow-y-scroll  Podcast_Top_Videos h-full">
        <div className="flex flex-wrap gap-1 w-[95%] mx-auto Podcast_Top_Videos pt-2 ">
          {similarPodcastData.map((elm, ind) => (
            <div
              key={ind}
              className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative text-white PPPodcast"
            >
              <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
              <div className="absolute bottom-1  px-2 w-full ">
                {
                  <div className="VideosBgBlured rounded-lg px-3 pt-5">
                    <p className="text-2xl font-medium">{elm.categ}</p>
                    <p className="text-lg opacity-60">{elm.userName}</p>
                    <div className="flex justify-between">
                      <p className="flex items-center gap-1 text-md">
                        <CiPlay1 className="text-lg"/> {elm.mint}
                      </p>
                      <p>
                        <FaRegShareFromSquare className="text-2xl -mt-3" />
                      </p>
                    </div>
                  </div>
                }
              </div>
              <img
                src={elm.img}
                alt={`Img-${ind}`}
                className="h-full w-full rounded-lg"
              />
            </div>
          ))}
          
        </div>
        
      <br />
    </div>
    </Fragment>
  );
};

export default ApplePodcast;

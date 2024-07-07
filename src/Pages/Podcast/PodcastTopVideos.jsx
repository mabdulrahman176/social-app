import React, { Fragment } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

let recentDataTop = [
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },

  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },

  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },

  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },

  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },

  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
    mint: "35 Mins",
  },
];

let recentDataMiddle = [
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img5.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img5.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },

];

let suggestDataTop = [
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
  },

  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Networking",
  },

  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
  },

  {
    img: "./img5.jpeg",
    id: 1,
    categ: "Networking",
  },

  {
    img: "./img6.jpeg",
    id: 1,
    categ: "Networking",
  },

  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img6.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img2.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img3.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img5.jpeg",
    id: 1,
    categ: "Networking",
  },
  {
    img: "./img4.jpeg",
    id: 1,
    categ: "Networking",
  },
];

function PodcastTopVideos() {
  let navigate = useNavigate();
  return (
    <Fragment>
      <section className=" w-full h-[89%] bg-white mt-1 text-white overflow-y-scroll Podcast_Top_Videos">
        <h1 className=" flex items-center text-xl font-bold my-3 ps-3 text-black">
          Recently Played
        </h1>
        <section className=" h-[90%]  w-full">
          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {recentDataTop.map((elm, ind) => (
              <div
                key={ind}
                className="cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] flex-shrink-0 rounded-lg  relative"
                onClick={() => navigate(`/podcastdetails/${elm.img}`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                <IoBookmarkOutline className="absolute  right-1 top-1 " />
                <div className="absolute  bottom-1 left-1">
                  {
                    <>
                      <p className="text-sm">{elm.categ}</p>
                      <p className="text-xs flex gap-1 items-center">
                        <CiPlay1 /> {elm.mint}
                      </p>
                    </>
                  }
                </div>
                </div>
                <img
                  src={elm.img}
                  alt={`Img-${ind}`}
                  className="h-full w-full rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between sm:flex-nowrap flex-wrap overflow-y-hidden w-[95%] mx-auto  mt-4 lg:h-[50vh] h-[40vh]">
            {recentDataMiddle.map((elm, ind) => (
              <div
                key={ind}
                className="h-full cursor-pointer sm:w-[33%] w-[49.4%] rounded-lg border relative border-black"
                onClick={() => navigate(`/podcastdetails/${elm.img}`)}
              >
                <IoBookmarkOutline className="absolute  right-2 top-4 text-3xl" />
                <div className="absolute bottom-1 px-3 w-full">
                  {
                    <div className="VideosBgBlured rounded-lg px-3 pt-5">
                      <p className="text-2xl font-medium">{elm.categ}</p>
                      <p className="text-lg opacity-60">{elm.userName}</p>
                      <div className="flex justify-between">
                        <p className="flex items-center gap-1 text-lg">
                          <CiPlay1 /> {elm.mint}
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

          <h1 className="  ps-3 text-xl font-bold my-3 text-black">Suggested Podcast</h1>

          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {suggestDataTop.map((elm, ind) => (
              <div
                key={ind}
                className=" cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] flex-shrink-0 rounded-lg border relative border-black"
                onClick={() => navigate(`/podcastdetails/${elm.img}`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                <IoBookmarkOutline className="absolute  right-1 top-1" />
                <div className="absolute bottom-1 left-1">
                  {
                    <>
                      <p className="text-sm">{elm.categ}</p>
                    </>
                  }
                </div>
                </div>
                <img
                  src={elm.img}
                  alt={`Img-${ind}`}
                  className="h-full w-full rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex w-[95%] mx-auto justify-between sm:flex-nowrap flex-wrap overflow-y-hidden  mt-4 lg:h-[50vh] h-[40vh]">
            {recentDataMiddle.map((elm, ind) => (
              <div
                key={ind}
                className="h-full cursor-pointer sm:w-[33%] w-[49.4%]  rounded-lg border relative border-black"
                onClick={() => navigate(`/podcastdetails/${elm.img}`)}
              >
                <IoBookmarkOutline className="absolute  right-2 top-4 text-3xl" />
                <div className="absolute bottom-1 px-3 w-full">
                  {
                    <div className="VideosBgBlured rounded-lg px-3 pt-5">
                      <p className="text-2xl font-medium">{elm.categ}</p>
                      <p className="text-lg opacity-60">{elm.userName}</p>
                      <div className="flex justify-between">
                        <p className="flex items-center gap-1 text-lg">
                          <CiPlay1 /> {elm.mint}
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
          <br />
        </section>
      </section>
    </Fragment>
  );
}

export default PodcastTopVideos;

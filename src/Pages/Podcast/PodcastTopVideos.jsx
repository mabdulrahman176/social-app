import React, { useState, useEffect,Fragment } from "react";
import { CiPlay1 } from "react-icons/ci";
// import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { fetchPodcast } from "../../API";
// let recentdata = [
//   {
//     img: "./img2.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "55 Mins",
//   },

//   {
//     img: "./image1.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },

//   {
//     img: "./img4.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },

//   {
//     img: "./img3.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },

//   {
//     img: "./img2.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },

//   {
//     img: "./image1.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img3.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img4.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img4.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img3.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img2.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./image1.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
//   {
//     img: "./img3.jpeg",
//     id: 1,
//     categ: "Networking",
//     mint: "35 Mins",
//   },
// ];

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

  let navigate = useNavigate();
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
                onClick={() => navigate(`/podcastdetails/${elm.customizeCover}`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <IoBookmarkOutline className="absolute right-1 top-1" />
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm">{elm.episodeTitle}</p>
                    <p className="text-xs flex gap-1 items-center">
                      <CiPlay1 /> {elm.episodeDescription}
                    </p>
                  </div>
                </div>
                <img src={elm.img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
  {recentdata.map((elm, ind) => (
    <div
      key={ind}
      className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
      onClick={() => navigate(`/podcastdetails/${elm.customizeCover}`)}
    >
      <div className="absolute h-full w-full ShadedBG rounded-lg">
        <IoBookmarkOutline className="absolute right-1 top-1" />
        <div className="absolute bottom-1 left-1">
          <p className="text-sm">{elm.episodeTitle}</p>
          <p className="text-xs flex gap-1 items-center">
            <CiPlay1 /> {elm.episodeDescription}
          </p>
        </div>
      </div>
      <img src={elm.img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
    </div>
  ))}
</div>


          <h1 className="ps-3 text-xl font-bold my-3 text-black">Suggested Podcast</h1>

          <div className="flex gap-1 w-full overflow-x-scroll Podcast_Top_Videos ps-5">
            {recentdata.map((elm, ind) => (
              <div
                key={ind}
                className="cursor-pointer lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[22vw] flex-shrink-0 rounded-lg relative"
                onClick={() => navigate(`/podcastdetails/${elm.customizeCover}`)}
              >
                <div className="absolute h-full w-full ShadedBG rounded-lg">
                  <IoBookmarkOutline className="absolute right-1 top-1" />
                  <div className="absolute bottom-1 left-1">
                    <p className="text-sm">{elm.episodeTitle}</p>
                    <p className="text-xs flex gap-1 items-center">
                      <CiPlay1 /> {elm.episodeDescription}
                    </p>
                  </div>
                </div>
                <img src={elm.img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
              </div>
            ))}
          </div>


          <div className="flex justify-center gap-2 flex-wrap w-full overflow-x-auto Podcast_Top_Videos mt-2">
  {recentdata.map((elm, ind) => (
    <div
      key={ind}
      className="cursor-pointer lg:h-[42vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[33.33vw] flex-shrink-0 rounded-lg relative"
      onClick={() => navigate(`/podcastdetails/${elm.customizeCover}`)}
    >
      <div className="absolute h-full w-full ShadedBG rounded-lg">
        <IoBookmarkOutline className="absolute right-1 top-1" />
        <div className="absolute bottom-1 left-1">
          <p className="text-sm">{elm.episodeTitle}</p>
          <p className="text-xs flex gap-1 items-center">
            <CiPlay1 /> {elm.episodeDescription}
          </p>
        </div>
      </div>
      <img src={elm.img} alt={`Img-${ind}`} className="h-full w-full rounded-lg" />
    </div>
  ))}
</div>
        </section>
      </section>
    </Fragment>
  );
}

export default PodcastTopVideos;

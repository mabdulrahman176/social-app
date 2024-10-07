import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";

const cardData = [
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://media.istockphoto.com/id/1649927045/photo/social-media-social-media-marketing-engagement-post-structure.webp?b=1&s=170667a&w=0&k=20&c=si9Ex9etSObs30XVUIKzMJiexUz78p_z2Xw-YLfkwh8=",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Business",
    imgSrc:
      "https://media.istockphoto.com/id/1480095869/photo/student-or-man-use-computer-for-elearning-education-online-internet-technology-webinar-online.webp?b=1&s=170667a&w=0&k=20&c=lAFPQOr_Bvjfr1235EcosGYhr4KgUtuBW1jzMqMU05w=",
  },
  {
    id: 5,
    title: "Finance",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },

  // Add more card objects here
];

const newCardData = [
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  // Add more card objects here
];

const CardComponent = ({ title, videoUrl,videoId, navigate }) => (
  <div
    className="lg:h-[30vh] h-[25vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] relative m-0 text-white cursor-pointer"
    onClick={() => navigate(`/video/${encodeURIComponent(videoId)}`)}
  >
    <video
      className="h-full w-full rounded-lg object-cover"
      src={videoUrl}
      muted
      controls 
    />
    <div className="absolute inset-0 flex justify-between ShadedBG rounded-lg">
      <h5 className="text-sm ps-3 absolute bottom-2">{title} </h5>
      <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
    </div>
  </div>
);

function WatchHistory() {
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch('http://localhost:5000/views/');
        const data = await response.json();
        setVideos(data.data); 
        console.log("watch data is",data.data)
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="bg-white w-full h-full ">
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
            {videos.map((video) => (
              <div
                key={video._id}
                // className=""
              >
                <CardComponent
                  title={video.viewItemType}
                  videoUrl={video.videoUrl}
                  videoId={video._id}
                  navigate={navigate}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap sm:justify-center justify-between sm:gap-1 gap-y-1 w-[93%] mx-auto">
            {newCardData.map((data, i) => (
              <div key={i} className="m-0 text-white sm:w-[32.4%] w-[49.4%]  h-[45vh] relative">
                <img
                  src={data.imgSrc || "/placeholder.jpg"}
                  alt="Card Img2y"
                  className="h-full w-full rounded-lg cursor-pointer"
                  onClick={() => navigate("/eventdetail", { state: { data } })}
                />
                <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
                <div className="w-full absolute  bottom-1">
                  <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                    <small className="block text-xl">Startup</small>
                    <p className="text-xs py-2">Fri, May 28, 3:30pm</p>
                    <p className="text-sm pb-2">NYC, USA</p>
                    <div className="flex items-center">
                      <button
                        className="me-2 w-[70%] py-2 JobButtonBgBlur text-sm text-white rounded-full"
                        onClick={() => navigate("/ticketdetails")}
                      >
                        View tickets
                      </button>
                      <button className="w-[20%] flex justify-center py-2  JobButtonBgBlur text-xs text-white  rounded-full">
                        <FaRegShareFromSquare className="text-lg " />
                      </button>
                    </div>
                  </div>
                </div>
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

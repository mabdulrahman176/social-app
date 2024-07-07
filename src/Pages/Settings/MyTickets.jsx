import React from "react";
import { useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";



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


function MyTickets() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full  h-full ">
      <h4 className="flex items-center gap-3 ms-2 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/settings")}
          />{" "}
          My Tickets
        </h4>
      <div className="h-[90%] w-full overflow-y-scroll Podcast_Top_Videos">
        <div className="w-[95%] mx-auto">
        <div className="flex flex-wrap justify-between gap-y-2 ">
          {newCardData.map((data, i) => (
            <div key={i} className="m-0 text-white md:w-[32.4%] w-[49.4%] sm:h-[45vh] h-[37vh] relative">
              <img
                src={data.imgSrc}
                alt="Card Img2y"
                className="h-full w-full rounded-lg cursor-pointer"
                // onClick={() => navigate("/eventdetail", { state: { data } })}
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
                  <FaRegShareFromSquare className="text-lg" />
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

export default MyTickets;

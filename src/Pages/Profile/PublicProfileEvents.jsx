// 
import React from 'react'
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { IoBookmarkOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';



let similarPodcastData = [
  {
    img: './img5.jpeg',
    id: 1,
    categ: "Startup",
    time:"Fri,May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './image1.jpeg',
    id: 1,
    categ: "Startup",
    time:"Fri,May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 1,
    categ: "Startup",
    time:"Fri,May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 1,
    categ: "Startup",
    time:"Fri,May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 1,
    categ: "Startup",
    time:"Fri,May 28 3:30pm",
    userName: "NYC USA",
  },

];

const Calendar = () => {

  let navigate = useNavigate()
  return (
    <div className="overflow-y-scroll  Podcast_Top_Videos w-full h-full">
            <div className="flex flex-wrap text-white gap-1 w-[95%] mx-auto Podcast_Top_Videos pt-2">
              {similarPodcastData.map((elm, ind) => (
                <div
                  key={ind}
                  className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative PPEvent"
                >
                  <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
              <div className="w-full absolute  bottom-1">
                <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                  <small className="block text-xl">Startup</small>
                  <p className="text-xs py-2">Fri, May 28, 3:30pm</p>
                  <p className="text-sm pb-2">NYC, USA</p>
                  <div className='flex items-center'>
                  <button
                    className="me-2 w-[80%] py-2 JobButtonBgBlur text-xs text-white rounded-full"
                    onClick={() => navigate("/ticket")}
                  >
                    Buy tickets
                  </button>
                  <button className="w-[20%] py-2 flex justify-center JobButtonBgBlur text-xs text-white  rounded-full">
                  <FaRegShareFromSquare className='text-sm'/>
                  </button>
                  </div>
                </div>
              </div>
                  <img
                    src={elm.img}
                    alt={`Img-${ind}`}
                    className="h-full w-full rounded-lg"
                  />
                </div>
              ))}
          </div> <br />
          </div>
  )
}

export default Calendar;

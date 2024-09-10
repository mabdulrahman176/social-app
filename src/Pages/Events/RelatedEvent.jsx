import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBookmarkOutline } from "react-icons/io5";
import Image from './Img2.png';
import { FaRegShareFromSquare } from "react-icons/fa6";
import { fetchEvent } from "../../API";
const RelatedEvent = () => {

    const [newcard, setNewCard] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const result = await fetchEvent(); // Use the function from api.js
          console.log(result);
          setNewCard(result.data);
        } catch (error) {
          console.error("Fetching data error", error);
        }
      };
      getData();
    }, []);

  return (
    <div className="mt-3 flex flex-wrap justify-between gap-y-1 w-[93%] mx-auto">
    {newcard.map((data, i) => (
      <div key={i} className="m-0 text-white md:w-[33%] w-[49.4%] h-[42vh] relative">
        <img
          src={data.eventCoverUrl? data.eventCoverUrl: Image}
          alt="Card Img2"
          className="h-full w-full rounded-lg cursor-pointer"
        />
        <IoBookmarkOutline className="absolute right-2 top-4 text-2xl" />
        <div className="w-full absolute bottom-1">
          <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
            <small className="block text-xl">{data.eventTitle}</small>
            <p className="text-xs py-2">{data.eventCatagory}</p>
            <p className="text-sm pb-2">{data.eventLocation}</p>
            <div className="flex items-center">
              <Link
                to="/eventdetail"
                state={{ id: data._id }}
                className="me-2 md:px-5 py-2 JobButtonBgBlur md:w-auto w-[70%] text-sm text-white rounded-full"
              >
                Buy tickets
              </Link>
              <button className="md:px-7 py-2 flex justify-center w-[30%] md:w-auto JobButtonBgBlur text-xs text-white rounded-full">
                <FaRegShareFromSquare className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default RelatedEvent

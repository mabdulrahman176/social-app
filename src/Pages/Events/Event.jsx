import React, { useState, useEffect } from "react";

import { IoBookmarkOutline } from "react-icons/io5";

import EventFilters from "./EventFilters";
import Image from "./Img2.png";
import { fetchEvent } from "../../API";
import RelatedEvent from "./RelatedEvent";

const CardComponent = ({ title, imgSrc }) => (
  <div className="h-[30vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] relative cursor-pointer m-0 text-white">
    <img
      className="h-full w-full rounded-lg"
      src={imgSrc ? imgSrc : Image}
      alt="Card Img"
    />
    <div className="absolute inset-0 flex justify-between ShadedBG rounded-lg">
      <h5 className="text-sm ps-3 absolute bottom-2">{title}</h5>
      <IoBookmarkOutline className="absolute right-2 top-4 text-2xl" />
    </div>
  </div>
);

function Event() {
  const [newcard, setNewCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchEvent(); // Use the function from api.js
        console.log("events results");
        console.log(result);
        setNewCard(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="w-full h-[10%]">
        <EventFilters />
      </div>
      <div className="h-[89%] bg-white mt-1 w-full overflow-y-scroll Podcast_Top_Videos">
        <h3 className="text-xl font-bold my-3 w-[95%] mx-auto">
          Suggested Event
        </h3>
        <div className="h-full w-[95%] mx-auto">
          <div className="flex w-full overflow-x-scroll gap-1 Podcast_Top_Videos">
            {newcard.map((data, i) => (
              <CardComponent
                key={i}
                title={data.eventTitle}
                imgSrc={data.eventCoverUrl}
              />
            ))}
          </div>
          <RelatedEvent />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Event;

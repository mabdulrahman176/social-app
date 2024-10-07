import React, { useState, useEffect } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import EventFilters from "./EventFilters";
import Image from "./Img2.png";
import { fetchEvent } from "../../API";
import RelatedEvent from "./RelatedEvent";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CardComponent = ({ title, imgSrc, onSave }) => (
  <div className="h-[30vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] relative cursor-pointer m-0 text-white">
    <img
      className="h-full w-full rounded-lg"
      src={imgSrc ? imgSrc : "/loading.jpg"}
      alt="Card Img"
    />
    <div className="absolute inset-0 flex justify-between ShadedBG rounded-lg">
      <h5 className="text-sm ps-3 absolute bottom-2">{title}</h5>
      <IoBookmarkOutline 
        className="absolute right-2 top-4 text-2xl cursor-pointer" 
        onClick={onSave} // Call the save function passed as prop
      />
    </div>
  </div>
);

function Event() {
  const [newcard, setNewCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchEvent(); // Use the function from api.js
        console.log("events results", result);
        setNewCard(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const handleSaveToWishlist = async (eventId) => {
    const user_id = getUserId(); // Function to get user ID from cookies
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        wishItemType: 'event',
        wishItemId: eventId,
        userId: user_id,
      });
      console.log('Wishlist item saved:', response.data);
      toast.success('Event saved to wishlist!'); // Notify on success
    } catch (error) {
      console.error('Error saving to wishlist:', error);
      toast.error('Could not save to wishlist. Please try again.'); // Notify on error
    }
  };

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  return (
    <div className="h-full w-full">
      <ToastContainer /> {/* Include ToastContainer for notifications */}
      <div className="w-full h-[10%]">
        <EventFilters />
      </div>
      <div className="h-[89%] bg-white mt-1 w-full overflow-y-scroll Podcast_Top_Videos">
        <h3 className="text-xl font-bold my-3 w-[95%] mx-auto">
          Suggested Events
        </h3>
        <div className="h-full w-[95%] mx-auto">
          <div className="flex w-full overflow-x-scroll gap-1 Podcast_Top_Videos">
            {newcard.map((data, i) => (
              <CardComponent
                key={i}
                title={data.eventTitle}
                imgSrc={data.eventCoverUrl || "/loading.jpg"}
                onSave={(e) => {
                  e.stopPropagation(); // Prevent triggering on parent elements
                  handleSaveToWishlist(data._id); // Pass the event ID
                }}
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

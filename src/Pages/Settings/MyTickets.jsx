import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function MyTickets() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tickets/user/${getUserId()}`); 
        setTickets(response.data.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleShare = async (e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this event!",
          url: window.location.href,
        });
        toast.success('Event link shared successfully!'); // Notify on success
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Error sharing the event link.'); // Notify on error
      }
    } else {
      toast.error('Web Share API is not supported in your browser.'); // Notify if not supported
    }
  };

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



  return (
    <div className="bg-white w-full h-full ">
       <ToastContainer />
      <h4 className="flex items-center gap-3 ms-2 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        My Tickets
      </h4>
      <div className="h-[90%] w-full overflow-y-scroll Podcast_Top_Videos">
        <div className="w-[95%] mx-auto">
          <div className="flex flex-wrap justify-start gap-2 ">
            {tickets.length > 0 ? ( tickets.map((ticket) => (
              <div key={ticket._id} className="m-0 text-white md:w-[32.4%] w-[49.4%] sm:h-[45vh] h-[37vh] relative">
                <img
                  src={ticket.event.eventCoverUrl}
                  alt="Event Cover"
                  className="h-full w-full rounded-lg cursor-pointer"
                  // onClick={() => navigate("/eventdetail", { state: { ticket } })}
                />
                <IoBookmarkOutline className="absolute right-2 top-4 text-2xl cursor-pointer" onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering on parent elements
                  handleSaveToWishlist(ticket.event._id); // Pass the event ID
                }} />
                <div className="w-full absolute bottom-1">
                  <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                    <small className="block text-xl">{ticket.event.eventTitle}</small>
                    <p className="text-xs py-2">{ticket.event.eventDate}</p>
                    <p className="text-sm pb-2">{ticket.event.eventLocation}</p>
                    <div className="flex items-center">
                      <button
                        className="me-2 w-[70%] py-2 JobButtonBgBlur text-sm text-white rounded-full"
                        onClick={() => navigate("/ticketdetails", { state: {id : ticket.event._id} })}
                      >
                        View tickets
                      </button>
                      <button 
                  className="md:px-7 py-2 flex justify-center w-[30%] md:w-auto JobButtonBgBlur text-xs text-white rounded-full" 
                  onClick={handleShare}
                >
                  <FaRegShareFromSquare className="text-lg" />
                </button>
                    </div>
                  </div>
                </div>
              </div>
            ))): "No Ticket Bought "}
           
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default MyTickets;

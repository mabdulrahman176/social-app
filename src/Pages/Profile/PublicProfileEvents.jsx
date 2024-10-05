import React, { useState, useEffect } from 'react';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { IoBookmarkOutline, IoTrashOutline } from 'react-icons/io5'; 
import { Link, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../DeleteAPI';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Importing Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Calendar = (props) => {
  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const [events, setEvents] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (deleteItemId) {
      try {
        console.log(`Deleting event with id: ${deleteItemId}`);
        await deleteEvent(deleteItemId);
        setEvents(events.filter((item) => item._id !== deleteItemId));
        toast.success('Event deleted successfully!'); // Using toast for success
      } catch (error) {
        console.error('Error deleting event:', error);
        toast.error('Error deleting event.'); // Using toast for error
      }
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteItemId(null);
  };

  useEffect(() => {
    setLoading(true);
    console.log("single event user comp", props.events);
    setEvents(props.events);
    setLoading(false);
  }, [props.events]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this event",
          url: window.location.href,
        });
        toast.success('Share successful!'); // Using toast for success
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Error sharing event.'); // Using toast for error
      }
    } else {
      toast.warn('Web Share API is not supported in your browser.'); // Using toast for warning
    }
  };

  const user_id = getUserId();

  const handleSaveToWishlist = async (eventId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/wishlist`, {
        wishItemType: 'event',
        wishItemId: eventId,
        userId: user_id,
      });
      console.log('Wishlist item saved:', response.data);
      toast.success('Event saved to wishlist!'); // Using toast for success
    } catch (error) {
      console.error('Error saving to wishlist:', error);
      toast.error('Could not save to wishlist. Please try again.'); // Using toast for error
    }
  };

  return (
    <div className="overflow-y-scroll Podcast_Top_Videos w-full h-full">
      <div className="flex flex-wrap text-white gap-1 w-[95%] mx-auto Podcast_Top_Videos pt-2">
        {loading ? (
          <p className="text-center w-full">Loading...</p>
        ) : events && events.length > 0 ? (
          events.map((elm) => (
            <div
              key={elm._id}
              className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative PPEvent"
              onMouseEnter={() => setVisibleId(elm._id)}
              onMouseLeave={() => setVisibleId(null)}
            >
              <IoBookmarkOutline 
                className="absolute right-2 top-4 text-2xl cursor-pointer"
                onClick={() => handleSaveToWishlist(elm._id)} // Save to wishlist on icon click
              />
              {visibleId === elm._id && (
                <button
                  className="absolute top-14 right-2 text-red-600 text-3xl cursor-pointer"
                  onClick={() => handleDeleteClick(elm._id)}
                >
                  <IoTrashOutline />
                </button>
              )}
              <div className="absolute bottom-1 w-full">
                <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                  <small className="block text-xl">{elm.eventTitle}</small>
                  <p className="text-xs py-2">{elm.eventDate}</p>
                  <p className="text-sm pb-2">{elm.eventDescription}</p>
                  <div className='flex justify-between'>
                    <Link
                      to="/eventdetail"
                      state={{ id: elm._id }}
                      className="me-2 md:px-5 py-2 JobButtonBgBlur md:w-auto w-[70%] text-sm text-white rounded-full"
                    >
                      Buy tickets
                    </Link>
                    <button
                      className="md:px-7 py-2 flex justify-center w-[30%] md:w-auto JobButtonBgBlur text-xs text-white rounded-full"
                      onClick={handleShare}
                    >
                      <FaRegShareFromSquare className='text-sm' />
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={elm.eventCoverUrl}
                alt={`Img-${elm.id}`}
                className="h-full w-full rounded-lg"
              />
            </div>
          ))
        ) : (
          <p className="text-center w-full">No events available</p>
        )}
      </div>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p>Are you sure you want to delete this event?</p>
            <div className="flex justify-end mt-4">
              <button
                className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
              <button
                className="linear_gradient text-white px-4 py-2 rounded"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer /> {/* Include ToastContainer for rendering notifications */}
    </div>
  );
};

export default Calendar;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { IoBookmarkOutline, IoTrashOutline } from 'react-icons/io5'; // Import the delete icon
import { useNavigate } from 'react-router-dom';

// Sample data
let similarPodcastData = [
  {
    img: './img5.jpeg',
    id: 1,
    categ: "Startup",
    time: "Fri, May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './image1.jpeg',
    id: 2,
    categ: "Startup",
    time: "Fri, May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 3,
    categ: "Startup",
    time: "Fri, May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 4,
    categ: "Startup",
    time: "Fri, May 28 3:30pm",
    userName: "NYC USA",
  },
  {
    img: './img5.jpeg',
    id: 5,
    categ: "Startup",
    time: "Fri, May 28 3:30pm",
    userName: "NYC USA",
  },
];

const Calendar = (props) => {
  const [event, setEvents] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);
  let navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Logic to delete item by id
    console.log(`Deleting event with id: ${deleteItemId}`);
    setIsDeleteModalOpen(false);
    // You may need to filter the data or make an API call to remove the item
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteItemId(null);
  };
  useEffect(() => {
    console.log("single event user comp",props.events)
    setEvents(props.events)
    
  }, [])

  return (
    <div className="overflow-y-scroll Podcast_Top_Videos w-full h-full">
      <div className="flex flex-wrap text-white gap-1 w-[95%] mx-auto Podcast_Top_Videos pt-2">
        {event.map((elm) => (
          <div
            key={elm._id}
            className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative PPEvent"
            onMouseEnter={() => setVisibleId(elm._id)}
            onMouseLeave={() => setVisibleId(null)}
          >
            <IoBookmarkOutline className="absolute right-2 top-4 text-2xl" />
                {/* Add delete icon */}
                {visibleId === elm._id && (
                    <button
                      className="absolute top-14 right-2 text-white text-xl cursor-pointer"
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
                <div className='flex items-center'>
                  <button
                    className="me-2 w-[80%] py-2 JobButtonBgBlur text-xs text-white rounded-full"
                    onClick={() => navigate("/ticket")}
                  >
                    Buy tickets
                  </button>
                  <button className="w-[20%] py-2 flex justify-center JobButtonBgBlur text-xs text-white rounded-full">
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
        ))}
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
    </div>
  );
}

export default Calendar;

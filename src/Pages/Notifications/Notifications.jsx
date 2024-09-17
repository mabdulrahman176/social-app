import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const getUserId = () => {
  const str = document.cookie
  const userKey = str.split('=')[1];
  return userKey
}
const API_URL = `${process.env.REACT_APP_API_BASE_URL}/notifications/${getUserId()}`;

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [visibleId, setVisibleId] = useState(null);

  useEffect(() => {
  
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(API_URL); 
        setNotifications(response.data.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleToggleMenu = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotifications(notifications.filter(notification => notification._id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <Fragment>
      <div className="h-full w-full bg-white">
        <div className="main h-full w-[90%] m-[auto]">
          <p className="text-lg h-[10%] flex items-center">Notification</p>
          <div className="h-[90%] overflow-y-scroll Podcast_Top_Videos">
            {notifications.map((notification) => (
              <div
                key={notification._id}
                className="flex justify-between py-3 mt-2 border-b"
              >
                <div className="flex gap-2">
                  <Link to='/profile'>
                    <img
                      src={notification.imgSrc || "https://via.placeholder.com/50"} // Fallback image URL
                      alt={`Notification from user ${notification._id}`}
                      className="h-[50px] w-[50px] rounded-full"
                    />
                  </Link>
                  <div>
                    <p className="text-[15px] opacity-75">{notification.notiDesc}</p>
                    <p>
                      <Link to="#" className="text-[blue] underline text-[13px] opacity-75">
                        {notification.notiTitle}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <p className="text-[gray] text-[13px] opacity-75">{notification.createdAt}</p>
                  <CiMenuKebab
                    className="mt-2 ms-2 text-lg cursor-pointer"
                    onClick={() => handleToggleMenu(notification._id)}
                  />
                  {visibleId === notification._id && (
                    <div className="absolute w-[200px] cursor-pointer right-0 px-3 py-2 z-30 bg-white shadow-lg border">
                      {/* <p className="text-[15px] opacity-75 mb-2">Details</p>
                      <p className="text-[15px] opacity-75 mb-2">Hide</p>
                      <p className="text-[15px] opacity-75 mb-2">Block and report</p> */}
                      <p className="text-[15px] opacity-75 text-[red]" onClick={() => handleDelete(notification._id)}>Delete</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Notification;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userImage from '../../assets/user.jpg'; // Assuming the user image is imported correctly
import { useNavigate } from 'react-router-dom';

function Notifications() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const getNotification = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notifications");
        const result = response.data;
        console.log("Notification Response is ", result.data);
        setNotification(result.data);
      } catch (err) {
        console.log("Notification error is", err);
      }
    };
    getNotification();
  }, []);

  const handleUser = () => {
    navigate('/notificationUser');
  };

  return (
    <div className="h-[87vh] overflow-y-auto p-5">
      <h1 className="text-3xl font-bold mb-5">All Notifications</h1>

      <div className="w-3/5 mx-auto"> {/* Centering the parent box */}
        {notification.map((singlenotification, index) => (
          <div
            key={index}
            onClick={handleUser}
            className="flex items-center bg-gray-200 p-4 mt-3 shadow-lg rounded-lg cursor-pointer"
          >
            {/* Avatar (Image) on the left */}
            <img
              alt="User Avatar"
              src={userImage}
              className="w-24 h-24 rounded-full mr-4" // Adjusted width and height
            />

            {/* Notification Content on the right */}
            <div>
              <h2 className="text-xl font-bold text-green-600">
                {singlenotification.notiTitle}
              </h2>
              <p className="mt-1">{singlenotification.notiDesc}</p>
              <p className="mt-1 text-green-700">
                Created by: {singlenotification.createdBy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;

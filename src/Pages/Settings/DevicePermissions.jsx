import React, { useState, useEffect } from 'react';
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const DevicePermissions = () => {
  const [permissions, setPermissions] = useState({
    camera: false,
    location: false,
    microphone: false,
    notification: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    checkInitialPermissions();
  }, []);

  const checkInitialPermissions = async () => {
    try {
      const cameraStatus = await navigator.permissions.query({ name: 'camera' });
      const microphoneStatus = await navigator.permissions.query({ name: 'microphone' });
      const locationStatus = await navigator.permissions.query({ name: 'geolocation' });
      const notificationStatus = await Notification.requestPermission();

      setPermissions({
        camera: cameraStatus.state === 'granted',
        microphone: microphoneStatus.state === 'granted',
        location: locationStatus.state === 'granted',
        notification: notificationStatus === 'granted',
      });
    } catch (error) {
      console.error("Error checking permissions:", error);
    }
  };

  const togglePermission = async (permission) => {
    if (permissions[permission]) return;

    let permissionGranted = false;

    switch (permission) {
      case 'camera':
        await navigator.mediaDevices.getUserMedia({ video: true })
          .then(() => {
            permissionGranted = true;
          })
          .catch(() => {
            permissionGranted = false;
          });
        break;
      case 'microphone':
        await navigator.mediaDevices.getUserMedia({ audio: true })
          .then(() => {
            permissionGranted = true;
          })
          .catch(() => {
            permissionGranted = false;
          });
        break;
      case 'location':
        await navigator.geolocation.getCurrentPosition(() => {
          permissionGranted = true;
        }, () => {
          permissionGranted = false;
        });
        break;
      case 'notification':
        const permissionStatus = await Notification.requestPermission();
        permissionGranted = permissionStatus === 'granted';
        if (permissionGranted) {
          // Show a notification (only if permission is granted)
          new Notification("Notifications Enabled", {
            body: "You will now receive notifications from this application.",
          });
        }
        break;
      default:
        return;
    }

    if (permissionGranted) {
      setPermissions((prevPermissions) => ({
        ...prevPermissions,
        [permission]: true,
      }));
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <div className='flex ml-10'>
        <LuArrowLeft
          className={`border-[1px] border-black h-8 w-8 rounded-sm cursor-pointer ${permissions.notification ? 'text-blue-600' : ''}`}
          onClick={() => navigate('/settings')}
        />
        <h1 className="text-xl font-semibold ml-10">Device Permissions</h1>
      </div>
      <h1 className='text-2xl font-semibold ml-52 mt-6'>Your Preference</h1>
      <div className="w-96 ml-96 mt-6">
        {Object.keys(permissions).map((permission) => (
          <div key={permission} className="flex justify-between mb-6 items-center border-b-2 p-1">
            <span className="text-xl font-bold capitalize">{permission}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={permissions[permission]}
                className="sr-only peer"
                onChange={() => togglePermission(permission)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicePermissions;

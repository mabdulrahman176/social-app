import React, { useState } from 'react';
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
const DevicePermissions = () => {
  const [permissions, setPermissions] = useState({
    camera: true,
    contacts: true,
    location: false,
    microphone: true,
    notification: false,
    gallery: true,
  });
const navigate = useNavigate();
  const togglePermission = (permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };

  return (
    <div className="flex flex-col  p-4 bg-white h-full">
        <div className='flex ml-10'>
         <LuArrowLeft className='border-[1px] border-black h-8 w-8 rounded-sm cursor-pointer'onClick={()=>navigate('/settings')}/>
      <h1 className="text-xl font-semibold ml-10">Device Permissions</h1>
        </div>
        <h1 className='text-2xl font-semibold ml-52 mt-6'>Your Preference</h1>
      <div className="w-96 ml-96 mt-6">
        {Object.keys(permissions).map((permission) => (
          <div key={permission} className="flex justify-between  mb-6 items-center border-b-2 p-1 ">
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
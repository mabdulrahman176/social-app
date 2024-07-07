    // Left Side Bar Section


import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiLocationOn, CiSettings, CiSquarePlus } from 'react-icons/ci';
import { myContext } from '../../Context/CreateContext';
import { RiMessengerLine } from 'react-icons/ri';
import { IoMdHeartEmpty } from 'react-icons/io';




    // Left Side Bar Section
const LeftLayout = () => {
  let { CreationStates } = useContext(myContext)


  let locationPath = useLocation().pathname;



  return (
    <nav className=" p-1 pt-4 w-full h-full pe-0 ">
      <ul className='lg:block flex justify-evenly' >
        <li className="mb-2">
          <Link to="/profile" className={`flex items-center  ${locationPath === '/profile' ? 'Left_Side_Selected' : ''} py-2 px-2 rounded-lg  transition-all duration-200 transform` }
          >
            <img src="/profile.png" className='rounded-full h-[25px] w-[25px] md:mr-2' alt="" />
            <span className='text-sm opacity-70 md:block hidden'>Profile</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/messages" className={`flex items-center opacity-70 ${locationPath === '/messages' ? 'Left_Side_Selected' : ''} py-2 px-2 rounded-lg  transition-all duration-200 transform` } 
          >
            <RiMessengerLine className="md:mr-2 text-2xl" />
            <span className="text-sm md:block hidden">Messages</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/notifications" className={`flex items-center opacity-70 ${locationPath === '/notifications' ? 'Left_Side_Selected' : ''} py-2 px-2 rounded-lg  transition-all duration-200 transform` }
          >
            <IoMdHeartEmpty className="md:mr-2 text-2xl" />
            <span className="text-sm md:block hidden">Notifications</span>
          </Link>
        </li>
        <li className="mb-2">
          <p className={`flex items-center opacity-70 cursor-pointer py-2 px-2 rounded-lg  transition-all duration-200 transform` }
          onClick={()=>CreationStates.setCreationPodcast(!CreationStates.creationPodcast)}
          >
            <CiSquarePlus className="md:mr-2 text-2xl" />
            <span className="text-sm md:block hidden">Create</span>
          </p>
        </li>
        <li className="mb-2">
          <Link to="/map" className={`flex items-center opacity-70 ${locationPath === '/map' ? 'Left_Side_Selected' : ''} py-2 px-2 rounded-lg  transition-all duration-200 transform` }
         >
            <CiLocationOn className="md:mr-2 text-2xl" />
            <span className="text-sm md:block hidden">Map</span>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/settings" className={`flex items-center opacity-70 ${locationPath === '/settings' ? 'Left_Side_Selected' : ''} py-2 px-2 rounded-lg  transition-all duration-200 transform` }
          >
            <CiSettings className="md:mr-2 text-2xl" />
            <span className="text-sm md:block hidden">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftLayout;

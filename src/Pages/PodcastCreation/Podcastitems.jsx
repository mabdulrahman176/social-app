import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import { CiVideoOn } from "react-icons/ci";
import { LuPodcast } from "react-icons/lu";
import { BsCalendar4Event, BsSuitcaseLg } from "react-icons/bs";
import { myContext } from '../../Context/CreateContext';
import { RxCross2 } from 'react-icons/rx';

const Podcastitems = () => {
  let navigate = useNavigate()
  let { CreationStates } = useContext(myContext)
  // const [inputData, setInpData] = useState()


  const handleInputFile = () =>{
    CreationStates.setCreationPodcast(false)
    navigate('/createvideo')
  }

  const handlePodcastChange = () =>{
    CreationStates.setCreationPodcast(false)
    navigate('/createpodcast')
  }

  const handleEventChange = () =>{
    CreationStates.setCreationPodcast(false)
    navigate('/createevent')
  }

  const handleJobChange = () =>{
    CreationStates.setCreationPodcast(false)
    navigate('/createjob')
  }
  return (
    <>
      <div className='bg-white lg:w-[40%] md:w-[50%] w-[60%] rounded-2xl relative pb-7 shadow-lg'>
          <hr className='bg-black h-[2px] w-[12%] mt-2 rounded-xl mx-auto'/>
          <RxCross2 className='cursor-pointer  absolute top-5 right-3' onClick={()=>CreationStates.setCreationPodcast(false)}/>
         <h1 className='text-center py-2 pb-5'>Create</h1>
           <div className=''>
          <hr  className='text-[#dddddd]'/>
            <div className='flex py-5  items-center cursor-pointer relative' onClick={handleInputFile}>
            <CiVideoOn className='text-[20px] ms-3 me-2'/>
            <p className='text-[17px]'>Vidoes</p>
            </div>
            <hr  className=' text-[#dddddd]'/>
            <div className='flex py-5 items-center cursor-pointer' onClick={handlePodcastChange}>
            <LuPodcast className='text-[20px] ms-3 me-2'/>
            <p className='text-[17px]'>Podcast</p>
            </div>
            <hr  className='text-[#dddddd]'/>
            <div className='flex py-5 items-center cursor-pointer' onClick={handleEventChange}>
            <BsCalendar4Event className='text-[20px] ms-3 me-2'/>
            <p className='text-[17px]'>Events</p>
            </div>
            <hr  className='text-[#dddddd]'/>'  
            <div className='flex items-center cursor-pointer' onClick={handleJobChange}>
            <BsSuitcaseLg className='text-[20px] ms-3 me-2'/>
            <p className='text-[17px]'>Jobs</p>
            </div>
           </div>
          
      </div>
    </>
  )
}

export default Podcastitems

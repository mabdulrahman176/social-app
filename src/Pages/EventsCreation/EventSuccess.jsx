import React, { useContext } from "react";
import { MdDone } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { myContext } from '../../Context/CreateContext';
import { ToastContainer, toast } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const EventSuccess = () => {
  let { EventStates } = useContext(myContext);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this event",
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success('Event link copied to clipboard!'); // Notify on success
    }).catch(err => {
      console.error('Error copying link:', err);
      toast.error('Failed to copy link.'); // Notify on error
    });
  };

  return (
    <div className="h-full w-full bg-white flex flex-col justify-center absolute items-center">
      <ToastContainer /> {/* Include ToastContainer for notifications */}
      <RxCross2 className='cursor-pointer absolute top-5 left-3' onClick={() => EventStates.setEventSubmitted(false)} />

      <div className="flex flex-col justify-center">
        <div className="h-[50px] flex justify-center items-center w-[50px] mx-auto border-2 border-solid border-[#6165F3] opacity-85 rounded-3xl bg-[#e1e2fd]">
          <MdDone className="text-[#333af3] text-[12px]" />
        </div>
        <h2 className="text-center py-6 text-xl font-semibold">
          Event Successfully <br />
          Published
        </h2>
      </div>
      <div className="flex gap-3 mt-10">
        <div
          className="PodcastSuccessGradient rounded-full m-0 p-0 flex justify-center items-center"
          onClick={handleCopyLink} // Add click handler to copy link
        >
          <div className="bg-white h-[95%] rounded-full w-[99%] m-0 p-0">
            <div className="flex items-center PodcastSuccessGradientText justify-center gap-2 rounded-3xl w-40 h-10">
              <IoIosLink className="text-[#69CFDD]" />
              <p>Copy link</p>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center gap-2 PodcastSuccessGradient rounded-3xl w-40 h-10"
          onClick={handleShare}
        >
          <FaShareFromSquare size={20} className="text-white" />
          <p className="text-white">Share</p>
        </div>
      </div>
    </div>
  );
};

export default EventSuccess;

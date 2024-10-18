import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GoHistory } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { RiContactsBook2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { PiBasketThin, PiBookOpenText, PiChatCircleSlashLight } from "react-icons/pi";
import { LuScrollText } from "react-icons/lu";
import { SlLock } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
// import Cookies from 'js-cookie';



const Setting = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    document.cookie.split(";").forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    });
    navigate('/') 
  };
  
  return (
    <div className=" w-full h-full bg-white overflow-y-scroll Podcast_Top_Videos">
      <div className="flex justify-between items-center h-[11%]  py-3 w-[90%] mx-auto">
        <div className=" text-lg">
          <h1 className="">Settings</h1>
        </div>
        <div className="bg-[#F6F6FF] rounded-xl py-2 gap-1  flex items-center px-2 w-[30%]">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
      </div>
      <div className="w-[90%] h-[89%] mx-auto flex justify-between">
          <div className="sm:w-[40%] w-[45%]">
            <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/appliedjobs')}><BsBagCheck className="text-2xl text-gray-500"/> Applied Jobs</p>
            <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/mytickets')}><PiBasketThin className="text-2xl text-gray-500"/> Tickets Bought</p>
            <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/watchhistory')}><GoHistory className="text-2xl text-gray-500"/> Watch History</p>
          
            {/* <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2" onClick={()=>navigate('/contactaccess')}><RiContactsBook2Line className="text-2xl text-gray-500"/> Access to your Contacts</p> */}
            <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2"  onClick={()=>navigate('/blocklist')}><PiChatCircleSlashLight className="text-2xl text-gray-500"/> Blocked user list</p>
            <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={handleLogout}><FiLogOut className="text-2xl text-gray-500"/> Logout</p>
          </div>
          <div className="sm:w-[40%] w-[45%]">
          <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/devicepermission')}><HiMiniDevicePhoneMobile className="text-2xl text-gray-500"/> Device Permissions</p>
          {/* <p className="py-5 border-b border-gray-200 flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/paymentmethod')}><CiCreditCard1 className="text-2xl text-gray-500"/> Cards</p> */}
          <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2" onClick={()=>navigate('/privacy')}><LuScrollText className="text-2xl text-gray-500"/> Privacy policy</p>
          <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2" onClick={()=>navigate('/terms')}><PiBookOpenText className="text-2xl text-gray-500"/> Terms of Use</p>
          <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2" onClick={()=>navigate('/changepassword')}><SlLock className="text-2xl text-gray-500"/> Change Password</p>
          <p className="py-5 border-b border-gray-200 cursor-pointer flex items-center gap-2" onClick={()=>navigate('/wishlist')}><IoBookmarkOutline className="text-2xl text-gray-500"/> WishList</p>
            
          </div>
      </div>
    </div>
  );
};

export default Setting;

import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from './Img2.png'
import img2 from './Img3.png'


function Ticketdetail() {
  let navigate = useNavigate();

  return (
    <>
      <div className="main h-full w-full bg-white">
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/ticketpayment")}
          />{" "}
          Ticket Details
        </h4>
        <div className="w-[90%] overflow-y-scroll Podcast_Top_Videos h-[90%] mx-auto">
          <div className="lg:h-[70%] w-[100%] bg-[#f3f2f2] rounded-xl lg:pb-0 pb-3">
            <div className="flex justify-evenly flex-wrap lg:flex-nowrap">
              <div className="div lg:w-[45%] w-[80%] mx-auto">
                <img
                  src={img}
                  alt=""
                  className="h-[40vh] w-full mt-8"
                />
                <p className="text-md font-semibold opacity-55 text-center p-2">
                  Risk-tolerant for higher returns
                </p>
              </div>

              <div className="location lg:w-[50%] w-[80%] mx-auto mt-8">
                <p className="text-xs font-semibold text-[gray]">Location</p>
                <p className="text-sm  opacity-70">
                  St.James Park Square, London
                </p>
                <div className="flex justify-between mt-5">
                  <div className="name h-[10vh] w-[20%]">
                    <p className="text-xs font-semibold text-[gray]">Name</p>
                    <p className="text-sm font-medium  opacity-70">Kim Seon ho</p>
                  </div>

                  <div className="date h-[10vh] w-[20%]">
                    <p className="text-xs font-semibold text-[gray]">Date</p>
                    <p className="text-sm font-medium  opacity-70">28 Apr 2024</p>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <div className="name h-[10vh] w-[20%]">
                    <p className="text-xs font-semibold text-[gray]">
                      Start Time
                    </p>
                    <p className="text-sm font-medium  opacity-70">18:00 pm</p>
                  </div>

                  <div className="date h-[10vh] w-[20%]">
                    <p className="text-xs font-semibold text-[gray]">
                      End Time
                    </p>
                    <p className="text-sm font-medium  opacity-70">22:00 pm</p>
                  </div>
                </div>

                <div className="h-[1px] w-[100%] border-[1px] border-black opacity-45 border-dashed mt-1"></div>

                <img
                  src={img2}
                  alt=""
                  className="h-[11vh] w-[50%] m-auto mt-3"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Ticketdetail;

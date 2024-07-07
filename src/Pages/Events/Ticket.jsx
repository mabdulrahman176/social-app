import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Ticket.css";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import img from "./Img1.png";

function Ticket() {
  const [add, setAdd] = useState(0);
  const [more, setMore] = useState(0);
  const [able, setAble] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <div className="main  bg-white h-full w-full">
        <h3 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/eventdetail")}
          />
          Ticket Options
        </h3>
        <div className="h-[90%] overflow-y-scroll Podcast_Top_Videos">
          <div className="sm:flex justify-between items-center sm:w-[90%] sm:ps-0 ps-4 mx-auto">
            <img
              src={img}
              alt=""
              className="sm:w-[50%] w-[70%] h-[40vh] rounded-lg border ticket_img "
            />
            <div className="risk2 sm:w-[47%] w-[90%] sm:mt-0 mt-3">
              <h3 className="text-lg font-bold">
                Risk-tolerant for higher returns
              </h3>
              <p className="flex items-center gap-2 py-2 text-sm">
                <CiLocationOn className="me-1" /> Grand Hall, Street 3232, UK
              </p>
              <p className="flex items-center gap-2 py-2 text-sm">
                <IoCalendarOutline className="me-1" /> September 22, 2024 -
                10:00pm-2:00am
              </p>
              <p className=" text-[16px] opacity-80 mt-3">
                Marty travels back in time using an eccentric scientist's time
                machine. However, he must make his high-school-aged parents fall
                in love in order to return to the present.
              </p>
            </div>
          </div>
          <button className="btnsort bg-blue-500 text-white py-2 px-4 my-3 block ms-auto rounded-lg ">
            <FontAwesomeIcon icon={faSort} /> Sort By
          </button>

          <div className="flex justify-between gap-3  Podcast_Top_Videos  mt-3 lg:w-[90%] w-[95%] mx-auto Ticket_Tickets">
            <div className="border rounded shadow-lg w-[33%] text-center px-4 py-6 ticket flex-shrink-0">
              <h5 className="text-lg font-bold">General Admission</h5>
              <p className="min-h-[28vh] text-[14px] opacity-80 pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Burger Senja & Fries, 2 Teh
                  Senja 1 Voucher Merchandise spot dan pelayanan VIP sesi foto.
              </p>
              <h5 className="text-lg font-bold">$71.000</h5>
              <div className="plusbutton flex items-center">
                <button
                  disabled={add === 0}
                  className="btnplus bg-gray-300 text-gray-700 py-1 text-center rounded"
                  onClick={() => setAdd(add - 1)}
                >
                  -
                </button>
                <p className="mt-2 mx-3">{add}</p>
                <button
                  className="btnplus bg-blue-500 text-white py-1 text-center rounded"
                  onClick={() => setAdd(add + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="border rounded shadow-lg w-[33%] text-center px-4 pt-4 ticket flex-shrink-0">
              <h5 className="text-lg font-bold">Premium Admission</h5>
              <p className="min-h-[28vh] text-[14px] opacity-80 pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Burger Senja & Fries, 2 Teh
                  Senja 1 Voucher Merchandise dekorasi kabin spot & pelayanan
                  VVIP sesi foto.
              </p>
              <h5 className="text-lg font-bold">$42.000</h5>
              <div className="plusbutton flex items-center">
                <button
                  disabled={more === 0}
                  className="btnplus bg-gray-300 text-gray-700 py-1 text-center rounded"
                  onClick={() => setMore(more - 1)}
                >
                  -
                </button>
                <p className="mt-2 mx-3">{more}</p>
                <button
                  className="btnplus bg-blue-500 text-white py-1 text-center rounded"
                  onClick={() => setMore(more + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="border rounded shadow-lg w-[33%] text-center px-4 pt-4 ticket flex-shrink-0">
              <h5 className="text-lg font-bold">Early Access</h5>
              <p className="earlytext text-[14px] opacity-80 min-h-[28vh] pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Hotdog Drive in-senja
              </p>
              <h5 className="text-lg font-bold">$42.000</h5>
              <div className="plusbutton flex items-center">
                <button
                  disabled={able === 0}
                  className="btnplus bg-gray-300 text-gray-700 py-1 text-center rounded"
                  onClick={() => setAble(able - 1)}
                >
                  -
                </button>
                <p className="mx-3">{able}</p>
                <button
                  className="btnplus bg-blue-500 text-white py-1 text-center rounded"
                  onClick={() => setAble(able + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <Link
            to="/ticketbuyer"
            className="buyticket text-center py-2 block rounded-xl mx-auto mt-7 w-[30%]"
          >
            Continue
          </Link>
          <br />
          
        </div>
      </div>
    </>
  );
}

export default Ticket;

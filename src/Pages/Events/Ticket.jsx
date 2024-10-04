import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./Ticket.css";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import img from "./Img1.png";

function Ticket() {
  const [add, setAdd] = useState(0);
  const [more, setMore] = useState(0);
  const [able, setAble] = useState(0);

 
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  const navigate = useNavigate();

  const fetchTickets = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched ticket data:", data); // Log the entire response
      setTickets(data.event); 
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  console.log("Component mounted. loc.state:", loc.state);
  if (loc.state) {
    fetchTickets(loc.state.id);
  } else {
    console.error("No event ID found in location state.");
  }
}, [loc.state]);

  return (
    <>
      <div className="main  bg-white h-full w-full">
        <h3 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/eventdetail",{ state: { id:tickets._id } })}
          />
          Ticket Options
        </h3>
        <div className="h-[90%] overflow-y-scroll Podcast_Top_Videos">
          <div className="sm:flex justify-between items-center sm:w-[90%] sm:ps-0 ps-4 mx-auto">
            <img
              src={tickets.eventCoverUrl ? tickets.eventCoverUrl : img}
              alt=""
              className="sm:w-[50%] w-[70%] h-[40vh] rounded-lg border ticket_img "
            />
            <div className="risk2 sm:w-[47%] w-[90%] sm:mt-0 mt-3">
              <h3 className="text-lg font-bold">
                {tickets.eventTitle}
              </h3>
              <p className="flex items-center gap-2 py-2 text-sm">
                <CiLocationOn className="me-1" /> {tickets.eventLocation}
              </p>
              <p className="flex items-center gap-2 py-2 text-sm">
                <IoCalendarOutline className="me-1" /> {tickets.eventDate}
              </p>
              <p className=" text-[16px] opacity-80 mt-3">
             {tickets.eventDescription}
              </p>
            </div>
          </div>
          <button className="btnsort bg-blue-500 text-white py-2 px-4 my-3 block ms-auto rounded-lg ">
            <FontAwesomeIcon icon={faSort} /> Sort By
          </button>

          <div className="flex justify-between gap-3  Podcast_Top_Videos  mt-3 lg:w-[90%] w-[95%] mx-auto Ticket_Tickets">
            <div className="border rounded shadow-lg w-[33%] text-center px-4 py-6 ticket flex-shrink-0">
              <h5 className="text-lg font-bold">General Admission</h5>
              {/* <p className="min-h-[28vh] text-[14px] opacity-80 pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Burger Senja & Fries, 2 Teh
                  Senja 1 Voucher Merchandise spot dan pelayanan VIP sesi foto.
              </p> */}
              <h5 className="text-lg font-bold">${tickets.
generalTicket
}</h5>
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
              {/* <p className="min-h-[28vh] text-[14px] opacity-80 pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Burger Senja & Fries, 2 Teh
                  Senja 1 Voucher Merchandise dekorasi kabin spot & pelayanan
                  VVIP sesi foto.
              </p> */}
              <h5 className="text-lg font-bold">${tickets.premiumTicket
              }</h5>
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
              {/* <p className="earlytext text-[14px] opacity-80 min-h-[28vh] pt-5">
                  1 Ticket Mobil (maks, 2 orang) 2 Hotdog Drive in-senja
              </p> */}
              <h5 className="text-lg font-bold">${tickets.vipTicket}</h5>
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

        <div className="flex justify-center w-[30%] my-3 mx-auto">
        <Link
            to="/ticketbuyer"
            state={{id : tickets._id}}
            className="buyticket text-center py-2 block rounded-xl mx-auto mt-7 w-[30%]"
          >
            Continue
          </Link>
        </div>
          <br />
          
        </div>
      </div>
    </>
  );
}

export default Ticket;

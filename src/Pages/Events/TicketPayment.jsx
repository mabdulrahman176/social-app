import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from './Img1.png'


function Payment() {

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
      console.log("Fetched ticketPayment:", data); // Log the entire response
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
      <div className=" bg-white h-full w-full">
        <div className="main h-full p-4 ">
          <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft

            className="cursor-pointer"
            onClick={() => navigate("/ticketbuyer",{ state: { id:tickets._id } })}
          />{" "}
          Payment Method
        </h4>
          <div className="flex lg:flex-nowrap flex-wrap justify-between overflow-y-scroll Podcast_Top_Videos h-[90%]">
            <div className="creditcard lg:w-[55%] sm:w-[80%] w-full mx-auto border-r-2 p-4">
              <h4 className="text-md font-semibold mb-4">Credit Card</h4>
              <div className="debit h-[7vh] w-[100%] cursor-pointer border rounded p-2 mt-2 mb-10">
                <label className="flex justify-between cursor-pointer" htmlFor="DC">
                  <div className="flex gap-5 items-center ">
                    <input type="radio" id="DC" />
                    <p className="text-sm">Credit/Debit Card</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaCcVisa className="text-3xl" />
                    <FaCcMastercard className="text-3xl" />
                  </div>
                </label>
              </div>
              <h4 className="text-md font-semibold mb-4">Pay With</h4>
              <div className="debit h-[7vh] w-[100%] border rounded p-2 cursor-pointer mt-2 mb-4">
                <label className="flex justify-between cursor-pointer" htmlFor="AP">
                  <div className="flex gap-5 items-center">
                    <input type="radio" id="AP" name="Sone"/>
                    <label className="text-sm" >Apply Pay</label>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaPaypal className="text-3xl" />
                  </div>
                </label>
              </div>

              <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
                <label className="flex justify-between cursor-pointer" htmlFor="PP">
                  <div className="flex gap-5 items-center">
                    <input type="radio" id="PP" name="Sone"/>
                    <p className="text-sm" >Paypal</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaPaypal className="text-3xl" />
                  </div>
                </label>
              </div>

              <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
                <label className="flex justify-between cursor-pointer" htmlFor="PN">
                  <div className="flex gap-5 items-center">
                    <input type="radio"id="PN" name="Sone" />
                    <p className="text-sm" >Payoneer</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <SiPayoneer className="text-3xl" />
                  </div>
                </label>
              </div>

              <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
                <label className="flex justify-between cursor-pointer" htmlFor="OB">
                  <div className="flex gap-5 items-center" >
                    <input type="radio" id="OB" name="Sone" />
                    <label className="text-sm">Other Banks</label>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaCcMastercard className="text-3xl" />
                  </div>
                </label>
              </div>
            </div>
            <div className="evnetddata lg:w-[43%] sm:w-[80%] w-full mx-auto">
            <div className=" p-2 pt-0 rounded">
                        <h4 className="text-md font-semibold mb-4">Event Details</h4>
                        <div className="flex items-center mb-4">
                            <img src={tickets.eventCoverUrl ? tickets.eventCoverUrl : img} alt="Event" className="w-[30%] h-[12vh] object-cover rounded mr-4" />
                            <div>
                                <h6 className="font-semibold text-sm">{tickets.eventTitle}</h6>
                                <p className="text-gray-600 text-xs py-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-1" />{tickets.eventLocation}
                                </p>
                                <p className="text-gray-600 text-xs">
                                    <FontAwesomeIcon icon={faCalendar} className="mr-1" /> {tickets.eventDate} - {tickets.eventDuration}
                                </p>
                            </div>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
                        <h4 className="text-md font-semibold mb-4">Order Summary</h4>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-700 text-sm">Ticket Type</p>
                            <h6 className="font-semibold text-sm opacity-65">2 x Paket VIP</h6>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-700 text-sm">Ticket Price</p>
                            <h6 className="font-semibold text-sm opacity-65">2 x Rp. 371.000</h6>
                        </div>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Service & Handling</p>
                            <p className="text-gray-700 text-sm py-2">Admin Fee</p>
                        </div>
                        <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
                        <div className="flex justify-between">
                            <h6 className="font-semibold text-sm opacity-70">Total</h6>
                            <h6 className=" font-semibold text-sm opacity-65">Rp. 742.000</h6>
                        </div>
                    </div>
              <Link to="/ticketdetails"
              state={{id : tickets._id}}
              className="buyticket text-center px-4 py-2 block rounded-xl mx-auto mt-2 w-[53%]">Continue</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;

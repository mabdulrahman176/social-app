import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from './Img1.png';

function Payment() {
  const [tickets, setTickets] = useState({});
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  const navigate = useNavigate();

  // Assuming selectedTickets is passed through state
  const selectedTickets = loc.state?.selectedTickets || { basicTicket: 0, premiumTicket: 0, standardTicket: 0 };

  const fetchTickets = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched ticketPayment:", data);
      setTickets(data.event);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };


  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };
  const stripePaymentCheckout=async(id)=>{
    const payload={
      eventId:loc.state.id,
      buyerId:getUserId(),
      ticketArray:loc.state.selectedTickets,
    }
    console.log({payload})
    
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/payment/stripe/s`,{
    method:'POST',
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(payload)
    })
    const data = await req.json()
    console.log({data})
      window.location.href=data.url
  }

  useEffect(() => {
    console.log("Component mounted. loc.state:", loc.state);
    if (loc.state) {
      fetchTickets(loc.state.id);
    } else {
      console.error("No event ID found in location state.");
    }
  }, [loc.state]);

  // Calculate total tickets and price
  const totalTickets = selectedTickets.basicTicket + selectedTickets.premiumTicket + selectedTickets.standardTicket;
  const totalPrice = (selectedTickets.basicTicket * tickets.basicTicket) +
                     (selectedTickets.premiumTicket * tickets.premiumTicket) +
                     (selectedTickets.standardTicket * tickets.standardTicket);

  return (
    <div className="bg-white h-full w-full">
      <div className="main h-full p-4">
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/ticketbuyer", { state: { id: tickets._id ,selectedTickets} })}
          />{" "}
          Payment Method
        </h4>
        <div className="flex lg:flex-nowrap flex-wrap justify-between overflow-y-scroll Podcast_Top_Videos h-[90%]">
          <div className="creditcard lg:w-[55%] sm:w-[80%] w-full mx-auto border-r-2 p-4">
            <h4 className="text-md font-semibold mb-4">Credit Card</h4>
            {/* Credit/Debit Card Selection */}
            <div className="debit h-[7vh] w-[100%] cursor-pointer border rounded p-2 mt-2 mb-10">
              <label className="flex justify-between cursor-pointer" htmlFor="DC">
                <div className="flex gap-5 items-center">
                  <input type="radio" id="DC" />
                  <p className="text-sm">Credit/Debit Card</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCcVisa className="text-3xl" />
                  <FaCcMastercard className="text-3xl" />
                </div>
              </label>
            </div>
            {/* Other Payment Methods */}
            <h4 className="text-md font-semibold mb-4">Pay With</h4>
            {/* Apple Pay */}
            <div
            onClick={()=>stripePaymentCheckout(555)}
            className="debit h-[7vh] w-[100%] border rounded p-2 cursor-pointer mt-2 mb-4">
              <label className="flex justify-between cursor-pointer" htmlFor="AP">
                <div className="flex gap-5 items-center">
                  <input type="radio" id="AP" name="paymentMethod" />
                  <label className="text-sm">Apple Pay</label>
                </div>
                <div className="flex gap-5 items-center">
                  <FaPaypal className="text-3xl" />
                </div>
              </label>
            </div>
            {/* Paypal */}
            <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
              <label className="flex justify-between cursor-pointer" htmlFor="PP">
                <div className="flex gap-5 items-center">
                  <input type="radio" id="PP" name="paymentMethod" />
                  <p className="text-sm">Paypal</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaPaypal className="text-3xl" />
                </div>
              </label>
            </div>
            {/* Payoneer */}
            <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
              <label className="flex justify-between cursor-pointer" htmlFor="PN">
                <div className="flex gap-5 items-center">
                  <input type="radio" id="PN" name="paymentMethod" />
                  <p className="text-sm">Payoneer</p>
                </div>
                <div className="flex gap-5 items-center">
                  <SiPayoneer className="text-3xl" />
                </div>
              </label>
            </div>
            {/* Other Banks */}
            <div className="debit h-[7vh] cursor-pointer w-[100%] border rounded p-2 mt-2 mb-4">
              <label className="flex justify-between cursor-pointer" htmlFor="OB">
                <div className="flex gap-5 items-center">
                  <input type="radio" id="OB" name="paymentMethod" />
                  <label className="text-sm">Other Banks</label>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCcMastercard className="text-3xl" />
                </div>
              </label>
            </div>
          </div>
          <div className="eventdata lg:w-[43%] sm:w-[80%] w-full mx-auto">
            <div className="p-2 pt-0 rounded">
              <h4 className="text-md font-semibold mb-4">Event Details</h4>
              <div className="flex items-center mb-4">
                <img src={tickets.eventCoverUrl ? tickets.eventCoverUrl : img} alt="Event" className="w-[30%] h-[12vh] object-cover rounded mr-4" />
                <div>
                  <h6 className="font-semibold text-sm">{tickets.eventTitle}</h6>
                  <p className="text-gray-600 text-xs py-2">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-1" />{tickets.eventLocation}
                  </p>
                  <p className="text-gray-600 text-xs">
                    <FontAwesomeIcon icon={faCalendar} className="mr-1" /> {tickets.eventDate} - {tickets.startTime} - {tickets.endTime}
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
              <h4 className="text-md font-semibold mb-4">Order Summary</h4>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 text-sm">Total Tickets</p>
                <h6 className="font-semibold text-sm opacity-65">{totalTickets} Tickets</h6>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 text-sm">Total Price</p>
                <h6 className="font-semibold text-sm opacity-65">$ {totalPrice.toLocaleString()}</h6>
              </div>
              <div className="mb-2">
                <p className="text-gray-700 text-sm">Service & Handling</p>
                <p className="text-gray-700 text-sm py-2">Admin Fee</p>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
              <div className="flex justify-between">
                <h6 className="font-semibold text-sm opacity-70">Total</h6>
                <h6 className="font-semibold text-sm opacity-65">$ {totalPrice.toLocaleString()}</h6>
              </div>
            </div>
            <Link to="/ticketdetails"
              state={{ id: tickets._id ,selectedTickets}}
              className="buyticket text-center px-4 py-2 block rounded-xl mx-auto mt-2 w-[53%]">Continue</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

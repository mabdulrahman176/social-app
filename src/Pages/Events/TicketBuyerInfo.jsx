import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import img from './Img1.png'


function Contactinfo() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [confirmAddress, setConfirmAddress] = useState('');
    const [contact, setContact] = useState('');
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
        console.log("Fetched ticket buyerInfo:", data); // Log the entire response
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
        <div className="p-2 bg-white h-full w-full">
            <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/ticket",{ state: { id:tickets._id } })}
          />{" "}
          Buyer Contact Information
        </h4>
            <div className="flex flex-wrap-reverse lg:flex-nowrap gap-3 Podcast_Top_Videos w-[95%] h-[90%] overflow-y-scroll mx-auto">
                <div className="lg:w-[50%] sm:w-[80%] w-full gap-2 justify-between flex mx-auto">
                    <form className="w-[47%]">
                        <div className="mb-4 w-full ">
                            <label className="block text-black text-sm mb-2">First Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your First Name"
                                className="w-[100%] p-1 border border-black rounded placeholder:text-black placeholder:text-xs"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm mb-2">Email Address</label>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm mb-2">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Enter Your Phone Number"
                                className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        
                    </form>
                    <form className="w-[47%]">
                        <div className="mb-4">
                            <label className="block text-black text-sm mb-2">Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Last Name"
                                className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-sm mb-2">Confirm Email Address</label>
                            <input
                                type="text"
                                placeholder="Enter Your Confirm Email"
                                className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                value={confirmAddress}
                                onChange={(e) => setConfirmAddress(e.target.value)}
                            />
                        </div>
                        <button type="submit" onClick={()=>navigate('/ticketpayment',{ state: { id:tickets._id } })} className="w-full buyticket text-center py-2 mt-40 text-white rounded ">Continue to Payment</button>
                    </form>
                </div>
                <div className="lg:w-[50%] sm:w-[80%] w-full mx-auto">
                    
                    <div className=" p-6 pt-0 rounded">
                        <h4 className="text-md font-semibold mb-4">Event Details</h4>
                        <div className="flex items-center mb-4">
                            <img src={tickets.eventCoverUrl ? tickets.eventCoverUrl : img} alt="Event" className="w-[30%] h-[12vh] object-cover rounded mr-4" />
                            <div>
                                <h6 className="font-semibold text-md"> {tickets.eventTitle}</h6>
                                <p className="text-gray-600 text-xs py-2">
                             <FontAwesomeIcon icon={faLocationDot} className="mr-1" />{tickets.eventLocation} 
                                </p>
                                <p className="text-gray-600 text-xs">
                                    <FontAwesomeIcon icon={faCalendar} className="mr-1" />{tickets.eventDate} -  {tickets.startTime} - {tickets.endTime}
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
                </div>
            </div>
        </div>
    );
}

export default Contactinfo;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

function Contactinfo() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [confirmAddress, setConfirmAddress] = useState('');
    const [contact, setContact] = useState('');
    const [tickets, setTickets] = useState({});
    const [loading, setLoading] = useState(true);
    const loc = useLocation();
    const navigate = useNavigate();

    const selectedTickets = loc.state?.selectedTickets || { basicTicket: 0, premiumTicket: 0, standardTicket: 0 };

    const fetchTickets = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTickets(data.event);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loc.state) {
            fetchTickets(loc.state.id);
        } else {
            console.error("No event ID found in location state.");
        }
    }, [loc.state]);

    // Find prices for each ticket type
    const basicTicketPrice = tickets.eventTicketArray?.find(ticket => ticket.ticketType === 'basicTicket')?.price || 0;
    const standardTicketPrice = tickets.eventTicketArray?.find(ticket => ticket.ticketType === 'standardTicket')?.price || 0;
    const premiumTicketPrice = tickets.eventTicketArray?.find(ticket => ticket.ticketType === 'premiumTicket')?.price || 0;

    // Calculate total tickets and price
    const totalTickets = selectedTickets.basicTicket + selectedTickets.premiumTicket + selectedTickets.standardTicket;
    const totalPrice = (selectedTickets.basicTicket * basicTicketPrice) +
                       (selectedTickets.premiumTicket * premiumTicketPrice) +
                       (selectedTickets.standardTicket * standardTicketPrice);

    return (
        <div className="p-2 bg-white h-full w-full">
            <h4 className="flex items-center gap-3 ms-4 h-[10%]">
                <FaAngleLeft
                    className="cursor-pointer"
                    onClick={() => navigate("/ticket", { state: { id: tickets._id, selectedTickets } })}
                />
                Buyer Contact Information
            </h4>
            <div className="flex flex-wrap-reverse lg:flex-nowrap gap-3 Podcast_Top_Videos w-[95%] h-[90%] overflow-y-scroll mx-auto">
                <div className="lg:w-[50%] sm:w-[80%] w-full gap-2 justify-between flex mx-auto">
                    <form 
                        className="w-full" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (firstname && address && contact && lastname && confirmAddress) {
                                navigate('/ticketpayment', { state: { id: tickets._id, selectedTickets } });
                            } else {
                                alert("Please fill in all required fields.");
                            }
                        }}
                    >
                        <div className="flex flex-wrap gap-5">
                            <div className="mb-4 w-[47%]">
                                <label className="block text-black text-sm mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full p-1 border border-black rounded placeholder:text-black placeholder:text-xs"
                                    value={firstname}
                                    required
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 w-[47%]">
                                <label className="block text-black text-sm mb-2">Confirm Name</label>
                                <input
                                    type="text"
                                    placeholder="Confirm Your Name"
                                    required
                                    className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 w-[47%]">
                                <label className="block text-black text-sm mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                    value={address}
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 w-[47%]">
                                <label className="block text-black text-sm mb-2">Confirm Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Confirm your Email"
                                    className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                    value={confirmAddress}
                                    required
                                    onChange={(e) => setConfirmAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 w-[47%]">
                                <label className="block text-black text-sm mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone Number"
                                    className="w-full p-1 border border-black placeholder:text-black placeholder:text-xs rounded"
                                    value={contact}
                                    required
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-[50%] buyticket text-center py-2 mt-4 text-white rounded"
                        >
                            Continue to Payment
                        </button>
                    </form>
                </div>

                <div className="lg:w-[50%] sm:w-[80%] w-full mx-auto">
                    <div className="p-6 pt-0 rounded">
                        <h4 className="text-md font-semibold mb-4">Event Details</h4>
                        <div className="flex items-center mb-4">
                            <img src={tickets.eventCoverUrl ? tickets.eventCoverUrl : "/loading.jpg"} alt="Event" className="w-[30%] h-[12vh] object-cover rounded mr-4" />
                            <div>
                                <h6 className="font-semibold text-md">{tickets.eventTitle}</h6>
                                <p className="text-gray-600 text-xs py-2">
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-1" />{tickets.eventLocation}
                                </p>
                                <p className="text-gray-600 text-xs">
                                    <FontAwesomeIcon icon={faCalendar} className="mr-1" />{tickets.eventDate} - {tickets.startTime} - {tickets.endTime}
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
                </div>
            </div>
        </div>
    );
}

export default Contactinfo;

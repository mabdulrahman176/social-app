import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import img2 from './Img1.png';

function Ticketdetail() {
    const [tickets, setTickets] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const loc = useLocation();
    const navigate = useNavigate();

    const fetchTickets = async (eventId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${eventId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched ticketPayment:", data);
            setTickets(data.event); 
            setUser(data.user);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Extract event ID and buyer ID from the URL query parameters
        const queryParams = new URLSearchParams(loc.search);
        const eventId = queryParams.get("eventid");
        const buyerId = queryParams.get("buyerid"); // If you need to use buyerId later

        console.log("Event ID:", eventId, "Buyer ID:", buyerId);

        if (eventId) {
            fetchTickets(eventId);
        } else {
            console.error("No event ID found in URL.");
        }
    }, [loc.search]);

    const selectedTickets = loc.state?.selectedTickets || {};

    if (loading) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <>
            <div className="main h-full w-full bg-white">
                <h4 className="flex items-center gap-3 ms-4 h-[10%]">
                    <FaAngleLeft
                        className="cursor-pointer"
                        onClick={() => navigate("/ticketpayment", { state: { id: tickets._id, selectedTickets } })}
                    />{" "}
                    Ticket Details
                </h4>
                <div className="w-[90%] overflow-y-scroll Podcast_Top_Videos h-[90%] mx-auto">
                    <div className="lg:h-[70%] w-[100%] bg-[#f3f2f2] rounded-xl lg:pb-0 pb-3">
                        <div className="flex justify-evenly flex-wrap lg:flex-nowrap">
                            <div className="div lg:w-[45%] w-[80%] mx-auto">
                                <img
                                    src={tickets.eventCoverUrl ? tickets.eventCoverUrl : "/loading.jpg"}
                                    alt=""
                                    className="h-[40vh] w-full mt-8"
                                />
                                <p className="text-md font-semibold opacity-55 text-center p-2">
                                    {tickets.eventTitle}
                                </p>
                            </div>
                            <div className="location lg:w-[50%] w-[80%] mx-auto mt-8">
                                <p className="text-xs font-semibold text-[gray]">Location</p>
                                <p className="text-sm opacity-70">{tickets.eventLocation}</p>
                                <div className="flex justify-between mt-5">
                                    <div className="name h-[10vh] w-[20%]">
                                        <p className="text-xs font-semibold text-[gray]">Name</p>
                                        <p className="text-sm font-medium opacity-70">{user ? user.name : "Unknown"}</p>
                                    </div>
                                    <div className="date h-[10vh] w-[20%]">
                                        <p className="text-xs font-semibold text-[gray]">Date</p>
                                        <p className="text-sm font-medium opacity-70">{tickets.eventDate}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className="name h-[10vh] w-[20%]">
                                        <p className="text-xs font-semibold text-[gray]">Start Time</p>
                                        <p className="text-sm font-medium opacity-70">{tickets.startTime}</p>
                                    </div>
                                    <div className="date h-[10vh] w-[20%]">
                                        <p className="text-xs font-semibold text-[gray]">End Time</p>
                                        <p className="text-sm font-medium opacity-70">{tickets.endTime}</p>
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

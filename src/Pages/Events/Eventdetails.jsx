import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Eventdetails.css";
import {
  faClock,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
// import img from "./Img2.png";

import RelatedEvent from "./RelatedEvent";

function Eventdetails() {
  const loc = useLocation();
  const navigate = useNavigate();
  // const [newcard, setNewCard] = useState([]);
  const [result, setResult] = useState({});
  const [event, setEvent] = useState({});

  useEffect(() => {
    console.log("single event detail");
    console.log(loc.state);
    const getData = async () => {
      try {
        if (loc.state) {
          const result_ = await getEvent(loc.state.id);
          console.log("result of single event is ", { result_ });
          setResult(result_);

          setEvent(() => {
            return {
              ...result_.event,
            };
          });
        }
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [loc.state.id]);

  const getEvent = async (id) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/events/${id}`,
      {
        method: "GET",
      }
    );
    const d = await req.json();
    setResult(d);
    return d;
  };
  // console.log("evnetPrice",event.eventTicketArray)
  return (
    <>
      <div className="main h-full w-full bg-white">
        <div className="flex justify-between">
          <h4 className="flex items-center gap-3 mt-4 ms-4 text-2xl h-[10%]">
            <FaAngleLeft
              className="cursor-pointer"
              onClick={() => navigate("/events")}
            />
            Event Detail
          </h4>
          {result.user && (
            <img
              src={
                result.user.picUrl ? result.user.picUrl : "./placeholder.jpg"
              }
              alt={result.user ? result.user.name : "Profile"}
              className="rounded-full w-[70px] h-[70px] mt-2 mx-3 object-cover"
            />
          )}
        </div>
        {/* {newcard.map(( data,index)=>( */}
        <div className="overflow-y-scroll  w-[93%] Podcast_Top_Videos mx-auto h-[88%]">
          <div className="flex md:flex-wrap">
            <img
              src={event.eventCoverUrl ? event.eventCoverUrl : "/loading.jpg"}
              alt=""
              className="eventimg1"
            />
            <div className="flex flex-row-reverse justify-between  w-[38%]">
              <div className="w-full   pt-5 ml-6 my-6">
                <div className="ticketstarting py-3 rounded w-full">
                  <small className="text-gray-500">Tickets starting at</small>
                  <h5 className="text-lg pb-2 font-bold">
                    {event.eventTicketArray &&
                    event.eventTicketArray.length > 0 ? (
                      event.eventTicketArray
                        .filter((ticket) => ticket.ticketType === "basicTicket")
                        .map((ticket, index) => (
                          <div key={index}>
                            <p>${ticket.price}</p>
                          </div>
                        ))
                    ) : (
                      <p>empty</p>
                    )}
                  </h5>
                  <button
                    className="buyticket  text-white rounded-lg px-4 py-2 mt-2"
                    onClick={() =>
                      navigate("/ticket", { state: { id: event._id } })
                    }
                  >
                    <small>Buy Tickets</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex mt-2">
            <div className="risk sm:w-[60%]">
              <h3 className="text-xl font-bold">{event.eventTitle}</h3>
              <p className="flex items-center gap-2 py-2 text-sm">
                <CiLocationOn className="me-1" />
                {event.eventLocation}
              </p>
              <p className="flex items-center gap-2 py-2 text-sm">
                <IoCalendarOutline className="me-1" />
                {event.eventDate}
              </p>
              <p className="sm:w-[80%] opacity-80 text-[16px] mt-3">
                {event.eventCatagory}
              </p>
            </div>
          </div>

          <h4 className="text-xl font-bold mt-5">Event Information</h4>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="duration flex gap-4 w-full sm:w-[33%]">
              <FontAwesomeIcon icon={faClock} className="text-3xl" />
              <div>
                <h5 className="text-sm font-bold">Duration</h5>
                <p className="text-sm">
                  {event.startTime} - {event.endTime}
                </p>
              </div>
            </div>
            <div className="participant sm:mt-0 mt-4 w-full sm:w-[33%]">
              <h5 className="text-sm font-bold">Participants</h5>
              <div className="flex items-center">
                {result.participants &&
                  result.participants.slice(0, 2).map((elm, ind) => (
                    <Link
                      to="/userprofile"
                      state={{ id: elm.Users_PK }}
                      key={ind}
                    >
                      <img
                        src={elm.picUrl ? elm.picUrl : "/placeholder.jpg"}
                        alt=""
                        className="partiimg1 rounded-full border border-black"
                      />
                    </Link>
                  ))}

                {/* Repeat for other participant images */}
                {result.participants && result.participants.length > 2 && (
                  <Link
                    to="/participants"
                    state={{ id: event._id }}
                    className="parti2 flex items-center justify-center -ml-[10px] border border-black text-white text-xl cursor-pointer"
                  >
                    <small className="text-gray-500">
                      +{result.participants.length - 2}
                    </small>
                  </Link>
                )}
              </div>
            </div>
            <div className="attention flex w-full sm:mt-0 mt-4 gap-4 sm:w-[33%]">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="text-3xl"
              />
              <div>
                <h5 className="text-sm font-bold">Attention</h5>
                <p className="text-sm">
                  Face mask and social distancing are mandatory outside the car.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-bold mt-6">Description</h4>
          <p className="opacity-80 text-[16px] mt-4">
            {event.eventDescription}
          </p>

          <p className="text-xl font-bold mt-6">Speakers:</p>
          <div className="flex gap-2 md:ps-6 mt-3 w-full overflow-x-scroll Podcast_Top_Videos">
            {result.speakers &&
              result.speakers.map((elm, ind) => (
                <Link
                  to="/userprofile"
                  state={{ id: elm.Users_PK }}
                  key={ind}
                  className="flex items-center justify-center flex-shrink-0 gap-3 py-2 px-2 my-2 rounded w-auto bg-gray-200"
                >
                  <img
                    src={elm.picUrl ? elm.picUrl : "/placeholder.jpg"}
                    className="rounded-full h-[35px] w-[35px]"
                    alt=""
                  />
                  <h1 className="text-md">{elm.name}</h1>
                </Link>
              ))}
          </div>

          <div className="h-[30vh] w-full mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.02928760363!2d71.71692598390551!3d29.392027599969865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b904fe67dd47b%3A0x33075b928acd331e!2sTibba%20Badar%20Sher%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720097793875!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map2"
              className="h-full w-full rounded-lg"
            ></iframe>
          </div>

          <RelatedEvent />
          <br />
        </div>
        {/* ))} */}
      </div>
    </>
  );
}

export default Eventdetails;

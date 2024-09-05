import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Eventdetails.css";
import {
  faClock,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { /*useLocation,*/ useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {
  IoBookmarkOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import img from './Img1.png'
import { FaRegShareFromSquare } from "react-icons/fa6";



const newCardData = [
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  // Add more card objects here
];


function Eventdetails() {
  // const location = useLocation();
  const navigate = useNavigate();

  // const [cardDetail, setcardDetail] = useState(location.state.card)

  return (
    <>
      <div className="main h-full w-full bg-white">
        <h4 className="flex items-center gap-3 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/events")}
          />{" "}
          Event Detail
        </h4>
        <div className="overflow-y-scroll w-[93%] Podcast_Top_Videos mx-auto h-[90%]">
          <img src={img} alt="" className="eventimg1" />
          <div className="sm:flex mt-2">
            <div className="risk sm:w-[60%]">
              <h3 className="text-xl font-bold">
                Risk-tolerant for higher returns
              </h3>
              <p className="flex items-center gap-2 py-2 text-sm">
                <CiLocationOn className="me-1" />
                Grand Hall, Street 3232, UK
              </p>
              <p className="flex items-center gap-2 py-2 text-sm">
                <IoCalendarOutline className="me-1" />
                September 22, 2024 - 10:00pm-2:00am
              </p>
              <p className="sm:w-[80%] opacity-80 text-[16px] mt-3">
                Marty travels back in time using an eccentric scientist's time
                machine. However, he must make his high-school-aged parents fall
                in love in order to return to the present.
              </p>
            </div>
            <div className="sm:w-[40%] pt-5">
              <div className="ticketstarting py-3 rounded w-[80%] mx-auto  ">
                <small className="text-gray-500">Tickets starting at</small>
                <h5 className="text-lg pb-2 font-bold">Rp. 212.000</h5>
                <button
                  className="buyticket  text-white rounded-lg px-4 py-2 mt-2"
                  onClick={() => navigate("/ticket")}
                >
                  <small>Buy Tickets</small>
                </button>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-bold mt-5">Event Information</h4>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="duration flex gap-4 w-full sm:w-[33%]">
              <FontAwesomeIcon icon={faClock} className="text-3xl" />
              <div>
                <h5 className="text-sm font-bold">Duration</h5>
                <p className="text-sm">
                    20.00 - 21.56 WIB <br /> 1 hour 56 minutes
                </p>
              </div>
            </div>
            <div className="participant sm:mt-0 mt-4 w-full sm:w-[33%]">
              <h5 className="text-sm font-bold">Participants</h5>
              <div className="flex items-center">
                <img
                  src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
                  alt=""
                  className="partiimg1 rounded-full border border-black"
                />
                <img
                  src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
                  alt=""
                  className="partiimg1 rounded-full -ml-[10px] border border-black"
                />
                <img
                  src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
                  alt=""
                  className="partiimg1 rounded-full -ml-[10px] border border-black"
                />
                <img
                  src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
                  alt=""
                  className="partiimg1 rounded-full -ml-[10px] border border-black"
                />
                {/* Repeat for other participant images */}
                <div className="parti2 flex items-center justify-center -ml-[10px] border border-black">
                  <small className="text-gray-500">+5K</small>
                </div>
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
                    Face mask and social distancing are mandatory outside the
                    car.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-bold mt-6">Description</h4>
          <p className="opacity-80 text-[16px] mt-4">
            Drive-In Senja memberikan retro drive-in experience yang dikemas
            secara modern. Penggunaan transmisi radio kit , mengintegrasikan
            suara film ke dalam radio mobil, ditambah proyektor resolusi tinggi
            yang menyediakan pengala man visual terbaik. Acara ini merupakan
            sarana yang aman untuk menghabiskan waktu bersama keluarga, pasang
            an, maupun komunitas
          </p>
          <div className="h-[30vh] w-full mt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.02928760363!2d71.71692598390551!3d29.392027599969865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b904fe67dd47b%3A0x33075b928acd331e!2sTibba%20Badar%20Sher%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720097793875!5m2!1sen!2s"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map2" className="h-full w-full rounded-lg"></iframe>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-1 sm:w-[93%] mx-auto">
            {newCardData.map((data, i) => (
              <div key={i} className="m-0 text-white md:w-[32.4%] w-[49.4%] h-[45vh] relative">
                <img
                  src={data.imgSrc}
                  alt="Card Img2y"
                  className="h-full w-full rounded-lg cursor-pointer"
                  onClick={() => navigate("/eventdetail", { state: { data } })}
                />
                <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
                <div className="w-full absolute  bottom-1">
                  <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                    <small className="block text-xl">Startup</small>
                    <p className="text-xs py-2">Fri, May 28, 3:30pm</p>
                    <p className="text-sm pb-2">NYC, USA</p>
                    <div className="flex items-center">
                    <button
                      className="me-2 md:px-5 py-2 JobButtonBgBlur md:w-auto w-[70%] text-sm text-white rounded-full"
                      onClick={() => navigate("/ticket")}
                    >
                      Buy tickets
                    </button>
                    <button className="md:px-7 py-2 flex justify-center w-[30%]  md:w-auto  JobButtonBgBlur text-xs text-white  rounded-full">
                    <FaRegShareFromSquare className="text-lg" />
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          
        </div>
      </div>
    </>
  );
}

export default Eventdetails;

import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [wishlistjob, setWishlistJob] = useState([]);
  const [wishlistevent, setWishlistEvent] = useState([]);
  const [wishlistpodcast, setWishlistPodcast] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/wishlist`);
        const result = response.data;
        console.log("wishlist result",result)
        const info = result.data;

        setWishlistJob(info.job);
        setWishlistEvent(info.event);
        setWishlistPodcast(info.podcast);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, []);

  const navigate = useNavigate();

  const handleShare = async (e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this event!",
          url: window.location.href,
        });
        toast.success('Event link shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Error sharing the event link.');
      }
    } else {
      toast.error('Web Share API is not supported in your browser.');
    }
  };

  const formatDate = (dateString) => {
    // Normalize the date input by replacing dashes with slashes
    const normalizedDateString = dateString.replace(/[-]/g, "/");

    // Split the date parts
    const dateParts = normalizedDateString.split("/");

    let day, month, year;

    // Check for different formats
    if (dateParts.length === 3) {
      // Check if the first part is a year (YYYY/MM/DD) or day (DD/MM/YYYY)
      if (dateParts[0].length === 4) {
        // Format: YYYY/MM/DD
        year = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        day = dateParts[2];
      } else {
        // Format: DD/MM/YYYY
        day = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        year = dateParts[2];
      }

      // Create a new Date object
      const date = new Date(year, month, day);

      // Ensure the date is valid
      if (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      ) {
        // Format and return the date in DD/MM/YYYY
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(
          -2
        )}/${year}`;
      }
    }

    return "Invalid date format";
  };

  const formatDuration = (duration) => {
    const seconds = Math.floor(duration / 1000);
    
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} min${minutes > 1 ? 's' : ''}`;
    }
  };

  const hasItems = wishlistjob.length > 0 || wishlistevent.length > 0 || wishlistpodcast.length > 0;

  return (
    <Fragment>
      <div className="overflow-y-scroll h-full w-full p-4 bg-white">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {!hasItems ? (
              <div className="text-center">No items in your wishlist.</div>
            ) : (
              <div className="sm:ps-6 w-full h-full bg-white overflow-y-scroll"  style={{ WebkitOverflowScrolling: 'touch', WebkitScrollbar: { display: 'none' }, '-msOverflowStyle': 'none', scrollbarWidth: 'none' }}>       <h4 className="flex items-center gap-3 ms-4 h-[10%]">
              <FaAngleLeft
                className="cursor-pointer"
                onClick={() => navigate("/settings")}
              />{" "}
             Wish List
            </h4>
              <div className="flex flex-wrap gap-4 w-full">
           
                {/* Render podcasts */}
                {wishlistpodcast.map((elm, index) => (
                  <div key={index} className="cursor-pointer text-white lg:h-[40vh] h-[25vh] lg:w-[22.33vw] md:w-[33.33vw] sm:w-[33.33vw] w-[32.33vw] flex-shrink-0 rounded-lg relative" onClick={() => navigate(`/podcastdetails`, { state: { id: elm._id } })}>
                    <div className="absolute h-full w-full ShadedBG rounded-lg">
                      <div className="absolute bottom-1 left-1">
                        <p className="text-sm text-white">{elm.episodeTitle}</p>
                        <Link to="/userprofile" state={{ id: elm.userID ? elm.userID : "" }} onClick={(e) => e.stopPropagation()}>
                          <p className="text-sm">{elm.user ? elm.user.name : ""}</p>
                        </Link>
                        <p className="text-xs flex gap-1 items-center">
                          <CiPlay1 size={20} /> {formatDuration(elm.podcastDuration)}
                        </p>
                      </div>
                    </div>
                    <img src={elm.picUrl ? elm.picUrl : "/loading.jpg"} alt={`Img-${index}`} className="h-full w-full rounded-lg" />
                  </div>
                ))}

                {/* Render jobs */}
                {wishlistjob.map((elm, ind) => (
                  <div key={ind} className="h-[40vh] md:w-[31%] sm:w-[40%] w-[50%] flex-shrink-0 shadow rounded-lg border relative">
                    <div className="w-full">
                      <div className="flex gap-2 ml-2 mt-2">
                        <img src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"} alt="Profile" className="rounded-full  h-10 w-10" />
                        <div>
                          <h1 className="font-semibold">{elm.jobTitle.length > 25 ? `${elm.jobTitle.substring(0, 25)}...` : elm.jobTitle}</h1>
                          <p className="font-light text-md">{formatDate(elm.applicationDeadline)}</p>
                        </div>
                      </div>
                      <p className="mt-7 ps-4 text-md opacity-65">{elm.location} ({elm.workplaceType})</p>
                      <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                      {elm.jobType === " " ? (
                    <Link
                      to={"/jobdetail"}
                      state={{ id: elm._id }}
                      className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                      Apply Now
                    </Link>
                  ) : (
                    <div className="text-center flex items-center">
                      <Link
                        to={"/jobdetail"}
                        state={{ id: elm._id }}
                        className="w-[90%] mx-auto flex text-xs mt-7 justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      >
                       Apply Now
                      </Link>
                    </div>
                  )}
                    </div>
                  </div>
                ))}

                {/* Render events */}
                {wishlistevent.map((data, i) => (
                  <div key={i} className="m-0 text-white md:w-[32%] w-[49.4%] h-[42vh] relative">
                    <img src={data.eventCoverUrl ? data.eventCoverUrl : "/loading.jpg"} alt="Card Img2" className="h-full w-full rounded-lg cursor-pointer" />
                    <div className="w-full absolute bottom-1">
                      <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                        <small className="block text-xl">{data.eventTitle}</small>
                        <p className="text-xs py-2">{data.eventCatagory}</p>
                        <p className="text-sm pb-2">{data.eventLocation}</p>
                        <div className="flex items-center">
                          <Link to="/eventdetail" state={{ id: data._id }} className="me-2 md:px-5 py-2 JobButtonBgBlur md:w-auto w-[70%] text-sm text-white rounded-full">
                            Buy tickets
                          </Link>
                          <button className="md:px-7 py-2 flex justify-center w-[30%] md:w-auto JobButtonBgBlur text-xs text-white rounded-full" onClick={handleShare}>
                            <FaRegShareFromSquare className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            )}
          </>
        )}
        <ToastContainer />
      </div>
    </Fragment>
  );
};

export default Wishlist;

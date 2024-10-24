import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsInfoSquare } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Model from "../ModalReport/Model";
import Review from "../Podcast/Review";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Video = () => {
  let navigate = useNavigate();
  const { src } = useParams();
  const location = useLocation();
  const [repModOpen, setRepModOpen] = useState(false);
  const [revModOpen, setRevModOpen] = useState(false);
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleProfile = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const videoId = decodeURIComponent(src);

  const getVideo = async () => {
    const req = await fetch(`${API_BASE_URL}/upload/${videoId}`, {
      credentials: 'include'
    });
    const data = await req.json();
    setVideo(data);
  };

  const getUserId = () => {
    const str = document.cookie;
    return str.split("=")[1]; 
  };

  const recordView = async () => {
    try {
      const userId = getUserId();
      const viewData = {
        viewItemType: 'video',
        viewItemId: videoId,
        viewerId: userId,
      };
  
      // Log the data being sent
      console.log('Posting view data:', viewData);
  
      await axios.post(`${API_BASE_URL}/views`, viewData);
      console.log('View recorded successfully');
    } catch (error) {
      console.error('Error recording view:', error);
    }
  };
  console.log("location state",location.state)
  useEffect(() => {
    if (location.state && location.state.videos) {
      setVideos(location.state.videos);
      const currentVideo = location.state.videos.find(v => v._id === videoId);
      if (currentVideo) {
        setVideo(currentVideo);
        setVideoIndex(location.state.videos.findIndex(v => v._id === videoId));
        recordView(); // Record the view when the video is loaded
      }
    }
    getVideo();
  }, [videoId, location.state]);

  const useDebounce = (callback, delay) => {
    const timerRef = useRef(null);
  
    const debouncedCallback = (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  
    useEffect(() => {
      return () => {
        clearTimeout(timerRef.current);
      };
    }, []);
  
    return debouncedCallback;
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      if (videoIndex < videos.length - 1) {
        const nextVideoId = videos[videoIndex + 1]._id;
        navigate(`/video/${encodeURIComponent(nextVideoId)}`, { state: { videos } });
      }
    } else {
      if (videoIndex > 0) {
        const prevVideoId = videos[videoIndex - 1]._id;
        navigate(`/video/${encodeURIComponent(prevVideoId)}`, { state: { videos } });
      }
    }
  };

  const debouncedHandleScroll = useDebounce(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('wheel', debouncedHandleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video?.data?.videoDesc || 'Check this video!',
          text: 'Watch this video!',
          url: window.location.href,
        });
        toast.success('Share successful!');
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Error sharing the video.');
      }
    } else {
      toast.warn('Web Share API is not supported in your browser.');
    }
  };
  const subscribeUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriberId: getUserId(), subscribedToId: video?.user?.Users_PK }),
      });
      if (response.ok) {
        const result = await response.json();
        setIsSubscribed(true);
        console.log("user subscribed", result.message);
      } else {
        const error = await response.json();
        console.error('Error subscribing:', error.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  const unsubscribeUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe/${video?.user?.Users_PK}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setIsSubscribed(false);
        console.log('Unsubscribed successfully');
      } else {
        const error = await response.json();
        console.error('Error unsubscribing:', error.message);
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  const toggleSubscription = () => {
    if (isSubscribed) {
      unsubscribeUser();
    } else {
      subscribeUser();
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoId]);

  // Check if the user is already subscribed when the component mounts
  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/subscribe/my/${video?.user?.Users_PK}`);
        if (response.ok) {
          const subscriptions = await response.json();
          const currentUserId = getUserId();
          const isUserSubscribed = subscriptions.some(sub => sub.subscriberId === currentUserId);
          setIsSubscribed(isUserSubscribed);
        }
      } catch (error) {
        console.error('Error fetching subscription status:', error);
      }
    };

    if (video) {
      checkSubscriptionStatus();
    }
  }, [video]);

  return (
    <Fragment>
      <section className="h-full w-full relative flex items-center bg-white">
        {revModOpen && (
          <div className="h-[95%] left-0 w-full absolute top-0 z-20 flex justify-center items-center">
            <Review videoId={videoId} setRevModOpen={setRevModOpen} />
          </div>
        )}
        {repModOpen && (
          <div className="h-full w-full absolute top-0 z-20 flex justify-center items-center">
            <Model setRepModOpen={setRepModOpen} />
          </div>
        )}
        <div className="w-[80%] sm:w-[65%] md:w-[55%] h-[95%] mx-auto rounded-xl relative">
          <div className="absolute z-10 rounded-lg left-0 top-0 h-full w-full ShadedBG">
            <div
              className="absolute cursor-pointer flex gap-2 items-center ps-4 py-2 text-lg text-white left-0 z-10"
              onClick={() => navigate("/videos")}
            >
              <FaChevronLeft className="text-xs" />
              Videos
            </div>
            <div className="absolute z-10 bottom-3 w-[60%] sm:w-[43%] p-3 text-white">
              <Link to="/userprofile"
                state={{ id: video?.user?.Users_PK || " " }}
              >
                <p className="text-xl font-semibold">
                  {video?.user?.name || video?.user?.userName || 'NO_NAME'}
                </p>
              </Link>
              <p className="py-1 w-[80%] text-sm">
                {video?.data?.videoDesc || 'No Description'}
              </p>
              <p className="py-1 w-[80%] text-sm">
                {video?.data?.videoTags
                  ? video.data.videoTags.map(tag => `#${tag}`).join(' ')
                  : '#fyp'}
              </p>
            </div>
            <div className="absolute bottom-3 z-10 right-2 text-white">
              <div className="relative cursor-pointer rounded-full flex justify-center">
                <Link to="/userprofile"
                  state={{ id: video?.user?.Users_PK || " " }}
                >
                  <img
                    src={video?.user?.picUrl || "/placeholder.jpg"}
                    style={{ height: "40px", width: "40px" }}
                    className="rounded-full"
                    alt="User Profile"
                  />
                </Link>
                {!isSubscribed && (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="absolute -bottom-2 p-1 text-xs bg-blue-700 rounded-full cursor-pointer"
                    onClick={toggleSubscription}
                  />
                )}
              </div>
              <div className="text-center cursor-pointer mt-5" onClick={() => setRepModOpen(true)}>
                <p className="text-xs">
                  <BsInfoSquare className="block text-lg mx-auto" />
                  Report
                </p>
              </div>
              <div className="text-center cursor-pointer mt-5" onClick={() => setRevModOpen(true)}>
                <p className="text-xs">
                  <CiStar className="block text-2xl mx-auto" />
                  Reviews
                </p>
              </div>
              <div className="text-center cursor-pointer mt-5 mb-3" onClick={shareContent}>
                <p className="text-xs m-0">
                  <FaRegShareFromSquare className="block text-lg mx-auto" />
                  Share
                </p>
              </div>
            </div>
          </div>
          <video
            src={video?.data?.videoUrl || ''}
            autoPlay
            className="h-full relative z-0 rounded-xl w-full bg-slate-300 object-fill"
            
          ></video>
        </div>
      </section>

      <ToastContainer />
    </Fragment>
  );
};

export default Video;

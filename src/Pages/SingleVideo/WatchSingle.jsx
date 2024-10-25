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

const WatchSingle = () => {
  let navigate = useNavigate();
  const { src } = useParams();
  const location = useLocation();
  const [repModOpen, setRepModOpen] = useState(false);
  const [revModOpen, setRevModOpen] = useState(false);
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);
 const [watch ,setWatch] = useState(null)


  const videoId = decodeURIComponent(src);

  const getVideo = async () => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/${videoId}`, {
      credentials: 'include'
    });
    const data = await req.json();
    setVideo(data);
  };

  console.log(" watch video array:",location.state.id);

  useEffect(() => {
    console.log("Current location state:", location.state.id); // Log the state
    if (location.state && location.state.id) {
      setVideos(location.state.id); // Set the videos array from state
      const info = location.state.id.map((elm)=> elm.data )
      console.log("info from watch history",info)
      setWatch(info)
     
      const currentVideo = info.find(v => v._id === videoId);
      console.log("single video current",currentVideo)
      if (currentVideo) {
        setVideo(currentVideo);
        setVideoIndex(info.findIndex(v => v._id === videoId));
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
        clearTimeout(timerRef.current); // Clean up on unmount
      };
    }, []);
  
    return debouncedCallback;
  };

  const handleScroll = (e) => {

   
    if (e.deltaY > 0) {
      // Scroll down
      if (videoIndex < watch.length - 1) {
        const nextVideoId = watch[videoIndex + 1]._id;
        console.log("next video id",nextVideoId)
        console.log("index number",videoIndex)
        navigate(`/watchhistory/${encodeURIComponent(nextVideoId)}`, { state: { id :location.state.id } }, { replace: true });
      }
    } else {
      // Scroll up
      if (videoIndex > 0) {
        const prevVideoId = watch[videoIndex - 1]._id;
        navigate(`/watchhistory/${encodeURIComponent(prevVideoId)}`, { state: { id:location.state.id } }, { replace: true });
      }
    }
  };

  const debouncedHandleScroll = useDebounce(handleScroll, 200); // Adjust the delay as needed

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
          title: video && video.data ? video.data.videoDesc : 'Check this video!',
          text: 'Watch this video!',
          url: window.location.href,
        });
        toast.success('Share successful!'); // Using toast for success
      } catch (error) {
        console.error('Error sharing:', error);
        toast.error('Error sharing the video.'); // Using toast for error
      }
    } else {
      toast.warn('Web Share API is not supported in your browser.'); // Using toast for warning
    }
  };

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
              onClick={() => navigate("/watchhistory")}
            >
              <FaChevronLeft className="text-xs" />
              Videos
            </div>
            <div className="absolute z-10 bottom-3 w-[60%] sm:w-[43%] p-3 text-white">
             <Link to="/userprofile"
              state={{id :video && video.user ? video.user.Users_PK :" "}}
             >
             <p className="text-xl font-semibold">
             {video?.user?.name || video?.user?.userName || 'NO_NAME'}
              </p>
             </Link>
              <p className="py-1 w-[80%] text-sm">
                {video && video.data ? video.data.videoDesc : 'Loading...'}
              </p>
              <p className="py-1 w-[80%] text-sm">
                {video && video.data && video.data.videoTags
                  ? video.data.videoTags.map(tag => `#${tag}`).join(' ')
                  : 'Loading...'}
              </p>
            </div>
            <div className="absolute bottom-3 z-10 right-2 text-white">
              <div className="relative cursor-pointer rounded-full flex justify-center" >
               <Link to="/userprofile"
               state={{id :video && video.user ? video.user.Users_PK :" "}}
               >
               <img
                  src={video && video.user ? video.user.picUrl : "/placeholder.jpg"}
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-full"
                  alt="User Profile "
                />
               </Link>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="absolute -bottom-2 p-1 text-xs bg-blue-700 rounded-full"
                />
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
            src={video && video.data ? video.data.videoUrl : ''}
            autoPlay
            className="h-full relative z-0 rounded-xl w-full bg-slate-300 object-fill"
            controls
          ></video>
        </div>
      </section>

      <ToastContainer /> {/* Include ToastContainer for rendering notifications */}
    </Fragment>
  );
};

export default WatchSingle;


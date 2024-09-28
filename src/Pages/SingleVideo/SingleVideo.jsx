import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsInfoSquare } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Model from "../ModalReport/Model";
import Review from "../Podcast/Review";

const Video = () => {
  let navigate = useNavigate();
  const { src } = useParams();
  const [repModOpen, setRepModOpen] = useState(false);
  const [revModOpen, setRevModOpen] = useState(false);
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleProfile = () => {
    navigate('/profile');
  };

  const videoId = decodeURIComponent(src);

  const getVideo = async () => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/${videoId}`,{
      credentials:'include'
    });
    const data = await req.json();
    setVideo(data);
  };
<<<<<<< HEAD

  const getUserId = () => {
  const str = document.cookie
  const userKey = str.split('=')[1];
  return userKey
}
=======
console.log("single video detials is", video)
>>>>>>> f344843567607e831b7ce0f7599f8e6b42e11282
  useEffect(() => {
    const videoState = window.history.state;
    if (videoState && videoState.videos) {
      setVideos(videoState.videos);
      const currentVideo = videoState.videos.find(v => v._id === videoId);
      if (currentVideo) {
        setVideo(currentVideo);
        setVideoIndex(videoState.videos.findIndex(v => v._id === videoId));
      }
    }
    getVideo();
  }, [videoId]);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll down
      if (videoIndex < videos.length - 1) {
        const nextVideoId = videos[videoIndex + 1]._id;
        navigate(`/video/${encodeURIComponent(nextVideoId)}`, { state: { videos } });
      }
    } else {
      // Scroll up
      if (videoIndex > 0) {
        const prevVideoId = videos[videoIndex - 1]._id;
        navigate(`/video/${encodeURIComponent(prevVideoId)}`, { state: { videos } });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [videoIndex, videos]);

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video && video.data ? video.data.videoDesc : 'Check this video!',
          text: 'Watch this video!',
          url: window.location.href,
        });
        console.log('Share successful!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
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
              className="absolute cursor-pointer flex gap-2 items-center ps-2 text-lg text-white left-0 z-10"
              onClick={() => navigate("/videos")}
            >
              <FaChevronLeft className="text-xs" />
              Videos
            </div>
            <div className="absolute z-10 bottom-3 w-[60%] sm:w-[43%] p-3 text-white">
              <p  className="text-xl font-semibold">
                {video && video.user ? video.user.name : 'NO_NAME'}
              </p>
              <p className="py-1 w-[80%] text-sm">
                {video && video.data ? video.data.videoDesc : 'Loading...'}
              </p>
              <p className="py-1 w-[80%] text-sm">
  {video && video.data 
    ? `# ${video.data.videoTags.join(' # ')}` 
    : 'Loading...'}
</p>
            </div>
            <div className="absolute bottom-3 z-10 right-2 text-white">
              <div className="relative cursor-pointer rounded-full flex justify-center" onClick={handleProfile}>
                <img
                  src={video && video.user ? video.user.picUrl : '/placeholder.png'}
                  style={{ height: "40px", width: "40px" }}
                  className="rounded-full"
                  alt=""
                />
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
    </Fragment>
  );
};

export default Video;

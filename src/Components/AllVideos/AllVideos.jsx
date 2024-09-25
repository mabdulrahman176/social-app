import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const getData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/upload/videos/all`, {
        params: { page, limit: 20 }
      });
      const updatedData = response.data.data.map(user => ({
        ...user,
        active: true
      }));
      setVideos(prevVideos => [...prevVideos, ...updatedData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const observer = useRef();
  const lastVideoRef = useRef();

  useEffect(() => {
    if (loading) return;

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    };

    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);
    if (lastVideoRef.current) {
      observer.current.observe(lastVideoRef.current);
    }

    return () => {
      if (observer.current && lastVideoRef.current) {
        observer.current.unobserve(lastVideoRef.current);
      }
    };
  }, [loading, lastVideoRef]);

  const handleVideoClick = (index) => {
    navigate(`/video/${encodeURIComponent(videos[index]._id)}`, { state: { videos } });
  };

  return (
    <div className="bg-white px-2 h-[89%] overflow-y-scroll Podcast_Top_Videos mt-1">
      <h1 className="text-xl font-bold my-3 sm:w-[90%] lg:w-[80%] mx-auto">
        Entrepreneur & Investor Videos
      </h1>
      <div className="flex flex-wrap justify-center gap-1 sm:w-[90%] lg:w-[80%] mx-auto">
        {videos.map((video, i) => (
          <div
            key={video._id}
            ref={i === videos.length - 1 ? lastVideoRef : null}
            className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
            onClick={() => handleVideoClick(i)}
          >
            <video
              src={video.videoUrl}
              className="w-[100%] h-[100%] overflow-y-hidden object-fill"
              muted
              controls
            ></video>
            <CiPlay1 className="absolute text-2xl text-white" />
          </div>
        ))}
      </div>
      {loading && <div className="text-center py-2">Loading more videos...</div>}
    </div>
  );
};

export default AllVideos;

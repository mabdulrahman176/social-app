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
      const response = await axios.get(`${API_BASE_URL}/upload`, {
        params: { page, limit: 20 }
      });
  
      console.log("All videos data user:", response.data.data); // Log the data to inspect the structure
  
      // Extracting the videos from the response
      const updatedData = response.data.data.map(item => ({
        _id: item.data._id,
        videoUrl: item.data.videoUrl,
        videoName: item.data.videoName,
        videoDesc: item.data.videoDesc,
        videoTags: item.data.videoTags,
        createdAt: item.data.createdAt,
        updatedAt: item.data.updatedAt,
        comments: item.commments || [], 
        user: item.user || {} 
      }));
  
      // Avoid duplicates by checking existing video IDs
      setVideos(prevVideos => {
        const existingIds = new Set(prevVideos.map(video => video._id));
        const newVideos = updatedData.filter(video => !existingIds.has(video._id));
        return [...prevVideos, ...newVideos];
      });
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
      // Load next page when the last video is in view and there are still videos to load
      if (target.isIntersecting && videos.length % 20 === 0 && videos.length > 0) {
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
  }, [loading, lastVideoRef, videos]);

  const handleVideoClick = (index) => {
    navigate(`/video/${encodeURIComponent(videos[index]._id)}`, { state: { videos } });
  };

  return (
    <div className="bg-white px-2 h-[89%] overflow-y-scroll Podcast_Top_Videos mt-1">
      <h1 className="text-xl font-bold my-3 sm:w-[90%] lg:w-[80%] mx-auto">
        Entrepreneur & Investor Videos
      </h1>
      <div className="flex flex-wrap justify-start gap-1 sm:w-[90%] lg:w-[80%] mx-auto">
        {videos.slice(0, Math.min(videos.length, page * 20)).map((video, i) => (
          <div
            key={video._id} // Use unique ID instead of index
            ref={i === videos.length - 1 ? lastVideoRef : null}
            className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
            onClick={() => handleVideoClick(i)}
          >
            <video
              src={video.videoUrl}
              className="w-[100%] h-[100%] overflow-y-hidden object-cover"
              muted
              
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

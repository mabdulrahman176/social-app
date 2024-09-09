import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const AllVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/upload';

  // Fetch video data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/upload/videos/all`);
        const result = response.data;
        console.log("fetched data:", result);
        const updatedData = result.data.map(user => ({
          ...user,
          active: true
        }));
        setVideos(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <div className="bg-white px-2 h-[89%] overflow-y-scroll Podcast_Top_Videos mt-1">
        <h1 className="text-xl font-bold my-3 sm:w-[90%] lg:w-[80%] mx-auto">
          Entrepreneur & Investor Videos
        </h1>
        <div className="flex flex-wrap justify-center gap-1 sm:w-[90%] lg:w-[80%] mx-auto">
          {videos.map((video,i) => (
            <div
              key={i} // Use unique video ID as key
              className="w-[32%] cursor-pointer grid place-items-center relative h-[30vh] sm:h-[40vh]"
              onClick={() => navigate(`/video/${encodeURIComponent(video.videoUrl)}`)} // Navigate using video URL
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
      </div>
    </React.Fragment>
  );
};

export default AllVideos;

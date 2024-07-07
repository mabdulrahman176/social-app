import React from "react";
import AllVideos from "../../Components/AllVideos/AllVideos";
import "./Feed.css";
import VideoNav from "../../Components/VideoNav/VideoNav";

const Feed = () => {
  return (
    <React.Fragment>
      <div className="h-full w-full relative">
        <VideoNav />

        <AllVideos />
      </div>
    </React.Fragment>
  );
};

export default Feed;

import React, { Fragment, useEffect, useState } from "react";
import Review from './Review';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiSquareInfo, CiStar } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Model from "../ModalReport/Model";
import RelatedPodcast from "./RelatedPodcast";

function SinglePodcastDetails() {
  let navigate = useNavigate();
  const loc = useLocation();

  const [revModOpen, setRevModOpen] = useState(false);
  const [repModOpen, setRepModOpen] = useState(false);
  const [recentdata, setRecentData] = useState([]);
  const [result, setResult] = useState({});
  const [viewRecorded, setViewRecorded] = useState(false); // Flag for recording view

  useEffect(() => {
    const getData = async () => {
      try {
        if (loc.state) {
          const result = await getPodcast(loc.state.id);
          setResult(result);
          console.log("single podcast details data is ", result);
          setRecentData([result]);
          
          // Record the view only once when data is fetched
          if (!viewRecorded) {
            recordView(result._id); // Call record view function
            setViewRecorded(true); // Set the flag to true
          }
        }
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [loc.state, viewRecorded]); // Add viewRecorded as a dependency

  const getPodcast = async (id) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/podcasts/${id}`, {
      method: "GET",
    });
    const d = await req.json();
    return d;
  };

  const recordView = async (podcastId) => {
    try {
      const userId = getUserId(); // Replace this with your method of getting the user ID
      const viewData = {
        viewItemType: 'podcast',
        viewItemId: podcastId,
        viewerId: userId,
      };

      await fetch(`${process.env.REACT_APP_API_BASE_URL}/views`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(viewData),
      });
      console.log('View recorded successfully',viewData);
    } catch (error) {
      console.error('Error recording view:', error);
    }
  };

  const getUserId = () => {
    const str = document.cookie;
    return str.split("=")[1]; // Adjust based on how your user ID is stored
  };

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: result.episodeTitle || 'Check this podcast!',
          text: result.episodeDescription || 'Listen to this interesting podcast.',
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
      <section className="bg-white h-full w-full relative px-6 overflow-y-scroll Podcast_Top_Videos">
        {revModOpen && (
          <div className="h-full  left-0 w-full absolute top-0 z-20 flex justify-center items-center">
            <Review videoId={result._id} picUrl={result.picUrl} setRevModOpen={setRevModOpen} />
          </div>
        )}
        {repModOpen && (
          <div className="h-full w-full absolute top-0 left-0 z-20 flex justify-center items-center">
            <Model setRepModOpen={setRepModOpen} videoId={result._id} picUrl={result.picUrl} />
          </div>
        )}

        <div className="flex">
          <h4 className="flex items-center gap-3 md:ms-4 py-3">
            <FaAngleLeft
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
            Podcast
          </h4>
        </div>
        <div className="flex w-full PCS_Flex sm:ps-6 gap-6">
          <img
            src={result.picUrl ? result.picUrl : "/loading.jpg"}
            className="md:h-[35vh] h-[39vh] md:w-[33%] w-[40%] sm:mx-auto rounded-xl"
            alt=""
          />
          <div className="w-[60%] mx-auto PCS_Child1">
            <h1 className="text-xl font-semibold">{result.episodeTitle || 'N/A'}</h1>
            <h2>Podcast Type:</h2>
            <p className="py-1 opacity-65">{result.podcastType || 'N/A'}</p>
            <p className="">Season Number = {result.seasonNumber || 'N/A'} <br /> Episode Number = {result.episodeNumber || 'N/A'}</p>
            <p>Audio Name:</p>
            <p className="opacity-50">
              {result.audioName && result.audioName.replace(/[0-9]/g, "").length > 30
                ? result.audioName.replace(/[0-9]/g, "").slice(0, 30) + "..."
                : result.audioName && result.audioName.replace(/[0-9]/g, "")}
            </p>

            {/* Audio player */}
            {result.audioUrl ? (
              <audio controls>
                <source src={result.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : (
              <p className="text-red-500">Audio not available</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 ml-8 mt-1">
          <CiSquareInfo className="text-2xl cursor-pointer" onClick={() => setRepModOpen(true)} />
          <FaRegShareFromSquare className="text-xl opacity-45 cursor-pointer" onClick={shareContent} />
          <CiStar className="text-2xl cursor-pointer" onClick={() => setRevModOpen(true)} />
        </div>
        <p>Podcast Description:</p>
        <p className="lg:w-[75%] w-full opacity-50 text-[15px]">
          {result.episodeDescription}
        </p>
        <p>Speakers:</p>
        <div className="flex gap-2 md:ps-6 mt-3 w-full overflow-x-scroll Podcast_Top_Videos">
          {result.speakers && result.speakers.map((elm, ind) => (
            <Link to="/userprofile"
              state={{ id: elm.Users_PK }}
              key={ind}
              className="flex items-center justify-center flex-shrink-0 gap-3 py-2 px-2 my-2 rounded w-auto bg-gray-200"
            >
              <img
                src={elm.picUrl ? elm.picUrl : "/placeholder.jpg"}
                className="rounded-full h-[35px] w-[35px]"
                alt=""
              />
              <h1 className="text-md">{elm.name || elm.userName}</h1>
            </Link>
          ))}
        </div>

        <p className="md:ps-6">Similar podcasts</p>
        <RelatedPodcast />
      </section>
    </Fragment>
  );
}

export default SinglePodcastDetails;

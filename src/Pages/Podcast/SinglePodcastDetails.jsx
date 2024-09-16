import React, { Fragment, useEffect, useState } from "react";
import Review from './Review'
import img2 from './img2.jpeg'

// import {RiPlayCircleLine,} from "react-icons/ri";
import { useLocation, useNavigate,  } from "react-router-dom";
import {  CiSquareInfo, CiStar } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
// import { IoBookmarkOutline } from "react-icons/io5";
import Model from "../ModalReport/Model";
import { FaAngleLeft } from "react-icons/fa";
import RelatedPodcast from "./RelatedPodcast";
// import { fetchPodcast } from "../../API";

// let guestData = [
//   {
//     img: img5,
//     title: "Host",
//   },
//   {
//     img: img2,
//     title: "Guest",
//   },
//   {
//     img: img5,
//     title: "Guest",
//   },
//   {
//     img: img4,
//     title: "Guest",
//   },
// ];



function SinglePodcastDetails() {
  let navigate = useNavigate();
  const loc = useLocation();
 

  const [revModOpen, setRevModOpen] = useState(false)
  const [repModOpen, setRepModOpen] = useState(false)
  const [recentdata, setRecentData] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        if(loc.state){
          const result = await getPodcast(loc.state.id);
          console.log('result is') 
          console.log({result});
          setResult(result);
          setRecentData([result]);
        }
      
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [loc.state]);
const getPodcast = async (id) => {
  const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/podcasts/${id}`, {
    method: "GET",
  });
  const d = await req.json();
  return d;
}

  return (
    <Fragment>
      <section className="bg-white h-full w-full relative px-6 overflow-y-scroll Podcast_Top_Videos">
      {revModOpen && <div className="h-full left-0 w-full absolute top-0 z-20 flex  justify-center items-center">
          <Review setRevModOpen={setRevModOpen} />
        </div>}
        {repModOpen && <div className="h-full w-full absolute top-0 left-0 z-20 flex  justify-center items-center">
          <Model setRepModOpen={setRepModOpen} />
        </div>}
        <div className="flex">
        <h4 className="flex items-center gap-3 md:ms-4 py-3">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/podcast")}
          />{" "}
          Podcast
        </h4>
        </div>
       {/* {recentdata.map((elm,index)=>( */}
         <div  className="flex w-full PCS_Flex sm:ps-6 gap-6">
         <img
           src={result.picUrl ? result.picUrl : img2}
           className="md:h-[35vh] h-[39vh] md:w-[33%] w-[40%]  sm:mx-auto rounded-xl"
           alt=""
         />
         <div className="w-[60%]  mx-auto PCS_Child1">
           <h1 className="text-xl font-semibold">{result.episodeTitle || 'N/A'}</h1>
           <h2 className="">Podcast Type:</h2>
           <p className="py-1 opacity-65">{result.podcastType || 'N/A'}</p>
           <p className="opacity-50">Season Number ={result.seasonNumber || 'N/A'} Episode Number = ({result.episodeNumber || 'N/A'})</p>
           <p className="">AudioName:</p>
           <p className="opacity-50">
  {result.audioName.replace(/[0-9]/g, "").length > 30 
    ? result.audioName.replace(/[0-9]/g, "").slice(0, 30) + "..." 
    : result.audioName.replace(/[0-9]/g, "")}
</p>

           {/* <button className="flex items-center gap-3 border border-black px-3 pe-7 my-2 rounded-3xl">
  
</button> */}
<audio controls>
    <source src={result.audioUrl} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
           <div className="flex items-center gap-4">
             <CiSquareInfo className="text-2xl cursor-pointer" onClick={()=>setRepModOpen(true)}/>
             <FaRegShareFromSquare className="text-xl opacity-45 cursor-pointer" />
             <CiStar className="text-2xl cursor-pointer" onClick={()=>setRevModOpen(true)} />
            
           </div>
           <p className="lg:w-[75%] w-full opacity-50 text-[15px]">
           {result.episodeDescription}
           </p>
         </div>
       </div>
       {/* } */}
        {/* <div className="flex gap-2 md:ps-6 mt-3 w-full overflow-x-scroll Podcast_Top_Videos">
          {guestData.map((elm, ind) => (
            <div
              key={ind}
              className="flex items-center justify-center flex-shrink-0 gap-3 py-2 my-2 rounded w-[100px] bg-gray-200"
            >
              <img
                src={elm.img}
                className="rounded-full h-[25px] w-[25px]"
                alt=""
              />
              <h1 className="text-md">{elm.title}</h1>
            </div>
          ))}
        </div> */}

          <p className="md:ps-6">Similar podcasts</p>
<RelatedPodcast/>
      </section>
    </Fragment>
  );
}

export default SinglePodcastDetails;

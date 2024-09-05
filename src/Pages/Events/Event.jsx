import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import EventFilters from './EventFilters'
import Image from './Img2.png'
import { fetchEvent } from "../../API";
const cardData = [
  {
    id: 1,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Networking",
    imgSrc:
      "https://media.istockphoto.com/id/1649927045/photo/social-media-social-media-marketing-engagement-post-structure.webp?b=1&s=170667a&w=0&k=20&c=si9Ex9etSObs30XVUIKzMJiexUz78p_z2Xw-YLfkwh8=",
  },
  {
    id: 3,
    title: "Finance",
    imgSrc:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Business",
    imgSrc:
      "https://media.istockphoto.com/id/1480095869/photo/student-or-man-use-computer-for-elearning-education-online-internet-technology-webinar-online.webp?b=1&s=170667a&w=0&k=20&c=lAFPQOr_Bvjfr1235EcosGYhr4KgUtuBW1jzMqMU05w=",
  },
  {
    id: 5,
    title: "Finance",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    title: "Business",
    imgSrc:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
  },

  // Add more card objects here
];

// const newcard = [
//   {
//     id: 1,
//     title: "Business",
//     imgSrc:
//       "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 2,
//     title: "Networking",
//     imgSrc:
//       "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Finance",
//     imgSrc:
//       "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 1,
//     title: "Business",
//     imgSrc:
//       "https://images.unsplash.com/photo-1522582324369-2dfc36bd9275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
//   },
//   {
//     id: 2,
//     title: "Networking",
//     imgSrc:
//       "https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Finance",
//     imgSrc:
//       "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     title: "Finance",
//     imgSrc:
//       "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     title: "Finance",
//     imgSrc:
//       "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
//   },
//   {
//     id: 3,
//     title: "Finance",
//     imgSrc:
//       "https://images.unsplash.com/photo-1665686306574-1ace09918530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzfGVufDB8fDB8fHww",
//   },
//   // Add more card objects here
// ];



const CardComponent = ({ title, imgSrc }) => (
  <div className="h-[30vh] lg:w-[12vw] md:w-[15vw] sm:w-[20vw] w-[25vw] relative cursor-pointer m-0 text-white">
    <img className="h-full w-full rounded-lg" src={imgSrc} alt="Card Img" />
    <div className="absolute inset-0 flex justify-between ShadedBG rounded-lg">
      <h5 className="text-sm ps-3 absolute bottom-2">{title}</h5>
      <IoBookmarkOutline className="absolute  right-2 top-4 text-2xl" />
    </div>
  </div>
);

function Event() {
  const navigate = useNavigate();
  const [newcard, setNewCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchEvent(); // Use the function from api.js
        console.log(result);
        setNewCard(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);
  return (
    <div className="h-full w-full">
      <div className="w-full h-[10%]">
        <EventFilters />
      </div>
      <div className="h-[89%] bg-white mt-1 w-full overflow-y-scroll Podcast_Top_Videos">
        <h3 className="text-xl font-bold my-3 w-[95%] mx-auto">Suggested Event</h3>
        <div className="h-full w-[95%] mx-auto">
          <div className="flex w-full overflow-x-scroll gap-1 Podcast_Top_Videos">
            {cardData.map((card) => (
              <div key={card.id}>
                <CardComponent title={card.title} imgSrc={card.imgSrc} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap justify-between gap-y-1 w-[93%] mx-auto">
            {newcard.map((data, i) => (
              <div key={i} className="m-0 text-white md:w-[33%] w-[49.4%] h-[42vh] relative">
                <img
                  src={data.imgSrc ?data.imgSrc : Image}
                  alt="Card Img2y"
                  className="h-full w-full rounded-lg cursor-pointer"
                  onClick={() => navigate("/eventdetail", { state: { data } })}
                />
                <IoBookmarkOutline className="absolute right-2 top-4 text-2xl" />
                <div className="w-full absolute bottom-1">
                  <div className="SVTBottom w-[95%] mx-auto px-3 py-2 rounded-lg">
                    <small className="block text-xl">{data.eventTitle}</small>
                    <p className="text-xs py-2">{data.eventCatagory}</p>
                    <p className="text-sm pb-2">{data.eventDescription}</p>
                    <div className="flex items-center">
                      <button
                        className="me-2 md:px-5 py-2 JobButtonBgBlur md:w-auto w-[70%] text-sm text-white rounded-full"
                        onClick={() => navigate("/ticket")}
                      >
                        Buy tickets
                      </button>
                      <button className="md:px-7 py-2 flex justify-center w-[30%] md:w-auto JobButtonBgBlur text-xs text-white rounded-full">
                        <FaRegShareFromSquare className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Event;

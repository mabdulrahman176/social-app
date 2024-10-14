import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// const participants = [
//     {
//       id: 1,
//       name: 'Saad-Ali',
//       username: 'saad ali 1234',
//       picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//     },
//     {
//         id: 2,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//       {
//         id: 3,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//       {
//         id: 4,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//       {
//         id: 5,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//       {
//         id: 6,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//       {
//         id: 7,
//         name: 'Saad-Ali',
//         username: 'saad ali 1234',
//         picUrl: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
//       },
//     // Add more users here
//   ];

function Participants () {
    const [participants,setParticipants] = useState([])
    const [event,setEvent] = useState([])
  let navigate =useNavigate()
  const loc = useLocation();
  useEffect(() => {
    console.log("single event detail");
    console.log(loc.state);
    const getData = async () => {
      try {
        if (loc.state) {
          const result_ = await getEvent(loc.state.id);
          console.log("result of single event is ",{ result_ });
          setParticipants(result_.participants);
          setEvent(result_.event)
         
        }
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, [loc.state.id]);

  const getEvent = async (id) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/events/${id}`,
      {
        method: "GET",
      }
    );
    const d = await req.json();
    setParticipants(d);
    return d;
  };
console.log("event details",event)
  return (
    <>
    
   <div className='bg-white w-full h-full'>
   <h4 className="flex items-center text-xl gap-2 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/eventdetail",{state:{id:event._id}})}
        />{" "}
       Participants List:
      </h4>
   <div className="main h-[90%] overflow-y-scroll Podcast_Top_Videos w-[90%] m-[auto] ">
   <h1 className='flex gap-3 text-xl'>Total:{participants.length}</h1>
      <div className=''>
      {participants.map((user,index) => (
        <div key={index} >
          
          <div className="flex justify-between  pb-4 pt-4">
          <Link to="/userprofile" state={{id:user.Users_PK}} className="flex gap-4">
            <img
              src={user.picUrl}
              alt=""
              className='h-[50px] w-[50px] rounded-full'
            />
            <div>
              <p className='text-base font-medium'>{user.name}</p>
              <p className='text-gray-400'>{user.role? user.role:"Viewer"}</p>
            </div>
          </Link>
          <Link to="/userprofile"
          state={{id:user.Users_PK}}
          className='h-[7vh] flex justify-center items-center text-xl md:w-[10%] w-[20%] bg-gray-100 rounded-lg'>Profile</Link>
          
        </div>
        <hr  className="border-gray-300 w-[90%] "/>
        </div>
      ))}
      </div>
    </div>
   </div>

   

    </>
  )
}

export default Participants
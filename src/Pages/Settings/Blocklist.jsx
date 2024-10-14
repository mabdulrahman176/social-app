import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const blockedUsers = [
    {
      id: 1,
      name: 'Saad-Ali',
      username: 'saad ali 1234',
      imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
    },
    {
        id: 2,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
      {
        id: 3,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
      {
        id: 4,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
      {
        id: 5,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
      {
        id: 6,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
      {
        id: 7,
        name: 'Saad-Ali',
        username: 'saad ali 1234',
        imgSrc: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
      },
    // Add more users here
  ];

function Blocklist() {
  let navigate =useNavigate()
  return (
    <>
    
   <div className='bg-white w-full h-full'>
   <h4 className="flex items-center gap-2 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />{" "}
        Blocked user list
      </h4>
   <div className="main h-[90%] overflow-y-scroll Podcast_Top_Videos w-[90%] m-[auto] ">
      <div className=''>
      {blockedUsers.map((user) => (
        <div key={user.id} >
          <div className="flex justify-between  pb-4 pt-4">
          <div className="flex gap-4">
            <img
              src={user.imgSrc}
              alt=""
              className='h-[50px] w-[50px] rounded-full'
            />
            <div>
              <p className='text-base font-medium'>{user.name}</p>
              <p className='text-gray-400'>{user.username}</p>
            </div>
          </div>
          <button className='h-[7vh] md:w-[10%] w-[20%] bg-gray-100 rounded-lg'>Unblock</button>
          
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

export default Blocklist
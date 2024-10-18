import React, { Fragment, useState } from "react";
import MySubscribers from "./MySubscribers";
import { useEffect } from "react";

const Subscribe = () => {
  const [subscribers, setsubscribers] = useState([])
  const [subscribedTo, setSubscribedTo] = useState([])

  const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }
  const getMySubscriber = async ()=>{
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe/my/${getUserId()}`,{
      method:"GET",
      credentials:'include'
      
    })
    const data = await req.json()
     setsubscribers(data)
  }
  const getPeopleISubscibedTo = async ()=>{
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe/${getUserId()}`,{
      method:"GET",
      credentials:'include'
      
    })
    const data = await req.json()
   setSubscribedTo(data)

  }
useEffect(() => {
  getMySubscriber()
  getPeopleISubscibedTo()
}, [])

  return (
    <Fragment>
      <div
        className="flex flex-wrap bg-white mt-1 h-[99%] overflow-y-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          WebkitScrollbar: {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div
          className="w-[48%] h-[550px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <MySubscribers
            name="My Subscribers"
            sub="Total Subscribers"
            total={subscribers.length}
            userId={subscribers}
          />
        </div>
        <div
          className="w-[48%] h-[550px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <MySubscribers
            name="Subscribed"
            sub="Total Subscribed"
            total={subscribedTo.length}
            userId={subscribedTo}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;

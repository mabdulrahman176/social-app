import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MessageDefault from "./MessageDefault"


const getUserId = () => {
  const str = document.cookie
  const userKey = str.split('=')[1];
  return userKey
}

function Message() {
  const [chats, setChats] = useState([])
  const [rooms, setRooms] = useState([])

  const fetchAllChatrooms = async () => {
    const req = await fetch(`http://localhost:5000/chatrooms/${getUserId()}`)
    const d = await req.json()
    const roomIds =d.data.map((e) =>e && e._id )
    setRooms(roomIds);
    setChats(d.data)
  }

  const __Time__= (isoString )=>{
const date = new Date(isoString);
let hours = date.getHours();
const minutes = date.getMinutes().toString().padStart(2, '0');
const seconds = date.getSeconds().toString().padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Convert to 12-hour format, handling the case where 0 hours means 12 AM
// const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
const timeString = `${hours}:${minutes} ${ampm}`;
return timeString 
  }

  const logger = () => {
    console.log("logger")
    console.log({ rooms })
    console.log({ chats })
    console.log("in logger")
    chats.map((e)=>console.log(e._id))
  }
  useEffect(() => {
    fetchAllChatrooms()
    // console.log({chats})
    // logger()
  }, [])
  let location = useLocation().pathname;

  return (
    <>
  
      <div className="h-full w-full bg-white overflow-hidden">
        <div className="w-[90%] h-full m-auto">
          <div className="flex flex-col lg:flex-row justify-between py-4 items-center">
            <h4 className="flex items-center gap-3 ms-4 pt-3 text-lg font-semibold">Messages</h4>
            <input
              type="text"
              placeholder="Search"
              className="h-[6vh] w-full sm:w-[30%] md:w-[25%] p-3 rounded-lg outline-none bg-[#f7f5f5]"
            />
          </div>
          <div className="flex flex-col lg:flex-row h-[80%]">
            {/* Messages List */}
            <div
              className="h-full overflow-y-scroll lg:w-[35%] border-r border-gray-200"
              style={{
                'WebkitOverflowScrolling': 'touch',
                'WebkitScrollbar': {
                  display: 'none'
                },
                'MsOverflowStyle': 'none',
                'scrollbarWidth': 'none'
              }}
            >

              {/* message lists */}
              {chats.map((message, ind) => (
               <Link to={`user1`} key={ind}
                  state={{ id: message._id }}
                >
                  <div className="flex justify-between bg-[#9b8d8d] items-center py-3 border-b px-2 md:px-4 hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        // src={''}
                        src={message.sender?.picUrl?message.sender.picUrl:''}
                        alt=""
                        className="h-[30px] w-[30px] rounded-full"
                      />
                      <div>
                        <p className="text-md font-medium">{message.sender.name}</p>
                        <p className="text-[gray] text-sm">{message.messages.length>0 &&  message.messages.at(-1).message}</p>
                      </div>
                    </div>
                    <p className="text-xs">{__Time__(message.updatedAt)}</p>
                    {/* <p className="text-xs">{message.time}</p> */}
                  </div>
                </Link>
              ))}
            </div>
            {/* <button onClick={logger}>logger</button> */}
            {/* message lists */}


            {/* Message Details or Default View */}
            <div className="flex-1 lg:w-[60%] p-4">
              {location === "/messages" ? (
                <div className="hidden lg:block">
                  <MessageDefault />
                </div>
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Message;
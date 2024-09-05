import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MessageDefault from "./MessageDefault"



const getUserId = () => {
  const str = document.cookie
  const userKey = str.split('=')[1];
  return userKey
}

function Message() {
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])
  const [rooms, setRooms] = useState([])

  const fetchAllChatrooms = async () => {
    const req = await fetch(`http://localhost:5000/chatrooms/${getUserId()}`)
    const d = await req.json()
    // console.log({ d })
    console.log("user is",getUserId())
    const roomIds = d.data.map((e) => e._id);
    setRooms(roomIds);
    senderData()
    let user = await senderData();
    setChats((prev) => [...prev, { user, room: roomIds }]);

  }



  const senderData = async (id) => {
    const req = await fetch(`http://localhost:5000/users/${getUserId()}`)
    const sender = await req.json()
    // console.log({ sender })
    return sender
  }
  const logger = () => {
    console.log({ users })
    console.log({ rooms })
    console.log({ chats })
  }
  useEffect(() => {
    fetchAllChatrooms()
  }, [])
  let location = useLocation().pathname;

  return (
    <>
      <button className="w-[10rem]" onClick={logger}>log all</button>
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
                  state={{ id: message }}
                >
                  <div className="flex justify-between items-center py-3 border-b px-2 md:px-4 hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={message.user.profileUrl}
                        alt=""
                        className="h-[30px] w-[30px] rounded-full"
                      />
                      <div>
                        <p className="text-md font-medium">{message.user.name}</p>
                        <p className="text-[gray] text-sm">{message.message}</p>
                      </div>
                    </div>
                    <p className="text-xs">{message.time}</p>
                  </div>
                </Link>
              ))}
            </div>
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


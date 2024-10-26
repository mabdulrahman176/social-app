import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MessageDefault from "./MessageDefault";

const getUserId = () => {
  const str = document.cookie;
  const userKey = str.split("=")[1];
  return userKey;
};

function Message() {
  const [chats, setChats] = useState([]);
  const [rooms, setRooms] = useState([]);

  const fetchAllChatrooms = async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/chatrooms/${getUserId()}`
    );
    const info = await req.json();

    const roomIds = info.data.map((e) => e && e._id);
    setRooms(roomIds);
    setChats(info.data);
  };

  const __Time__ = (isoString) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    fetchAllChatrooms();
  }, []);

  let location = useLocation().pathname;

  // Sort chats by the updatedAt timestamp in descending order
  const sortedChats = chats
    .filter(e => e?.messages) // Only include chats with messages
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return (
    <div className="h-full w-full bg-white overflow-hidden">
      <div className="w-[90%] h-full m-auto">
        <div className="flex flex-col lg:flex-row justify-between py-4 items-center">
          <h4 className="flex items-center gap-3 ms-4 pt-3 text-lg font-semibold">
            Messages
          </h4>
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
              WebkitOverflowScrolling: "touch",
              WebkitScrollbar: {
                display: "none",
              },
              MsOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {/* message lists */}
            {sortedChats.length === 0 ? (
              <p className="p-4 text-center text-gray-500">No messages found.</p>
            ) : (
              sortedChats.map((e, ind) => (
                <Link to={`user1`} key={ind} state={{ id: e._id }}>
                  <div className="flex justify-between items-center py-3 border-b px-2 md:px-4 hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          e.sender?.picUrl
                            ? e.sender.picUrl
                            : "/placeholder.jpg"
                        }
                        alt="sender"
                        className="h-[50px] w-[50px] rounded-full"
                      />
                      <div>
                        <p className="text-md font-medium">
                          {e.sender ? e.sender.name : "Unknown User"}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs">{__Time__(e.updatedAt)}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
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
  );
}

export default Message;

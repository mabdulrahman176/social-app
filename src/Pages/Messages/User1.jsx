import React, { useState, useRef, useEffect } from "react";
import { CiMenuKebab, CiVideoOn, CiCalendar } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { FaCamera, FaPaperclip, FaSmile } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import io from 'socket.io-client';
import {deleteChatroom} from '../../DeleteAPI.js' 

function Message2() {
  const socket = io(process.env.REACT_APP_API_BASE_URL);
  const loc = useLocation();
  const [able, setAble] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [meeting, setMeeting] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [message, setMessage] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [chatroom, setChatroom] = useState([]); // Chat messages state
  const [receiver, setReceiver] = useState(); // Receiver user state
  const [sender, setSender] = useState({}); // Sender user state
  const [roomId, setRoomId] = useState({}); // Chat room ID state
  const [acessToken, setToken] = useState(''); // Access token for Zoom

  const cardRef = useRef(null);
 
  const navigate = useNavigate()
  const messagesEndRef = useRef(null); // Reference for scrolling to bottom

  // Function to format timestamp
  const __Time__ = (isoString) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    return `${hours}:${minutes} ${ampm}`; 
  };

  // Handle click outside the card to close it
  const handleClickOutside = (event) => {
    console.log("resd",cardRef.current)
    if (cardRef.current && !cardRef.current.contains(event.target)) {

      setShowCard(false);
      setAble(false)
      setSchedule(false);
    setMeeting(false); 
    setShowCalendar(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to get user ID from cookies
  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  // Fetch chatroom data based on ID
  const fetchChatroom = async (id) => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/chatrooms/room/${id}`;
    const req = await fetch(url);
    const d = await req.json();
    console.log("schma",d)
    let sender = d.users.filter((e) => e !== getUserId());
    getSenderName(sender[0]);
    setRoomId(id);
  };

  // Get sender's name
  const getSenderName = async (id) => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`);
    const d = await req.json();
    setSender(d.user);
    getReceiver();
  };

  // Get receiver's details
  const getReceiver = async () => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${getUserId()}`);
    const d = await req.json();
    setReceiver(d.user);
  };

  // Join the chat room
  const joinRoom = (id) => {
    socket.off('connection', '');
    socket.on('connection', (socket_) => { console.log("probably working"); });
    socket.emit('joinRoom', { roomId: id, userId: getUserId() });
    socket.on('pos', (socket) => { console.log("room joined", socket); });
  };

  // Send a message to the chat room
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', { roomId, sender: getUserId(), message });
      setMessage(''); // Clear the message after sending
    }
  };
  const deleteMessage = (id) => {
      console.log("deleting message")
      socket.emit('sendMessage', { roomId, sender: getUserId(), messageId:id });
    
    }
  

  useEffect(() => {
    fetchChatroom(loc.state.id); // Fetch chatroom on mount
    joinRoom(loc.state.id); // Join the chat room
    socket.on('receiveMessage', (message) => {
      console.log("receive msg ",message)
      setChatroom((prevMessages) => [...prevMessages, message]); // Update chatroom with new messages
    });

   

    socket.on('previousMessages', (previousMessages) => {
      setChatroom(previousMessages); // Load previous messages
    });
console.log("pre msg",chatroom)
    return () => {
      socket.off('receiveMessage');
      socket.off('previousMessages');
    };
  }, [loc.state.id]);

  // Scroll to the bottom when chatroom updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatroom]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle key press for sending message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents new line in the input
      sendMessage(); // Call sendMessage
    }
  };

  // Zoom authentication function
  const zoomAUth = () => {
    socket.emit('zoomAuth');
    socket.on('receiveAuthUrl', (url) => {
      window.location.href = url;
    });
  };

  const meeting_ = () => {
    socket.emit('sendMeetingUrl', acessToken);
    socket.on('receive_url', (data) => {
      if (data.sender) {
        window.location.href = data.sender; // Redirect to Zoom meeting
      }
    });
  };

  const handleSchedule = () => {
    zoomAUth();
    setSchedule(!schedule);
    setMeeting(false); // Reset meeting state when schedule is toggled
    setShowCalendar(false); // Hide calendar if visible
  };

  const handleMeeting = () => {
    setMeeting(!meeting);
  };

  const handleCalendar = () => {
    setShowCalendar(!showCalendar);
    setSchedule(false); // Hide schedule card if visible
  };

  const toggleCard = () => {
    setShowCard(!showCard);
    setSchedule(!schedule);
    setMeeting(!meeting); 
    setShowCalendar(!showCalendar);
  };
  const handleDelete =async () => {
   await deleteChatroom(roomId);
    window.location.href='http://localhost:5173/messages'
  };
console.log("msg recived",chatroom)
  return (
    <div className="main h-full w-[100%] ">
      <div className="div h-full w-[100%] bg-[#f5f3f3] p-5 relative">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
          <img src={sender.picUrl || '/placeholder.jpg'} alt=""  className="h-[40px] w-[40px] rounded-full"/>
            <p className="text-base font-medium whitespace-nowrap">{sender.name}</p>
          </div>
          <div className="flex gap-5">
            <CiMenuKebab
              className="text-2xl cursor-pointer"
              onClick={() => setAble((prevAble) => !prevAble)}
            />
            {able && (
              <div ref={cardRef} 
                className="absolute w-[200px] cursor-pointer right-4 top-14 px-3 py-2 z-30 bg-white shadow-lg border"
                onClick={() => setAble(false)}
              >
                <p className="text-[15px] opacity-75 mb-5">Details</p>
                <p className="text-[15px] opacity-75 mb-5">Hide</p>
                <p className="text-[15px] opacity-75 mb-5">Block and report</p>
                <p className="text-[15px] opacity-75 text-[red]" onClick={handleDelete}>Delete</p>
              </div>
            )}
            <CiVideoOn className="text-2xl cursor-pointer" onClick={handleSchedule} />
            <CiVideoOn className="text-2xl cursor-pointer" onClick={meeting_} />
            {schedule && (
              <div
                className="absolute w-[200px] cursor-pointer right-4 top-14 px-3 py-1 z-30 bg-white shadow-lg border"
                onClick={(e) => e.stopPropagation()}
              >
                <p ref={cardRef}  className="text-lg opacity-75" onClick={handleMeeting}>
                  Schedule a meeting
                </p>
                {meeting && (
                  <div ref={cardRef} 
                    className="absolute w-[200px] cursor-pointer right-0 top-12 px-3 py-1 text-md z-30 bg-white shadow-lg border"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMeeting(false);
                    }}
                  >
                    <Link to="/createmeeting">Zoom Meeting</Link>
                    <p>Recorded Zoom Meeting</p>
                    <p>Dial into Zoom Meeting</p>
                  </div>
                )}
              </div>
            )}
            <CiCalendar ref={cardRef} 
              className="text-2xl cursor-pointer"
              onClick={handleCalendar}
            />
            {showCalendar && (
              <div className="absolute right-4 top-14 z-30 bg-white shadow-lg border p-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
            )}
          </div>
        </div>
        <div className="h-[70%] overflow-y-scroll Podcast_Top_Videos">
          {chatroom && chatroom.map((e, i) => (
            <div key={i} className="flex items-end justify-between py-2">
              <div className="flex gap-2">
              <img
  src={getUserId() !== e.sender ? sender.picUrl || '/placeholder.jpg' : receiver ? receiver.picUrl || '/placeholder.jpg' : '/placeholder.jpg'}
  alt="profile"
  className="h-[40px] w-[40px] rounded-full"
/>

                <div className="flex">
                  <div className="max-w-[70%]">
                    <p className="text-sm font-medium">{e.sender !== getUserId() ? sender.name : "You"}</p>
                    <p className="text-[#686868] text-xs mt-3">{e.message}</p>
                  </div>
                </div>
              </div>
              <button onClick={()=>deleteMessage(e.messageId)} >Delete</button>
              <p className="text-[gray] text-[10px] break-words">{__Time__(e.timestamp)}</p>
            </div>
          ))}
          {/* Scroll reference */}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex items-center justify-center w-[95%] relative top-4">
          <GrGallery className="text-[#7979ec] text-xl mr-3 cursor-pointer" onClick={toggleCard} />
          <div className="flex-grow">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Add onKeyDown handler
              placeholder="Write a message"
              className="h-[5vh] w-full outline-none rounded p-4 bg-transparent border"
            />
          </div>
          {message.trim() ? (
            <FaPaperPlane 
              onClick={sendMessage} 
              className="text-xl text-[gray] ml-3 cursor-pointer" 
            />
          ) : (
            <FaMicrophone className="text-xl text-[gray] ml-3" />
          )}
        </div>
        {showCard && (
          <div ref={cardRef} className="absolute bottom-[8vh] left-5 w-[10vw] p-3 bg-white shadow-lg rounded">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className=""><FaCamera className="text-[gray] cursor-pointer" /></span>
              </li>
              <li className="flex items-center">
                <span className="icon"><FaPaperclip className="text-[gray] cursor-pointer" /></span>
              </li>
              <li className="flex items-center">
                <span className="icon"><FaSmile className="text-[gray] cursor-pointer" /></span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message2;

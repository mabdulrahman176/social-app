import React, { useState, useRef, useEffect } from "react";
import { CiMenuKebab, CiVideoOn, CiCalendar } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { FaCamera, FaPaperclip, FaSmile } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import io from 'socket.io-client';


function Message2() {
  const socket = io("http://localhost:5000"); 
  const loc = useLocation()
  const [able, setAble] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [meeting, setMeeting] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [message, setMessage] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [chatroom, setChatroom] = useState()
  const [receiver, setReceiver] = useState()
  const [sender, setSender] = useState({})
  const [roomId, setRoomId] = useState({})
  const [render, setRender] = useState(false);
  const [acessToken, setToken] = useState('');

  const cardRef = useRef(null);

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
    

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowCard(false);
    }
  };
  const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }
  const fetchChatroom = async (id) => {

    let url = `${process.env.REACT_APP_API_BASE_URL}/chatrooms/room/${id}`
    const req = await fetch(url)
    const d = await req.json()
    let sender = d.users.filter((e) => e !== getUserId())
    getSenderName(sender[0])
    // console.log("roomId," ,id)
    setRoomId(id)
  }
  const getSenderName = async (id) => {
    const req = await fetch(`http://localhost:5000/users/${id}`)
    const d = await req.json()
    console.log("setting sender")
    console.log(d.user)
    getReceiver()
    setSender(d.user)

  }
  const getReceiver = async () => {
    const req = await fetch(`http://localhost:5000/users/${getUserId()}`)
    const d = await req.json()

    setReceiver(d.user)
  }
  const joinRoom = (id) => {
    // if (roomId && userId) {
      socket.off('connection', '');
      console.log("join room rrom id")
         console.log(id[0])
      socket.on('connection',(socket_)=>{console.log("propbaly working")})
      socket.emit('joinRoom', { roomId:id,userId:getUserId() });
      socket.on('pos', (socket)=>{console.log("room joinded",socket);});
    // }
  };

  const sendMessage = () => {
    // if (message && roomId && userId) {
      socket.emit('sendMessage', { roomId, sender: getUserId(), message });
      // setMessage('');
    // }
  };

  useEffect(() => {
    // const params = new URLSearchParams(window.location.search);
    // const accessToken = params.get('access_token');
    fetchChatroom(loc.state.id)
    // setToken(accessToken)
    joinRoom(loc.state.id)
    socket.on('connection',(socket_)=>{console.log("working well")})
    socket.on('receiveMessage', (message) => {
      console.log("receving message")
      console.log(message)
      setChatroom((prevMessages) => [...prevMessages, message]);
    });
    socket.on('previousMessages', (previousMessages) => {
      console.log('precious messages')
      console.log(previousMessages)
      setChatroom(previousMessages);
    });
     
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      socket.off('receiveMessage');
      socket.off('previousMessages');
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);  // Depend on the user PK
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const zoomAUth = () => {
    // if (roomId && userId) {
      socket.emit('zoomAuth');
      socket.on('receiveAuthUrl',(url)=>{
        console.log({url})
        window.location.href = url
      });
      // socket.on('zoomAccessToken',(token)=>{
      //   console.log("on access token")
      //   setToken(()=>token)
      //   console.log({token})
      // });
    // }
  };

  const meeting_ =()=>{
    console.log("meeting")
    console.log({acessToken})
    socket.emit('sendMeetingUrl',acessToken)
    socket.on('receive_url',(data)=>{
        console.log({data})
        console.log("not working")
        // console.log(data.sender)
        if(data.sender){
          console.log("working")
          // window.location.href= data.sender
        }
    })
  }


  const handleSchedule = () => {
    zoomAUth()
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
  };
  return (
    <div className="main h-full w-[100%] ">
      <div className="div h-full w-[100%] bg-[#f5f3f3] p-5 relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-base font-medium whitespace-nowrap">{sender.name}</p>
            {/* <p className="text-[rgb(128,128,128)] text-xs">
              Last Online 39 min ago
            </p> */}
          </div>
          <div className="flex gap-5">
            <CiMenuKebab
              className="text-2xl cursor-pointer"
              onClick={() => setAble((prevAble) => !prevAble)}
            />
            {able && (
              <div
                className="absolute w-[200px] cursor-pointer right-4 top-14 px-3 py-2 z-30 bg-white shadow-lg border"
                onClick={() => setAble(false)}
              >
                <p className="text-[15px] opacity-75 mb-5">Details</p>
                <p className="text-[15px] opacity-75 mb-5">Hide</p>
                <p className="text-[15px] opacity-75 mb-5">Block and report</p>
                <p className="text-[15px] opacity-75 text-[red]">Delete</p>
              </div>
            )}
            <CiVideoOn className="text-2xl cursor-pointer" onClick={handleSchedule} />
            <CiVideoOn className="text-2xl cursor-pointer" onClick={meeting_} />
            {schedule && (
              <div
                className="absolute w-[200px] cursor-pointer right-4 top-14 px-3 py-1 z-30 bg-white shadow-lg border"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-lg opacity-75" onClick={handleMeeting}>
                  Schedule a meeting
                </p>
                {meeting && (
                  <div
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
            <CiCalendar
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
        <div className=" h-[70%] overflow-y-scroll Podcast_Top_Videos">

          {/* message component */}
          {chatroom && chatroom.map((e, i) => {
            return <div key={i} className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src={(getUserId() !== e.sender) ? sender.picUrl : receiver && receiver.picUrl}
                  // src={(getUserId()!==e.sender)?sender.picUrl:"https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="}
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">{e.sender !== getUserId() ? sender.name : "You"}</p>

                    <p className="text-[#686868] text-xs mt-3">
                      {e.message}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">{__Time__(e.timestamp)}</p>
            </div>
          })}
          {/* message component */}


        </div>
        <div className="flex items-center justify-center w-[95%] relative top-4 ">
          <GrGallery className="text-[#7979ec] text-xl mr-3 cursor-pointer" onClick={toggleCard} />

          <div className="flex-grow">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Write a message"
              className="h-[5vh] w-full outline-none rounded p-4 bg-transparent border"
            />
          </div>
          {message.trim() ? (
            <FaPaperPlane onClick={sendMessage} className="text-xl text-[gray] ml-3 cursor-pointer" />
          ) : (
            <FaMicrophone className="text-xl text-[gray] ml-3" />
          )}
        </div>

        {showCard && (
          <div ref={cardRef} className="absolute bottom-[8vh] left-5 w-[10vw] p-3 bg-white shadow-lg rounded">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className=""><FaCamera className="text-[gray]  cursor-pointer" /></span>
              </li>
              <li className="flex items-center">
                <span className="icon"><FaPaperclip className="text-[gray]  cursor-pointer" /></span>
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
import React, { useState,useRef,useEffect } from "react";
import { CiMenuKebab, CiVideoOn, CiCalendar } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { FaMicrophone ,FaPaperPlane } from "react-icons/fa";
import { FaCamera, FaPaperclip, FaSmile } from 'react-icons/fa';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Message2() {
  const [able, setAble] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const [meeting, setMeeting] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [message, setMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const cardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSchedule = () => {
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
            <p className="text-base font-medium whitespace-nowrap">Haroon Yaseen</p>
            <p className="text-[rgb(128,128,128)] text-xs">
              Last Online 39 min ago
            </p>
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
            {schedule && (
              <div
                className="absolute w-[200px] cursor-pointer right-4 top-14 px-3 py-1 z-30 bg-white shadow-lg border"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-lg opacity-75"  onClick={handleMeeting}>
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
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
                <img
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.webp?b=1&s=170667a&w=0&k=20&c=V-RXoAk73ljzQZd0w_JcCFG-jlYs6sjpcrIZQ1TersQ="
                  alt=""
                  className="h-[30px] w-[30px] rounded-full"
                />
                <div className="flex ">
                  <div className="div">
                    <p className="text-sm font-medium ">Haroon Yaseen.</p>
                    <p className="text-[gray] text-xs">
                      Yeah sure, let's do it.
                    </p>
                    <p className="text-[#686868] text-xs mt-3">
                      We can meet at 8:00 PM if you are free at that time.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
            <div className="flex items-end justify-between py-2">
              <div className="flex  gap-2">
              <img
                src="https://media.istockphoto.com/id/1815745180/photo/portrait-of-beautiful-multiracial-tourist-woman-during-sunset-on-top-of-hill.webp?b=1&s=170667a&w=0&k=20&c=61NqOeSEQ6a67E804P_BYcJ4fAstBMZlcjK88IwxlOY="
                alt=""
                className="h-[30px] w-[30px] rounded-full"
              />
                <div className="flex ">
                  <div className="div">
              <p className="text-base font-medium">Sadia Saadi</p>

                  <p className="text-[gray] text-xs">
                    Perfect, I will Catch up with you at that time. See you
                    than. <br />
                    Bye!
                  </p>
                  </div>
                </div>
              </div>
              <p className="text-[gray] text-[10px]">6:42PM</p>
            </div>
           
          </div>
          <div className="flex items-center justify-center w-[95%] relative top-4 ">
  <GrGallery className="text-[#7979ec] text-xl mr-3 cursor-pointer"onClick={toggleCard} />
  
  <div className="flex-grow">
    <input
      type="text"
      onChange={handleInputChange}
      placeholder="Write a message"
      className="h-[5vh] w-full outline-none rounded p-4 bg-transparent border"
    />
  </div>
  {message.trim() ? (
        <FaPaperPlane className="text-xl text-[gray] ml-3 cursor-pointer" />
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
            <span className="icon"><FaPaperclip className="text-[gray]  cursor-pointer"/></span>
          </li>
          <li className="flex items-center">
            <span className="icon"><FaSmile className="text-[gray] cursor-pointer"/></span>
          </li>
        </ul>
      </div>
    )}
      </div>
    </div>
  );
}

export default Message2;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiNotification2Line } from "react-icons/ri";
import axios from "axios";

const Navbar = ({ state }) => {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setData(response.data.data || []);
      console.log("Fetched users:", response.data.data); // Log fetched users
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const location = useLocation();
  const { id } = location.state || {};

  // Fetch notifications count from the backend
  const fetchNotificationCount = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notifications/count`);
      setNotificationCount(response.data.count || 0);
    } catch (error) {
      console.error("Error fetching notification count:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchNotificationCount();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = data.filter(user =>
        (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.userName && user.userName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log("Filtered suggestions:",filteredSuggestions); // Log filtered suggestions
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]); // Clear suggestions when search term is empty
      setShowSuggestions(false);
    }
  }, [searchTerm, data]);

  const handleSuggestionClick = (userId) => {
    navigate(`/userprofile`, { state: { id: userId } });
    setShowSuggestions(false); 
  };

  const handleSearchClick = () => {
    const selectedUser = suggestions[0]; // Select the first suggestion
    if (selectedUser) {
      navigate(`/userprofile`, { state: { id: selectedUser.Users_PK } }); // Navigate to the user's profile
      setShowSuggestions(false);
    }
  };

  // Function to handle voice search
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Sorry, your browser doesn't support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log('Voice recognition started.');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('Transcript:', transcript);
      setSearchTerm(transcript); // Set the recognized speech to the search bar
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition:', event.error);
    };

  

    recognition.start(); // Start the voice recognition
  };

  return (
    <nav className="w-full flex justify-between items-center py-2 px-4 bg-white">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden"
          onClick={() => state.setRightSidebar(!state.rightSidebar)}
        />
      </div>

      <div className="flex justify-center items-center relative lg:w-[40%] w-[80%]">
        <input
          type="text"
          placeholder="Search for something..."
          className="px-3 rounded-l-3xl w-full border-[1px] border-gray-200 outline-none py-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="rounded-r-3xl border-[1px] bg-gray-200 border-gray-200 px-4 py-1" 
          onClick={handleSearchClick}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      
        <div className="bg-gray-200 w-12 px-4 py-2 ml-1 grid place-items-center rounded-full">
          <FontAwesomeIcon icon={faMicrophone} onClick={handleVoiceSearch} />
        </div>

        {showSuggestions && (
          <ul className="absolute top-full z-10 w-full bg-white shadow-lg mt-1 rounded-lg h-[300px] overflow-y-scroll">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.Users_PK)}
                >
                  <img 
                    src={suggestion.picUrl || "/placeholder.jpg"} 
                    alt={suggestion.name} 
                    className="inline-block w-8 h-8 rounded-full mr-2" 
                  />
                  {suggestion.name || suggestion.userName}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No suggestions found</li>
            )}
          </ul>
        )}
      </div>

      <div className="flex gap-4 items-center mx-1 relative">
        <div className="relative">
          <RiNotification2Line className="text-xl" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-1">
              {notificationCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

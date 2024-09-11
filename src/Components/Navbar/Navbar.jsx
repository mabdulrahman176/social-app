import React, { useState, useEffect } from "react";
import { faBars, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiNotification2Line } from "react-icons/ri";
import "remixicon/fonts/remixicon.css";

const Navbar = ({ state }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Track the search term
  const [suggestions, setSuggestions] = useState([]); // Store the suggestions
  const [showSuggestions, setShowSuggestions] = useState(false); // Control suggestion visibility

  // Example mock data (replace with API data if necessary)
  const mockData = [
    "JavaScript",
    "React.js",
    "Node.js",
    "LinkedIn",
    "YouTube",
    "React Native",
    "Tailwind CSS",
    "GitHub",
    "React Router",
  ];

  // Fetch suggestions based on the search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = mockData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  return (
    <nav className="w-full overflow-x-hidden flex justify-between px-2 items-center py-1">
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden"
          onClick={() => state.setRightSidebar(!state.rightSidebar)}
        />
      </div>

      <div className="flex gap-2 w-[80%] justify-center relative">
        <div className="flex justify-center lg:w-1/2 w-full mx-2 relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-3xl w-full border-[1px] outline-none px-2 py-1 border-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          />
          <div className="rounded-r-3xl border-[1px] bg-gray-200 border-gray-200 px-4 grid place-items-center border-l-0">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && (
          <ul className="absolute top-10 left-0 w-full bg-white shadow-lg rounded-lg z-10">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(suggestion); // Set the clicked suggestion
                    setShowSuggestions(false); // Hide suggestions after selection
                  }}
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No suggestions found</li>
            )}
          </ul>
        )}

        <div className="bg-gray-200 w-8 grid place-items-center rounded-full">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>

      <div className="flex gap-4 items-center mx-1">
        <RiNotification2Line />
        <img className="w-5 h-5 rounded-full" src="/insta.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

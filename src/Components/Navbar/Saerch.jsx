import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [suggestions, setSuggestions] = useState([]); 
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null); 

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;  

  // Fetch data from the backend
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        const result = await response.data.data
        // const result = response.data.data || response.data; 
        console.log("Fetched response data :", result); 
        setData(result); 
        setError(null); 
      } catch (error) {
        console.error("Error fetching data:", error); 
        setError("Failed to fetch data. Please try again later.");
      }
    };
    getData();
  }, [API_BASE_URL]); 

  
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = data.filter((user) =>
        user.userName && user.userName.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, data]); 

  return (
    <div className="p-4 bg-white h-[100%]">
      <input
        type="text"
        placeholder="Search for something..."
        className="rounded-l-3xl w-full border-[1px] outline-none px-2 py-1 border-gray-200"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      {error ? (
        <p className="text-red-500">{error}</p> 
      ) : null}

      {showSuggestions && (
        <ul className="bg-white shadow-lg mt-2 rounded-lg">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSearchTerm(suggestion.userName); // Set the clicked suggestion (assuming 'userName' field exists)
                  setShowSuggestions(false); // Hide suggestions after selection
                }}
              >
                {/* Display the user data */}
                {suggestion.userName ? (
                  <div>
                    <p>{suggestion.userName}</p>
                    {/* <p className="text-gray-500">{suggestion.email || "No Email Provided"}</p>
                    <p className="text-gray-400">{suggestion.role || "No Role Assigned"}</p> */}
                  </div>
                ) : (
                  <p>Unknown User</p>
                )}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;

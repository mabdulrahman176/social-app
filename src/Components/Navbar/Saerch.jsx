import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUsers] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch data from the backend
  const getData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      const result = await response.data.data;
      // const result = response.data.data || response.data;
      console.log("Fetched response data :", result);
      setData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    }
  };
  useEffect(() => {
    // getData();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = data.filter(
        (user) =>
          user.userName &&
          user.userName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, data]);

  const __search__ = async () => {
    const search = { name: searchTerm };
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/users/search`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(search),
      }
    );
    const data = await req.json();
    setData(data.data);
    console.log("searching");
    console.log({ searchTerm });
    console.log("search data is", data);
  };
  const __view__ = async () => {
    console.log("viewing");
    // const search = {"name":searchTerm}
    // const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/search`,{
    //   method:"POST",
    //   headers:{
    //     "Content-type":"application/json"
    //   },
    //   body:JSON.stringify(search)
    // })
    // const data = await req.json()
    // setData(data.data)
    // console.log("searching")
    // console.log({searchTerm})
    // console.log("search data is",data)
  };
  const __subscribe__ = async (id) => {
    console.log("subscribing");

    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subscriberId: getUserId(),
        subscribedToId: id,
      }),
    });
    const data = await req.json();
    console.log("subscribe data is", data);
  };
  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };
  const __message__ = async (id) => {
    console.log("texting", id);
    const req = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/chatrooms/${getUserId()}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ user: id }),
      }
    );
    const data = await req.json();
    console.log("texting completed");
    console.log({ data });
  };

  return (
    <div
      className="p-4 bg-white h-[93%] overflow-y-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        WebkitScrollbar: {
          display: "none",
        },
        "-msOverflowStyle": "none",
        scrollbarWidth: "none",
      }}
    >
      <div className="flex justify-evenly">
        <input
          type="text"
          placeholder="Search for something..."
          className=" px-3 rounded-l-3xl w-full border-[1px] outline-none  py-1 border-gray-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={__search__}
          className="px-6 py-4 bg-[#F1F1F1] rounded-lg "
        >
          search
        </button>
      </div>

      {error ? <p className="text-red-500">{error}</p> : null}

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

      {/* user Comp */}
      {/*NOTE: ```e.name && <div``` for filtering out users with no name 😅   */}
      <div
        className=" overflow-y-auto h-[90%]"
        style={{
          WebkitOverflowScrolling: "touch",
          WebkitScrollbar: {
            display: "none",
          },
          "-msOverflowStyle": "none",
          scrollbarWidth: "none",
        }}
      >
        {data &&
          data.map(
            (e, i) =>
              e.name && (
                <div
                  key={i}
                  className="w-full h-[6rem]  px-7 my-1 flex items-center justify-between"
                >
                  <div className="flex flex-row pl-3  items-center">
                    <img
                      className="w-16 h-16 object-cover rounded-3xl  mx-4"
                      src={e.picUrl ? e.picUrl : "/placeholder.jpg"}
                      alt=""
                    />
                    <p className="text-2xl">{e.name}</p>
                  </div>
                  <div className="flex">
                    <button
                      onClick={__view__}
                      className="px-5 py-3 mx-1  flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl Video_Nav_Filters transition-all "
                    >
                      view
                    </button>
                    <button
                      onClick={() => __message__(e.Users_PK)}
                      className="px-5 py-3  flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl Video_Nav_Filters transition-all  "
                    >
                      message
                    </button>
                    <button
                      onClick={() => __subscribe__(e.Users_PK)}
                      className="px-5 py-3 mx-1 flex items-center justify-center relative cursor-pointer bg-[#F1F1F1] rounded-lg text-base md:text-xl Video_Nav_Filters transition-all "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              )
          )}
      </div>
      {/* user Comp  end*/}
    </div>
  );
};

export default Search;

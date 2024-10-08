import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AddSpeaker = ({ updateSpeakerData, initialData }) => {
  const [inputValue, setInputValue] = useState("");
  const [speakers, setSpeakers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showAdditionalForms, setShowAdditionalForms] = useState(false);
  const [speakerData, setSpeakerData] = useState({
    speakerName: "",
    familyName: "",
    speakerBusinessLink: "",
  });
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        setAllUsers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [API_BASE_URL]);

  useEffect(() => {
    if (initialData) {
      setSpeakers(initialData);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.includes("@")) {
      const searchTerm = value.split("@").pop();
      if (searchTerm) {
        filterUsers(searchTerm);
        setShowAdditionalForms(false);
      } else {
        setFilteredUsers([]);
      }
    } else {
      setFilteredUsers([]);
      setShowAdditionalForms(value.length > 0);
    }
  };

  const filterUsers = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = allUsers.filter(
      (user) => user && user.name  && user.name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredUsers(filtered);
  };

  const handleUserSelect = (user) => {
    const newSpeaker = {
      id: user.Users_PK, // User ID
      name: user.name, // Display name
      picUrl: user.picUrl || "/placeholder.jpg", 
    };

    const updatedSpeakers = [...speakers, newSpeaker];
    setSpeakers(updatedSpeakers);
    setInputValue("");
    setFilteredUsers([]);
    setShowAdditionalForms(false);

    const eventArray = updatedSpeakers.map(speaker => speaker.id);
    updateSpeakerData(eventArray); // Send only the IDs
  };

  const handleManualEntry = () => {
    const nonTaggedSpeaker = {
      id: Date.now(), // Use a unique ID for manual entries
      name: `${speakerData.speakerName} ${speakerData.familyName}`,
      picUrl: "", // No picUrl for manual entries
    };

    const updatedSpeakers = [...speakers, nonTaggedSpeaker];
    setSpeakers(updatedSpeakers);
    
    const eventArray = updatedSpeakers.map(speaker => speaker.id);
    updateSpeakerData(eventArray); // Send only the IDs
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveSpeaker = (index) => {
    const updatedSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(updatedSpeakers);
    
    const eventArray = updatedSpeakers.map(speaker => speaker.id);
    updateSpeakerData(eventArray); // Send updated IDs to server
  };

  return (
    <div>
      <label className="block text-gray-600 text-sm font-bold">
        Add Speaker*
      </label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
        placeholder="Type @ to mention a speaker"
      />

      {loading && <div className="text-gray-500">Loading users...</div>}
      <ul className=" h-[200px] overflow-y-scroll"  style={{ WebkitOverflowScrolling: 'touch', WebkitScrollbar: { display: 'none' }, '-msOverflowStyle': 'none', scrollbarWidth: 'none' }}>
        {filteredUsers.map((user) => (
          <li
            key={user.Users_PK}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleUserSelect(user)}
          >
            <img 
              src={user.picUrl || "/placeholder.jpg"} 
              alt={user.name} 
              className="inline-block w-8 h-8 rounded-full mr-2" 
            />
            {user.name}
          </li>
        ))}
      </ul>

      {showAdditionalForms && (
        <div className="mt-4">
          <label className="block my-2 text-gray-600 text-sm font-bold">
            Name*
            <input
              value={speakerData.speakerName}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              name="speakerName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="block text-gray-600 text-sm font-bold">
            Family Name*
            <input
              value={speakerData.familyName}
              placeholder="Family Name"
              name="familyName"
              onChange={handleChange}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
            />
          </label>
          <label className="block my-2 text-gray-600 text-sm font-bold">
            Share their Business Profile Link
            <input
              value={speakerData.speakerBusinessLink}
              placeholder="Business Profile Link"
              name="speakerBusinessLink"
              onChange={handleChange}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
            />
          </label>
        </div>
      )}

      <div className="mt-4">
        {speakers.map((speaker, index) => (
          <div key={speaker.id} className="flex items-center justify-between my-2">
            {speaker.picUrl && (
              <img 
                src={speaker.picUrl || "/placeholder.jpg"} 
                alt={speaker.name} 
                className="w-8 h-8 rounded-full mr-2" 
              />
            )}
            <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">
              {speaker.name}
            </span>
            <button
              type="button"
              onClick={() => handleRemoveSpeaker(index)}
              className="text-red-500 ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

AddSpeaker.propTypes = {
  updateSpeakerData: PropTypes.func.isRequired,
  initialData: PropTypes.array.isRequired,
};

export default AddSpeaker;

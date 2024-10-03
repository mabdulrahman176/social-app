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
      (user) => user && user.name && user.name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredUsers(filtered);
  };

  const handleUserSelect = (user) => {
    const newSpeaker = {
      id: user.Users_PK,
      name: `@${user.name}`,
      speakerData: [], // Additional data can be added if needed
    };

    const updatedSpeakers = [...speakers, newSpeaker];
    setSpeakers(updatedSpeakers);
    setInputValue("");
    setFilteredUsers([]);
    setShowAdditionalForms(false);
    updateSpeakerData(updatedSpeakers);
  };

  const handleManualEntry = () => {
    const nonTaggedSpeaker = {
      name: "", 
      speakerData: [
        speakerData.speakerName,
        speakerData.familyName,
        speakerData.speakerBusinessLink,
      ],
    };

    const updatedSpeakers = [...speakers, nonTaggedSpeaker];
    setSpeakers(updatedSpeakers);
    updateSpeakerData(updatedSpeakers);
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
    updateSpeakerData(updatedSpeakers);
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
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.Users_PK}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleUserSelect(user)}
          >
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
          <div key={speaker.id || index} className="flex items-center justify-between my-2">
            <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">
              {speaker.name || `Speaker ${index + 1}`}
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

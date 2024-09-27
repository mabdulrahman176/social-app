import React, { useState, useEffect } from "react";
import axios from "axios";

const AddSpeaker = ({ updateSpeakerData, initialData }) => {
  const [inputValue, setInputValue] = useState('');
  const [speakers, setSpeakers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showAdditionalForms, setShowAdditionalForms] = useState(false);
  const [speakerData, setSpeakerData] = useState({
    speakerFirstName: '',
    speakerLastName: '',
    speakerBusinessLink: '',
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

    if (value.includes('@')) {
      const searchTerm = value.split('@').pop();
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
    const filtered = allUsers.filter(user =>
      user && user.userName && user.userName.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredUsers(filtered);
  };

  const handleUserSelect = (user) => {
    setSpeakers([...speakers, { id: user.id, userName: `@${user.userName}` }]);
    setInputValue('');
    setFilteredUsers([]);
    setShowAdditionalForms(false);
    setSpeakerData({ speakerFirstName: '', speakerLastName: '', speakerBusinessLink: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveSpeaker = (index) => {
    const updatedSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(updatedSpeakers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSpeakerData(speakers);
    setInputValue('');
    setSpeakers([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-600 text-sm font-bold">Add Speaker*</label>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
        placeholder="Type @ to mention a speaker"
      />

      {loading && <div className="text-gray-500">Loading users...</div>}

      {filteredUsers.length > 0 && (
        <ul className="border border-gray-300 rounded-md mt-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleUserSelect(user)}
            >
              {user.userName}
            </li>
          ))}
        </ul>
      )}

      {showAdditionalForms && (
        <div className="mt-4">
          <label className="block my-2 text-gray-600 text-sm font-bold">
            Name*
            <input
              value={speakerData.speakerFirstName}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              name="speakerFirstName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="block text-gray-600 text-sm font-bold">
            Family Name*
            <input
              value={speakerData.speakerLastName}
              placeholder="Family Name"
              name="speakerLastName"
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
            <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">
              {speaker.userName}
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
    </form>
  );
};

export default AddSpeaker;

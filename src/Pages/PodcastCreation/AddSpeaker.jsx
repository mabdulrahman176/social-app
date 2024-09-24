import React, { useState, useEffect } from "react";

const AddSpeaker = ({ updateSpeakerData, initialData, users = [] }) => {
  const [showAdditionalForms, setShowAdditionalForms] = useState(false);
  const [speakerData, setSpeakerData] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Initialize state with data from props if available
    if (initialData) {
      setSpeakerData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Show additional forms if speakerName is filled
    if (name === "speakerName" && value) {
      setShowAdditionalForms(true);
      
      // Filter users based on the input value
      if (value.includes("@")) {
        const searchTerm = value.split("@").pop();
        if (users) {
          setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
        }
      } else {
        setFilteredUsers([]);
      }
    }
  };

  const handleFocus = () => {
    // Show additional forms when the input field is focused
    setShowAdditionalForms(true);
  };

  const handleBlur = (e) => {
    // Hide additional forms if the input field loses focus and it's empty
    if (!e.target.value) {
      setShowAdditionalForms(false);
    }
  };

  const handleUserSelect = (user) => {
    // Handle user selection
    setSpeakerData((prev) => ({
      ...prev,
      speakerName: `@${user.name}`, // Tag the selected user
    }));
    setFilteredUsers([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSpeakerData(speakerData); // Pass data to parent
  };

  return (
    <div>
      <label className="block text-gray-600 text-sm font-bold">
        Add Speaker*
      </label>
      <input
        value={speakerData.speakerName || ''}
        onChange={handleChange}
        onFocus={handleFocus} // Show additional forms on focus
        onBlur={handleBlur}   // Optionally hide additional forms on blur
        className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
        id="speaker"
        type="text"
        name="speakerName"
        placeholder="Mention @ to tag a person"
      />
      
      {filteredUsers.length > 0 && (
        <ul className="border border-gray-300 rounded-md mt-2">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleUserSelect(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {showAdditionalForms && (
        <div>
          <label className="block my-4 text-gray-600 text-sm font-bold">
            Name*
            <input
              value={speakerData.speakerFirstName || ''}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              id="speakerFirstName"
              onChange={handleChange}
              name="speakerFirstName"
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="block text-gray-600 text-sm font-bold">
            Family Name*
            <input
              value={speakerData.speakerLastName || ''}
              placeholder="Family Name"
              name="speakerLastName"
              onChange={handleChange}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
            />
          </label>
          <label className="block my-4 text-gray-600 text-sm font-bold">
            Share their Business Profile Link
            <input
              value={speakerData.speakerBusinessLink || ''}
              placeholder="Business Profile Link"
              name="speakerBusinessLink"
              onChange={handleChange}
              className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default AddSpeaker;

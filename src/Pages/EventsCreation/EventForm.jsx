import React, { useContext, useState } from "react";
import AddSpeaker from "../PodcastCreation/AddSpeaker";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";
import { FaAngleLeft, FaTimes } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import axios from "axios";

const eventCatagory = [
  "Tech & Entrepreneurship",
  "Art",
  "Tech & Investor",
  "Teamwork",
  "Finance",
  "Networking",
  "Government",
  "Charity",
  "Language",
  "Politics",
  "Fashion",
  "History",
  "Hobbies",
  "Career & Business",
  "Travel & Outdoor",
  "Investors",
  "News",
  "Technology",
  "True Crime",
  "Comedy",
  "Music & Dancing",
  "Sports",
  "Science",
  "Leadership",
  "Sustainability",
  "Fiction",
  "Education",
  "Interviews",
  "Business & Finance",
  "Health & Wellness",
  "Self-Improvement",
  "Religion & Spirituality",
  "Pop Culture",
  "Environment",
  "Music",
  "Parenting",
  "Gaming",
  "Food & Cooking",
  "Relationship & Books",
  "Personal Stories",
  "Pets & Animals",
  "TV & Film",
  "Social Activities",
  "Subscribed"
];


const EventForm = () => {
  const navigate = useNavigate();
  const { EventStates } = useContext(myContext);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [state, setState] = useState({});
  const [speakerState, setSpeakerState] = useState([]);
  const [loading, setLoading] = useState(false);
 const [ticketTypes, setTicketTypes] = useState([]);
const [selectedType, setSelectedType] = useState("");
const [ticketPrice, setTicketPrice] = useState(0);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    
    // Append cover image if exists
    if (coverImageFile) {
      formData.append("coverImage", coverImageFile);
    }
  
    // Append all state fields to formData
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });
  
    // Set event creator ID
    formData.append("eventCreatedBy", getUserId());
  
    // Append tickets as an array instead of separate fields
    ticketTypes.forEach((ticket, index) => {
      formData.append(`tickets[${index}][type]`, ticket.price);
      // formData.append(`tickets[${index}][price]`, ticket.price);
    });
  
    // Append speaker data
    speakerState.forEach((speaker, index) => {
      formData.append(`speakers[${index}][id]`, speaker.id);
      formData.append(`speakers[${index}][name]`, speaker.name);
    });
    // Log the FormData to see its contents
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  
    try {
      // Ensure the URL is correctly defined in the environment variables
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/events/`,
        formData
      );
      
      console.log("Event Created Successfully:", response.data);
  
      // Update context state
      EventStates.setEventSubmitted(!EventStates.eventSubmitted);
      navigate("/events");
    } catch (error) {
      console.error("Error submitting the event:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImageFile(file);
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleTicketChange = (e) => {
    const { value } = e.target;
    if (value) {
      setTicketTypes((prev) => [...prev, { type: value, price: parseFloat(ticketPrice) }]);
      setSelectedType("");
    }
  };

  const removeTicket = (index) => {
    setTicketTypes((prev) => prev.filter((_, i) => i !== index));
  };

  console.log("Submitting speakers:", speakerState);

  const updateSpeakerData = (speakers) => {
    setSpeakerState(speakers);
    console.log("Updated Speakers:", speakers);
  };

  return (
    <>
      <h4 className="flex items-center bg-white gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/events")}
        />
        Create Event
      </h4>

      {/* Spinner overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      <div className="w-full h-[90%] bg-white overflow-y-scroll Podcast_Top_Videos">
        <form
          onSubmit={handleSubmit}
          className="flex sm:w-[80%] w-[95%] justify-between mx-auto h-full"
        >
          <div className="sm:w-[40%] w-[45%]">
            <div className="mt-2 mb-2">
              <h1>Customize Cover</h1>
              <div className="bg-[#f0f0fe] w-full h-[25vh] rounded-lg flex items-center justify-center relative overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                />
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <LuImagePlus className="text-blue-800 ms-8 text-3xl" />
                )}
              </div>
            </div>
            {/* Form fields */}
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Event Title
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                onChange={onChange}
                name="eventTitle"
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Event Description
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                onChange={onChange}
                name="eventDescription"
                type="text"
                placeholder="Enter description"
              />
            </div>
           
         

            <div className="my-4">
            <label className="block text-gray-600 text-sm font-bold">
                Event Category
              </label>
              <select
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                value={selectedType} 
                onChange={onChange}
                required
              >
                <option value="">Select a Event Category</option>
                {eventCatagory.map((type, index) => (
                  <option key={index} value={type} className="absolute top-5">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Select Date
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
                type="date"
                onChange={onChange}
                name="eventDate"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Select Location
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                onChange={onChange}
                name="eventLocation"
                type="text"
                placeholder="Enter location"
              />
            </div>

            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Basic Price
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="number"
                value={ticketPrice}
                min={0}
                onChange={(e) => setTicketPrice(e.target.value)}
                placeholder="Enter price $35.00"
              />
            </div>

            <div className="my-4">
      <label className="block text-gray-600 text-sm font-bold">Add Tickets Type</label>
      <select
        className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none text-xs focus:shadow-outline"
        onChange={handleTicketChange}
        value={selectedType}
      >
        <option value="">Select Tickets Type</option>
        <option value="basicTicket">Basic</option>
        <option value="standardTicket">Standard</option>
        <option value="premiumTicket">Premium</option>
       
      
      </select>
    </div>

    <div className="mt-4">
      <ul className="w-auto flex flex-wrap">
        {ticketTypes.map((ticket, index) => (
          <li
            key={index}
            className="my-2 flex justify-between items-center bg-slate-300 rounded-lg w-auto ml-1"
          >
            {ticket.type} - ${ticket.price}
            <FaTimes
              className="text-gray-500 cursor-pointer"
              onClick={() => removeTicket(index)}
            />
          </li>
        ))}
      </ul>
    </div>
          </div>

          <div className="sm:w-[40%] w-[45%]">
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Event Type
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="eventType"
                placeholder="Enter event type"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Start Time
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="startTime"
                placeholder="Enter Start Time"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                End Time
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="endTime"
                placeholder="Enter End Time"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Event Format
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="eventFormat"
                placeholder="Enter format"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Network Opportunities
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="eventNetworkOps"
                placeholder="Enter network opportunities"
              />
            </div>
            <div className="my-4">
              <AddSpeaker
                updateSpeakerData={updateSpeakerData}
                initialData={speakerState}
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Manage Privacy Settings
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="text"
                onChange={onChange}
                name="eventPrivacySettings"
                placeholder="Enter privacy settings"
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-600 text-sm font-bold">
                Number of People
              </label>
              <input
                className="w-full border py-2 ps-3 rounded-lg text-gray-600 leading-tight focus:outline-none placeholder:text-xs focus:shadow-outline"
                type="number"
                onChange={onChange}
                name="eventNO_of_People"
                placeholder="Enter number of people"
              />
            </div>
            <button
              className="w-full h-12 mt-14 border rounded-3xl linear_gradient text-white py-2 px-3 leading-tight focus:outline-none text-sm focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              Publish Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EventForm;

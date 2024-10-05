import React, { useContext, useState } from "react";
import AddSpeaker from "./AddSpeaker";
import { myContext } from "../../Context/CreateContext";

const podcastTypes = [
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

const Form = ({ audioFile, coverImage, formState, setFormState, audioDuration }) => {
  const { PodcastStates } = useContext(myContext);
  const [speakerState, setSpeakerState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting podcast...");

    const formData = new FormData();

    // Append audio file and duration
    if (audioFile) {
      formData.append('audio', audioFile);
      formData.append('podcastDuration', audioDuration);
    }

    // Append cover image
    if (coverImage) {
      formData.append('image', coverImage);
    }

    // Append other form state values
    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
    }

  // Create an array of speaker IDs
  const speakerIds = speakerState.map(speaker => speaker.id);
  console.log("speaker idd", speakerIds)
  console.log("speaker state", speakerState)

  formData.append('speakerArray', JSON.stringify(speakerState));

    // Append user ID and podcast type
    // formData.append('speakerArray',JSON.stringify() );
    formData.append('userID', getUserId());
    formData.append('podcastType', selectedType);

    // Log FormData entries to the console
    console.log("FormData Entries:");
    console.log("Speaker State Before Submission:", speakerState);

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/podcasts/`, {
        credentials: 'include',
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
        if (PodcastStates && PodcastStates.setPodcastSubmitted) {
          PodcastStates.setPodcastSubmitted(true);
        }
      } else {
        console.error("Failed to submit podcast");
      }
    } catch (error) {
      console.error("Error submitting podcast:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (typeof setFormState === 'function') {
      setFormState(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else {
      console.error('setFormState is not a function');
    }
  };


  const updateSpeakerData = (speakers) => {
    setSpeakerState(speakers);
    console.log("Updated Speakers:", speakers); // Log to verify
  };
  return (
    <>
      <div className="relative w-full">
        <form onSubmit={handleSubmit} className="flex justify-between">
          <div className="sm:w-[35%] w-[45%]">
            <div className="pt-3">
              <label className="block text-gray-600 text-sm font-bold" htmlFor="episodeTitle">
                Episode Title<span className="text-red-800">*</span>
              </label>
              <input
                className="w-full border py-2 p-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                id="episodeTitle"
                name="episodeTitle"
                type="text"
                onChange={handleChange}
                placeholder="Enter Title"
                required
              />
            </div>
            <div className="pt-5">
              <label className="block text-gray-600 text-sm font-bold" htmlFor="episodeDescription">
                Episode Description<span className="text-red-800">*</span>
              </label>
              <textarea
                name="episodeDescription"
                id="episodeDescription"
                onChange={handleChange}
                className="w-full h-[15vh] border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                placeholder="Enter Description"
                required
              ></textarea>
            </div>
            <div className="pt-5">
              <label className="block text-gray-600 text-sm font-bold" htmlFor="podcastType">
                Podcast Type<span className="text-red-800">*</span>
              </label>
              <select
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                required
              >
                <option value="">Select a Podcast Type</option>
                {podcastTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:w-[40%] w-[45%]">
            <div className="flex justify-between">
              <div className="w-[49%] py-3">
                <label className="block text-gray-600 text-sm font-bold" htmlFor="seasonNumber">
                  Season#
                </label>
                <input
                  className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                  id="seasonNumber"
                  name="seasonNumber"
                  type="number"
                  onChange={handleChange}
                  placeholder="Enter Season Number"
                />
              </div>
              <div className="w-[49%] py-3">
                <label className="block text-gray-600 text-sm font-bold" htmlFor="episodeNumber">
                  Episode#
                </label>
                <input
                  className="w-full border py-2 ps-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                  id="episodeNumber"
                  name="episodeNumber"
                  type="number"
                  onChange={handleChange}
                  placeholder="Enter Episode Number"
                />
              </div>
            </div>

            <div className="mt-2">
            <AddSpeaker updateSpeakerData={updateSpeakerData} initialData={speakerState} />

            </div>

            <button
              type="submit"
              className="w-full mt-14 border rounded-full buyticket text-center text-white py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              Publish Now
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;

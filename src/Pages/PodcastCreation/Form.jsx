import React, { useContext, useState } from "react";
import AddSpeaker from "./AddSpeaker";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";

const Form = ({ audioFile, coverImage, formState, setFormState }) => {
  const { PodcastStates } = useContext(myContext);
  const navigate = useNavigate();
  const [speakerState, setSpeakerState] = useState({});

  const handleSubmit = async () => {
    const formData = new FormData();

    if (audioFile) {
      formData.append('audio', audioFile);
    }

    if (coverImage) {
      formData.append('image', coverImage);
    }

    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
    }

    for (const [key, value] of Object.entries(speakerState)) {
      formData.append(key, value);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/podcasts/`, {
        credentials: 'include',
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Set podcast submitted state
        if (PodcastStates && PodcastStates.setPodcastSubmitted) {
          PodcastStates.setPodcastSubmitted(true);
        }
        // Navigate to the Success page
        navigate('/success');
      } else {
        console.error("Failed to submit podcast");
      }
    } catch (error) {
      console.error("Error submitting podcast:", error);
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

  const updateSpeakerData = (speakerData) => {
    setSpeakerState(prev => ({
      ...prev,
      ...speakerData,
    }));
  };

  return (
    <>
      <div className="flex justify-between relative w-full">
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
            ></textarea>
          </div>
          <div className="pt-5">
            <label className="block text-gray-600 text-sm font-bold" htmlFor="podcastType">
              Podcast Type<span className="text-red-800">*</span>
            </label>
            <input
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
              id="podcastType"
              name="podcastType"
              type="text"
              onChange={handleChange}
              placeholder="Podcast Type"
            />
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
            className="w-full mt-14 border rounded-full buyticket text-center text-white py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Publish Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;

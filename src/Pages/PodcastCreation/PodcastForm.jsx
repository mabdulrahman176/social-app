import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Form from './Form';

const PodcastForm = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [formState, setFormState] = useState({});
  const [audioDuration, setAudioDuration] = useState(0); // State for audio duration
  let navigate = useNavigate();

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const handleAudioChange = (files) => {
    if (files.length > 0) {
      const file = files[0];
      setAudioFile(file);

      const audio = new Audio(URL.createObjectURL(file));
      audio.onloadedmetadata = () => {
        setAudioDuration(Math.round(audio.duration)); // Set duration in seconds
      };
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    if (audioFile) {
      formData.append('audio', audioFile);
      formData.append('podcastDuration', audioDuration); // Append audio duration
    }

    if (coverImage) {
      formData.append('image', coverImage);
    }

    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
    }

    try {
      formData.append('userID', getUserId());
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/podcasts/`, {
        credentials: "include",
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // navigate('/podcasts');
      } else {
        console.error("Failed to submit podcast");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const _onChange_ = (e) => {
    const { name, value, files } = e.target;

    if (name === "audioName") {
      handleAudioChange(files); // Call the audio change handler
    }

    if (name === "customizeCover" && files.length > 0) {
      setCoverImage(files[0]);
    }

    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h4 className="flex items-center bg-white gap-3 ps-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/podcast")}
        />
        Create podcast
      </h4>
      <div className="h-[90%] w-full bg-white overflow-y-scroll Podcast_Top_Videos">
        <div className="md:w-[85%] w-[95%] px-5 mx-auto">
          <div className="flex justify-between items-center">
            <div className="sm:w-[35%] w-[45%] h-[25vh] border-gray-500 rounded border-[3px] flex justify-center relative items-center border-dashed">
              <input
                type="file"
                id="audioes"
                name="audioName"
                onChange={_onChange_}
                accept="audio/*"
                className="h-full w-full absolute opacity-0 cursor-pointer"
              />
              {audioFile ? (
                <audio controls className="w-full h-full">
                  <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <h5 className="text-center text-xs font-thin text-gray-500">
                  Record or upload <br />
                  some audio, <br /> and it'll appear here{" "}
                </h5>
              )}
            </div>

            <div className="sm:w-[35%] w-[45%] h-[25vh]">
              <h1 className="text-xs">Customize Cover</h1>
              <div className="bg-[#f0f0fe] flex items-center justify-center w-[100%] rounded-xl h-[90%] relative overflow-hidden">
                <input
                  type="file"
                  id="custom"
                  name="customizeCover"
                  onChange={_onChange_}
                  accept="image/*"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                {coverImage ? (
                  <img
                    src={URL.createObjectURL(coverImage)}
                    alt="Cover"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <LuImagePlus className="text-blue-800 ms-8 text-3xl" />
                )}
              </div>
            </div>
          </div>
          <Form 
            audioFile={audioFile} 
            coverImage={coverImage} 
            formState={formState} 
            setFormState={setFormState} 
            audioDuration={audioDuration} // Pass the audio duration prop
          />
        </div>
      </div>
    </>
  );
};

export default PodcastForm;

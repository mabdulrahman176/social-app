import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsCalendar4Event, BsSuitcaseLg } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { PiApplePodcastsLogoThin } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";
import { fetchProfile } from "../../API";
import PublicProfileVideos from "./PublicProfileVideos";
import PublicProfilePodcats from "./PublicProfilePodcats";
import PublicProfileEvents from "./PublicProfileEvents";
import PublicProfileJobs from "./PublicProfileJobs";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.id; 
  console.log('subscriber  ID from state:', userId);
  // Get userId from location state

  const [data_, setDATA] = useState({});
  const [activeTab, setActiveTab] = useState("Video");
  const [profile, setProfile] = useState({});
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [loading, setLoading] = useState(false);

 

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const subscribeUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscriberId: getUserId(), subscribedToId: userId }),
      });
      if (response.ok) {
        const result = await response.json();
        setIsSubscribed(true);
        console.log("user subscribed",result.message);
      } else {
        const error = await response.json();
        console.error('Error subscribing:', error.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  
  const unsubscribeUser = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setIsSubscribed(false);
        console.log('Unsubscribed successfully');
      } else {
        const error = await response.json();
        console.error('Error unsubscribing:', error.message);
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };
  
  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/subscribe/my/${userId}`);
        if (response.ok) {
          const subscriptions = await response.json();
          console.log("resoonse ",response)
          // Check if current user is in the subscription list
          const isSubscribed = subscriptions.some(sub => sub.subscriberId === getUserId());
          setIsSubscribed(isSubscribed);
        }
      } catch (error) {
        console.error('Error fetching subscription status:', error);
      }
    };
  
    if (userId) {
      fetchProfileData(userId);
      checkSubscriptionStatus(); // Check subscription status on mount
    }
  }, [userId]);
  
  
  const createChatRoom = () => { navigate('/messages') };

  const fetchProfileData = async (id) => {
    try {
      const result = await fetchProfile(id); // Use the userId passed in
      setProfile(result.user);
      setDATA(result.data);
      console.log("single user data", result);
    } catch (error) {
      console.error("Fetching profile data error:", error);
    }
  };

  const renderStars = (rating) => {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.floor(rating); // Whole filled stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
    const starsArray = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        starsArray.push(<FaStar key={i} className="text-[#FFDD55] text-sm md:text-lg" />);
      } else if (i === filledStars && hasHalfStar) {
        starsArray.push(<FaStarHalf key={i} className="text-[#FFDD55] text-sm md:text-lg" />);
      } else {
        starsArray.push(<FaStar key={i} className="text-gray-400 text-sm md:text-lg" />);
      }
    }

    return starsArray;
  };

  useEffect(() => {
    if (userId) {
      fetchProfileData(userId); // Fetch profile data based on userId from location state
    }
  }, [userId]); // Depend on userId

  const isCurrentUser = getUserId() === userId; // Check if the current user is the same as the profile being viewed

  return (
    <Fragment>
      <div className="bg-white h-full w-full">
        <div className="w-full md:w-[25%] h-auto md:h-[6%] flex items-center gap- ps-3">
        <FaChevronLeft className="text-ms cursor-pointer"onClick={() => navigate(-1)}  />
          <p className="text-lg flex items-center px-1">Profile</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center h-auto md:h-[32%] mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-[75%] items-center">
            <div className="rounded-full flex justify-center md:justify-end w-[60%] md:w-[40%] relative">
             
              <label htmlFor="fileInput"  aria-label="Upload Profile Picture">
                <img
                  className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover"
                  src={profile.picUrl || '/placeholder.jpg'} // Fallback URL
                  alt="Profile"
                />
               
              </label>
            </div>
            <div className="py-3 px-4 md:px-6 w-full md:w-[60%]">
              <h1 className="text-lg md:text-xl">{profile.name || profile.userName}</h1>
              <div className="flex py-1 space-x-2">
                {renderStars(data_.rating?.globalrating || 0)} {/* Render the stars */}
                <h1 className="text-xs md:text-sm">{data_.rating?.globalrating.toFixed(1) || '0.00'} out of 5</h1>
              </div>
              <p className="text-xs md:text-sm opacity-65">{data_.rating?.totalRatings || 0} global ratings</p>
              <div className="flex text-blue-600 text-xs md:text-sm py-2">
                <Link to='/personaldetails'>view personal info</Link>
                <MdKeyboardArrowRight className="text-xl md:text-2xl" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {isCurrentUser ? (
                  <>
                    <button
                      className={`px-6 py-2 rounded-2xl text-lg ${loading ? 'bg-gray-400' : 'bg-[#F6F6FF]'}`}
                    
                      disabled={loading}
                    >
                      {loading ? 'Uploading...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => console.log(profile)}
                      className="px-6 py-2 rounded-2xl text-lg text-white bg-[#6165F3]"
                    >
                      Edit Profile 
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="px-6 py-2 rounded-2xl text-lg bg-[#F6F6FF]"
                      onClick={createChatRoom}
                    >
                      Message
                    </button>
                    <button
  className="px-6 py-2 rounded-2xl text-lg text-white bg-[#6165F3]"
  onClick={isSubscribed ? unsubscribeUser : subscribeUser}
>
  {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
</button>

                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[25px] items-center justify-center border-t-[2px] h-[8%]">
          <div className="w-[50%] flex justify-between py-2">
            <CiVideoOn
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Video")}
            />
            <PiApplePodcastsLogoThin
              size={30}
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Podcast")}
            />
            <BsCalendar4Event
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Event")}
            />
            <BsSuitcaseLg
              className="cursor-pointer opacity-70"
              onClick={() => setActiveTab("Job")}
            />
          </div>
        </div>
        <section className="h-[54%] w-full overflow-y-scroll Podcast_Top_Videos">
          {activeTab === "Video" && <PublicProfileVideos videos={data_.videos} />}
          {activeTab === "Podcast" && <PublicProfilePodcats podcast={data_.podcast} />}
          {activeTab === "Event" && <PublicProfileEvents events={data_.events} />}
          {activeTab === "Job" && <PublicProfileJobs jobs={data_.jobs} />}
        </section>
      </div>
    </Fragment>
  );
};

export default UserProfile;

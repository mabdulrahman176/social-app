import React, { useState, useEffect, Fragment } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

function MySubscribers() {
  const [subscriber, setSubscriber] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [able, setAble] = useState(null);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe/my/${getUserId()}`);
      const data = await response.json();
      console.log("Fetched my subscribers:", data); // Log the data
      setSubscriber(data);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
    }
  };

  const fetchBlockedUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/block?userId=${getUserId()}`);
      const data = await response.json();
      console.log("Blocked users", data);
      setBlockedUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching blocked users:", error);
      setBlockedUsers([]);
    }
  };

  const blockSubscriber = async (blockedId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/block`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: getUserId(),
          blockedId,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Post for block", result);
        setBlockedUsers((prev) => [...prev, { blockedId }]); // Update blocked users list
      } else {
        console.error('Failed to block user');
      }
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const isBlocked = (userId) => {
    return blockedUsers.some((blockedUser) => blockedUser.blockedId === userId);
  };

  const deleteSubscriber = async (subscriberId) => {
    console.log("delte sub id",subscriberId)
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe/${subscriberId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Subscriber deleted:", result);
        // Update the subscribers list
        setSubscriber(prevSubscribers => prevSubscribers.filter(sub => sub._id !== subscriberId));
      } else {
        console.error('Failed to delete subscriber');
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  useEffect(() => {
    fetchSubscribers();
    fetchBlockedUsers();
  }, []);

  return (
    <Fragment>
      <div className="h-full w-full bg-white md:h-screen lg:h-screen xl:h-screen">
        <div className="main h-full w-[90%] mx-4 md:w-[80%] lg:w-[60%] xl:w-[70%]">
          <p className="text-lg h-[10%] bg-white font-bold w-full z-10 flex items-center md:text-xl lg:text-xl xl:text-2xl">
            My Subscribers
          </p>
          <div className="flex flex-col justify-between md:flex-row lg:flex-row xl:flex-row text-lg md:text-xl lg:text-lg xl:text-xl font-bold">
            <h1>Total Subscribers </h1>
            <h2>{subscriber.length}</h2>
          </div>
          <div
            className="overflow-y-auto h-[550px]"
            style={{
              WebkitOverflowScrolling: "touch",
              WebkitScrollbar: {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {subscriber.map((subsc) => (
              <div key={subsc._id} className="flex items-center justify-between py-3 mt-2 border-b">
                <div className="flex items-center gap-3">
                  <Link to="/userprofile">
                    <img
                      src={subsc.user?.picUrl ? subsc.user.picUrl : '/placeholder.jpg'}
                      alt=""
                      className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
                    />
                  </Link>
                  <div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75">
                      {subsc.user?.name || 'Unknown'}
                    </p>
                    <p>
                      <Link to="##" className="text-xs md:text-sm lg:text-base xl:text-lg opacity-75">
                        {subsc.linkText}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <CiMenuKebab
                    className="text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                    onClick={() => setAble(able === subsc._id ? null : subsc._id)}
                  />
                  {able === subsc._id && (
                    <div
                      className="absolute right-0 w-[200px] md:w-[250px] lg:w-[200px] xl:w-[200px] cursor-pointer px-3 py-2 z-30 bg-white shadow-lg border"
                      onClick={() => setAble(able === subsc._id ? null : subsc._id)}
                    >
                      <p
                        className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5 cursor-pointer"
                        onClick={() => {
                          const blockedId = subsc.subscribedToId;
                          if (!isBlocked(blockedId)) {
                            blockSubscriber(blockedId);
                          }
                        }}
                      >
                        {isBlocked(subsc.subscribedToId) ? "Blocked" : "Block"}
                      </p>
                      <p
                        className="text-sm md:text-base lg:text-lg xl:text-xl text-red-500 mb-5 cursor-pointer"
                        onClick={() => deleteSubscriber(subsc._id)} // Call deleteSubscriber with the subscriber's ID
                      >
                        Remove
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MySubscribers;

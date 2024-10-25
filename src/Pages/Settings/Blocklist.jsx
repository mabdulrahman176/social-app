import React, { useState, useEffect } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Blocklist() {
  let navigate = useNavigate();
  const [blockedUsers, setBlockedUsers] = useState([]);

  // Function to get the logged-in user ID from cookies
  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };

  // Fetch blocked users from API
  const fetchBlockedUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/block/${getUserId()}`);
      const data = await response.json();
      console.log("Blocked users fetched:", data.data);
      setBlockedUsers(data.data);
    } catch (error) {
      console.error('Error fetching blocked users:', error);
    }
  };

  // Unblock a user
  const unblockUser = async (userId) => {
    try {
      console.log('Attempting to unblock user with ID:', userId);
  
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/block/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: getUserId(),
          blockedId: userId,
        }),
      });
  
      if (response.ok) {
        // Immediately update the state to reflect the unblocking
        setBlockedUsers(prevBlockedUsers => 
          prevBlockedUsers.filter(user => user._id !== userId)
        );
        console.log('User unblocked successfully');
      } else {
        const responseData = await response.json();
        console.error('Failed to unblock user:', responseData);
      }
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  useEffect(() => {
    fetchBlockedUsers(); // Fetch blocked users when component loads
  }, []);

  return (
    <div className='bg-white w-full h-full'>
      <h4 className="flex items-center gap-2 ms-4 h-[10%]">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        Blocked user list
      </h4>
      <div className="main h-[90%] overflow-y-scroll Podcast_Top_Videos w-[90%] m-[auto]">
        <div>
          {blockedUsers.length > 0 ? blockedUsers.map((block) => (
            <div key={block._id}>
              <div className="flex justify-between pb-4 pt-4">
                <div className="flex gap-4">
                  <img
                    src={block.user.picUrl || "/placeholder.jpg"}
                    alt=""
                    className='h-[50px] w-[50px] rounded-full'
                  />
                  <div>
                    <p className='text-base font-medium'>{block.user.name || block.user.userName || "unknown"}</p>
                    <p className='text-gray-400'>{ block.user.userName || block.user.role}</p>
                  </div>
                </div>
                <button
                  className='h-[7vh] md:w-[10%] w-[20%] bg-gray-100 rounded-lg'
                  onClick={() => unblockUser(block._id)}
                >
                  Unblock
                </button>
              </div>
              <hr className="border-gray-300 w-[90%]" />
            </div>
          )) : <p>No blocked users</p>}
        </div>
      </div>
    </div>
  );
}

export default Blocklist;

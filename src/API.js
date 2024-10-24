// src/api.js
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getUserId = () => {
  const str = document.cookie
  const userKey = str.split('=')[1];
  return userKey
}

// Function to fetch data (if needed)
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchProfile = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchEvent = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchDetail = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchPodcast = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/podcasts/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to post data
export const postData = async (data) => { // Accept data as an argument
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/`, data); // Include the data in the request body
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};


// // Function to upload a video
// export const uploadVideo = async (videoFile) => {
//   try {
//     const formData = new FormData();
//     formData.append('video', videoFile);

//     const response = await axios.post('/upload/video', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error uploading video:', error);
//     throw error;
//   }
// };

// Function to fetch video details
export const fetchVideo = async (videoId) => {
  if (!videoId) {
    throw new Error('Video ID is required');
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/view/${videoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching video details:', error);
    throw error;
  }
};


// Function to stream a video
// export const streamVideo = async (videoId) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/stream/${videoId}`, {
//       responseType: 'blob', // Important for handling binary data
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error streaming video:', error);
//     throw error;
//   }
// };

// Add more functions as needed

// Function to initiate Google authentication
// export const initiateGoogleAuth = () => {
//   // Redirecting to the Google OAuth2 login page
//   window.location.href = `${API_BASE_URL}/auth`;
// };

// Function to check if the user is logged in
// export const checkLoginStatus = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/login/success`, { withCredentials: true });
//     return response.data;
//   } catch (error) {
//     console.error('Error checking login status:', error);
//     throw error;
//   }
// };
// Function to logout
// export const logout = async () => {
//   try {
//     await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
//     window.location.href = '/'; // Redirect to the home page or login page
//   } catch (error) {
//     console.error('Error during logout:', error);
//     throw error;
//   }
// };

// Existing functions..
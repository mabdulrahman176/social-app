// src/api.js
import axios from "axios";
import {REACT_APP_API_BASE_URL} from './ENV'
const API_BASE_URL = REACT_APP_API_BASE_URL;

export const getUserId = () => {
  const str = document.cookie;
  const userKey = str.split("=")[1];
  return userKey;
};

// Function to fetch data (if needed)
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProfile = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchEvent = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchDetail = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchPodcast = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/podcasts/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to post data
export const postData = async (data) => {
  // Accept data as an argument
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/`, data); // Include the data in the request body
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

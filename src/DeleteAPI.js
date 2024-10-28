import {REACT_APP_API_BASE_URL} from './ENV'
const token = localStorage.getItem('jwtToken'); // Retrieve the token from local storage

const API_BASE_URL = REACT_APP_API_BASE_URL;


const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
}

const deleteEvent = async (eventId) => {
    const req = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deleteJob = async (jobId) => {
    const req = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deletePodcast = async (podcastId) => {
    const req = await fetch(`${API_BASE_URL}/podcasts/${podcastId}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deleteVideo = async (vidId) => {
    console.log("deleting video")
    const req = await fetch(`${API_BASE_URL}/upload/delete/${vidId}`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deleteReview = async (id) => {
    const req = await fetch(`${API_BASE_URL}/reviews/delete/${id}`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    console.log("deleting comment")
    const data = await req.json()
    console.log({ data })
}
const deleteChatroom = async (id) => {
    const req = await fetch(`${API_BASE_URL}/chatrooms/delete/${id}`, {
        method: "POST",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deleteNotification = async (id) => {
    const req = await fetch(`${API_BASE_URL}/notifications/${id}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
const deleteMessage_BETA = async () => {
    const req = await fetch(`${API_BASE_URL}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
        },
    })
    const data = await req.json()
    console.log({ data })
}
export { deleteNotification, deleteChatroom, deleteEvent, deleteReview, deleteJob, deletePodcast, deleteVideo }
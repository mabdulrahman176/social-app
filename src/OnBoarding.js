import React, { useEffect } from 'react'
import { useLocation ,useNavigate } from 'react-router-dom';


const OnBoarding = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
            expires = "; expires=" + date.toUTCString(); // Set expiration date
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/;"; // Set cookie path
    };
    
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const authtoken = query.get('authtoken'); // Get the authtoken query parameter
        const user = query.get('user'); // Get the user query parameter
        localStorage.setItem("jwt", authtoken);
        setCookie('user',user,1)
        navigate('/videos')
    }, [])

    return (
        <div></div>
    )
}

export default OnBoarding
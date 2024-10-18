import React, { useState } from "react";
import PassChangeSuccess from "./PassChangeSuccess";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Changepassword() {
  const [current, setCurrent] = useState("");
  const [newpass, setNewpass] = useState("");
  const [retype, setRetype] = useState("");
  const [passChange, setPassChange] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const getUserId = () => {
    const str = document.cookie;
    console.log("cookies",str)
    const userKey = str.split("=")[1];
    return userKey;
  };

  const handleChangePassword = async () => {
    setLoading(true);
    setError("");

    const userId = getUserId();
    try {
      const response = await axios.post(`${API_BASE_URL}/users/changepass`, {
        oldPass: current,
        newPass: newpass,
        userId: userId,
      });
      if (response.data.message === "success") {
        setPassChange(true); // Show success component
      } else {
        setError("Failed to change password"); // Set error message
      }
    } catch (error) {
      setError("An error occurred: " + error.response.data.message); // Handle error
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <>
      <div className="bg-white h-full w-full relative">
        {passChange && <PassChangeSuccess setPassChange={setPassChange} />}
        <h4 className="flex items-center gap-2 ms-4 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/settings")}
          />{" "}
          Change Password
        </h4>
        <div className="main h-[90%] sm:w-[70%] w-[90%] m-[auto] overflow-y-scroll Podcast_Top_Videos">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleChangePassword();
            }}
            className="pt-6"
          >
            <div className="flex justify-between">
              <div className="div sm:w-[40%] w-[45%]">
                <label htmlFor="" className="block text-black text-sm mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter Your Current Password"
                  className="w-[100%] p-1 border border-black rounded placeholder:text-black placeholder:text-xs"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
                <label htmlFor=""  className="block text-black text-sm mt-12">
                  Re-type new password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Re-type Your New Password"
                  className= "w-[100%] p-1 border border-black rounded placeholder:text-black placeholder:text-xs mb-12"
                  value={retype}
                  onChange={(e) => setRetype(e.target.value)}
                />
              </div>
              <div className="div sm:w-[40%] w-[45%]">
                <label htmlFor=""className="block text-black text-sm mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter Your New Password"
                  className="w-[100%] p-1 border border-black rounded placeholder:text-black placeholder:text-xs"
                  value={newpass}
                  onChange={(e) => setNewpass(e.target.value)}
                />
                <button
                  type="submit"
                  className="h-[7vh] w-[100%] rounded-full text-white buyticket mt-12"
                  disabled={loading}
                >
                  {loading ? "Changing..." : "Change Password"}
                </button>
              </div>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
        </div>
      </div>
    </>
  );
}

export default Changepassword;

import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { myContext } from "../../Context/CreateContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Apply() {
  const [fname, setFname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [additonalInfo, setAdditonalInfo] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  let { JobAppliedStates } = useContext(myContext); 
  let navigate = useNavigate();
  const location = useLocation();
  const jobId = location.state?.id;
  const userId = location.state?.userId;


  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", fname);
    formData.append("email", mail);
    formData.append("phoneNumber", phone);
    formData.append("additonalInfo", additonalInfo);
    formData.append("jobId", jobId); 
    formData.append("userId", userId); 

    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/appliedjobs`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Result from server:", result); // Log the server response
        JobAppliedStates.setJobAppliedSuccess(true);
        navigate("/jobapplysuccess");
      } else {
        const errorText = await response.text();
        console.error("Error submitting application:", response.statusText, errorText);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-white w-full">
      <h4 className="flex items-center gap-3 ms-4 h-[10%]">
        <FaAngleLeft className="cursor-pointer" onClick={() => navigate("/jobdetail", { state: { id: jobId } })} />
        Apply to Tangent
      </h4>
      <div className="w-[80%] h-[90%] mx-auto overflow-x-scroll Podcast_Top_Videos md:pb-0 pb-4">
        <form onSubmit={handleApply} className="flex justify-between md:flex-nowrap flex-wrap">
          <div className="md:w-[40%] w-[80%] mx-auto sm:mx-0">
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label className="block text-sm mt-5 mb-2">Phone Number</label>
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
            />
            <p className="mt-5 text-sm">Upload resume*</p>
            <div className="h-[7vh] w-[70%] flex justify-center items-center px-5 rounded-3xl bg-[#e7e7f5] text-[blue] mt-2 relative text-xs ms-3">
              <label>
                Upload resume
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="opacity-0 cursor-pointer h-full w-full rounded-full absolute left-0 top-0"
                  required
                  accept=".pdf"
                />
              </label>
            </div>
          </div>

          <div className="second md:w-[45%] w-[80%] mx-auto sm:mx-0">
            <label className="block text-sm mt- mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter Your Email Address"
              className="placeholder:text-xs ms-3 ps-3 border rounded-md w-full py-2"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <p className="block text-sm mt-5 mb-2">Additional Info</p>
            <input
              type="text"
              className="placeholder:text-xs border-b w-full outline-none ms-3 ps-3 mb-10"
              placeholder="Where do you live?"
              value={additonalInfo}
              onChange={(e) => setAdditonalInfo(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <div
                className="h-[7vh] text-sm w-[48%] flex items-center justify-center PodcastSuccessGradient p-0 rounded-full"
              >
                <button
                  type="button"
                  className="h-[93%] w-[98%] rounded-full bg-white"
                  onClick={() => navigate("/jobdetail", { state: { id: jobId } })}
                >
                  <span className="PodcastSuccessGradientText">Discard</span>
                </button>
              </div>
              <button
                type="submit"
                className="h-[7vh] w-[48%] text-sm PodcastSuccessGradient rounded-3xl text-[white]"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Apply"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Apply;

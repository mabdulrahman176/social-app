import React, { useState, Fragment, useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5"; // Import the delete icon
import { deleteJob } from '../../DeleteAPI'; // Import deleteJob function
import { Link } from "react-router-dom";

const CalendarSearch = (props) => {
  const [jobs, setJobs] = useState([]); // State to hold jobs
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split('=')[1];
    return userKey;
  };
const currentUser = getUserId()

  const handleDeleteConfirm = async () => {
    try {
      await deleteJob(deleteItemId); // Call the deleteJob API with the selected job ID
      console.log(`Deleted job with id: ${deleteItemId}`);
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== deleteItemId)); // Remove job from local state
    } catch (error) {
      console.error("Error deleting job:", error);
    }
    setIsDeleteModalOpen(false);
    setDeleteItemId(null);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteItemId(null);
  };

  useEffect(() => {
    setLoading(true); // Start loading
    console.log("in single job component");
    console.log(props.jobs);
    setJobs(props.jobs); // Set jobs from props
    setLoading(false); // Stop loading after setting jobs
  }, [props.jobs]);

  const formatDate = (dateString) => {
    if (!dateString) return "Invalid date"; // Return a message for undefined dates

    const normalizedDateString = dateString.replace(/[-]/g, "/");
    const dateParts = normalizedDateString.split("/");
    let day, month, year;

    if (dateParts.length === 3) {
      if (dateParts[0].length === 4) {
        year = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        day = dateParts[2];
      } else {
        day = dateParts[0];
        month = dateParts[1] - 1; // Month is zero-indexed
        year = dateParts[2];
      }

      const date = new Date(year, month, day);
      if (
        date.getDate() === parseInt(day) &&
        date.getMonth() === month &&
        date.getFullYear() === parseInt(year)
      ) {
        return `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(-2)}/${year}`;
      }
    }

    return "Invalid date format";
  };

  return (
    <Fragment>
      <div className="ps-6 overflow-y-scroll Podcast_Top_Videos h-full w-full">
        <div className="flex gap-1 flex-wrap w-full Podcast_Top_Videos">
          {loading ? (
            <p className="text-center w-full">Loading...</p>
          ) : jobs && jobs.length > 0 ? (
            jobs.map((elm, i) => (
              <div
                key={i}
                className="h-[37vh] w-[32.4%] flex-shrink-0 shadow rounded-lg border relative PPJob"
                onMouseEnter={() => setVisibleId(elm._id)}
                onMouseLeave={() => setVisibleId(null)}
              >
                <div className="w-full">
                  <div className="flex gap-2 mt-2">
                    <img
                      src={elm.logoUrl ? elm.logoUrl : "/placeholder.jpg"}
                      onLoad={(e) => (e.target.style.opacity = 1)}
                      onError={(e) => (e.target.src = "/placeholder.jpg")}
                      style={{
                        height: "40px",
                        width: "40px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      className="rounded-full"
                      alt="Profile"
                    />
                    <div>
                      <h1 className="font-semibold">{elm.jobTitle}</h1>
                      <p className="font-light text-md">
                        {formatDate(elm.applicationDeadline)}
                      </p>
                    </div>
                  </div>
                  <p className="mt-7 ps-4 text-md opacity-65">{elm.location} ({elm.workplaceType})</p>
                  <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                  {elm.userId === currentUser ? (
                    <Link
                      to={"/mycreatedjob"}
                      state={{ id: elm._id }}
                      className="w-[90%] flex justify-center items-center mx-auto  text-xl mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                      View Details
                    </Link>
                  ) : (
                    <div className="text-center flex items-center">
                      <Link
                        to={"/jobdetail"}
                        state={{ id: elm._id }}
                        className="w-[90%] mx-auto flex text-xl mt-7 justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      >
                        Apply job
                      </Link>
                    </div>
                  )}
                  {elm.userId === currentUser && (
                  <button
                    className="absolute top-2 right-2 text-red-600 text-xl cursor-pointer"
                    onClick={() => handleDeleteClick(elm._id)}
                  >
                    <IoTrashOutline />
                  </button>
                )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full">No jobs available</p>
          )}
        </div>

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <p>Are you sure you want to delete this job listing?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={handleDeleteCancel}
                >
                  Cancel
                </button>
                <button
                  className="linear_gradient text-white px-4 py-2 rounded"
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CalendarSearch;

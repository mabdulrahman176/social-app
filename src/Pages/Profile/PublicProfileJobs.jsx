import React, { useState, Fragment, useEffect } from "react";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5"; // Import the delete icon
import { deleteJob } from '../../DeleteAPI'; // Import deleteJob function
import { Link } from "react-router-dom";

const CalendarSearch = (props) => {
  const [jobs, setJobs] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    // Call deleteJob function when delete is confirmed
    try {
      await deleteJob(deleteItemId); // Call the deleteJob API with the selected job ID
      console.log(`Deleted job with id: ${deleteItemId}`);
      // Optionally, remove the deleted job from the local state
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== deleteItemId));
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
    console.log("in single job s component");
    console.log(props.jobs);
    setJobs(props.jobs);
  }, [props.jobs]);

  return (
    <Fragment>
      <div className="ps-6 overflow-y-scroll Podcast_Top_Videos h-full w-full">
        <div className="flex gap-1 flex-wrap w-full Podcast_Top_Videos">
          {jobs &&
            jobs.map((elm, i) => (
              <div
                key={i}
                className="h-[37vh] w-[32.4%] flex-shrink-0 shadow rounded-lg border relative PPJob"
                onMouseEnter={() => setVisibleId(elm._id)}
                onMouseLeave={() => setVisibleId(null)}
              >
                <div className="w-full">
                  <div className="flex gap-2 mt-2">
                    <TbBrandNeteaseMusic className="bg-red-500 rounded-2xl text-white top-3 m-2 mb-0 text-3xl" />
                    <div>
                      <h1 className="font-semibold">{elm.jobTitle}</h1>
                      <p className="font-light text-md">
                        {elm.jobDescription && elm.jobDescription.slice(0, 14) + "..."}
                      </p>
                    </div>
                  </div>
                  <p className="mt-7 ps-4 text-md opacity-65">{elm.jobType}</p>
                  <p className="ps-4 text-sm opacity-65 mt-3">{elm.salaryRange}</p>
                  {elm.jobType === " " ? (
                    <Link
                      to={"/jobdetail"}
                      state={{ id: elm._id }}
                      className="w-[90%] mx-auto block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                    >
                      Apply Now
                    </Link>
                  ) : (
                    <div className="text-center flex items-center">
                      <Link
                        to={"/jobdetail"}
                        state={{ id: elm._id }}
                        className="w-[90%] mx-auto flex text-xs mt-7 justify-center items-center bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                      >
                        Applied
                      </Link>
                    </div>
                  )}
                  {/* Add delete icon */}
                  {true && (
                    <button
                      className="absolute top-2 right-2 text-red-600 text-xl cursor-pointer"
                      onClick={() => handleDeleteClick(elm._id)}
                    >
                      <IoTrashOutline />
                    </button>
                  )}
                </div>
              </div>
            ))}
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

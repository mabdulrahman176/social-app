import React, { Fragment, useState } from "react";
import { CiPlay1, CiTrash } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";

// Sample data
let similarPodcastData = [
  {
    img: "./image1.jpeg",
    id: 1,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 2,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 2,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
  {
    img: "./img3.jpeg",
    id: 2,
    categ: "Politics",
    userName: "Lily Williams",
    mint: "35 Mins",
  },
 
];

const ApplePodcast = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Logic to delete item by id
    console.log(`Deleting podcast with id: ${deleteItemId}`);
    setIsDeleteModalOpen(false);
    // You may need to filter the data or make an API call to remove the item
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteItemId(null);
  };

  return (
    <Fragment>
      <div className="overflow-y-scroll Podcast_Top_Videos h-full">
        <div className="flex flex-wrap gap-1 w-[95%] mx-auto Podcast_Top_Videos pt-2">
          {similarPodcastData.map((elm, ind) => (
            <div
              key={ind}
              className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative text-white PPPodcast"
              onMouseEnter={() => setVisibleId(elm.id)}
              onMouseLeave={() => setVisibleId(null)}
            >
              <IoBookmarkOutline className="absolute right-2 top-4 text-2xl" />
              <div className="absolute bottom-1 px-2 w-full">
                <div className="VideosBgBlured rounded-lg px-3 pt-5">
                  <p className="text-2xl font-medium">{elm.categ}</p>
                  <p className="text-lg opacity-60">{elm.userName}</p>
                  <div className="flex justify-between">
                    <p className="flex items-center gap-1 text-md">
                      <CiPlay1 className="text-lg" /> {elm.mint}
                    </p>
                    <p>
                      <FaRegShareFromSquare className="text-2xl -mt-3" />
                    </p>
                  </div>
                </div>
              </div>
              <img
                src={elm.img}
                alt={`Img-${ind}`}
                className="h-full w-full rounded-lg"
              />
              {visibleId === elm.id && (
                <div className="absolute top-14 right-2 flex flex-col space-y-2">
                  <CiTrash
                    className="text-white text-3xl cursor-pointer hover:text-gray-300"
                    onClick={() => handleDeleteClick(elm.id)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <p>Are you sure you want to delete this podcast?</p>
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

export default ApplePodcast;

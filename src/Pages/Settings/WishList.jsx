import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { IoBookmarkOutline, IoTrashOutline } from 'react-icons/io5';
import { FaRegShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/wishlist`);
        console.log('API Response:', response.data); // Log the API response

        // Adjust this based on your actual API response structure
        const items = Array.isArray(response.data.data) ? response.data.data : [];
        setWishlistItems(items);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, []);

  return (
    <Fragment>
      <div className="overflow-y-scroll h-full w-full p-4 bg-white">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {wishlistItems.length === 0 ? (
              <div className="text-center">No items in your wishlist.</div>
            ) : (
              <div className="flex flex-wrap gap-4 w-full">
                {wishlistItems.map((item) => {
                  if (item.wishItemType === 'podcast') {
                    return (
                      <div key={item._id} className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative text-white">
                        <IoBookmarkOutline className="absolute right-2 top-4 text-2xl cursor-pointer" />
                        <img src={item.wishItemId} alt={item.wishItemId} className="h-full w-full rounded-lg" />
                        <div className="absolute bottom-1 w-full px-2">
                          <div className="bg-black bg-opacity-70 rounded-lg p-3">
                            <p className="text-2xl font-medium">{item.title}</p>
                            <div className="flex justify-between">
                              <p className="text-md">{item.creator}</p>
                              <FaRegShareSquare className="text-2xl cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item.wishItemType === 'event') {
                    return (
                      <div key={item._id} className="md:h-[45vh] h-[37vh] w-[32.4%] rounded-lg border relative text-white">
                        <IoBookmarkOutline className="absolute right-2 top-4 text-2xl cursor-pointer" />
                        <img src={item.coverUrl} alt={item.wishItemId} className="h-full w-full rounded-lg" />
                        <div className="absolute bottom-1 w-full px-2">
                          <div className="bg-black bg-opacity-70 rounded-lg p-3">
                            <p className="text-2xl font-medium">{item.eventTitle}</p>
                            <p className="text-xs">{item.eventDate}</p>
                            <Link to="/eventdetail" state={{ id: item.wishItemId }} className="text-blue-500">View Details</Link>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item.wishItemType === 'job') {
                    return (
                      <div key={item._id} className="h-[37vh] w-[32.4%] flex-shrink-0 shadow rounded-lg border relative text-white">
                        <div className="w-full">
                          <h1 className="font-semibold">{item.jobTitle}</h1>
                          <p className="text-md opacity-65">{item.location}</p>
                          <Link to="/jobdetail" state={{ id: item.wishItemId }} className="w-full block text-xs mt-7 bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]">Apply Now</Link>
                          <button className="absolute top-2 right-2 text-red-600 text-xl cursor-pointer">
                            <IoTrashOutline />
                          </button>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Wishlist;

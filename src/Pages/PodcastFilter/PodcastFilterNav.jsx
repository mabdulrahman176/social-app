import React, { Fragment } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PodcastFilterNav = ({ activeFilter, setActiveFilter }) => {
  const navigate = useNavigate();
  const filters = ['All', 'Entrepreneur', 'Investor', 'Subscribed'];

  return (
    <Fragment>
      <div className="bg-white h-[25%] px-3">
        <div className="flex items-center gap-2 px-2 md:px-4 py-3">
          <FaAngleLeft
            className="cursor-pointer text-xl md:text-2xl"
            onClick={() => navigate("/podcast")}
          />
          <h1 className="text-lg md:text-xl font-bold">Filters</h1>
        </div>
        <h1 className="text-xl md:text-2xl font-bold px-2 md:px-4">Select Filters</h1>
        <div className="flex flex-nowrap gap-1 md:gap-2 px-2 md:px-4 overflow-x-auto" style={{
                'WebkitOverflowScrolling': 'touch',
                'WebkitScrollbar': {
                    display: 'none'
                },
                '-msOverflowStyle': 'none',
                'scrollbarWidth': 'none'
            }}>
          {filters.map((filter) => (
            <p
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 md:px-5 md:py-2 flex-shrink-0 w-24 md:w-36 ms-2 md:ms-5 m-0 flex items-center justify-center relative cursor-pointer text-base md:text-xl ${
                activeFilter === filter ? 'linear_gradient' : 'hover:linear_gradient'
              }`}
            >
              {filter}
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PodcastFilterNav;

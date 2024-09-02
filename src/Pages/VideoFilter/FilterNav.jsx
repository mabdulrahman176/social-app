import React, { Fragment } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const FilterNav = ({ activeFilter, setActiveFilter }) => {
  const navigate = useNavigate();
  const filters = ['All', 'Entrepreneur', 'Investor', 'Subscribed', 'Top Reviews'];

  return (
    <Fragment>
      <div className="bg-white h-auto px-3 py-2 md:py-3 lg:py-4">
        <div className="flex items-center gap-2 px-2 md:px-4 py-2 md:py-3">
          <FaAngleLeft
            className="cursor-pointer text-xl md:text-2xl"
            onClick={() => navigate("/videos")}
          />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Filters</h1>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold px-2 md:px-4 py-2">Select Filters</h1>
        <div className="flex flex-nowrap gap-2 px-2 md:px-4 overflow-x-auto scrollbar-hide"style={{
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
              className={`px-3 py-1 md:px-5 md:py-2 flex-shrink-0 ${
                filter === 'Top Reviews' ? 'w-auto' : 'w-24 md:w-36'
              } ms-2 md:ms-4 m-0 flex items-center justify-center cursor-pointer text-sm md:text-lg lg:text-xl ${
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

export default FilterNav;

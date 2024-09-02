import React, { Fragment } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const FilterEventNav = ({ activeFilter, setActiveFilter }) => {
  const navigate = useNavigate();
  const filters = ['All', 'Entrepreneur', 'Investor', 'Subscribed'];

  return (
    <Fragment>
      <div className="bg-white px-3 md:px-4 py-3">
        <div className="flex items-center gap-2 px-2 md:px-4 py-3">
          <FaAngleLeft
            className="cursor-pointer text-lg md:text-2xl"
            onClick={() => navigate("/events")}
          />
          <h1 className="text-lg md:text-xl font-bold">Filters</h1>
        </div>
        <h1 className="text-lg md:text-xl font-bold px-2 md:px-4">Select Filters</h1>
        <div
          className="flex flex-nowrap gap-1 md:gap-2 px-2 md:px-4 overflow-x-auto"
          style={{
            'WebkitOverflowScrolling': 'touch',
            'WebkitScrollbar': {
              display: 'none'
            },
            '-msOverflowStyle': 'none',
            'scrollbarWidth': 'none'
          }}
        >
          {filters.map((filter) => (
            <p
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 md:px-4 md:py-2 flex-shrink-0 min-w-max w-24 md:w-36 flex items-center justify-center rounded-lg cursor-pointer text-sm md:text-lg ${
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

export default FilterEventNav;

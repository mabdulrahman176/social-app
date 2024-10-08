import React, { useState, Fragment } from 'react';
import FilterEventNav from './FilterEventNav';
import FilterName from '../PodcastFilter/FilterName';

const FilterEvent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [subFilter, setSubFilter] = useState('All');
  const [locFilter, setLocFilter] = useState('USA,NYC');
  const [priceFilter, setPriceFilter] = useState("Free");
  const [disFilter, setDisFilter] = useState("2mi");
  const [eventFilter, setEventFilter] = useState("In Person");
  const [peopleFilter, setPeopleFilter] = useState("Less than 20");
  const [typeFilter, setTypeFilter] = useState("Conference");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [netFilter, setNetFilter] = useState("Speed Networking");
  const [durFilter, setDurFilter] = useState("Half Day");

  const date = ['All Upcoming', 'Starting Soon', 'Today', 'Tomorrow', 'This Week', 'This Weekend', 'Next Week', 'Choose a Date'];
  const location = ['USA,NYC', 'Pakistan,Karachi', 'India,Delhi'];
  const price = ['Free', 'Less than $20', 'Less than $50', '+$50', 'Other'];
  const distance = ['2mi', '5mi', '10mi', '25mi', '50mi', '100mi', 'Other'];
  const event = ['In Person', 'Virtual', 'Hybrid', 'Pre-recorded content', 'Other'];
  const people = ['Less than 20', 'Less than 50', 'Above 50', 'Other'];
  const type = ['Conference', 'Seminar', 'Workshop', 'Tradeshow', 'Other'];
  const rating = ['All', 'Top Review'];
  const net = ['Speed Networking', 'Roundtable discussions', 'Social Mixers', 'Panel discussions', 'Q & A Session', 'Ongoing Registration', 'Other'];
  const dur = ['Half Day', 'Full Day', 'Morning Events', 'Multiple Days', 'Afternoon Events', 'Evening Events', 'Quick Sessions (1-2 hours)', 'Other'];

  return (
    <Fragment>
      <FilterEventNav activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <div className="h-[73%] bg-white overflow-y-auto" style={{
        WebkitOverflowScrolling: 'touch',
        WebkitScrollbar: {
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}>
        <FilterName activeFilter={activeFilter} name="Categories" />
        <div className="flex flex-wrap px-4">
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Date</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {date.map((filter) => (
                <p
                  key={filter}
                  onClick={() => setSubFilter(filter)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    subFilter === filter ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {filter}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Location</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {location.map((loc) => (
                <p
                  key={loc}
                  onClick={() => setLocFilter(loc)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    locFilter === loc ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {loc}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Price Range</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {price.map((range) => (
                <p
                  key={range}
                  onClick={() => setPriceFilter(range)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    priceFilter === range ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {range}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Distance</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {distance.map((key) => (
                <p
                  key={key}
                  onClick={() => setDisFilter(key)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    disFilter === key ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {key}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Event Format</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {event.map((format) => (
                <p
                  key={format}
                  onClick={() => setEventFilter(format)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    eventFilter === format ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {format}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Number of People Attending</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {people.map((attend) => (
                <p
                  key={attend}
                  onClick={() => setPeopleFilter(attend)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    peopleFilter === attend ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {attend}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Event Type</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {type.map((event) => (
                <p
                  key={event}
                  onClick={() => setTypeFilter(event)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    typeFilter === event ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {event}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Rating</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {rating.map((top) => (
                <p
                  key={top}
                  onClick={() => setRatingFilter(top)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    ratingFilter === top ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {top}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Networking Opportunities</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {net.map((social) => (
                <p
                  key={social}
                  onClick={() => setNetFilter(social)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    netFilter === social ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {social}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Event Duration</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {dur.map((half) => (
                <p
                  key={half}
                  onClick={() => setDurFilter(half)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    durFilter === half ? 'linear_gradient' : 'hover:linear_gradient'
                  }`}
                >
                  {half}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed lg:bottom-0 bottom-[3rem] right-2 lg:right-[11rem] p-4  w-full flex justify-end gap-4">
          <button className="px-8 py-3 flex-shrink-0 w-auto rounded-2xl border-2 text-[16px] md:text-[18px] linear_gradient_text">
            Reset Filters
          </button>
          <button className="px-8 py-3 flex-shrink-0 w-auto rounded-3xl text-white text-[16px] md:text-[18px] linear_gradient">
            Apply Filters
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterEvent;

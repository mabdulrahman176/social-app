import React, { useState, Fragment, useEffect } from "react";
import FilterEventNav from "./FilterEventNav";
import { fetchEvent } from "../../API";
import { useNavigate } from "react-router-dom";

const FilterEvent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [subFilter, setSubFilter] = useState("All");
  const [locFilter, setLocFilter] = useState("Any");
  const [priceFilter, setPriceFilter] = useState("Any");
  const [disFilter, setDisFilter] = useState();
  const [eventFilter, setEventFilter] = useState();
  const [peopleFilter, setPeopleFilter] = useState();
  const [typeFilter, setTypeFilter] = useState();
  const [ratingFilter, setRatingFilter] = useState("All");
  const [netFilter, setNetFilter] = useState();
  const [durationFilter, setDurationFilter] = useState();
  const [selectedCatagory, setSelectedCatagory] = useState();
  const [newcard, setNewCard] = useState([]);

  const navigate = useNavigate();
  const date = [
    "All Upcoming",
    "Starting Soon",
    "Today",
    "Tomorrow",
    "This Week",
    "This Weekend",
    "Next Week",
    "Choose a Date",
  ];
  const location = ["USA,NYC", "Lahore, Pakistan ", "India,Delhi"];
  const price = ["Free", "Less than $20", "Less than $50", "+$50", "Other"];
  const distance = ["2mi", "5mi", "10mi", "25mi", "50mi", "100mi", "Other"];
  const event = [
    "In Person",
    "Virtual",
    "Hybrid",
    "Pre-recorded content",
    "Other",
  ];
  const people = ["Less than 20", "Less than 50", "Above 50", "Other"];
  const type = ["Conference", "Seminar", "Workshop", "Tradeshow", "Other"];
  const rating = ["All", "Top Review"];
  const net = [
    "Speed Networking",
    "Roundtable discussions",
    "Social Mixers",
    "Panel discussions",
    "Q&A Sessions",
    "Ongoing Registration",
    "Other",
  ];
  const dur = [
    "Half Day",
    "Full Day",
    "Morning Events",
    "Multiple Days",
    "Afternoon Events",
    "Evening Events",
    "Quick Sessions (1-2 hours)",
    "Other",
  ];
  const entrepreneurs = [
    "All",
    "Tech & Entrepreneurship",
    "Art",
    "Tech & Investor",
    "Teamwork",
    "Finance",
    "Networking",
    "Government",
    "Charity",
    "Investors",
    "Language learning",
    "Politics",
    "Fashion",
    "History",
    "Hobbies",
    "Career ,& Business",
    "Travel & Outdoor",
    "News",
    "Technology",
    "True Crime",
    "Comedy",
    "Music & dancing",
    "Sports",
    "Science",
    "Leadership",
    "Education",
    "Sustainability",
    "Fiction",
    "Interviews",
    "Business and Finance ",
    "Health ,and Wellness",
    "Self - Imporvement",
    "Music",
    "Religion & Spirituality",
    "Pop Culture",
    "Environment",
    "Parenting",
    "Gaming",
    "Food and Cooking",
    "Pet & Animal",
    "Relationship & Books",
    "Personal Stories",
    "TV & Film",
    "Social Activities",
    "Subscribes",
    "Language",
    "Others",
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchEvent(); // Use the function from api.js
        console.log("events results", result);
        setNewCard(result.data);
      } catch (error) {
        console.error("Fetching data error", error);
      }
    };
    getData();
  }, []);

  const applyFilters = () => {
    return newcard.filter(
      (item) =>
        item.eventCatagory === selectedCatagory &&
        item.eventType === typeFilter &&
        item.eventFormat === eventFilter &&
        item.eventNetworkOps === netFilter &&
        item.eventLocation === locFilter &&  (item.eventNO_of_People < 20 
        ? "less than 20" 
        : item.eventNO_of_People < 50 
        ? "less than 50" 
        : "Above 50" ) === peopleFilter
    );
  };

  const handleSearch = () => {
    const filteredData = applyFilters();
    console.log("filetered", filteredData);
    console.log("apply filters", applyFilters());
    navigate('/events', { state: { filteredData } });
  };

  const resetFilter = ()=>{
    navigate('/events')
  }

  return (
    <Fragment>
      <FilterEventNav
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div
        className="h-[77%] bg-white overflow-y-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          WebkitScrollbar: {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div className="flex flex-wrap px-4">
          <div className="my-3 w-full ">
            <h1 className="text-2xl font-bold mb-2">Categories</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {entrepreneurs.map((filter) => (
                <p
                  key={filter}
                  onClick={() => setSelectedCatagory(filter)}
                  className={`text-sm sm:text-lg text-nowrap px-2 cursor-pointer sm:px-3 rounded-full py-1 bg-[#F1F1F1] w-auto ${
                    selectedCatagory === filter
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
                  }`}
                >
                  {filter}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Date</h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {date.map((filter) => (
                <p
                  key={filter}
                  onClick={() => setSubFilter(filter)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    subFilter === filter
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    locFilter === loc
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    priceFilter === range
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    disFilter === key
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    eventFilter === format
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
                  }`}
                >
                  {format}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">
              Number of People Attending
            </h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {people.map((attend) => (
                <p
                  key={attend}
                  onClick={() => setPeopleFilter(attend)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    peopleFilter === attend
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    typeFilter === event
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                    ratingFilter === top
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
                  }`}
                >
                  {top}
                </p>
              ))}
            </div>
          </div>
          <div className="my-3 w-full sm:w-1/2">
            <h1 className="text-2xl font-bold mb-2">
              Networking Opportunities
            </h1>
            <div className="flex flex-wrap whitespace-nowrap gap-2">
              {net.map((social) => (
                <p
                  key={social}
                  onClick={() => setNetFilter(social)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    netFilter === social
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
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
                  onClick={() => setDurationFilter(half)}
                  className={`px-3 py-2 flex-shrink-0 rounded-lg cursor-pointer bg-[#F1F1F1] text-sm md:text-base ${
                    durationFilter === half
                      ? "linear_gradient text-white"
                      : "hover:linear_gradient"
                  }`}
                >
                  {half}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed lg:bottom-0 bottom-[3rem] right-2 lg:right-[11rem] p-4 w-full flex justify-end gap-4">
          <button className="px-8 py-3 flex-shrink-0 w-auto rounded-2xl border-2 text-[16px] md:text-[18px] linear_gradient_text" onClick={resetFilter}>
            Reset Filters
          </button>
          <button
            className="px-8 py-3 flex-shrink-0 w-auto rounded-3xl text-white text-[16px] md:text-[18px] linear_gradient"
            onClick={handleSearch}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterEvent;

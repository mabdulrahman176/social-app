import React, {Fragment} from "react";
// import {  RiShareForward2Fill } from 'react-icons/ri'
import { TbBrandNeteaseMusic } from "react-icons/tb";

let SearchData = [
  {
    id: 1,
    categ: "Marketing head",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Applied",
  },
  {
    id: 2,
    categ: "Marketing head",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Applied",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply",
  },
  {
    id: 4,
    categ: "Marketing head",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Applied",
  },
  {
    id: 5,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply",
  },
];
const CalendarSearch = () => {
  return (
    <Fragment>
    <div className="ps-6 overflow-y-scroll  Podcast_Top_Videos h-full w-full">
    <div className="flex gap-1 flex-wrap w-full Podcast_Top_Videos  ">
          {SearchData.map((elm, ind) => (
            <div
              key={ind}
              className="h-[37vh] w-[32.4%] flex-shrink-0 shadow rounded-lg border relative PPJob"
            >
              <div className=" w-full">
                <div className="flex  gap-2 mt-2">
                  <TbBrandNeteaseMusic className=" bg-red-500 rounded-2xl  text-white top-3 m-2 mb-0 text-3xl" />
                  <div>
                  <h1 className="font-semibold">{elm.categ}</h1>
                  <p className="font-light text-md ">{elm.ago}</p>
                  </div>
                </div>
                <p className="mt-7 ps-4  text-md  opacity-65">
                  {elm.state}
                </p>
                <p className=" ps-4 text-sm opacity-65 mt-3 ">{elm.price}</p>
                {elm.button === 'Apply Now' ? <button  className="w-[90%] mx-auto block text-xs  mt-7  bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"  >
                  {elm.button}
                </button> : <button disabled={true} className="cursor-not-allowed w-[90%] block text-xs mx-auto  bg-[#EEEEEE] mt-7 h-10 rounded-3xl ">
                  {elm.button}
                </button>}
              </div>
            </div>
          ))}
        </div>
      <br />
    </div>
    </Fragment>
  );
};

export default CalendarSearch;

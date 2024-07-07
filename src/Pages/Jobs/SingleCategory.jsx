import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

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
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now",
  },
  {
    id: 3,
    categ: "Brand Designer",
    ago: "1 week ago",
    state: "United states(Hybrid)",
    price: "$80k/yr-$100k/yr",
    button: "Apply Now Now",
  },
];

function Calendar2() {
  let navigate = useNavigate();

  return (
    <>
      <div className=" h-full w-full  bg-white">
        <h4 className="flex items-center gap-3 ms-4 pt-3 h-[10%]">
          <FaAngleLeft
            className="cursor-pointer"
            onClick={() => navigate("/jobs")}
          />{" "}
          Jobs
        </h4>
        <div className="overflow-y-scroll  Podcast_Top_Videos h-[90%] px-4">
          <div>
            <div className="flex gap-1 flex-wrap w-full Podcast_Top_Videos  ">
              {SearchData.map((elm, ind) => (
                <div
                  key={ind}
                  className="h-[40vh] sm:w-[32.4%] w-[49.3%] gap-1 flex-shrink-0 shadow rounded-lg border relative "
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
                    <p className=" ps-4 text-sm opacity-65 mt-3 ">
                      {elm.price}
                    </p>
                    {elm.button === "Apply Now" ? (
                      <button
                        className="w-[90%] mx-auto block text-xs  mt-7  bg-[#EEEEEE] h-10 rounded-3xl hover:bg-[#6166f331] hover:text-[#6165F3]"
                        onClick={() => navigate("/jobdetail")}
                      >
                        {elm.button}
                      </button>
                    ) : (
                      <button
                        disabled={true}
                        className="cursor-not-allowed w-[90%] block text-xs mx-auto  bg-[#EEEEEE] mt-7 h-10 rounded-3xl "
                      >
                        {elm.button}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
}

export default Calendar2;

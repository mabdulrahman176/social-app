import React, { Fragment } from "react";
import MySubscribers from "./MySubscribers";

const Subscribe = () => {
  const userId = "38'929urowoqoq"; 

  return (
    <Fragment>
      <div
        className="flex flex-wrap bg-white mt-1 h-[99%] overflow-y-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          WebkitScrollbar: {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div
          className="w-[48%] h-[550px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <MySubscribers
            name="My Subscribers"
            sub="Total Subscribers"
            total={2000}
            userId={userId}
          />
        </div>
        <div
          className="w-[48%] h-[550px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <MySubscribers
            name="Subscribed"
            sub="Total Subscribed"
            total={20000}
            userId={userId}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;

import React, { Fragment } from "react";
import MySubscribers from "./MySubscribers";
import Subscribed from "./Subscribed";

const Subscribe = () => {
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
          className="w-[48%] h-[600px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <Subscribed />
        </div>
        <div
          className="w-[48%] h-[600px] overflow-y-auto ml-1"
          style={{
            WebkitOverflowScrolling: "touch",
            WebkitScrollbar: {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <MySubscribers />
        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;

import React, { useState, useEffect, Fragment } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

function MySubscribers(props) {
  const [subscribers, setSubscribers] = useState([]);
  const [able, setAble] = useState(null);

  const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }

  useEffect(() => {
   
    const fetchSubscribers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subscribe/my/${getUserId()}`);
        const data = await response.json();
        console.log("subscriber data")
        console.log(data)

        setSubscribers(data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };

    fetchSubscribers();
  }, [props.userId]);

  return (
    <Fragment>
      <div className="h-full w-full bg-white md:h-screen lg:h-screen xl:h-screen">
        <div className="main h-full w-[90%] mx-4 md:w-[80%] lg:w-[60%] xl:w-[70%]">
          <p className="text-lg h-[10%] bg-white font-bold w-full z-10 flex items-center md:text-xl lg:text-xl xl:text-2xl">
            {props.name}
          </p>
          <div className="flex flex-col justify-between md:flex-row lg:flex-row xl:flex-row text-lg md:text-xl lg:text-lg xl:text-xl font-bold">
            <h1>{props.sub}</h1>
            <h2>{props.total}</h2>
          </div>
          <div
            className="overflow-y-auto h-[550px]"
            style={{
              WebkitOverflowScrolling: "touch",
              WebkitScrollbar: {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {subscribers.map((subscriber) => (
              <div
                key={subscriber._id}
                className="flex items-center justify-between py-3 mt-2 border-b"
              >
                <div className="flex items-center gap-3">
                  <Link to="/profile">
                    <img
                      src={subscriber.user.picUrl?subscriber.user.picUrl:''} 
                      alt=""
                      className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full"
                    />
                  </Link>
                  <div>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75">
                    {subscriber.user.name?subscriber.user.name:''} 
                    </p>
                    <p>
                      <Link
                        to="##"
                        className="text-xs md:text-sm lg:text-base xl:text-lg opacity-75"
                      >
                        {subscriber.linkText} 
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <CiMenuKebab
                    className="text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                    onClick={() =>
                      setAble(able === subscriber._id ? null : subscriber._id)
                    }
                  />
                  {able === subscriber._id && (
                    <div
                      className="absolute right-0 w-[200px] md:w-[250px] lg:w-[200px] xl:w-[200px] cursor-pointer px-3 py-2 z-30 bg-white shadow-lg border"
                      onClick={() =>
                        setAble(able === subscriber._id ? null : subscriber._id)
                      }
                    >
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">
                        Details
                      </p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">
                        Hide
                      </p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-75 mb-5">
                        Block and report
                      </p>
                      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-red-500">
                        Delete
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MySubscribers;

import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faChevronLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
// import ReactStars from "react-rating-stars-component";

const data = [
  {
    id: 1,
    name: "Sofia-jene",
    img: "/VideoBoy.jpeg",
    text: "Lorme Ipsum is a simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    name: "Sofia-jene",
    img: "/profile.png",
    text: "Lorme Ipsum is a simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    name: "Sofia-jene",
    img: "/VideoBoy.jpeg",
    text: "Lorme Ipsum is a simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    name: "Sofia-jene",
    img: "/profile.png",
    text: "Lorme Ipsum is a simply dummy text of the printing and typesetting industry",
  },
];

const Review = (props) => {
  const [isWritingReview, setIsWritingReview] = useState(false);

  const handleWriteReviewClick = () => {
    setIsWritingReview(true);
  };

  // const handleRatingChange = (newRating) => {
  //   console.log(newRating);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Review submitted");
    setIsWritingReview(false);
  };

  return (
    <React.Fragment>
      <section>
        <FontAwesomeIcon
          className="absolute w-4 h-4 rounded-full top-[50%] translate-y-[-50%] left-2 cursor-pointer"
          icon={faAngleLeft}
        />
      </section>

      <div className=" flex flex-wrap md:flex-nowrap md:w-[67%] w-[50%]  md:h-[75%] h-[90%] bg-white relative shadow-lg">
        <RiCloseLine
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => props.setRevModOpen(false)}
        />
        <img
          className="md:w-[45%] w-full md:h-full h-[40%] object-fill"
          src="/VideoBoy.jpeg"
          alt=""
        />
        <section className="flex flex-col py-4 md:w-[55%] w-full h-[60%] md:h-full overflow-y-scroll revOverFlow font-[450] text-xs px-4">
          <h1 className="font-semibold text-center">Reviews</h1>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              {isWritingReview && (
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={() => setIsWritingReview(false)}
                  className="cursor-pointer"
                />
              )}
              <h1 className="font-semibold">
                {isWritingReview ? "Add a Review" : ""}
              </h1>
            </div>
          </div>
          <hr className="bg-gray-300 w-full h-[1px]" />

          {isWritingReview ? (
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-4 p-4">
                <h1 className="font-semibold">Rate your Experience</h1>
                <div className="flex items-center gap-4">
                  <div>
                    <FontAwesomeIcon
                      className="text-yellow-400 w-5 h-5"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400 w-5 h-5 "
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400 w-5 h-5"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400 w-5 h-5"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-gray-300 w-5 h-5"
                      icon={faStarRegular}
                    />
                  </div>
                  <h1 className="font-semibold">(4.0)</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold">Write your Review</h1>

                  <textarea
                    className="w-full h-28 p-2 border-none outline-none bg-gray-100 rounded"
                    placeholder="Write your review here"
                    required
                  ></textarea>
                </div>
                <h1 className="text-end opacity-70">Max 100 word</h1>
              </div>
              <button
                type="submit"
                className="w-full self-center linear_gradient rounded-2xl text-white py-2 "
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-2 p-4 font-semibold">
              <div className="flex flex-col gap-2">
                <h1>Average rating</h1>
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                  <div className="flex items-center gap-4">
                    <h1 className="text-xl text-violet-500">4.7</h1>
                    <div>
                      <FontAwesomeIcon
                        className="text-gray-300 w-5 h-5"
                        icon={faStarRegular}
                      />
                      <FontAwesomeIcon
                        className="text-gray-300 w-5 h-5"
                        icon={faStarRegular}
                      />
                      <FontAwesomeIcon
                        className="text-gray-300 w-5 h-5"
                        icon={faStarRegular}
                      />
                      <FontAwesomeIcon
                        className="text-gray-300 w-5 h-5"
                        icon={faStarRegular}
                      />
                      <FontAwesomeIcon
                        className="text-gray-300 w-5 h-5"
                        icon={faStarRegular}
                      />
                    </div>
                  </div>
                  <u
                    className="text-violet-500 cursor-pointer"
                    onClick={handleWriteReviewClick}
                  >
                    write a review
                  </u>
                </div>
                <h1 className="opacity-60">352 Total reviews</h1>
                <h1 className="text-center">
                  <FontAwesomeIcon icon={faChevronDown} />
                </h1>
              </div>
              <hr />
              <div>
                {data.map((value) => (
                  <div key={value.id} className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-1 items-center">
                      <img
                        src={value.img}
                        alt="img"
                        className="rounded-full w-5 h-5"
                      />
                      <h1>{value.name}</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div>
                        <FontAwesomeIcon
                          className="text-yellow-400 w-5 h-5"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-yellow-400 w-5 h-5"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-yellow-400 w-5 h-5"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-yellow-400 w-5 h-5"
                          icon={faStar}
                        />
                        <FontAwesomeIcon
                          className="text-yellow-400 w-5 h-5"
                          icon={faStar}
                        />
                      </div>
                      <h1 className="font-normal opacity-90">(5.0)</h1>
                    </div>
                    <h1 className="font-normal opacity-90">{value.text}</h1>
                    <div className="flex items-center justify-between">
                      <h1 className="text-blue-500 font-normal cursor-pointer">
                        view 5 replies
                      </h1>
                      <h1 className="opacity-90 cursor-pointer">Report</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      <section>
        <FontAwesomeIcon
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
          icon={faAngleRight}
        />
      </section>
    </React.Fragment>
  );
};

export default Review;

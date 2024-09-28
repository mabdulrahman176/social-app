import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faChevronLeft,
  faStar,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { deleteReview } from "../../DeleteAPI";

const Review = (props) => {
  const { videoId, picUrl } = props;
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(5); // Default rating
  const [reviewText, setReviewText] = useState("");
  const [replyText, setReplyText] = useState({});
  const [replySection, setReplySection] = useState({});
  const [reviewReplies, setReviewReplies] = useState([]);
  const [openbar, setOpenbar] = useState(false);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  const openProgress = () => {
    setOpenbar(prev => !prev);
  };

  const loggedInUserId = getUserId();

  const calculateAverageRating = () => {
    const totalReviews = comments.length;
    const totalWeightedRating = comments.reduce((acc, curr) => acc + curr.reviewRatings, 0);
    return totalReviews > 0 ? (totalWeightedRating / totalReviews).toFixed(1) : 0; // Average rating as a float
  };

  const calculateRatingsPercentage = () => {
    const totalReviews = comments.length;
    const ratingCounts = [0, 0, 0, 0, 0]; // Counts for 1-5 stars

    comments.forEach(comment => {
      if (comment.reviewRatings >= 1 && comment.reviewRatings <= 5) {
        ratingCounts[comment.reviewRatings - 1]++;
      }
    });

    return ratingCounts.map(count => {
      return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    });
  };

  const postReview = async () => {
    console.log({
      reviewItemId:videoId,
      reviewRatings: rating,
      reviewMessage: reviewText,
      userId: loggedInUserId,
    })
    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          reviewItemId: videoId,
          reviewRatings: rating,
          reviewMessage: reviewText,
          userId: loggedInUserId,
        }),
      });
      await req.json();
      await fetchComments();
      setRating(5);
      setReviewText("");
      setIsWritingReview(false);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await deleteReview(commentId);
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/reviews/${props.videoId}`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const postReply = async (commentId) => {
    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          reviewId: commentId,
          replyMessage: replyText[commentId] || "",
          userId: loggedInUserId,
        }),
      });
      await req.json();
      await fetchComments();
      setReplyText((prev) => ({ ...prev, [commentId]: "" }));
      setReplySection(false);
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const getReply = async (reviewId) => {
    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reply/${reviewId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await req.json();
      setReviewReplies(data.data);
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.videoId]);

  const ratingsPercentage = calculateRatingsPercentage();

  return (
    <React.Fragment>
      <section>
        <FontAwesomeIcon
          className="absolute w-4 h-4 rounded-full top-[50%] translate-y-[-50%] left-2 cursor-pointer"
          icon={faAngleLeft}
          aria-label="Previous"
        />
      </section>

      <div className="flex flex-wrap md:flex-nowrap md:w-[67%] w-[50%] md:h-[75%] h-[90%] bg-white relative shadow-lg">
        <RiCloseLine
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => props.setRevModOpen(false)}
          aria-label="Close"
        />
        <img
          className="md:w-[45%] w-[40%] md:h-full h-[40%] object-cover"
          src={picUrl}
          alt="Video Thumbnail"
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
                  aria-label="Back"
                />
              )}
              <h1 className="font-semibold">
                {isWritingReview ? "Add a Review" : ""}
              </h1>
            </div>
          </div>
          <hr className="bg-gray-300 w-full h-[1px]" />

          {isWritingReview ? (
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4 p-4">
                <h1 className="font-semibold">Rate your Experience</h1>
                <div className="flex items-center gap-4">
                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                        icon={faStar}
                        onClick={() => setRating(star)}
                        aria-label={`${star} star`}
                      />
                    ))}
                  </div>
                  <h1 className="font-semibold">({rating.toFixed(1)})</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold">Write your Review</h1>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full h-28 p-2 border-none outline-none bg-gray-100 rounded"
                    placeholder="Write your review here"
                    required
                  ></textarea>
                  <h1 className="text-end opacity-70">Max 100 words</h1>
                </div>
              </div>
              <button
                onClick={postReview}
                className="w-full self-center linear_gradient rounded-2xl text-white py-2"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 p-4 font-semibold">
              <div className="flex flex-col gap-2">
                <h1>Average rating</h1>
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
                  <div className="flex items-center gap-4">
                    <h1 className="text-xl text-violet-500">
                      {calculateAverageRating()}
                    </h1>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                          key={star}
                          className={`w-5 h-5 ${star <= calculateAverageRating() ? "text-yellow-400" : "text-gray-300"}`}
                          icon={faStar}
                          aria-label={`${star} star`}
                        />
                      ))}
                    </div>
                  </div>
                  <u
                    className="text-violet-500 cursor-pointer"
                    onClick={() => setIsWritingReview(true)}
                    aria-label="Write a review"
                  >
                    Write a review
                  </u>
                </div>
                <h1 className="opacity-60">{comments.length} Total reviews</h1>
                <h1 className="text-center">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    aria-label="Expand reviews"
                    onClick={openProgress}
                  />
                </h1>
                {openbar && (
                  <div className="p-4">
                    {ratingsPercentage.map((percentage, index) => (
                      <div key={index} className="flex items-center justify-between my-1">
                        <span className="text-sm">{index + 1} star</span>
                        <div className="flex-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="bg-yellow-400 h-3 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-blue-600">{percentage.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <hr />
              <div>
                {comments.length === 0 ? (
                  <p className="text-center text-gray-500">No reviews yet.</p>
                ) : (
                  comments.map((value, i) => (
                    <div key={i} className="flex flex-col gap-3 mb-4">
                      <div className="flex gap-1 items-center">
                        <img
                          src={value.sender.picUrl || "/default-avatar.png"}
                          alt="Profile"
                          className="rounded-full w-5 h-5"
                        />
                        <h1>{value.sender.name}</h1>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                              key={star}
                              className={`w-5 h-5 ${star <= value.reviewRatings ? "text-yellow-400" : "text-gray-300"}`}
                              icon={faStar}
                              aria-label={`${star} star`}
                            />
                          ))}
                        </div>
                        <h1 className="font-normal opacity-90">({value.reviewRatings.toFixed(1)})</h1>
                      </div>
                      <h1 className="font-normal opacity-90">{value.reviewMessage}</h1>

                      {value.sender.id === loggedInUserId && (
                        <button
                          className="text-red-500 flex items-center gap-1 cursor-pointer"
                          onClick={() => deleteComment(value._id)}
                          aria-label="Delete review"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                          <span>Delete</span>
                        </button>
                      )}

                      <button onClick={() => {
                        setReplySection((prev) => {
                          const newState = {};
                          Object.keys(prev).forEach((key) => {
                            newState[key] = null;
                          });

                          newState[value._id] = !prev[value._id];

                          return newState;
                        });
                        getReply(value._id);
                      }}>
                        View Replies {value.repliesCount > 0 && `(${value.repliesCount})`}
                      </button>

                      {replySection[value._id] && (
                        <div className=''>
                          <div className="flex flex-col mt-2">
                            <textarea
                              value={replyText[value._id] || ""}
                              onChange={(e) => setReplyText((prev) => ({ ...prev, [value._id]: e.target.value }))}
                              className="w-full h-12 p-2 border-none outline-none bg-gray-100 rounded"
                              placeholder="Write your reply here"
                            />
                            <button
                              onClick={() => postReply(value._id)}
                              className="text-blue-500 mt-1"
                            >
                              Reply
                            </button>
                          </div>

                          {reviewReplies.map((reply, j) => (
                            <div key={j} className="flex gap-1 items-center ml-4">
                              <img
                                src={"/default-avatar.png"}
                                alt="Profile"
                                className="rounded-full w-4 h-4"
                              />
                              <p className="font-normal opacity-90 text-black">
                               {reply.replyMessage}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </section>
      </div>

      <section>
        <FontAwesomeIcon
          className="absolute w-4 h-4 rounded-full top-[50%] translate-y-[-50%] right-2 cursor-pointer"
          icon={faAngleRight}
          aria-label="Next"
        />
      </section>
    </React.Fragment>
  );
};

export default Review;

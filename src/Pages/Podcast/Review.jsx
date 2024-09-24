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

const dummyReplies = [
  { reply: "This is a great product!" },
  { reply: "I had some issues with the delivery, but the support was helpful." },
  { reply: "Would definitely recommend to my friends!" },
  { reply: "The quality wasn't as expected." },
  { reply: "Amazing experience, will buy again!" },
  { reply: "The product arrived damaged, but" }
];

const Review = (props) => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(5); // Default rating
  const [reviewText, setReviewText] = useState("");
  const [replyText, setReplyText] = useState({}); // State for replies
  const [replySection, setReplySection] = useState({});
  const [reviewReplies, setReviewReplies] = useState([]);

  const getUserId = () => {
    const str = document.cookie;
    const userKey = str.split("=")[1];
    return userKey;
  };

  // Get the logged-in user's ID once
  const loggedInUserId = getUserId();

  function calculateMean(com) {
    let arr = com.map((e) => e.reviewRatings);
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  }

  const postReview = async () => {
    console.log("posting review");
    try {
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          reviewItemId: props.videoId,
          reviewRatings: rating,
          reviewMessage: reviewText,
          userId: loggedInUserId,
        }),
      });
      const data = await req.json();
      console.log({ data });

      // Refresh comments
      await fetchComments();

      // Clear the review form
      setRating(5); // Reset rating to default
      setReviewText(""); // Clear the review text
      setIsWritingReview(false); // Switch back to the review list view
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
      console.log("posting reply");
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
      const data = await req.json();
      console.log({ data });

      // Refresh comments to include new reply
      await fetchComments();

      // Clear the reply text for that comment
      setReplyText((prev) => ({ ...prev, [commentId]: "" }));
      setReplySection(false);
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };

  const getReply = async (reviewId) => {
    try {
      console.log("getting replies for review", reviewId);
      const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reply/${reviewId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await req.json();
      console.log("review reply");
      setReviewReplies(data.data);
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  useEffect(() => {
    console.log("vid id is ", props.videoId);
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.videoId]);

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
          className="md:w-[45%] w-full md:h-full h-[40%] object-fill"
          src={'/VideoBoy.jpeg'}
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
                        className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"
                          }`}
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
                      {calculateMean(comments).toFixed(1)}
                    </h1>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                          key={star}
                          className={`w-5 h-5 ${star <= calculateMean(comments)
                            ? "text-yellow-400"
                            : "text-gray-300"
                            }`}
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
                  />
                </h1>
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
                              className={`w-5 h-5 ${star <= value.reviewRatings
                                ? "text-yellow-400"
                                : "text-gray-300"
                                }`}
                              icon={faStar}
                              aria-label={`${star} star`}
                            />
                          ))}
                        </div>
                        <h1 className="font-normal opacity-90">
                          ({value.reviewRatings.toFixed(1)})
                        </h1>
                      </div>
                      <h1 className="font-normal opacity-90">
                        {value.reviewMessage}
                      </h1>

                      {/* Only show delete button if the logged-in user is the author of the comment */}
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

                      {/* Reply Section */}
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
                        View Replies
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

                          {/* Display Replies */}
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

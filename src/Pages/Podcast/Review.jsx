import {
  faAngleLeft,
  faAngleRight,
  faChevronDown,
  faChevronLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from 'axios'; // Make sure axios is installed

const Review = (props) => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(4); // Default rating
  const [reviewText, setReviewText] = useState('');


  const getUserId = () => {
    const str = document.cookie
    const userKey = str.split('=')[1];
    return userKey
  }

  function calculateMean(com) {
    console.log("calculation mean")
    let arr = com.map((e)=>e.reviewRatings)

    if (arr.length === 0) return 0;  // Handle empty array case
  
    const sum = arr.reduce((acc, curr) => acc + curr, 0);  // Sum up all elements
    const mean = sum / arr.length;  // Calculate the mean
  console.log({arr})
    return mean;
  }

  const postReview = async () => {
    console.log("posting review")
    console.log({
      reviewItemId: props.videoId,
      reviewRatings: rating,
      reviewMessage: reviewText,
      userId:getUserId()
  })
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        reviewItemId: props.videoId,
        reviewRatings: rating,
        reviewMessage: reviewText,
        userId:getUserId()
      })

    }
    )
    const data = await req.json()
    console.log({ data })

  }
  const getReview = async () => {
    const req = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.videoId}`)
    const data = await req.json()
    console.log({ data })

  }
  const fetchComments = async () => {
    console.log('video id in reviews', props.videoId)
    if (!props.videoId) {
      console.error('No videoId provided');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.videoId}`)
      const data = await response.json()
      console.log("fetching comments")
      console.log( data )
      setComments(data);
      
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Fetch comments from the backend
  useEffect(() => {
  
    fetchComments();
    console.log({comments})
  }, [props.videoId]);

  // Handle the form submission for adding a new review
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!props.videoId) {
      console.error('No videoId provided');
      return;
    }
    if (reviewText.split(' ').length > 100) {
      alert('Review cannot exceed 100 words.');
      return;
    }
    try {
      await axios.post(`/comments/${props.videoId}`, {
        postedByUserId: props.userId, // Pass the current user's ID
        message: reviewText,
        rating // Include rating if needed
      });
      // Fetch updated comments
      const response = await axios.get(`/comments/${props.videoId}`);
      setComments(response.data.data || []);
      setReviewText('');
      setIsWritingReview(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

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
          src="/VideoBoy.jpeg"
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
            <div
              // onSubmit={handleFormSubmit}
              className="flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-4 p-4">
                <h1 className="font-semibold">Rate your Experience</h1>
                <div className="flex items-center gap-4">
                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FontAwesomeIcon
                        key={star}
                        className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        icon={faStar}
                        onClick={() => setRating(star)}
                        aria-label={`${star} star`}
                      />
                    ))}
                    <FontAwesomeIcon
                      className="text-gray-300 w-5 h-5"
                      icon={faStarRegular}
                      aria-label="Star"
                    />
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
                </div>
                <h1 className="text-end opacity-70">Max 100 words</h1>
              </div>
              <button
              onClick={postReview}
                // type="submit"
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
                    <h1 className="text-xl text-violet-500">{calculateMean(comments)}</h1>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                          key={star}
                          className="text-gray-300 w-5 h-5"
                          icon={faStarRegular}
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
                  <FontAwesomeIcon icon={faChevronDown} aria-label="Expand reviews" />
                </h1>
              </div>
              <hr />
              <div>
                {comments.length === 0 ? (
                  <p className="text-center text-gray-500">No reviews yet.</p>
                ) : (
                  comments.map((value,i) => (
                    <div key={i} className="flex flex-col gap-3 mb-4">
                      <div className="flex gap-1 items-center">
                        <img
                          src={value.sender.picUrl || '/default-avatar.png'}
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
                              className={`w-5 h-5 ${star <= value.reviewRatings ? 'text-yellow-400' : 'text-gray-300'}`}
                              icon={faStar}
                              aria-label={`${star} star`}
                            />
                          ))}
                        </div>
                        <h1 className="font-normal opacity-90">({value.reviewRatings.toFixed(1)})</h1>
                      </div>
                      <h1 className="font-normal opacity-90">{value.reviewMessage}</h1>
                      <div className="flex items-center justify-between">
                        <h1 className="text-blue-500 font-normal cursor-pointer" aria-label="View replies">
                          no replies
                        </h1>
                        <h1 className="opacity-90 cursor-pointer" aria-label="Report comment">Report</h1>
                      </div>
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
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
          icon={faAngleRight}
          aria-label="Next"
        />
      </section>
    </React.Fragment>
  );
};

export default Review;

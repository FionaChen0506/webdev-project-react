import React, { useState } from "react";
import {useDispatch} from "react-redux";
import './details.css';
import { createPostThunk } from "../services/posts-thunks";
// import format from "date-fns/format";
//import { parseISO, format } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';


const PostReview = ({ imdbid, moviePoster, movieTitle, onPostReview })  => {
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewContent, setReviewContent] = useState("");

    const currentTimestamp = new Date();

    const dispatch = useDispatch();
    const handlePostClick = () => {

        // Perform content validation
        if (!reviewContent) {
            alert("Please enter your reviews.");
            return;
        }
        const newPost = {
            title: reviewTitle,
            content: reviewContent,
            moviePoster: moviePoster, // Include movie poster
            movieTitle: movieTitle,   // Include movie title
            createdAt: currentTimestamp,
            imdbid: imdbid,
            // Add other relevant data like movie ID or user info
        };

        // Dispatch the createPostThunk with the new post data
        dispatch(createPostThunk(newPost));

        // // Call the onPostReview function with the review title and content
        // onPostReview({ title: reviewTitle, content: reviewContent });

        // Clear the input fields after posting
        setReviewTitle("");
        setReviewContent("");
    };

    return (
    <div className="post-review-container">
        <h2>Share Your Review</h2>
        <div className="prompt">
            <span>What did you think of this movie?</span>
        </div>
        <input
            type="text"
            placeholder="Review Title"
            className="review-title-input"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
        />
        <textarea
            placeholder="Write your review here..."
            className="review-content-input"
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
        />
        <button className="post-button" onClick={handlePostClick}>
            POST
        </button>
    </div>
    );
}

export default PostReview;

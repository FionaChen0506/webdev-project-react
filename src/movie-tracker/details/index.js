import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import './details.css';
import { findMovieByImdbIDThunk } from "../search/search-thunks";
import MovieDetails from "./movie-details"; // Import the MovieDetails component
import PostReview from "./post-reviews";
import MovieReviews from "./movie-reviews";

const DetailsScreen = () => {
    const { imdbID } = useParams()
    const { details } = useSelector((state) => state.omdb)
    const dispatch = useDispatch()

    const handlePostReview = (review) => {
        // Handle the logic to post the review (e.g., send it to the server)
        console.log("Posting review:", review);
    };

    useEffect(() => {
        dispatch(findMovieByImdbIDThunk(imdbID))
    }, [])

    return (
        <div className="detail-container">
            <MovieDetails details={details} /> {/* Include the MovieDetails component */}
            {/* Add postreviews and recentreviews components here */}
            {/* <PostReview onPostReview={handlePostReview} /> */}
            <PostReview
                imdbid={details.imdbID}
                moviePoster={details.Poster}
                movieTitle={details.Title}
                onPostReview={handlePostReview}
            />
            <MovieReviews imdbid={details.imdbID} /> {/* Pass the imdbid to MovieReviews */}
        </div>
    );
}

export default DetailsScreen;

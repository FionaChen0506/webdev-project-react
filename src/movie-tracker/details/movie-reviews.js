
import { useSelector, useDispatch } from "react-redux";
import React, {useEffect} from "react";
import { findPostsThunk } from "../services/posts-thunks";
import './details.css'

const MovieReviews = ({ imdbid }) => {

    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findPostsThunk())
    }, [])
    // console.log("Posts state:", posts); // Check the content of the posts array
      // Filter the posts that have the same imdbid as the current movie's imdbid
    const filteredPosts = posts.filter(post => post.imdbid === imdbid);

  return (
    // <div className="movie-reviews">
    //   <h2>Movie Reviews</h2>
    //   {filteredPosts.map((post) => (
    //     <div key={post._id} className="review">
    //       <h3>{post.title}</h3>
    //       <p>{post.content}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="movie-reviews">
    <h2 className="reviews-heading">Movie Reviews</h2>
    {filteredPosts.map((post) => (
      <div key={post._id} className="review">
        <h3 className="review-title">{post.title}</h3>
        <p className="review-content">{post.content}</p>
      </div>
    ))}
  </div>
  );
};

export default MovieReviews;

  
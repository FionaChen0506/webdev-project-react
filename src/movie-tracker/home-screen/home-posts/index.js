import PostItem from "./home-posts-item";
import PostStats from "./post-stats";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import {findpostsThunk} from "../../services/posts-thunks";
import "./style.css";

const HomePosts = () => {
  const {posts, loading} = useSelector(state => state.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log('Dispatching findpostsThunk...');
    dispatch(findpostsThunk())
  }, [])

    return(
      <ul className="list-group">
              <h3>homepost</h3>
      {loading && (
        <li className="list-group-item">
          Loading...
        </li>
      )}
      {!loading && posts.map(post => (
        <li key={post._id} className="list-group-item">
          <div>
            <PostItem post={post} />
            <PostStats post={post} />
          </div>
        </li>
      ))}
    </ul>
      
    );
   };
   export default HomePosts;
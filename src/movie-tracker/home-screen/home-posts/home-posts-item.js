import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


import {deletepostThunk} from "../../services/posts-thunks";
import "./style.css";


const PostItem = (
  { post }
  ) => {
  const dispatch = useDispatch();
  const deletepostHandler = (id) => {
      dispatch(deletepostThunk(id));
  }
    // Temporary data for user avatar and name
    const tempUser = {
      avatar: "/images/avatar-gwen.jpg",
      name: "John Doe",
    };

  // Temporary data for movie
  const tempMovie = {
    photo: "/images/avatar-gwen.jpg",
    title: "Temporary Movie Title",
  };

    return (
      //   <li className="list-group-item">
      //   <div className="row">
      //     <div className="col-10">
      //       {/* <div>{post.handle} · {post.time}</div> */}
      //       <div className="fw-bolder">{post.title}</div>
      //       <div>{post.content}</div>
      //     </div>
      //     {/* <div className="col-2">
      //       <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
      //     </div> */}
      //   </div>
      //  </li>


    //   <div className="post-item">
    //   <div className="post-header">
    //     <img
    //       className="user-avatar"
    //       src={post.user.avatar}
    //       alt={`${post.user.name}'s Avatar`}
    //     />
    //     <div className="post-details">
    //       <div className="post-title">{post.title}</div>
    //       <div className="post-subtitle">
    //         {post.user.name} - {post. createdAt}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="post-content">{post.content}</div>
    //   <button
    //     className="delete-button"
    //     onClick={() => deletepostHandler(post.id)}
    //   >
    //     Delete
    //   </button>
    // </div>

  //   <div className="post-item">
  //     <div className="movie-info">
  //       <img
  //         className="movie-photo"
  //         src={tempMovie.photo}
  //         alt={`${tempMovie.title} Movie Poster`}
  //       />
  //       <div className="movie-title">{tempMovie.title}</div>
  //     </div>
  //   <div className="post-header">
  //     <img
  //       className="user-avatar"
  //       src={tempUser.avatar}
  //       alt={`${tempUser.name}'s Avatar`}
  //     />
  //     <div className="post-details">
  //       <div className="post-title">{post.title}</div>
  //       <div className="post-subtitle">
  //         {tempUser.name} - {post.createdAt}
  //       </div>
  //     </div>
  //   </div>
  //   <div className="post-content">{post.content}</div>
  //   <button
  //     className="delete-button"
  //     onClick={() => deletepostHandler(post.id)}
  //   >
  //     Delete
  //   </button>
  // </div>

  <div className="post-item">
  <div className="movie-info">
    <img
      className="movie-photo"
      src={tempMovie.photo}
      alt={`${tempMovie.title} Movie Poster`}
    />
    <div className="movie-title">{tempMovie.title}</div>
  </div>
  <div className="post-content-container">
    <div className="post-header">
      <img
        className="user-avatar"
        src={tempUser.avatar}
        alt={`${tempUser.name}'s Avatar`}
      />
      <div className="post-details">
        <div className="post-title">{post.title}</div>
        <div className="post-subtitle">
          {tempUser.name} - {post.createdAt}
        </div>
      </div>
    </div>
    <div className="post-content">{post.content}</div>
    {/* <button
      className="delete-button"
      onClick={() => deletepostHandler(post.id)}
    >
      Delete
    </button> */}
  </div>
</div>

    );
};
export default PostItem;
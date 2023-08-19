import React from 'react';
import { FaRegComment, FaHeart} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiShare, FiThumbsDown } from "react-icons/fi";
import { updatepostThunk } from "../../services/posts-thunks";
import {PiThumbsDownDuotone, PiThumbsDownFill} from "react-icons/pi"


const PostStats = ({ post}) => {
    const dispatch = useDispatch();
    const handleLikeToggle = () => {
      const updatedpost = {
          ...post,
          liked : true,
          likes : post.likes + 1,
      };
      dispatch(updatepostThunk(updatedpost))
  }
  const handleDislikeToggle = () => {
    const updatedpost = {
        ...post,
        disliked : true,
        dislikes : post.dislikes + 1,
    };
    dispatch(updatepostThunk(updatedpost))
}

  return (
    <div className="wd-footer-container">
    <div className="row">
      <div className="col-2">
        <FaRegComment />
        <span className="ms-1">{post.replies}</span>
      </div>
      <div className="col-2">
        <AiOutlineRetweet className="ms-2"/>
        <span className="ms-1">{post.reposts}</span>
      </div>
        
        {/* <div className="col-3" onClick={handleLikeToggle}>
          {post.liked ? <AiFillHeart className='wd-footer-red-heart'/> : <AiOutlineHeart />}
          <span className="ms-1">{post.likes}</span>
        </div> */}

          <div className="col-2" onClick={handleLikeToggle}>
                {post.liked && <AiFillHeart className='wd-footer-red-heart'/>}
                {!post.liked && <AiOutlineHeart />}
                {/* <FaHeart
                  className="text-danger ms-3"
                  onClick={() =>
                    dispatch(updatepostThunk({ ...post, likes: post.likes + 1 }))
                  }
                />  */}
                <span className="ms-1">{post.likes}</span>
          </div>

          {/* <button className="col text-secondary border-0 bg-transparent text-start" onClick={()}>
                    {post.liked && <AiFillHeart/>}
                    {!post.liked && <AiOutlineHeart />}
                    <span>{post.likes}</span>
          </button>
       */}
      <div className="col-2" onClick={handleDislikeToggle}>
        {/* <FiThumbsDown className="ms-3"
            onClick={() =>
              dispatch(updatepostThunk({ ...post, dislikes: post.dislikes + 1 }))
            }
        />  */}

        {post.disliked && <PiThumbsDownFill />}
        {!post.disliked && <PiThumbsDownDuotone/>}
        <span className="ms-1">{post.dislikes}</span>
      </div>


      <div className="col-3">
        <FiShare className="ms-1"/>
      </div>
    </div>
    </div>

    
  );
};

export default PostStats;
import {createpostThunk} from "./services/posts-thunks";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import { AiOutlinePicture } from 'react-icons/ai';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile, BsFiletypeGif} from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold, BiItalic } from 'react-icons/bi';



const PostReviews = () => {
 let [PostReviews, setPostReviews] = useState('');
 const dispatch = useDispatch();
 const postClickHandler = () => {
   const newpost = {
     post: PostReviews
   }
   dispatch(createpostThunk(newpost));
   setPostReviews("");
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="/images/post-image5.jpg" className="rounded-circle" width={56}/>
     </div>
     <div className="col-10">
       <textarea value={PostReviews} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setPostReviews(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={postClickHandler}>
           post
         </button>
         <div className="text-primary fs-2">
         <AiOutlinePicture className="me-3" />
         <BsFiletypeGif className="me-3" />
        {/* <HiOutlineGif className="me-3" /> */}
        <MdFormatListBulleted className="me-3" />
        <BsEmojiSmile className="me-3" />
        {/* <TbCalendarStats className="me-3" /> */}
        <HiOutlineLocationMarker className="me-3" />
        <BiBold className="me-3" />
        <BiItalic className="me-3" />
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default PostReviews;
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./posts-service";

// create thunk for findposts
// give unique name, thunk invokes
// service function. Returned data goes in
// redux action's payload
export const findPostsThunk = createAsyncThunk( 
  
 "posts/findPosts",
 async () => await service.findPosts()
);

export const deletePostThunk = createAsyncThunk(
    'posts/deletePost',
    async (postId) => {
      await service.deletePost(postId)
      return postId
})

export const createPostThunk = createAsyncThunk(
  'posts/createPost',
  async (post) => {
    const newpost = await service.createPost(post)
    return newpost
})

export const updatePostThunk =
  createAsyncThunk(
    'posts/updatePost',
    async (post) =>
      await service.updatePost(post)
)
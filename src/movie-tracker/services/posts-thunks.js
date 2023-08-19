import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./posts-service";

// create thunk for findposts
// give unique name, thunk invokes
// service function. Returned data goes in
// redux action's payload
export const findpostsThunk = createAsyncThunk( 
  
 "posts/findposts",
 async () => await service.findposts()
);

export const deletepostThunk = createAsyncThunk(
    'posts/deletepost',
    async (postId) => {
      await service.deletepost(postId)
      return postId
})

export const createpostThunk = createAsyncThunk(
  'posts/createpost',
  async (post) => {
    const newpost = await service.createpost(post)
    return newpost
})

export const updatepostThunk =
  createAsyncThunk(
    'posts/updatepost',
    async (post) =>
      await service.updatepost(post)
)
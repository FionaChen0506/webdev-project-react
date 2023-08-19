import { createSlice } from "@reduxjs/toolkit";
import {updatepostThunk, createpostThunk, deletepostThunk, findpostsThunk} from "../services/posts-thunks";


   const initialState = {
      posts: [],
      loading: false
   }
   
const postsSlice = createSlice({
 name: 'posts',
 initialState,

 extraReducers: {
   [findpostsThunk.pending]:
      (state) => {
         state.loading = true
         state.posts = [] },
   [findpostsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.posts = payload },
   [findpostsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
   
   [deletepostThunk.fulfilled] :
   (state, { payload }) => {
   state.loading = false
   state.posts = state.posts .filter(t => t._id !== payload)
   },
   
   [createpostThunk.fulfilled]:
   (state, { payload }) => {
     state.loading = false
     state.posts.push(payload)
   },
   
   [updatepostThunk.fulfilled]:
   (state, { payload }) => {
    state.loading = false
    const postNdx = state.posts.findIndex((t) => t._id === payload._id)
    state.posts[postNdx] = { ...state.posts[postNdx], ...payload }
   },
 },

 reducers: {}
});

export const { createpost, deletepost, toggleLike } = postsSlice.actions;
export default postsSlice.reducer;
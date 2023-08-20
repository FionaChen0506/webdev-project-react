import { createSlice } from "@reduxjs/toolkit";
import { findMovieBySearchTermThunk, findMovieByImdbIDThunk } from "./search-thunks";

const initialState = {
    movies: [],
    loading: false,
    details: {}
}

const omdbReducer = createSlice({
    name: 'omdb',
    initialState,
    extraReducers: {
        [findMovieBySearchTermThunk.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [findMovieByImdbIDThunk.fulfilled]: (state, action) => {
            state.details = action.payload;
        }
        
    },
    

})

export default omdbReducer.reducer
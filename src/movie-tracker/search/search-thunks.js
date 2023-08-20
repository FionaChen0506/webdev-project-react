import { createAsyncThunk } from "@reduxjs/toolkit";
import { findMovieBySearchTerm, findMovieByImdbID } from "./search-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (term) => findMovieBySearchTerm(term)
)
export const findMovieByImdbIDThunk = createAsyncThunk(
    'findMovieByImdbID',
    (imdbID) => findMovieByImdbID(imdbID)
)
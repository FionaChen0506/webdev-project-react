import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findMovieBySearchTermThunk } from "./search-thunks";
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('search');
    const { movies, loading } = useSelector((state) => state.omdb);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (props.search) {
            props.search(value);
        }
    };

    return (
        <div className="search-bar">
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={handleInputChange}
                        value={searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findMovieBySearchTermThunk(searchTerm));
                        }}>Search
                    </button>
                </li>
                {/* //{loading && <p>Loading...</p>} */}
                {
                    movies && movies.map((movie) =>
                        <li key={movie.imdbID}
                            className="list-group-item">
                            <Link to={`/details/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>

                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default SearchBar;

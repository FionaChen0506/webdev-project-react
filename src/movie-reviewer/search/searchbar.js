import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { findMovieBySearchTermThunk } from "./search-thunks";
import { Link, useNavigate } from 'react-router-dom';  // Added useNavigate

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { movies, loading } = useSelector((state) => state.omdb);
    const dispatch = useDispatch();

    const navigate = useNavigate();  // Use the useNavigate hook

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (props.search) {
            props.search(value);
        }
    };

    const handleSearchClick = () => {
        dispatch(findMovieBySearchTermThunk(searchTerm));
        navigate(`/reviewer/search/${searchTerm}`);  // Navigate to the corresponding searchTerm
    };

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="input-group">
                        <input
                            onChange={handleInputChange}
                            value={searchTerm}
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </li>
                {/* //{loading && <p>Loading...</p>} */}
                {movies &&
                    movies.map((movie) => (
                        <li key={movie.imdbID} className="list-group-item">
                            <Link to={`/reviewer/details/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>

    );
}

export default SearchBar;

import React from "react";
import { Star, Theaters, ThumbUp, Event } from '@mui/icons-material';
import './details.css';
const MovieDetails = ({ details }) => {
    return (
        <>
            <div className="detail-container">
                <div className="movie-section">
                    <div className="section-left">
                        <img src={details.Poster} alt={details.Title} />
                    </div>
                    <div className="section-right">
                        <div className="movie-title">{details.Title}</div>
                        <div className="movie-rating">
                            <span className="detail-item">IMDB Rating<Star className="star-icon" /> :  {details.imdbRating}</span>
                            <span className="detail-item">   IMDB Votes <ThumbUp className="like-icon" /> : {details.Votes}</span>
                            <span className="detail-item"> Runtime <Theaters className="runtime-icon" /> : {details.Runtime}</span>
                            <span  className="detail-item">  Year <Event className="year-icon" /> : {details.Year}</span>
                            {/* <span>IMDB Rating :  {details.imdbRating}</span>
                            <span>   IMDB Votes  : {details.Votes}</span>
                            <span> Runtime  : {details.Runtime}</span>
                            <span>  Year  : {details.Year}</span> */}
                        </div>
                        <div className="movie-plot">{details.Plot}</div>
                        <div className="movie-info align-items-baseline mt-4">
                            <div>
                                <span>Director</span>
                                <span>{details.Director}</span>
                            </div>
                            <div>
                                <span>Stars </span>
                                <span>{details.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{details.Genre}</span>
                            </div>
                            <div>
                                <span>Country</span>
                                <span>{details.Country}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{details.Awards}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;

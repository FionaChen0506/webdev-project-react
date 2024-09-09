import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import"./show-movies-related.css";

function ShowMoviesRelated(props) {
    const [directorInfo, setDirectorInfo] = useState(null);
    console.log("viewing user's name:", props.username);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjMwMWRjN2E1M2EyZDI5M2NjOTQ0NjZhMDg1NjI5ZiIsInN1YiI6IjY0ZTdmMDdlOTBlYTRiMDBlNDlkNDhlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W22GozToJmyt9WR__Wc8WDUDjS0Ekezfv328AwOcN2s'
              //Authorization: `${process.env.SEARCH_PERSON_APP_API_KEY}`
            }
          };
          
    
        fetch(`https://api.themoviedb.org/3/search/person?query=${props.username}&include_adult=false&language=en-US&page=1`, options)
          .then(response => response.json())
          .then(data => {
            const director = data.results.find(result => result.known_for_department === 'Directing');
            setDirectorInfo(director);
          })
          .catch(err => console.error(err));
      }, [props.username]);
    
  
    return (      
    <div className="show-movies-related-container mb-4">
      {directorInfo ? (
          <div>
        <div className="show-movies-related-list">
          {directorInfo.known_for.map(movie => (
            <div className="show-movies-related-movie" key={movie.id}>
              <div className="show-movies-related-card">
                <img
                  className="show-movies-related-poster"
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <h3 className="show-movies-related-title">{movie.title}</h3>
              </div>
            </div>
          ))}

        </div>
        </div>

      ) : (
        <h1>Loading...</h1>
      )}
    </div>
    );
  }
  
export default ShowMoviesRelated;
  
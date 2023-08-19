import axios from "axios";

const SEARCH_URL = 'http://www.omdbapi.com/?apikey=1ab715db&s='
const DEATILS_URL = 'http://www.omdbapi.com/?apikey=1ab715db&i='

export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.Search
}


export const findMovieByImdbID = async (imdbID) => {
    const response = await axios.get(`${DEATILS_URL}${imdbID}`)
    return response.data

}
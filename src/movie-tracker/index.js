import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeScreen from "./home-screen";
import LoginScreen from "./register-login/login-screen";

import SearchBar from './search/searchbar';
import DetailsScreen from './details/index';
// import Nav from "../nav";
import {Routes, Route} from "react-router";
import RegisterScreen from "./register-login/register-screen";
import authReducers from "./reducers/auth-reducers";
import postsReducers from './reducers/posts-reducers';
import omdbReducer from './search/search-reducer';
import { BrowserRouter, useParams } from 'react-router-dom';  // Added useParams

  const store = configureStore(
    {reducer: {posts: postsReducers,user:authReducers, omdb: omdbReducer,} 
  });

  function SearchRouteWrapper() {
    let { searchTerm } = useParams();  // Destructure searchTerm from useParams
    return <SearchBar searchTerm={searchTerm} />;
  }

function MovieReviewer() {
 return (
  <Provider store={store}>
    {/* <div> */}
      {/* <Nav/> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/home" element={<HomeScreen/>}/>
          <Route path="/login"    element={<LoginScreen />} />
          <Route path="/register"    element={<RegisterScreen />} />
          
          <Route path="/search" element={<SearchBar />} />
          <Route path="/search/:searchTerm" element={<SearchRouteWrapper />} />
          <Route path="/details/:imdbID" element={<DetailsScreen />} />
        </Routes>
      {/* </BrowserRouter> */}
    {/* </div> */}
  </Provider>
 );
}

export default MovieReviewer;

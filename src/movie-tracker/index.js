import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeScreen from "./home-screen";
import LoginScreen from "./register-login/login-screen";
// import Nav from "../nav";
import {Routes, Route} from "react-router";
import RegisterScreen from "./register-login/register-screen";
import authReducers from "./reducers/auth-reducers";
import postsReducers from './reducers/posts-reducers';

  const store = configureStore({reducer: {posts: postsReducers,user:authReducers}});

function MovieReviewer() {
 return (
  <Provider store={store}>
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/login"    element={<LoginScreen />} />
        <Route path="/register"    element={<RegisterScreen />} />
      </Routes>
    </div>
  </Provider>
 );
}

export default MovieReviewer;

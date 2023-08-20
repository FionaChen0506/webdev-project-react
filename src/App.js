import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import React from 'react';
import HomeScreen from './movie-tracker/home-screen';
import MovieReviewer from './movie-tracker';
import LoginScreen from './movie-tracker/register-login/login-screen';
import RegisterScreen from './movie-tracker/register-login/register-screen';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import FAcheck from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaReact } from 'react-icons/fa';

// const store = createStore(rootReducer);


function App() {
  return (
      <HashRouter>
        <div className="container">
          <Routes>
            <Route path="/"         element={<Navigate to={"/reviewer/home"}/>}/>
            <Route path="/reviewer" element={<Navigate to={"/reviewer/home"}/>}/>
            <Route path="/reviewer/*" element={<MovieReviewer/>}/>

          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;

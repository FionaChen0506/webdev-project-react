
import './App.css';
import SearchBar from './search/searchbar';
import DetailsScreen from './details/details-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import omdbReducer from "./search/search-reducer";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    omdb: omdbReducer
  }
})

function App() {
  return (
    <div className="container mt-4 mb-4">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/search" element={<SearchBar />} />
            <Route path="/details/:imdbID" element={<DetailsScreen />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
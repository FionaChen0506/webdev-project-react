import './App.css';
import SearchBar from './search/searchbar';
import DetailsScreen from './details/details-screen';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';  // Added useParams
import { configureStore } from "@reduxjs/toolkit";
import omdbReducer from "./search/search-reducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    omdb: omdbReducer
  }
});

function SearchRouteWrapper() {
  let { searchTerm } = useParams();  // Destructure searchTerm from useParams
  return <SearchBar searchTerm={searchTerm} />;
}

function App() {
  return (
    <div className="container mt-4 mb-4">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* This route will capture the searchTerm from the URL */}
            <Route path="/search" element={<SearchBar />} />
            <Route path="/search/:searchTerm" element={<SearchRouteWrapper />} />

            <Route path="/details/:imdbID" element={<DetailsScreen />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

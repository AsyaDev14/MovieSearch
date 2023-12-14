import React from "react";
import { Home } from "pages/Home";
import { MovieSearch } from "pages/MovieSearch";
import { NavLink, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";

export const App = () => {
  return (
    <>
      <nav className={'navigation'}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  Home - here must be trending movies */}
        <Route path="/movies" element={<MovieSearch />} />
        {/* Here is input for search */}
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Movies cast</div>} />
          <Route path="reviews" element={<div>Movies reviews</div>} />
        </Route>
      </Routes>
    </>
  );
};

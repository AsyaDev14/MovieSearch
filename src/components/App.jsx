import React from 'react';
import { Home } from 'pages/home/Home';
import { MovieSearch } from 'pages/search/MovieSearch';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../pages/details/MovieDetails';
import { Cast } from './cast/Cast.jsx';
import { Review } from './reviews/Reviews';
import css from './App.module.css';
export const App = () => {
  return (
    <>
      <nav className={css.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

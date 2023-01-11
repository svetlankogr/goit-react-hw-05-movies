import { Routes, Route } from 'react-router-dom';
import { React, lazy } from 'react';
import { NavigationBar } from './NavigationBar/NavigationBar';
import css from './App.module.css';
const TrendingMovie = lazy(() => import('pages/TrendingMovie/TrendingMovie'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route path="/" element={<TrendingMovie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:idMovie" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<h2>NotFound</h2>} />
        </Route>
      </Routes>
    </div>
  );
};

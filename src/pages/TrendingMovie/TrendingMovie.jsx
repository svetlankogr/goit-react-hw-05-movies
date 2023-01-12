import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import css from './TrendingMovie.module.css';

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h1 className={css.trending__title}>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
export default TrendingMovie;

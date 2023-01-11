import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'services/api';

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return <MovieList movies={movies} />;
};
export default TrendingMovie;

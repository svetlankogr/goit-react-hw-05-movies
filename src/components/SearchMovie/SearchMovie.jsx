import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import css from './SearchMovie.module.css';

export const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    setSearchQuery(movieName);
    getMovieByQuery(movieName).then(({ results }) => {
      setMovies(results);
    });
  }, [movieName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={onFormSubmit}>
        <input
          className={css.searchFormInput}
          name="name"
          placeholder="Search movie"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className={css.searchFormBtn} type="submit">
          <span className={css.searchFormBtnLabel}>Search</span>
        </button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

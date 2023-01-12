import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movie__list}>
      {movies.map(({ poster_path, original_title, original_name, id }) => {
        return (
          <MovieItem
            key={id}
            posterPath={poster_path}
            originaTitle={original_title}
            originalName={original_name}
            id={id}
          />
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

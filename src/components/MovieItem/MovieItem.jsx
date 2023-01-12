import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';

export const MovieItem = ({ posterPath, originaTitle, originalName, id }) => {
  const location = useLocation();
  return (
    <li className={css.movie__item} key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h2 className={css.movie_text}>{originaTitle ?? originalName}</h2>
        <img
          src={
            posterPath
              ? `https://image.tmdb.org/t/p/w500${posterPath}`
              : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
          }
          alt={originaTitle ?? originalName}
        />
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  posterPath: PropTypes.string,
  originaTitle: PropTypes.string,
  originalName: PropTypes.string,
  id: PropTypes.number,
};

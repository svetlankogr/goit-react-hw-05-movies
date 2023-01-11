import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';
export const MovieItem = ({ posterPath, originaTitle, originalName, id }) => {
  const location = useLocation();
  return (
    <li className={css.movie__item} key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h2 className={css.movie_text}>{originaTitle ?? originalName}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={originaTitle ?? originalName}
        />
      </Link>
    </li>
  );
};

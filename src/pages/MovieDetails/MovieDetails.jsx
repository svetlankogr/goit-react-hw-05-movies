import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Link,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Details } from 'components/Details/Details';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import cn from 'classnames';

const MovieDetails = () => {
  const location = useLocation();

  const { idMovie } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieById(idMovie).then(data => {
      setMovie(data);
    });
  }, [idMovie]);
  if (!movie) {
    return;
  }

  const genres = getAllGenres(movie.genres);
  function getAllGenres(array) {
    const allGenres = [];
    array.map(el => {
      return allGenres.push(el.name);
    });
    return allGenres.join(', ');
  }
  const {
    original_title,
    original_name,
    overview,
    release_date,
    vote_average,
    poster_path,
  } = movie;
  const year = release_date.slice(0, 4);
  const vote = vote_average.toFixed(2);
  return (
    <>
      <Link className={css.back} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <Details
        originalTitle={original_title}
        originalName={original_name}
        overview={overview}
        year={year}
        vote={vote}
        posterPath={poster_path}
        genres={genres}
      />
      <h3 className={css.additionalInfo}>Additional information</h3>
      <div className={css.links}>
        <NavLink
          className={({ isActive }) =>
            cn(css.NavLink, { [css.active]: isActive })
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(css.NavLink, { [css.active]: isActive })
          }
          to="reviews"
        >
          Review
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

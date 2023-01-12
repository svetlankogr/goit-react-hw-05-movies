import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviewsList } from 'components/Reviews/Reviews';
import { getMovieReviews } from 'services/api';
import css from '../../components/App.module.css';

const MovieReviews = () => {
  const { idMovie } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(idMovie).then(({ results }) => {
      setMovieReviews(results);
    });
  }, [idMovie]);

  if (!movieReviews) {
    return;
  }

  return (
    <>
      {movieReviews.length === 0 ? (
        <p className={css.info}>We don't have any reviews!</p>
      ) : (
        <MovieReviewsList reviews={movieReviews} />
      )}
    </>
  );
};

export default MovieReviews;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { MovieCastList } from 'components/Cast/Cast';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { idMovie } = useParams();

  useEffect(() => {
    if (!idMovie) return;
    getMovieCast(idMovie).then(data => {
      setMovieCast(data.cast);
    });
  }, [idMovie]);

  if (!movieCast) {
    return;
  }

  return (
    <>
      {movieCast.length === 0 ? (
        <p>We don't have information about cast!</p>
      ) : (
        <MovieCastList movieCast={movieCast} />
      )}
    </>
  );
};

export default MovieCast;

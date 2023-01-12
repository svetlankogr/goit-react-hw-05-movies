import PropTypes from 'prop-types';
import css from './Details.module.css';

export const Details = ({
  originalTitle,
  originalName,
  overview,
  year,
  vote,
  posterPath,
  genres,
}) => {
  return (
    <div className={css.details}>
      <img
        className={css.img}
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
        }
        alt={originalTitle ?? originalName}
      />
      <div className={css.info}>
        <h2>
          {originalTitle ?? originalName} ({year})
        </h2>
        <p>Vote: {vote}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Ganres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

Details.propTypes = {
  originalTitle: PropTypes.string,
  originalName: PropTypes.string,
  overview: PropTypes.string,
  year: PropTypes.string,
  vote: PropTypes.string,
  posterPath: PropTypes.string,
  genres: PropTypes.string,
};

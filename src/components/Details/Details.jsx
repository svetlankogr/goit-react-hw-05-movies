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
        src={'https://image.tmdb.org/t/p/w500' + posterPath}
        alt={originalTitle ?? originalName}
      />
      <div className={css.info}>
        <h2>
          {originalTitle ?? originalName} ({year})
        </h2>
        <p>Vote:{vote}</p>
        <h3>Overview</h3>

        <p>{overview}</p>
        <h3>Ganres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

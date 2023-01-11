import css from './Cast.module.css';
export const MovieCastList = ({ movieCast }) => {
  return (
    <ul className={css.cast__list}>
      {movieCast.map(({ id, original_name, character, profile_path }) => (
        <li className={css.cast__item} key={id}>
          <img
            className={css.img}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'
            }
            alt={original_name}
          />
          <p>Name: {original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

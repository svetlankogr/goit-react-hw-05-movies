import PropTypes from 'prop-types';
import css from './Reviews.module.css';

export const MovieReviewsList = ({ reviews }) => {
  return (
    <ul className={css.review__list}>
      {reviews.map(({ author, content, id }) => (
        <li className={css.review__item} key={id}>
          <h2 className={css.review__title}>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

MovieReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

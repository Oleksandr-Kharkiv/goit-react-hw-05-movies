import { useEffect, useState } from 'react';
import { getMovieIdReviewsApi } from '../../API/serviceApi';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    getMovieIdReviewsApi(movieId).then(movie => {
      setMovieReviews(movie.results);
    });
  }, [movieId]);

  return (
    <ul className={css.reviewsList}>
      {movieReviews.length !== 0 ? (
        movieReviews.map(({ id, content, author_details: { username } }) => (
          <li key={id} className={css.reviewsItem}>
            <p className={css.autor}>Autor: {username}</p>
            <p className={css.review}>{content}</p>
          </li>
        ))
      ) : (
        <li key={999999} className={css.reviewsItem}>
          We don't have any reviews for this movie
        </li>
      )}
    </ul>
  );
};

export default Reviews;

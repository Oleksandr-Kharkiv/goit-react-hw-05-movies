import { useEffect, useState } from 'react';
import { getMovieIdReviewsApi } from '../../API/serviceApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviewsObj, setMovieReviewsObj] = useState([]);
  console.log(movieReviewsObj);
  const { movieId } = useParams('');
  console.log(movieId);

  useEffect(() => {
    getMovieIdReviewsApi(movieId).then(movie => {
      setMovieReviewsObj(movie);
    });
  }, [movieId]);
  return (
    <>
      <div>Reviews: {movieId}</div>
    </>
  );
};

export default Reviews;
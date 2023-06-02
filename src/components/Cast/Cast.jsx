import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdCastApi } from '../../API/serviceApi';
import css from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    getMovieIdCastApi(movieId).then(movie => {
      setMovieCast(movie.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {movieCast.length !== 0 ? (
        movieCast.map(({ id, character, name, profile_path }) => (
          <li key={id} className={css.castItem}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="80"
                height="120"
              />
            ) : (
              <p>🥺 No photo</p>
            )}
            <div className={css.tumb}>
              <p className={css.actorName}>{name}</p>
              <p className={css.actorCharacter}>Character: {character}</p>
            </div>
          </li>
        ))
      ) : (
        <li key={999999} className={css.noCastItem}>
          We don't have any information about casts for this movie{' '}
        </li>
      )}
    </ul>
  );
};

export default Cast;

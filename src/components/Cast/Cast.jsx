import { useEffect, useState } from 'react';
import { getMovieIdCastApi } from '../../API/serviceApi';
import { useParams } from 'react-router-dom';
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
      {movieCast &&
        movieCast.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id} className={css.castItem}>
              {profile_path ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className={css.actorProfile} /> : <img src="../../images/images.png" alt="🥺 No profile" className={css.actorProfile} height="120"/>}
              <div className={css.tumb}>
                <p className={css.actorName}>{name}</p>
                <p className={css.actorCharacter}>Character: {character}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

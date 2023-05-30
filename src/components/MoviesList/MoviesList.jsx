import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {

  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => {
          return (
            <li className={css.item} key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MoviesList;

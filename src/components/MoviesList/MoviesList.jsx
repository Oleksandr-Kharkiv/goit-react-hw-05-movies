import css from './MoviesList.module.css';
import { Link, useLocation} from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location.state);
  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => {
          return (
            <li className={css.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MoviesList;

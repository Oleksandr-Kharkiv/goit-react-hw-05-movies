import css from './MoviesList.module.css';
import { Link, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => {
          return (
            <li className={css.item} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.movieLink}>{movie.title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
export default MoviesList;


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movieObj }) => {
  const { title, original_title, overview, genres, poster_path, vote_average } =
    movieObj;

  const score = Math.round(vote_average * 10);
  return (
    <div className={css.wrap}>
      <img
        className={css.movieImg}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div className={css.tumb}>
        <h3 className={css.movieTitle}>{title}</h3>
        <p className={css.movieRating}>User score: {score}%</p>
        <h4 className={css.title}>Overview</h4>
        <p className={css.movieOverview}>{overview}</p>
        <h4 className={css.title}>Genres</h4>
        {genres && (
          <p className={css.movieGenres}>
            {genres.map((genre, id) => (
              <span key={id} className={css.genre}>
                {genre.name}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};
export default MovieInfo;

MovieInfo.propTypes = {
  movieObj: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
};

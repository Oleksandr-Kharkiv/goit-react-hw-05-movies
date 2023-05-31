import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieIdApi } from 'API/serviceApi';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import LinksAddInfo from '../components/LinksAddInfo/LinksAddInfo';

const MovieDetails = () => {
  const [movieObj, setMovieObj] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    getMovieIdApi(movieId).then(movie => {
      setMovieObj(movie);
    });
  }, [movieId]);

  return (
    <>
      <button type="button">
        👈 Go back
      </button>
      <MovieInfo movieObj={movieObj} />
      <LinksAddInfo/>
      <Outlet />
    </>
  );
};

export default MovieDetails;

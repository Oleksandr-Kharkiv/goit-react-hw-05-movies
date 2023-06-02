import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieIdApi } from 'API/serviceApi';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import LinksAddInfo from '../components/LinksAddInfo/LinksAddInfo';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [movieObj, setMovieObj] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    getMovieIdApi(movieId).then(movie => {
      setMovieObj(movie);
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current}>👈 Go back</Link>
      <MovieInfo movieObj={movieObj} />
      <LinksAddInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

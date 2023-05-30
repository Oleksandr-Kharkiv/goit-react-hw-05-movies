import { useEffect, useState } from 'react';
import {  useParams, Link, Outlet } from 'react-router-dom';
import { getMovieIdApi } from 'API/serviceApi'

const MovieDetails = () => {
  const [movieObj, setMovieObj] = useState([]);
  const { movieId } = useParams('')                     

  useEffect(() => {
    getMovieIdApi(movieId).then(movie => {
      setMovieObj(movie.results);
    })
  },[movieId]);
  const {genres, poster_path} = movieObj
  const moviePoster = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`
    console.log(poster_path);
    console.log(genres);
  return (
    <>
      <div>MovieDetails: {movieId}</div>
      <button type='button'>Go back</button>
      <img src={moviePoster} alt="skdfjgskdjg" />
      <h3>title</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;

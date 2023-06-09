// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getTrendMoviesApi } from '../API/serviceApi';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendMoviesApi().then(movies => setMovies(movies.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;

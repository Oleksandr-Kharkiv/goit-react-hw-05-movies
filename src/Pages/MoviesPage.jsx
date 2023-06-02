import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMoviesApi } from '../API/serviceApi';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = inputValue => {
    setSearchParams({ query: `${inputValue}` });
  };

  useEffect(() => {
    if (searchParams === '') {
      return;
    }
    getSearchMoviesApi(searchParams).then(movies => setMovies(movies.results));
  }, [searchParams]);

  return (
    <>
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;

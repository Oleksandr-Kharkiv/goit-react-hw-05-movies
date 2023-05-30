import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { getSearchMoviesApi } from '../API/serviceApi';
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from '../components/MoviesList/MoviesList';

// const [searchParams, setSearchParams] = useSearchParams();
// // const name = searchParams.get("name");
// console.log(searchParams);

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = inputValue => {
    setSearchQuery(inputValue);
  };
  
  useEffect(() => {
    if(!searchQuery) {
      return
    }
    getSearchMoviesApi(searchQuery).then(movies =>
      setMovies(movies.results));
      }, [searchQuery]);
      
  return (
    <>
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <MoviesList movies={movies}/>
    </>
  );
};
export default MoviesPage;



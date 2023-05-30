import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import MoviesPage from '../Pages/MoviesPage';
import MovieDetails from '../Pages/MovieDetailsPage';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}> 
          <Route path="cast" element={<Cast/>} />
          <Route path="review" element={<Reviews/>} />
        </Route>
        {/* <Route path="*" element={<HomePage />} /> */}
      </Route>
    </Routes>
    </>
  );
};

export default App;

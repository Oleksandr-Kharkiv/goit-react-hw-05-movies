import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(()=>import('../Pages/HomePage'))
const Movies = lazy(()=>import('../Pages/MoviesPage'))
const MovieDetails = lazy(()=>import('../Pages/MovieDetailsPage'))
const Cast = lazy(()=>import('../components/Cast/Cast'))
const Reviews = lazy(()=>import('../components/Reviews/Reviews'))

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}> 
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;

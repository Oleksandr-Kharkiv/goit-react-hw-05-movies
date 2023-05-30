const BASE_URL = `https://api.themoviedb.org/3`
const KEY = `44b5968d02afc5d51cc06c820ba3f06d`

export const getTrendMoviesApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
    const movies = await response.json();
    return movies
  } catch (error) {
    alert(error.message);
  }
};

export const getSearchMoviesApi = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    const movies = await response.json();
    return movies
  } catch (error) {
    alert(error.message);
  }
};

export const getMovieIdApi = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`);
    const movie = await response.json();
    console.log(movie);
    return movie
  } catch (error) {
    alert(error.message);
  }
};



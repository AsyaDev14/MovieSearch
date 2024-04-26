const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '154675bb26dc27779c5854020ece8ed8';

export const trandingMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(res => res.json())
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};

export const getMovieByID = movieID => {
  return fetch(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
};

export const getMovieCast = movieID => {
  return fetch(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data => data.cast)
    .catch(err => console.log(err));
};

export const getMovieByQuery = query => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
};

export const getMovieReviews = movieID => {
  return fetch(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
};

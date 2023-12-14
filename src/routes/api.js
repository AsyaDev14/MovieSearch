//  /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
//  /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
//  /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
//  /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
//  /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '154675bb26dc27779c5854020ece8ed8';

// tranding movie for Home page
export const trandingMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then(res => res.json())
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};

// пошук фільму за ключовим словом на сторінці фільмів.
export const getMovieByID = (movieID) => {
  return fetch(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then((data) => {
      // console.log('data',data);
      return data;
    })
    .catch(err => console.log(err));
};

export const getMovieCast = (movieID) => {
  return fetch(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`,
  )
    .then(res => res.json())
    .then(data => data.cast)
    .catch(err => console.log(err));
};

export const getMovieByQuery = (query) => {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
};

// запит оглядів для сторінки кінофільму.
export const getMovieReviews = (movieID) => {
  return fetch(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
};
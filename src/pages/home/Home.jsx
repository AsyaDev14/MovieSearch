import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { trandingMovies } from 'routes/api';

export const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    trandingMovies().then(res => {
      if (res) {
        setMovieList(res);
      }
    });
  }, []);

  const fullPath = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className={css.container}>
      <h3 className={css.tranding_title}>Trending Today</h3>
      <div className={css.movieContainer}>
        {movieList.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={css.movieCard}
          >
            <div className={css.movieImageContainer}>
              <img
                className={css.movieImage}
                src={`${fullPath}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className={css.movieInfo}>
              <h4 className={css.movieTitle}>{movie.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

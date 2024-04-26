import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovieByID } from 'routes/api';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInform, setMovieInform] = useState({});
  const { poster_path, title, vote_average, overview } = movieInform;

  const navigate = useNavigate();

  const fullPath = `https://image.tmdb.org/t/p/w500`;
  const releaseDate = new Date(movieInform.release_date).getFullYear();
  const genreName =
    movieInform.genres &&
    movieInform.genres.map(genre => genre.name).join(', ');

  useEffect(() => {
    getMovieByID(movieId).then(data => {
      if (data) {
        setMovieInform(data);
      }
    });
  }, [movieId]);

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={css.backButton}
      >
        Go back
      </button>

      <div className={css.main_description}>
        <img src={`${fullPath}${poster_path}`} width="200" alt="." />
        <div className={css.main_thumb}>
          <h2>
            {title}({releaseDate})
          </h2>
          <p>User Score : {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genreName}</p>
        </div>
      </div>

      <div className={css.movie_layout}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" className={css.movie_links}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.movie_links}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieByID } from "routes/api";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInform, setMovieInform] = useState({});

  const fullPath = `https://image.tmdb.org/t/p/w500`;
  const releaseDate = new Date(movieInform.release_date).getFullYear();
  const genreName = movieInform.genres && movieInform.genres.map((genre) => genre.name).join(", ");

  console.log("search", movieId);
  useEffect(() => {
    getMovieByID(movieId)
      .then((data) => {
        if (data) {
          setMovieInform(data)
        }
      })
  }, )

  // console.log("inform", movieInform);

  const {poster_path, title, vote_average, overview } = movieInform
  return (
    <div>
      <div className="main_description">
        <img src={`${fullPath}${poster_path}`} width='200' alt="." />
        <div className="main_thumb">
          <h2>{title}({releaseDate})</h2>
          <p>User Score : {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genreName}</p>
        </div>
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  )
}

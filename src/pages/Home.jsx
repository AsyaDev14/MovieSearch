import { Link } from "react-router-dom";

const { useEffect, useState } = require("react")
const { trandingMovies } = require("routes/api")

export const Home = () => {
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    trandingMovies()
      .then((res) => {
        console.log("result", res);
        if (res) {
          setMovieList(res)
        }
    })
  }, [])

// console.log("list", movieList);
  return (
    <div>
        <h3 className="tranding_title">Tranding today</h3>
      <ul className="movieList">
        {movieList.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          )
        })}
    </ul>
  </div>
  )
    
};

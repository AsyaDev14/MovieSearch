import React, { useState, useEffect } from "react";
import { getMovieByQuery } from "routes/api";
import { Link, useSearchParams } from "react-router-dom";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  console.log("searchParams", searchParams.get("query"));

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = event.currentTarget.elements.search.value;
    setLoading(true);
    // console.log("event", event.currentTarget.elements.search.value)
    getMovieByQuery(value)
      .then((res) => {
        setMovies(res);
        setLoading(false);
        // console.log("result movie",res);
      })
      .catch((err) => {
        console.log(err.message);
      })


    setSearchParams({ query: value });
  }

  useEffect(() => {
    if (searchParams.get("query")) {
      getMovieByQuery(searchParams.get("query"))
        .then((res) => {
          setMovies(res);
          // console.log("res",res);
        })
    }
    // }, )
  }, [searchParams])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <div>
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

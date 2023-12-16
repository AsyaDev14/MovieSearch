import React, { useState, useEffect } from "react";
import { getMovieByQuery } from "routes/api";
import { Link, useSearchParams } from "react-router-dom";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.currentTarget.elements.search.value.trim();

    if (!value) {
      return;
    }

    setSearchParams({ query: value });
  };

  useEffect(() => {
    const query = searchParams.get("query");

    if (query) {
      setLoading(true);

      getMovieByQuery(query)
        .then((res) => {
          setMovies(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false)
        });
    }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
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
        <ul className="movieList">
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

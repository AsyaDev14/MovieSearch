import { useEffect } from "react";
import { getMovieByQuery } from "routes/api";

export const MovieSearch = () => {
  
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

//   useEffect(() => {
//     console.log("params", searchParams.get("query"));
//    getMovieByQuery()
//  },[])
  
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
    </>
  );
}
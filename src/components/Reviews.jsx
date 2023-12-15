import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "routes/api";


export const Review = () => {
  const [reviews, setReviews] = useState([]);
   const { movieId } = useParams();
  // console.log("params", params);

  useEffect(() => {
    getMovieReviews(movieId)
      .then((res) => {
        setReviews(res)
        // console.log("result", res);
      })
      .catch(err => console.log(err));
  }, );
  // }, []);
  return (
    <>
      <div>
        <ul>
          {reviews.length ? reviews?.map(({ author, content, id }) => (
            <li key={id}>
              <p>
                Author: {author}
              </p>
              <p>"{content}"</p>
            </li>
          )) : <li>"We don`t have any reviews for this movie"</li>
          }
        </ul>
      </div>
    </>
  )
}
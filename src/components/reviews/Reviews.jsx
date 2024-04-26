import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'routes/api';
import css from './Reviews.module.css';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => {
        setReviews(res ?? []);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={css.review_container}>
      <ul className={css.review_list}>
        {reviews.length ? (
          reviews.map(({ author, content, id }) => (
            <li key={id} className={css.review_item}>
              <p className={css.review_author}>Author: {author}</p>
              <p className={css.review_content}>"{content}"</p>
            </li>
          ))
        ) : (
          <li className={css.review_item}>
            We don't have any reviews for this movie
          </li>
        )}
      </ul>
    </div>
  );
};

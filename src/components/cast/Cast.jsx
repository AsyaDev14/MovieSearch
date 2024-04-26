import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'routes/api';
import image from '../../images/NoImageFound.jpg.png';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(res => {
        setCast(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <ul className={css.cast_list}>
        {cast?.map(({ id, profile_path, name, character }) => {
          const imgUrl = profile_path
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : image;
          return (
            <li key={id} className={css.cast_item}>
              <img src={imgUrl} alt={name} width="100px" />
              <p>{name}</p>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

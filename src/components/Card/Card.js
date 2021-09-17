import React from 'react';
import './Card.css';

export const Card = ({ photo }) => {
  return (
    <article className='card-container'>
      {photo.hdurl ? (
        <img src={photo.hdurl} alt={photo.explanation} />
      ) : (
        <img src={photo.url} alt={photo.explanation} />
      )}
      <h3>{photo.title}</h3>
      <p>{photo.date}</p>
      {photo.copyright && <p>Photo by: {photo.copyright}</p>}{' '}
      <p>{photo.explanation}</p>
    </article>
  );
};

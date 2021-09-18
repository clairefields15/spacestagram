import React from 'react';
import './Card.css';

export const Card = ({ photo, handleLike, liked }) => {
  const handleClick = e => {
    e.preventDefault();
    const id = e.target.closest('article').id;
    handleLike(id);
  };

  return (
    <article className='card-container' id={photo.url}>
      {photo.hdurl && <img src={photo.hdurl} alt={photo.explanation} />}
      <h3>{photo.title}</h3>
      <p>{photo.date}</p>
      {photo.copyright && <p>Photo by: {photo.copyright}</p>}{' '}
      <p>{photo.explanation}</p>
      {!liked && <button onClick={e => handleClick(e)}>Like</button>}{' '}
      {liked && <button onClick={e => handleClick(e)}>Dislike</button>}
    </article>
  );
};

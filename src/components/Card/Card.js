import React, { useState } from 'react';
import './Card.css';

export const Card = ({ photo, handleLike, liked }) => {
  const [showMoreText, setShowMoreText] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    const id = e.target.closest('article').id;
    handleLike(id);
  };

  const showMore = e => {
    e.preventDefault();
    setShowMoreText(true);
  };

  return (
    <article className='card-container' id={photo.url}>
      {photo.hdurl && <img src={photo.hdurl} alt={photo.explanation} />}
      <h3>{photo.title}</h3>
      <p>{photo.date}</p>
      {photo.copyright && <p>Photo by: {photo.copyright}</p>}
      <p>
        {!showMoreText && (
          <>
            {photo.explanation.slice(0, 120) + '...'}
            <button onClick={e => showMore(e)}>More</button>
          </>
        )}
        {showMoreText && photo.explanation}
      </p>
      {!liked && <button onClick={e => handleClick(e)}>Like</button>}
      {liked && <button onClick={e => handleClick(e)}>Dislike</button>}
    </article>
  );
};

import React, { useState } from 'react';
import './Card.css';

export const Card = ({ photo, handleLike, liked }) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [hover, setHover] = useState(false);

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
      {photo.hdurl && (
        <div className='fluid-square'>
          <img src={photo.hdurl} alt={photo.explanation} />
        </div>
      )}
      <div className='text-container'>
        {!liked && (
          <button className='like-heart' onClick={e => handleClick(e)}>
            <i class='far fa-heart'></i>
          </button>
        )}
        {liked && (
          <button
            className='like-heart liked'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={e => handleClick(e)}
          >
            {!hover && <i class='fas fa-heart'></i>}{' '}
            {hover && <i class='fas fa-heart-broken'></i>}
          </button>
        )}
        <h3>{photo.title}</h3>
        <p>{photo.date}</p>
        {photo.copyright && <p>Photo by: {photo.copyright}</p>}
        <p>
          {!showMoreText && (
            <>
              {photo.explanation.slice(0, 120)}
              <button className='more-button' onClick={e => showMore(e)}>
                ... more
              </button>
            </>
          )}
          {showMoreText && photo.explanation}
        </p>
      </div>
    </article>
  );
};

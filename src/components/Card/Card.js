import React, { useState } from 'react';
import './Card.css';

export const Card = ({ photo, handleLike, liked }) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [breakHeart, setBreakHeart] = useState(0);
  const [bounce, setBounce] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    const id = e.target.closest('article').id;
    setBounce(0);
    setBreakHeart(0);
    handleLike(id);
  };

  const showMore = e => {
    e.preventDefault();
    setShowMoreText(true);
  };

  const formatDate = date => {
    let split = date.split('-');
    let months = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    };
    let month = months[split[1]];
    let day = split[2].replace(/^0+/, '');
    return `${month} ${day}, ${split[0]}`;
  };

  return (
    <article className='card-container' id={photo.url}>
      {photo.hdurl && (
        <div className='fluid-square'>
          <img src={photo.hdurl} alt={photo.title} />
        </div>
      )}
      <div className='text-container'>
        {!liked && (
          <button
            className='like-heart'
            onClick={() => setBounce(1)}
            onAnimationEnd={e => handleClick(e)}
            bounce={bounce}
            aria-label='Click to like post'
          >
            <i className='far fa-heart'></i>
          </button>
        )}
        {liked && (
          <button
            className='like-heart liked'
            onClick={() => {
              setBreakHeart(1);
            }}
            break={breakHeart}
            onAnimationEnd={e => handleClick(e)}
            aria-label='Click to unlike post'
          >
            {!breakHeart && <i className='fas fa-heart'></i>}
            {!!breakHeart && <i className='fas fa-heart-broken'></i>}
          </button>
        )}
        <h2>{photo.title}</h2>
        {photo.copyright && <h3>Photo by: {photo.copyright}</h3>}
        {!photo.copyright && (
          <h3>{"Brought to you by NASA's Astronomy Photo of the Day API "}</h3>
        )}

        <p className='date'>{formatDate(photo.date)}</p>
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

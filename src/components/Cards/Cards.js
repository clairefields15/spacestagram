import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ photos, handleLike }) => {
  const makeCards = photos => {
    return photos.map(photo => {
      return <Card photo={photo} key={photo.url} handleLike={handleLike} />;
    });
  };
  return <section className='cards-container'>{makeCards(photos)}</section>;
};

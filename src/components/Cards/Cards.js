import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ photos }) => {
  const makeCards = photos => {
    return photos.map(photo => {
      return <Card photo={photo} key={photo.url} />;
    });
  };
  return <section className='cards-container'>{makeCards(photos)}</section>;
};

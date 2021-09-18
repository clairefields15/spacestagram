import React from 'react';
import { Card } from '../Card/Card';
import './Cards.css';

export const Cards = ({ photos, handleLike, liked }) => {
  const makeCards = photos => {
    return photos.map(photo => {
      if (liked.includes(photo.url)) {
        return (
          <Card
            photo={photo}
            key={photo.url}
            handleLike={handleLike}
            liked={true}
          />
        );
      }
      return (
        <Card
          photo={photo}
          key={photo.url}
          handleLike={handleLike}
          liked={false}
        />
      );
    });
  };
  return <section className='cards-container'>{makeCards(photos)}</section>;
};

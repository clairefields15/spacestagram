import React from 'react';
import './ErrorComponent.css';

export const ErrorComponent = ({ message }) => {
  return (
    <div className='error'>
      <p>{message}</p>
    </div>
  );
};

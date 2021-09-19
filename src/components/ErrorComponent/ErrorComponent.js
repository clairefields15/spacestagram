import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorComponent = ({ message }) => {
  return (
    <div className='error'>
      <p>{message}</p>
      {message.includes('page') && (
        <>
          <p>
            Would you like to go <NavLink to='/'>home?</NavLink>
          </p>
        </>
      )}
    </div>
  );
};

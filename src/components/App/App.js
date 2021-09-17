import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchPhotos } from '../../utils/apiCalls';
import './App.css';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        let data = await fetchPhotos();
        setPhotos(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Hello</h1>} />
      <Route render={() => <p>Sorry that page doesn't exist</p>} />
    </Switch>
  );
};

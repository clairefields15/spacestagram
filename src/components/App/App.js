import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchPhotos } from '../../utils/apiCalls';
import { Cards } from '../Cards/Cards';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
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

  const handleLike = id => {
    console.log('hi', id);
  };

  return (
    <main>
      <header>
        <h1>spacestagram</h1>
      </header>
      {!!errorMessage && <ErrorComponent message={errorMessage} />}
      {!errorMessage && loading && <p>Loading photos...</p>}
      {!errorMessage && !loading && (
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Cards photos={photos} handleLike={handleLike} />}
          />
          <Route render={() => <p>Sorry that page doesn't exist</p>} />
        </Switch>
      )}
    </main>
  );
};
